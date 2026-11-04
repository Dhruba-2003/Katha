# Katha Mail Server

Contact form mail server for the Katha website (Techzuno Solution OPC Private Limited).
When a customer fills out the contact form (Name, Email, Subject, Message), the server
sends an email to the company at `info@techzuno.com` using Gmail SMTP.

## Fields (from the contact form image)

| Field | Purpose |
|-------|---------|
| Your Name | Customer's name |
| Your Email | Customer's email (used as `replyTo` so you can reply directly) |
| Subject | Inquiry subject |
| Message | Customer's message |

The email is sent **from** `Team TechZuno <info@techzuno.com>` **to** `Katha Support Team <info@techzuno.com>`.

## Setup

1. Install dependencies:
   ```bash
   cd server
   npm install
   ```

2. Configure `.env` (already created with your Gmail SMTP credentials).
   - `MAIL_PASS` must be a **Gmail App Password**, not your regular Gmail password.
   - Enable 2-Step Verification on the Google account, then generate an App Password.

3. Start the server:
   ```bash
   npm start
   ```

## API

### POST /api/contact

Body:
```json
{
  "name": "Rahul Sharma",
  "email": "you@example.com",
  "subject": "How can we help?",
  "message": "Tell us what you're thinking..."
}
```

Success (200):
```json
{
  "success": true,
  "message": "Your message has been sent successfully. We will get back to you soon.",
  "messageId": "<...>"
}
```

Validation error (400):
```json
{
  "errors": [ { "field": "email", "message": "Please enter a valid email address" } ]
}
```

## Email Template

The contact submission email uses an advanced, responsive HTML template (`buildEmailTemplate` in `server.js`) featuring Katha branding:

- **Katha logo** — "Katha" text with pink heart ❤️ (matching your brand images)
- **Pink/magenta neon color theme** — gradient accents (#ec4899, #be185d, #8b5cf6) on a clean white card
- **Professional body alignment** — table-based layout with consistent padding, centered content, and structured sections
- **Customer details card** — Name, Email (clickable), Subject in an aligned grid
- **Message content block** — styled message with proper whitespace handling
- **"Reply to Customer" CTA button** — pre-filled mailto link with customer email & subject
- **Company footer** — Techzuno address, email, and copyright

The template uses table-based layout with inline CSS for maximum email-client compatibility (Gmail, Outlook, Apple Mail, etc.) and includes a plain-text fallback.

## SMTP Notes

- `MAIL_HOST=smtp.gmail.com`
- `MAIL_PORT=587`
- `MAIL_SECURE=false` (STARTTLS on port 587)
