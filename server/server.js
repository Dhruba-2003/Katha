/**
 * Katha Contact Form Mail Server
 * Sends contact form submissions from customers to the company (info@techzuno.com)
 * using Gmail SMTP via Nodemailer.
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// -----------------------------
// Transporter (Gmail SMTP)
// -----------------------------
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: parseInt(process.env.MAIL_PORT, 10) || 587,
  secure: process.env.MAIL_SECURE === 'true', // false for port 587 (STARTTLS)
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// Verify transporter connection on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ SMTP connection failed:', error.message);
  } else {
    console.log('✅ SMTP server is ready to take messages');
  }
});

// -----------------------------
// Middleware
// -----------------------------
app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  })
);
app.use(express.json({ limit: '10kb' }));

// Rate limit: max 5 submissions per 15 minutes per IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: { error: 'Too many contact form submissions. Please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// -----------------------------
// Routes
// -----------------------------

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'katha-mail-server' });
});

// Contact form submission endpoint
app.post(
  '/api/contact',
  contactLimiter,
  [
    // Validate form fields (matching the Katha contact form in the image)
    body('name')
      .trim()
      .notEmpty()
      .withMessage('Your name is required')
      .isLength({ max: 100 })
      .withMessage('Name must be at most 100 characters'),
    body('email')
      .trim()
      .notEmpty()
      .withMessage('Your email is required')
      .isEmail()
      .withMessage('Please enter a valid email address')
      .normalizeEmail(),
    body('subject')
      .trim()
      .notEmpty()
      .withMessage('Subject is required')
      .isLength({ max: 200 })
      .withMessage('Subject must be at most 200 characters'),
    body('message')
      .trim()
      .notEmpty()
      .withMessage('Message is required')
      .isLength({ max: 5000 })
      .withMessage('Message must be at most 5000 characters'),
  ],
  async (req, res) => {
    // Return validation errors if any
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, subject, message } = req.body;

    const escapedName = escapeHtml(name);
    const escapedEmail = escapeHtml(email);
    const escapedSubject = escapeHtml(subject);
    const escapedMessage = escapeHtml(message).replace(/\n/g, '<br>');

    const mailOptions = {
      // From: the company (Team TechZuno)
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
      // To: the company inbox (info@techzuno.com)
      to: `"${process.env.MAIL_TO_NAME}" <${process.env.MAIL_TO_ADDRESS}>`,
      subject: `[Katha Contact] ${escapedSubject}`,
      replyTo: `"${escapedName}" <${escapedEmail}>`, // company can reply directly to customer
      text: `
New contact form submission from the Katha website.

Customer Details:
  Name:    ${name}
  Email:   ${email}
  Subject: ${subject}

Message:
${message}

---
Sent from: Katha Contact Form
Company: Techzuno Solution OPC Private Limited
Address: Kolkata, West Bengal 700039, India
Company Email: info@techzuno.com
      `.trim(),
      html: buildEmailTemplate({
        name: escapedName,
        email: escapedEmail,
        subject: escapedSubject,
        message: escapedMessage,
      }),
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('✅ Message sent:', info.messageId);
      return res.status(200).json({
        success: true,
        message: 'Your message has been sent successfully. We will get back to you soon.',
        messageId: info.messageId,
      });
    } catch (error) {
      console.error('❌ Failed to send email:', error);
      return res.status(500).json({
        success: false,
        error: 'Failed to send your message. Please try again later.',
      });
    }
  }
);

// 404 handler
app.use((_req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global error handler
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

// -----------------------------
// Advanced HTML Email Template
// Katha brand: pink/magenta neon theme (image 2) + Katha logo with heart (image 1)
// -----------------------------
function buildEmailTemplate({ name, email, subject, message }) {
  // Katha brand colors (pink/magenta neon theme)
  const brandPink = '#ec4899';      // bright pink
  const brandPinkDark = '#be185d';  // deep magenta
  const brandPurple = '#8b5cf6';    // violet accent
  const darkBg = '#0f172a';         // deep navy/black background
  const cardBg = '#ffffff';         // white card
  const muted = '#64748b';          // slate gray

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Contact Form Submission - Katha</title>
</head>
<body style="margin:0; padding:0; width:100%; background-color:${darkBg}; color:#1e293b; font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif; -webkit-font-smoothing:antialiased;">
  <!-- Full-width background wrapper -->
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
    <tr>
      <td align="center" style="padding:30px 12px;">
        <!-- Main centered card: fixed 600px width for professional alignment -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width:600px; background:${cardBg}; border-radius:20px; overflow:hidden; box-shadow:0 24px 32px -8px rgba(0,0,0,0.12),0 12px 16px -6px rgba(0,0,0,0.06);">
          
          <!-- ========== HEADER: Katha Logo Image (SVG embedded) ========== -->
          <tr>
            <td align="center" style="padding:32px 24px 20px; background:${cardBg};">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td align="center">
                    <!-- Katha logo: HTML/CSS based (email-client safe) matching your brand logo -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
                      <tr>
                        <td align="center">
                          <span style="display:inline-block; font-family:'Georgia','Times New Roman',serif; font-size:40px; font-weight:700; color:#112430; letter-spacing:-2px; line-height:1;">Katha</span>
                          <span style="display:inline-block; font-size:40px; color:#ec4899; line-height:1; margin-left:-6px;">❤</span>
                        </td>
                      </tr>
                    </table>
                    <p style="margin:8px 0 0; font-size:13px; color:${muted}; font-weight:500; letter-spacing:0.3px;">get back to you friendly.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Pink accent underline -->
          <tr>
            <td style="padding:0 24px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td height="4" style="background:linear-gradient(90deg,${brandPink} 0%,${brandPurple} 100%); font-size:4px; line-height:4px;">&#8202;</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ========== BADGE ========== -->
          <tr>
            <td style="padding:22px 24px 0;">
              <span style="display:inline-block; font-size:11px; font-weight:800; letter-spacing:1.6px; text-transform:uppercase; color:${brandPinkDark}; background:#fdf2f8; padding:7px 14px; border-radius:20px; border:1px solid #fce7f3;">New Contact Submission</span>
            </td>
          </tr>

          <!-- ========== TITLE SECTION ========== -->
          <tr>
            <td style="padding:18px 24px 0;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td>
                    <h2 style="margin:0 0 8px; font-size:20px; font-weight:800; color:#0f172a; letter-spacing:-0.4px;">A customer reached out</h2>
                    <p style="margin:0; font-size:14px; color:${muted}; line-height:1.5;">Details submitted via the Katha contact form.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ========== CUSTOMER DETAILS CARD ========== -->
          <tr>
            <td style="padding:24px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:14px;">
                <tr>
                  <td style="padding:20px 22px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="padding:7px 0; width:34%; font-size:12px; font-weight:700; color:${muted}; text-transform:uppercase; letter-spacing:0.7px;">Customer Name</td>
                        <td style="padding:7px 0; font-size:15px; color:#0f172a; font-weight:700;">${name}</td>
                      </tr>
                      <tr>
                        <td style="padding:7px 0; font-size:12px; font-weight:700; color:${muted}; text-transform:uppercase; letter-spacing:0.7px;">Customer Email</td>
                        <td style="padding:7px 0; font-size:15px; color:#0f172a;"><a href="mailto:${email}" style="color:${brandPinkDark}; text-decoration:none; font-weight:700;">${email}</a></td>
                      </tr>
                      <tr>
                        <td style="padding:7px 0; font-size:12px; font-weight:700; color:${muted}; text-transform:uppercase; letter-spacing:0.7px;">Subject</td>
                        <td style="padding:7px 0; font-size:15px; color:#0f172a; font-weight:600;">${subject}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ========== MESSAGE SECTION ========== -->
          <tr>
            <td style="padding:0 24px 24px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="padding:0 0 10px;">
                    <p style="margin:0; font-size:12px; font-weight:800; color:${muted}; text-transform:uppercase; letter-spacing:0.8px;">Message</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 18px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background:${cardBg}; border:1px solid #e2e8f0; border-radius:12px;">
                      <tr>
                        <td style="padding:20px 22px; font-size:15px; line-height:1.75; color:#334155; white-space:pre-wrap; word-wrap:break-word;">
                          ${message}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding:10px 0 0;">
                    <a href="mailto:${email}?subject=Re:${encodeURIComponent(subject)}" style="display:inline-block; background:linear-gradient(135deg,${brandPink} 0%,${brandPinkDark} 100%); color:#ffffff; font-size:14px; font-weight:800; text-decoration:none; padding:13px 28px; border-radius:10px; box-shadow:0 4px 12px rgba(236,72,153,0.35);">Reply to Customer</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ========== DIVIDER ========== -->
          <tr>
            <td style="padding:0 24px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td height="1" style="background:#e2e8f0; font-size:1px; line-height:1px;">&#8202;</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ========== FOOTER ========== -->
          <tr>
            <td style="padding:26px 24px; background:${cardBg};">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td align="center" style="padding:0 0 12px;">
                    <span style="font-size:11px; font-weight:800; letter-spacing:1.8px; text-transform:uppercase; color:${muted};">Techzuno Solution OPC Private Limited</span>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding:0 0 14px;">
                    <p style="margin:0; font-size:12px; color:${muted}; line-height:1.6;">
                      Kolkata, West Bengal 700039, India<br/>
                      <strong>Email:</strong> <a href="mailto:info@techzuno.com" style="color:${brandPinkDark}; text-decoration:none; font-weight:700;">info@techzuno.com</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding:0;">
                    <p style="margin:0; font-size:10px; color:#94a3b8; line-height:1.6;">
                      Sent from the Katha contact form &bull; This is an automated notification.<br/>
                      &copy; ${new Date().getFullYear()} Techzuno Solution OPC Private Limited. All rights reserved.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

// Escape HTML to prevent XSS in email body
function escapeHtml(unsafe) {
  if (!unsafe) return '';
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

app.listen(PORT, () => {
  console.log(`🚀 Katha mail server running on port ${PORT}`);
  console.log(`📧 SMTP: ${process.env.MAIL_HOST}:${process.env.MAIL_PORT}`);
  console.log(`📬 From: ${process.env.MAIL_FROM_ADDRESS}`);
  console.log(`📨 To:   ${process.env.MAIL_TO_ADDRESS}`);
});

module.exports = app;
