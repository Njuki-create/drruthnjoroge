import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  template: `
    <div class="policy-container">
      <div class="policy-header">
        <h1>Privacy Policy</h1>
      </div>

      <div class="policy-content">
        <section>
          <h2>1. Our Commitment</h2>
          <p>Dr. Ruth Njoroge, MD ("we", "our", or "the practice") respects your privacy. This Privacy Policy explains how we collect, use, protect, and share information when you visit our website, request information, contact us, or book a consultation for plastic, reconstructive, aesthetic, wellness, and related medical spa services.</p>
          <p>This policy is for website and appointment-request activity. Information shared during clinical care may also be handled under applicable medical confidentiality and health record requirements.</p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>We collect information you choose to provide and limited technical information that helps us operate the website.</p>
          <ul>
            <li><strong>Contact details:</strong> name, phone number, email address, and preferred contact method.</li>
            <li><strong>Appointment details:</strong> requested service, preferred date and time, consultation notes, and other information needed to respond to your booking request.</li>
            <li><strong>Health-related information:</strong> medical history, medications, allergies, treatment goals, photographs, or other details you voluntarily provide before or during a consultation.</li>
            <li><strong>Communication records:</strong> messages sent through our website, email, phone, WhatsApp, TikTok, or other contact channels.</li>
            <li><strong>Website usage data:</strong> pages visited, date and time of access, browser type, device information, and similar analytics data.</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Information</h2>
          <p>We use collected information to support care, communication, and practice operations, including to:</p>
          <ul>
            <li>Respond to inquiries and appointment requests.</li>
            <li>Prepare for consultations and coordinate plastic, reconstructive, aesthetic, wellness, and medical spa services.</li>
            <li>Confirm, reschedule, or follow up on appointments.</li>
            <li>Provide pre-consultation and post-consultation instructions when appropriate.</li>
            <li>Maintain internal records and improve patient experience.</li>
            <li>Protect the safety, security, and integrity of our website and practice operations.</li>
            <li>Send service updates or promotional messages only where permitted and with your consent when required.</li>
          </ul>
        </section>

        <section>
          <h2>4. Sharing of Information</h2>
          <p>We do not sell your personal information. We may share information only when needed to provide services, comply with the law, or protect patients and the practice.</p>
          <ul>
            <li>With authorized clinical, administrative, or scheduling team members.</li>
            <li>With service providers who help operate our website, appointment systems, communications, or records.</li>
            <li>With hospitals, laboratories, pharmacies, or other healthcare providers involved in your care, where appropriate.</li>
            <li>When required by law, regulation, court order, or a legitimate safety concern.</li>
          </ul>
        </section>

        <section>
          <h2>5. Communication Channels</h2>
          <p>If you contact us through email, phone, WhatsApp, TikTok, or social media, those platforms may process information under their own privacy policies. Please avoid sending urgent medical concerns, highly sensitive information, or emergency requests through public or social media channels.</p>
        </section>

        <section>
          <h2>6. Data Security and Retention</h2>
          <p>We use reasonable administrative, technical, and physical safeguards to protect personal information. No online transmission or electronic storage method is completely secure, so we cannot guarantee absolute security.</p>
          <p>We keep information only as long as reasonably necessary for the purposes described in this policy, for clinical or business records, and as required by applicable law.</p>
        </section>

        <section>
          <h2>7. Your Choices</h2>
          <p>You may contact us to request access, correction, or deletion of personal information where applicable. You may also ask us to stop non-essential promotional communications. Some information may need to be retained for legal, clinical, safety, or administrative reasons.</p>
        </section>

        <section>
          <h2>8. Third-Party Links</h2>
          <p>Our website may link to third-party websites or services. We are not responsible for their content, security, or privacy practices. Please review the privacy policy of any third-party site you visit.</p>
        </section>

        <section>
          <h2>9. Updates to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised "Last Updated" date.</p>
        </section>

        <section>
          <h2>10. Contact Us</h2>
          <p>If you have questions about this Privacy Policy or how your information is handled, please contact us at:</p>
          <p>
            Email: info&#64;drruthnjoroge.com<br>
            Phone: +254 713 906 800<br>
            Location: Mombasa, Kenya
          </p>
        </section>
      </div>
    </div>
  `,
  styles: [`
    .policy-container {
      max-width: 900px;
      margin: 0 auto;
      padding: clamp(24px, 5vw, 40px) 20px;
      min-width: 0;
    }
    .policy-header {
      text-align: center;
      margin-bottom: clamp(32px, 6vw, 50px);
      padding: clamp(30px, 6vw, 40px) 20px;
      background: linear-gradient(135deg, #004d99 0%, #003366 100%);
      color: white;
      border-radius: 8px;
    }
    .policy-header h1 {
      font-size: clamp(30px, 6vw, 36px);
      margin-bottom: 10px;
      line-height: 1.1;
    }
    .policy-header p {
      font-size: 14px;
      opacity: 0.9;
    }
    .policy-content {
      line-height: 1.8;
      color: #333;
      min-width: 0;
    }
    section {
      margin-bottom: clamp(28px, 5vw, 40px);
    }
    h2 {
      color: #004d99;
      font-size: clamp(21px, 4vw, 24px);
      margin-bottom: 15px;
      padding-bottom: 10px;
      border-bottom: 2px solid #e0e0e0;
      line-height: 1.25;
    }
    h3 {
      color: #0066cc;
      font-size: 16px;
      margin-top: 15px;
      margin-bottom: 10px;
    }
    p {
      margin-bottom: 10px;
      font-size: 14px;
      overflow-wrap: anywhere;
    }
    ul {
      margin-left: 20px;
      margin-bottom: 15px;
    }
    li {
      margin-bottom: 8px;
      font-size: 14px;
      overflow-wrap: anywhere;
    }
    strong {
      color: #004d99;
    }
    @media (max-width: 640px) {
      .policy-container {
        padding-left: 16px;
        padding-right: 16px;
      }
      .policy-content {
        line-height: 1.7;
      }
      ul {
        margin-left: 18px;
      }
    }
  `]
})
export class PrivacyPolicyComponent { }
