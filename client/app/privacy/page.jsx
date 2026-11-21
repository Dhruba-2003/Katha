import Glowbtn from "@/components/buttons/Glowbtn";

export const metadata = {
  title: "Privacy Policy — Katha",
  description: "Learn about how Katha collects, uses, and protects your personal data and conversations.",
};

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black pt-36 pb-24 sm:pt-44 sm:pb-32">
      {/* ---------- Ambient background glows ---------- */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[450px] w-[800px] -translate-x-1/2 bg-gradient-to-b from-[#ff3d8f]/15 via-[#b14bff]/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-48 h-[500px] w-[500px] bg-[#ff3d8f]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-[1000px] px-6 md:px-12 lg:px-16">
        {/* ---------- Page Header ---------- */}
        <div className="text-center">
          <Glowbtn text="Legal & Privacy" />

          <h1 className="mt-6 font-display text-[36px] font-bold tracking-[0.01em] text-white sm:text-[48px] lg:text-[56px] leading-[1.15]">
            Privacy <span className="text-[#ff3d8f]">Policy</span>
          </h1>
          <p className="mx-auto mt-4 max-w-[580px] text-[14px] sm:text-[15px] text-white/60">
            Last updated on 18 November 2026. We are committed to transparency and safeguarding your privacy across all Katha services.
          </p>
        </div>

        {/* ---------- Privacy Content Card ---------- */}
        <div className="mt-14 sm:mt-18 rounded-[28px] border border-white/10 bg-white/[0.02] p-8 sm:p-14 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          <div className="space-y-10 text-white/75 text-[15px] sm:text-[16px] leading-relaxed">
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="font-display text-[22px] sm:text-[24px] font-semibold text-white">
                1. Introduction
              </h2>
              <p>
                Techzuno Solution OPC Private Limited (&ldquo;Techzuno&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) operates Katha. We respect your privacy and handle personal data in line with the Digital Personal Data Protection Act, 2023 and other applicable Indian law. This policy explains what we collect, why, who we share it with, and your rights. Read it with our Terms of Use and Refund Policy.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3 border-t border-white/10 pt-8">
              <h2 className="font-display text-[22px] sm:text-[24px] font-semibold text-white">
                2. What we collect and why
              </h2>
              <div className="overflow-x-auto pt-1">
                <table className="w-full border-collapse text-left text-[14px] sm:text-[15px]">
                  <thead>
                    <tr className="border-b border-white/15 text-white">
                      <th className="py-3 pr-6 font-semibold w-[40%]">Data</th>
                      <th className="py-3 font-semibold">Why we use it</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="py-3.5 pr-6 align-top text-white/85">
                        Account details: name, email address, phone number, profile photo from Google or one you upload
                      </td>
                      <td className="py-3.5 align-top">
                        To create and manage your account, verify you, support you, and send service messages such as account, membership and policy updates
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 pr-6 align-top text-white/85">
                        Chats: messages you send and replies generated
                      </td>
                      <td className="py-3.5 align-top">
                        To provide the chat service, show your chat history, handle reports, and keep the Services safe
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 pr-6 align-top text-white/85">
                        Membership and payment records: plan, validity, payment status, transaction ID, payment method type
                      </td>
                      <td className="py-3.5 align-top">
                        To activate memberships, keep billing and tax records, resolve payment issues and prevent fraud. Card, UPI and bank details are handled by the payment gateway, not stored by us
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 pr-6 align-top text-white/85">
                        Support and report records: tickets, emails, reports about chats
                      </td>
                      <td className="py-3.5 align-top">
                        To answer you, investigate problems, and improve safety
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 pr-6 align-top text-white/85">
                        Technical data: device type, app version, IP address, login and error logs
                      </td>
                      <td className="py-3.5 align-top">
                        To secure the Services, fix bugs, and prevent abuse
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="pt-2">
                We collect this directly from you, automatically when you use the Services, and from Google and our payment gateways when you sign in or pay.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-3 border-t border-white/10 pt-8">
              <h2 className="font-display text-[22px] sm:text-[24px] font-semibold text-white">
                3. Chats and AI
              </h2>
              <ul className="space-y-2.5 pt-1">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff3d8f]" />
                  <span>
                    Your messages are sent to AI systems that generate character replies. This may include AI service providers that process data for us.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff3d8f]" />
                  <span>We do not use your chats to train AI models.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff3d8f]" />
                  <span>
                    Chats are saved so you can see your history, and are stored in encrypted form. They stay until you delete them or delete your account.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff3d8f]" />
                  <span>
                    Chats are not read by our team as a matter of routine. A limited number of authorised staff may access a chat when it is reported, or to investigate abuse, security issues or legal requests.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff3d8f]" />
                  <span>
                    Characters are fictional AI. Do not share passwords, bank details, ID numbers or other sensitive information in chats.
                  </span>
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-3 border-t border-white/10 pt-8">
              <h2 className="font-display text-[22px] sm:text-[24px] font-semibold text-white">
                4. Who we share data with
              </h2>
              <p>We do not sell your personal data. We share it only with:</p>
              <ul className="space-y-2.5 pt-1">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff3d8f]" />
                  <span>
                    <strong className="font-semibold text-white">Service providers</strong> that host our systems, store data, provide AI processing, send emails or messages, and process payments. They may use the data only on our instructions.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff3d8f]" />
                  <span>
                    <strong className="font-semibold text-white">Google,</strong> for sign-in.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff3d8f]" />
                  <span>
                    <strong className="font-semibold text-white">Payment gateways,</strong> to process your payments.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff3d8f]" />
                  <span>
                    <strong className="font-semibold text-white">Authorities and advisers,</strong> where required by law, court order or government direction, to prevent fraud or illegal conduct, to enforce our Terms, or to protect rights and safety.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff3d8f]" />
                  <span>
                    <strong className="font-semibold text-white">A buyer or successor,</strong> if Techzuno is part of a merger, acquisition or sale of assets.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff3d8f]" />
                  <span>
                    <strong className="font-semibold text-white">Others,</strong> with your consent.
                  </span>
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-3 border-t border-white/10 pt-8">
              <h2 className="font-display text-[22px] sm:text-[24px] font-semibold text-white">
                5. How long we keep data
              </h2>
              <p>
                We keep personal data only as long as needed for the purposes above. Chats and account data are kept until you delete them or your account. When you delete your account in the app, we delete your account and chats and any active membership; this cannot be undone. We may keep limited data longer where the law requires it or to resolve disputes, prevent fraud or defend legal claims, such as payment and tax records. Deletion may take some time to reach backups and archives.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3 border-t border-white/10 pt-8">
              <h2 className="font-display text-[22px] sm:text-[24px] font-semibold text-white">
                6. Your rights
              </h2>
              <p>You can:</p>
              <ul className="space-y-2.5 pt-1">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff3d8f]" />
                  <span>ask for a summary of the personal data we hold and how it is used;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff3d8f]" />
                  <span>ask us to correct or update inaccurate data;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff3d8f]" />
                  <span>ask us to erase your data, in the app or by email, subject to legal retention;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff3d8f]" />
                  <span>withdraw consent where we rely on it;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff3d8f]" />
                  <span>raise a grievance with our Grievance Officer;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff3d8f]" />
                  <span>nominate another person to exercise your rights in case of your death or incapacity.</span>
                </li>
              </ul>
              <p className="pt-1">
                We may verify your identity before acting on a request. If your grievance is not resolved, you may approach the Data Protection Board of India.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3 border-t border-white/10 pt-8">
              <h2 className="font-display text-[22px] sm:text-[24px] font-semibold text-white">
                7. Security
              </h2>
              <p>
                We use reasonable technical and organisational measures to protect your data, including encrypted storage of chats and limits on staff access. No system is completely secure. If you think your account is compromised, contact us immediately.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-3 border-t border-white/10 pt-8">
              <h2 className="font-display text-[22px] sm:text-[24px] font-semibold text-white">
                8. Children
              </h2>
              <p>
                Katha is for users aged 18 and over. We do not knowingly collect data from anyone under 18. If we find that we have, we will delete it and may close the account.
              </p>
            </section>

            {/* Section 9 */}
            <section className="space-y-3 border-t border-white/10 pt-8">
              <h2 className="font-display text-[22px] sm:text-[24px] font-semibold text-white">
                9. Cookies and similar technologies
              </h2>
              <p>
                Our website may use cookies and similar technologies that are needed to keep you signed in, remember preferences and keep the site working. You can control cookies in your browser; some features may not work if you disable them.
              </p>
            </section>

            {/* Section 10 */}
            <section className="space-y-3 border-t border-white/10 pt-8">
              <h2 className="font-display text-[22px] sm:text-[24px] font-semibold text-white">
                10. Third-party links
              </h2>
              <p>
                The Services may link to other sites. We are not responsible for their privacy practices. Read their policies before sharing data.
              </p>
            </section>

            {/* Section 11 */}
            <section className="space-y-3 border-t border-white/10 pt-8">
              <h2 className="font-display text-[22px] sm:text-[24px] font-semibold text-white">
                11. Contact and Grievance Officer
              </h2>
              <p>For questions, requests or complaints about your personal data:</p>
              <p>Grievance Officer: Bishal Kayal</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:ceo@techzuno.com"
                  className="text-[#ff3d8f] font-medium hover:underline"
                >
                  ceo@techzuno.com
                </a>
              </p>
              <p>
                General support:{" "}
                <a
                  href="mailto:info@techzuno.com"
                  className="text-[#ff3d8f] font-medium hover:underline"
                >
                  info@techzuno.com
                </a>
              </p>
              <p>Techzuno Solution OPC Private Limited, Kolkata, West Bengal 700039, India</p>
            </section>

            {/* Section 12 */}
            <section className="space-y-3 border-t border-white/10 pt-8">
              <h2 className="font-display text-[22px] sm:text-[24px] font-semibold text-white">
                12. Updates
              </h2>
              <p>
                We may update this policy. We will post the new version with its date and, for material changes, try to notify you in the app or by email. Continuing to use the Services after an update means you accept it, to the extent the law allows.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

