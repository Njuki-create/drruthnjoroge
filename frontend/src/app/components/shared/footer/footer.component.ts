import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h4>Dr. Ruth Njoroge, MD</h4>
          <p>MBChB(UoN), MMed PRAS(UoN)</p>
          <p class="credentials">Specializing in Aesthetic and Reconstructive Surgery</p>
        </div>
        <div class="footer-section">
          <h4>Contact Information</h4>
          <p>info&#64;drruthnjoroge.com</p>
          <p>+254 713 906 800</p>
          <div class="social-links">
            <a
              class="social-link whatsapp-link"
              href="https://wa.me/254713906800"
              target="_blank"
              rel="noopener"
              aria-label="Chat with Dr. Ruth Njoroge Medical Spa on WhatsApp">
              <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                <path d="M16.01 3.2A12.72 12.72 0 0 0 3.28 15.9c0 2.24.59 4.42 1.72 6.34L3.2 28.8l6.72-1.76a12.65 12.65 0 0 0 6.09 1.55h.01A12.72 12.72 0 0 0 28.8 15.91 12.73 12.73 0 0 0 16.01 3.2Zm0 23.44h-.01c-1.87 0-3.7-.5-5.31-1.45l-.38-.23-3.99 1.05 1.06-3.88-.25-.4a10.58 10.58 0 0 1-1.62-5.63c0-5.84 4.76-10.59 10.62-10.59a10.55 10.55 0 0 1 10.57 10.6c0 5.84-4.76 10.59-10.69 10.59Zm5.82-7.93c-.32-.16-1.89-.93-2.18-1.04-.29-.1-.5-.16-.71.16-.21.31-.82 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.49.14-.65.15-.15.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.98-2.34-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.08 1.3 3.29c.16.21 2.24 3.42 5.43 4.79.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.16-1.52.27-.74.27-1.38.19-1.52-.08-.13-.29-.21-.61-.37Z"/>
              </svg>
              <span>WhatsApp</span>
            </a>
            <a
              class="social-link tiktok-link"
              href="https://www.tiktok.com/@drruthnjoroge"
              target="_blank"
              rel="noopener"
              aria-label="Visit Dr. Ruth Njoroge Medical Spa on TikTok">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .59.05.86.14V9.42a6.42 6.42 0 0 0-.86-.06 6.4 6.4 0 0 0-5.38 9.86 6.4 6.4 0 0 0 11.28-4.13V8.56a8.44 8.44 0 0 0 4.65 1.39V6.75c-.14 0-.29-.01-.44-.06Z"/>
              </svg>
              <span>TikTok</span>
            </a>
          </div>
          <p>Mombasa, Kenya</p>
        </div>
        <div class="footer-section">
          <h4>Office Hours</h4>
          <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
          <p>Saturday: 10:00 AM - 4:00 PM</p>
          <p>Sunday & Public Holidays: Closed</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 Dr. Ruth Njoroge, MD | Plastic & Reconstructive Surgery. All rights reserved.</p>
        <div class="footer-links">
          <a routerLink="/privacy-policy">Privacy Policy</a> | <a routerLink="/terms-of-service">Terms of Service</a>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: linear-gradient(135deg, #003366 0%, #001a33 100%);
      color: white;
      padding: clamp(32px, 6vw, 40px) 20px;
      margin-top: clamp(36px, 6vw, 60px);
    }
    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
      gap: 30px;
      margin-bottom: 20px;
      min-width: 0;
    }
    .footer-section {
      min-width: 0;
    }
    .footer-section h4 {
      margin-bottom: 10px;
      font-size: 16px;
      color: #d4af37;
    }
    .footer-section p {
      margin: 5px 0;
      opacity: 0.9;
      font-size: 14px;
      overflow-wrap: anywhere;
    }
    .footer-section .credentials {
      font-size: 12px;
      opacity: 0.7;
      font-style: italic;
    }
    .footer-section .note {
      font-size: 12px;
      color: #d4af37;
      margin-top: 8px;
    }
    .social-links {
      display: flex;
      align-items: center;
      gap: 12px;
      margin: 10px 0;
    }
    .social-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 7px;
      min-width: 36px;
      height: 36px;
      padding: 0 11px;
      border: 1px solid rgba(212, 175, 55, 0.45);
      border-radius: 999px;
      color: #d4af37;
      text-decoration: none;
      font-size: 12px;
      font-weight: 700;
      transition: background 0.2s, color 0.2s, transform 0.2s;
    }
    .social-link svg {
      width: 21px;
      height: 21px;
      fill: currentColor;
    }
    .social-link:hover {
      background: #d4af37;
      color: #003366;
      transform: translateY(-2px);
    }
    .footer-bottom {
      text-align: center;
      border-top: 1px solid rgba(212, 175, 55, 0.3);
      padding-top: 20px;
      opacity: 0.8;
      min-width: 0;
    }
    .footer-links {
      margin-top: 10px;
    }
    .footer-links a {
      color: #d4af37;
      text-decoration: none;
      margin: 0 10px;
    }
    .footer-links a:hover {
      text-decoration: underline;
    }
    @media (max-width: 640px) {
      .footer {
        padding-left: 16px;
        padding-right: 16px;
      }
      .footer-content {
        gap: 24px;
      }
      .footer-section {
        text-align: center;
      }
      .social-links {
        justify-content: center;
      }
      .footer-bottom p {
        font-size: 13px;
        line-height: 1.5;
      }
      .footer-links {
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: center;
      }
      .footer-links a {
        margin: 0;
        padding: 4px 0;
      }
    }
  `]
})
export class FooterComponent { }
