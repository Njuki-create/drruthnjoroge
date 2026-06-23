import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <div class="contact-container">
      <div class="contact-header">
        <p class="eyebrow">Contact</p>
        <h1>Visit or <em>Message</em> Our Clinic</h1>
        <p>Reach our clinic for appointments, private questions, consultation planning and follow-up guidance.</p>
      </div>

      <section class="contact-guidance">
        <div>
          <p class="eyebrow">How To Reach Us</p>
          <h2>Choose the contact path that fits your concern.</h2>
        </div>
        <div class="guidance-grid">
          <article>
            <span>01</span>
            <h3>Book online</h3>
            <p>Best for new consultation requests, procedure questions and planning a private appointment.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Message on WhatsApp</h3>
            <p>Best for quick appointment follow-up, directions or clarifying what to bring for your visit.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Call our clinic</h3>
            <p>Best for same-day questions, rescheduling or urgent administrative support during opening hours.</p>
          </article>
        </div>
      </section>
      
      <div class="contact-content">
        <div class="contact-info">
          <mat-card>
            <mat-card-content>
              <div class="info-item">
                <h3>Phone</h3>
                <p>Office Line: +254743174101</p>
                <p>Phone (Personal): +254713906800</p>
              </div>

              <div class="info-item">
                <h3>WhatsApp</h3>
                <p>
                  <a
                    class="whatsapp-link"
                    href="https://wa.me/254713906800"
                    target="_blank"
                    rel="noopener"
                    aria-label="Chat with Dr. Ruth Njoroge Medical Spa on WhatsApp">
                    Message us on WhatsApp
                  </a>
                </p>
              </div>
              
              <div class="info-item">
                <h3>Email</h3>
                <p>info&#64;drruthnjoroge.com</p>
              </div>
              
              <div class="info-item">
                <h3>Location</h3>
                <p>Room 209, South Wing, Second Floor</p>
                <p>Mombasa Trade Centre (Formerly Ambalal House),</p>
                <p>Nkurumah Road, Mombasa</p>
              </div>
              
              <div class="info-item">
                <h3>Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday & Public Holidays: Closed</p>
              </div>
            </mat-card-content>
          </mat-card>
        </div>
        
        <div class="contact-map">
          <mat-card>
            <mat-card-content>
              <h3>Mombasa Trade Centre, Mombasa</h3>
              <iframe 
                src="https://www.google.com/maps?q=Mombasa%20Trade%20Centre%20Nkurumah%20Road%20Mombasa%20Kenya&output=embed"
                width="100%"
                height="400"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
              <p class="map-note">
                Destination: Room 209, South Wing, Second Floor, Mombasa Trade Centre, Nkurumah Road, Mombasa.
              </p>
              <a
                class="directions-link"
                href="https://www.google.com/maps/dir/?api=1&destination=Mombasa%20Trade%20Centre%20Nkurumah%20Road%20Mombasa%20Kenya"
                target="_blank"
                rel="noopener">
                Get Directions
              </a>
            </mat-card-content>
          </mat-card>
        </div>
      </div>
      
      <div class="cta-section">
        <p class="eyebrow">Next Step</p>
        <h2>Ready to Schedule?</h2>
        <p>Start with a confidential appointment request. Private guidance first; no obligation to proceed.</p>
        <button mat-raised-button color="accent" routerLink="/book-now">
          Book Appointment
        </button>
      </div>
    </div>
  `,
  styles: [`
    .contact-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: clamp(28px, 6vw, 64px) 20px 86px;
    }
    .contact-header {
      text-align: center;
      margin-bottom: clamp(42px, 8vw, 70px);
      padding: clamp(42px, 8vw, 76px) 0;
      border-bottom: 1px solid var(--bdr);
    }
    .eyebrow {
      font-size: 0.68rem;
      letter-spacing: 0.26em;
      text-transform: uppercase;
      color: var(--rose);
      line-height: 1.5;
      margin-bottom: 14px;
    }
    .contact-header h1 {
      color: var(--char);
      font-size: clamp(2.35rem, 6vw, 4rem);
      margin-bottom: 14px;
      line-height: 1.1;
    }
    .contact-header h1 em {
      color: var(--rose);
      font-style: italic;
    }
    .contact-header p {
      color: var(--slate-m);
      font-size: clamp(0.95rem, 2vw, 1.08rem);
    }
    .contact-guidance {
      display: grid;
      grid-template-columns: minmax(260px, 0.86fr) minmax(320px, 1.14fr);
      gap: clamp(24px, 5vw, 56px);
      align-items: start;
      margin-bottom: clamp(34px, 7vw, 58px);
      padding: clamp(30px, 6vw, 48px);
      background: var(--off);
      border: 1px solid var(--bdr);
    }
    .contact-guidance h2 {
      color: var(--char);
      font-size: clamp(1.85rem, 4vw, 2.6rem);
      line-height: 1.12;
    }
    .guidance-grid {
      display: grid;
      gap: 1px;
      background: var(--bdr);
      border: 1px solid var(--bdr);
    }
    .guidance-grid article {
      background: #fff;
      padding: 24px 28px;
    }
    .guidance-grid span {
      display: block;
      color: var(--rose);
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.45rem;
      margin-bottom: 8px;
    }
    .guidance-grid h3 {
      color: var(--char);
      font-size: 1.22rem;
      line-height: 1.2;
      margin-bottom: 8px;
    }
    .guidance-grid p {
      font-size: 0.88rem;
    }
    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 1px;
      margin-bottom: 60px;
      min-width: 0;
      background: var(--bdr);
      border: 1px solid var(--bdr);
    }
    .contact-info mat-card,
    .contact-map mat-card {
      border: 0 !important;
      border-radius: 0 !important;
      box-shadow: none !important;
      height: 100%;
    }
    .contact-info,
    .contact-map,
    .contact-info mat-card,
    .contact-map mat-card {
      min-width: 0;
    }
    @media (max-width: 768px) {
      .contact-content {
        grid-template-columns: 1fr;
        gap: 22px;
        margin-bottom: 36px;
      }
      .contact-guidance {
        grid-template-columns: 1fr;
      }
    }
    .info-item {
      margin-bottom: 30px;
      padding-bottom: 20px;
      border-bottom: 1px solid var(--bdr);
    }
    .info-item:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }
    .info-item h3 {
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--char);
      margin-bottom: 10px;
      min-width: 0;
      line-height: 1.25;
      overflow-wrap: anywhere;
    }
    .info-item p {
      color: var(--slate-m);
      margin: 5px 0;
      overflow-wrap: anywhere;
    }
    .whatsapp-link {
      color: #168a43;
      font-weight: 500;
      text-decoration: none;
    }
    .whatsapp-link:hover {
      text-decoration: underline;
    }
    .contact-map h3 {
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--char);
      margin-bottom: 20px;
      min-width: 0;
      line-height: 1.25;
      overflow-wrap: anywhere;
    }
    .contact-map iframe {
      display: block;
      width: 100%;
      min-height: 280px;
      border-radius: 8px;
    }
    .map-note {
      text-align: center;
      color: var(--slate-m);
      margin-top: 20px;
      font-style: italic;
    }
    .directions-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 220px;
      min-height: 46px;
      margin: 12px auto 0;
      padding: 0 18px;
      border-radius: 4px;
      background: var(--char);
      color: white;
      font-weight: 700;
      text-decoration: none;
      text-align: center;
    }
    .directions-link:hover {
      background: var(--slate);
    }
    .cta-section {
      text-align: center;
      padding: clamp(30px, 6vw, 40px) 20px;
      background: var(--off);
      border: 1px solid var(--bdr);
      color: var(--char);
      border-radius: 8px;
      min-width: 0;
    }
    .cta-section h2 {
      font-size: clamp(26px, 5vw, 32px);
      margin-bottom: 10px;
    }
    .cta-section p {
      font-size: clamp(15px, 3vw, 18px);
      margin-bottom: 20px;
      color: var(--slate-m);
    }
    button {
      padding: 12px 40px;
      font-size: 16px;
      max-width: 100%;
      min-height: 48px;
      white-space: normal;
    }
    @media (max-width: 640px) {
      .contact-container {
        padding-left: 16px;
        padding-right: 16px;
      }
      .info-item {
        margin-bottom: 22px;
      }
      .guidance-grid article {
        padding-left: 22px;
        padding-right: 22px;
      }
      button {
        width: 100%;
        padding-left: 16px;
        padding-right: 16px;
      }
    }
  `]
})
export class ContactComponent { }
