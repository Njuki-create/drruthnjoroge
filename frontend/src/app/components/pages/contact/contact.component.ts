import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <div class="contact-container">
      <div class="contact-header">
        <h1>Contact Us</h1>
        <p>Reach the practice for appointments, questions and consultation follow-up.</p>
      </div>
      
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
        <h2>Ready to Schedule?</h2>
        <p>Book your appointment online or call us today!</p>
        <button mat-raised-button color="accent" routerLink="/book-now">
          Book Appointment
        </button>
      </div>
    </div>
  `,
  styles: [`
    .contact-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: clamp(24px, 5vw, 40px) 20px;
    }
    .contact-header {
      text-align: center;
      margin-bottom: clamp(36px, 7vw, 60px);
      padding: clamp(30px, 6vw, 40px) 20px;
      background: linear-gradient(135deg, #003366 0%, #001a33 100%);
      border-radius: 8px;
      color: white;
    }
    .contact-header h1 {
      color: #fff;
      font-size: clamp(30px, 6vw, 40px);
      margin-bottom: 10px;
      line-height: 1.1;
    }
    .contact-header p {
      color: rgba(255, 255, 255, 0.86);
      font-size: clamp(15px, 3vw, 18px);
    }
    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 30px;
      margin-bottom: 60px;
      min-width: 0;
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
    }
    .info-item {
      margin-bottom: 30px;
      padding-bottom: 20px;
      border-bottom: 1px solid #e0e0e0;
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
      color: #003366;
      margin-bottom: 10px;
      min-width: 0;
      line-height: 1.25;
      overflow-wrap: anywhere;
    }
    .info-item mat-icon, .contact-map mat-icon {
      color: #d4af37;
      flex: 0 0 auto;
    }
    .info-item p {
      color: #666;
      margin: 5px 0;
      overflow-wrap: anywhere;
    }
    .whatsapp-link {
      color: #168a43;
      font-weight: 600;
      text-decoration: none;
    }
    .whatsapp-link:hover {
      text-decoration: underline;
    }
    .contact-map h3 {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #003366;
      margin-bottom: 20px;
      min-width: 0;
      line-height: 1.25;
      overflow-wrap: anywhere;
    }
    .contact-map iframe {
      display: block;
      width: 100%;
      min-height: 280px;
      border-radius: 4px;
    }
    .map-note {
      text-align: center;
      color: #666;
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
      background: #003366;
      color: white;
      font-weight: 700;
      text-decoration: none;
      text-align: center;
    }
    .directions-link:hover {
      background: #004d99;
    }
    .cta-section {
      text-align: center;
      padding: clamp(30px, 6vw, 40px) 20px;
      background: linear-gradient(135deg, #003366 0%, #001a33 100%);
      color: white;
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
      button {
        width: 100%;
        padding-left: 16px;
        padding-right: 16px;
      }
    }
  `]
})
export class ContactComponent { }
