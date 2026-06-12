import { Component } from '@angular/core';

@Component({
  selector: 'app-terms-of-service',
  template: `
    <div class="policy-container">
      <div class="policy-header">
        <h1>Terms of Service</h1> 
      </div>

      <div class="policy-content">
        <section>
          <h2>1. Agreement to Terms</h2>
          <p>By accessing this website, contacting the practice, or submitting an appointment request, you agree to these Terms of Service. If you do not agree with these terms, please do not use the website.</p>
        </section>

        <section>
          <h2>2. Website Information Is Not Medical Advice</h2>
          <p>The content on this website is provided for general educational and informational purposes about plastic surgery, reconstructive surgery, aesthetic treatments, wellness services, and medical spa services. It is not a diagnosis, treatment plan, guarantee of outcome, or substitute for an in-person consultation with a qualified healthcare professional.</p>
          <p>If you have an urgent medical concern or emergency, seek immediate medical attention from an appropriate emergency service or healthcare provider.</p>
        </section>

        <section>
          <h2>3. Consultations and Eligibility</h2>
          <p>Services are provided only after appropriate consultation, assessment, informed consent, and clinical suitability review. Dr. Ruth Njoroge may decline, postpone, or modify a requested service when it is not medically appropriate, safe, or aligned with professional standards.</p>
          <p>Before receiving any procedure, you are responsible for providing complete and accurate information about your medical history, medications, allergies, previous procedures, expectations, and any other information requested by the practice.</p>
        </section>

        <section>
          <h2>4. Appointment Requests</h2>
          <p>Submitting a booking request through the website does not guarantee an appointment until the practice confirms it. Appointment times, service availability, clinician availability, and consultation requirements may change.</p>
          <ul>
            <li>Please provide accurate contact and scheduling information.</li>
            <li>Please arrive on time for confirmed appointments.</li>
            <li>Please follow all instructions given before, during, and after a consultation or procedure.</li>
            <li>Please notify us as soon as possible if you need to reschedule or cancel.</li>
          </ul>
        </section>

        <section>
          <h2>5. Cancellations and Rescheduling</h2>
          <p>We ask that cancellations or rescheduling requests be made at least 24 hours before the appointment time whenever possible. Late cancellations, missed appointments, or repeated rescheduling may affect future booking availability and may be subject to applicable fees if communicated by the practice.</p>
        </section>

        <section>
          <h2>6. Results and Treatment Outcomes</h2>
          <p>Medical, surgical, aesthetic, and wellness outcomes vary by individual. Any examples, service descriptions, testimonials, photographs, or educational materials on the website do not guarantee that you will experience the same result. Risks, benefits, alternatives, and recovery expectations will be discussed during consultation where applicable.</p>
        </section>

        <section>
          <h2>7. Acceptable Website Use</h2>
          <p>You agree to use this website only for lawful and appropriate purposes. You may not:</p>
          <ul>
            <li>Submit false, misleading, harmful, or unauthorized information.</li>
            <li>Attempt to interfere with the website, appointment system, or practice communications.</li>
            <li>Copy, reproduce, or commercially reuse website content without permission.</li>
            <li>Use this website to harass, threaten, or impersonate another person.</li>
          </ul>
        </section>

        <section>
          <h2>8. Intellectual Property</h2>
          <p>Website content, including text, layout, branding, images, service descriptions, and other materials, belongs to Dr. Ruth Njoroge or its licensors unless otherwise stated. You may view the content for personal, non-commercial use, but you may not copy, modify, distribute, or reuse it without written permission.</p>
        </section>

        <section>
          <h2>9. Third-Party Links and Platforms</h2>
          <p>This website may link to third-party platforms such as maps, WhatsApp, TikTok, or other external services. We are not responsible for the content, availability, security, or policies of those third-party services. Your use of those services is governed by their own terms and privacy policies.</p>
        </section>

        <section>
          <h2>10. Limitation of Liability</h2>
          <p>To the fullest extent permitted by applicable law, Dr. Ruth Njoroge and the practice are not liable for damages arising from your use of, or inability to use, this website or from reliance on website content. Nothing in these terms limits liability that cannot be limited under applicable law.</p>
        </section>

        <section>
          <h2>11. Changes to These Terms</h2>
          <p>We may update these Terms of Service from time to time. Updated terms will be posted on this page with a revised "Last Updated" date. Continued use of the website after updates means you accept the updated terms.</p>
        </section>

        <section>
          <h2>12. Governing Law</h2>
          <p>These terms are governed by the laws of Kenya. Any disputes related to these terms or your use of the website will be handled in accordance with applicable Kenyan law.</p>
        </section>

        <section>
          <h2>13. Contact Information</h2>
          <p>If you have questions about these Terms of Service, please contact us at:</p>
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
export class TermsOfServiceComponent { }
