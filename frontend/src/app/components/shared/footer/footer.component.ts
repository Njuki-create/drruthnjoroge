import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="footer-brand">
        <div class="footer-logo">Dr. Ruth <span>Njoroge</span></div>
        <p>Plastic, reconstructive and aesthetic care in Mombasa, grounded in careful consultation, surgical judgement and discreet follow-up.</p>
        <div class="social-links">
          <a href="https://wa.me/254713906800" target="_blank" rel="noopener" aria-label="Chat on WhatsApp" title="WhatsApp">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3.2a8.6 8.6 0 0 0-7.4 13l-1 3.8 3.9-1a8.6 8.6 0 1 0 4.5-15.8Zm0 1.7a6.9 6.9 0 0 1 5.9 10.5 6.9 6.9 0 0 1-8.9 2.4l-.3-.2-2.3.6.6-2.2-.2-.3A6.9 6.9 0 0 1 12 4.9Zm-3 3.4c-.2 0-.6.1-.9.5-.3.3-.9 1-.9 2.3s.9 2.6 1.1 2.8c.1.2 1.8 2.9 4.5 3.8 2.2.8 2.7.4 3.2.4.5-.1 1.5-.7 1.7-1.3.2-.7.2-1.2.1-1.3-.1-.1-.2-.2-.5-.4l-1.7-.8c-.3-.1-.5-.1-.7.2-.2.3-.7.9-.8 1.1-.2.2-.3.2-.6.1-.3-.2-1.1-.4-2.1-1.3-.8-.7-1.3-1.6-1.5-1.9-.2-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.8-1.8c-.2-.4-.4-.4-.6-.4H9Z"/>
            </svg>
          </a>
          <a href="https://www.tiktok.com/@drruthnjoroge" target="_blank" rel="noopener" aria-label="Visit TikTok" title="TikTok">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.4 3.5c.3 2.1 1.5 3.5 3.6 3.7v3a6.7 6.7 0 0 1-3.5-1.1v5.6c0 3-2.1 5.3-5.1 5.3-2.8 0-5-2.1-5-4.8 0-3.1 2.7-5.3 5.8-4.7v3.1c-1.4-.4-2.6.4-2.6 1.7 0 1 .8 1.8 1.9 1.8 1.2 0 1.9-.8 1.9-2.2V3.5h3Z"/>
            </svg>
          </a>
        </div>
      </div>

      <div>
        <p class="footer-heading">Practice</p>
        <ul>
          <li><a routerLink="/about">About Dr. Ruth</a></li>
          <li><a routerLink="/services">Services</a></li>
          <li><a routerLink="/book-now">Book Consultation</a></li>
          <li><a routerLink="/contact">Contact</a></li>
        </ul>
      </div>

      <div>
        <p class="footer-heading">Specialties</p>
        <ul>
          <li><a routerLink="/services">Aesthetic Surgery</a></li>
          <li><a routerLink="/services">Reconstructive Surgery</a></li>
          <li><a routerLink="/services">Skin Treatments</a></li>
          <li><a routerLink="/services">Hair Restoration</a></li>
        </ul>
      </div>

      <div>
        <p class="footer-heading">Contact</p>
        <ul>
          <li><a href="tel:+254743174101">+254 743 174 101</a></li>
          <li><a href="tel:+254713906800">+254 713 906 800</a></li>
          <li><a href="mailto:info@drruthnjoroge.com">info&#64;drruthnjoroge.com</a></li>
          <li><a routerLink="/contact">Mombasa Trade Centre</a></li>
        </ul>
      </div>

      <div class="footer-cta">
        <p class="footer-heading">Consultation</p>
        <h3>Private specialist guidance before any decision.</h3>
        <p>Start with a confidential appointment request. The practice will help clarify suitability, preparation and next steps.</p>
        <a class="footer-button" routerLink="/book-now">Book Consultation</a>
      </div>

      <div class="footer-note">
        <span>Room 209, South Wing, Second Floor, Mombasa Trade Centre, Nkurumah Road.</span>
        <span>Monday - Friday: 9:00 AM - 6:00 PM. Saturday: 10:00 AM - 4:00 PM.</span>
      </div>

      <div class="footer-bottom">
        <span>&copy; 2026 Dr. Ruth Njoroge, MD. All rights reserved.</span>
        <span><a routerLink="/privacy-policy">Privacy Policy</a> · <a routerLink="/terms-of-service">Terms of Service</a></span>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background:
        linear-gradient(135deg, rgba(139, 15, 85, 0.22), transparent 34rem),
        var(--plum-3);
      color: rgba(250, 250, 248, 0.5);
      padding: 64px 48px 36px;
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 44px;
      margin-top: 0;
    }
    .footer-brand {
      min-width: 0;
    }
    .footer-logo {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.45rem;
      color: var(--ink);
      margin-bottom: 12px;
      text-transform: uppercase;
    }
    .footer-logo span {
      color: var(--blush);
    }
    .footer-brand p {
      max-width: 420px;
      font-size: 0.84rem;
      line-height: 1.78;
      color: rgba(250, 250, 248, 0.52);
    }
    .footer-heading {
      font-size: 0.65rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--blush);
      margin-bottom: 16px;
    }
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 9px;
    }
    a {
      color: rgba(250, 250, 248, 0.54);
      text-decoration: none;
      font-size: 0.82rem;
      transition: color 0.25s;
    }
    a:hover {
      color: var(--w);
    }
    .social-links {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-top: 18px;
    }
    .social-links a {
      width: 38px;
      height: 38px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(226, 177, 194, 0.3);
      border-radius: 50%;
      padding: 0;
      color: var(--blush);
    }
    .social-links svg {
      width: 18px;
      height: 18px;
      display: block;
      fill: currentColor;
    }
    .social-links a:hover {
      background: var(--magenta);
      border-color: var(--magenta);
      color: #fff;
    }
    .footer-cta {
      grid-column: 1 / -1;
      display: grid;
      grid-template-columns: minmax(220px, 0.7fr) minmax(260px, 0.9fr) minmax(220px, 1fr) auto;
      gap: 20px;
      align-items: center;
      padding: 24px;
      border: 1px solid rgba(226, 177, 194, 0.22);
      background: rgba(251, 250, 248, 0.045);
      min-width: 0;
    }
    .footer-cta .footer-heading {
      margin: 0;
    }
    .footer-cta h3 {
      color: var(--ink);
      font-size: clamp(1.35rem, 3vw, 1.85rem);
      line-height: 1.08;
    }
    .footer-cta p:not(.footer-heading) {
      color: rgba(250, 250, 248, 0.56);
      font-size: 0.82rem;
      line-height: 1.65;
      margin: 0;
    }
    .footer-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 44px;
      padding: 0 18px;
      border: 1px solid rgba(226, 177, 194, 0.42);
      color: var(--ink);
      white-space: normal;
      text-align: center;
    }
    .footer-button:hover {
      background: var(--magenta);
      border-color: var(--magenta);
      color: #fff;
    }
    .footer-note {
      grid-column: 1 / -1;
      display: flex;
      gap: 14px 28px;
      flex-wrap: wrap;
      color: rgba(250, 250, 248, 0.38);
      font-size: 0.76rem;
      line-height: 1.6;
      padding-top: 2px;
    }
    .footer-bottom {
      grid-column: 1 / -1;
      display: flex;
      justify-content: space-between;
      gap: 16px;
      flex-wrap: wrap;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      margin-top: 28px;
      padding-top: 22px;
      font-size: 0.72rem;
      color: rgba(250, 250, 248, 0.28);
    }
    .footer-bottom a {
      font-size: inherit;
      color: rgba(250, 250, 248, 0.44);
    }
    @media (max-width: 1024px) {
      .footer {
        grid-template-columns: 1fr 1fr;
      }
      .footer-brand {
        grid-column: 1 / -1;
      }
      .footer-cta {
        grid-template-columns: 1fr;
      }
    }
    @media (max-width: 700px) {
      .footer {
        grid-template-columns: 1fr;
        padding: 48px 20px 28px;
        gap: 34px;
      }
      .footer-brand {
        grid-column: auto;
      }
      .footer-bottom {
        flex-direction: column;
        text-align: left;
      }
      .footer-cta {
        padding: 22px 18px;
      }
      .social-links a {
        width: 42px;
        height: 42px;
      }
    }
  `]
})
export class FooterComponent { }
