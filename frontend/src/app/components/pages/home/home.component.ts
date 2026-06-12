import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-copy">
          <p class="eyebrow">Plastic & Reconstructive Surgery</p>
          <h1>Dr. Ruth Njoroge, MD</h1>
          <p class="lead">Specialist aesthetic, reconstructive and wellness care in Mombasa, Kenya.</p>
          <div class="actions">
            <button mat-raised-button class="gold-button" routerLink="/book-now">Schedule Consultation</button>
            <button mat-stroked-button class="gold-outline-button" routerLink="/services">View Services</button>
          </div>
        </div>

        <div class="logo-card" aria-label="Dr. Ruth Njoroge brand logo">
          <img
            src="assets/images/logo2.jpg?v=20260610"
            alt="Dr. Ruth Njoroge plastic, reconstructive and aesthetic surgeon logo"
            loading="eager">
        </div>
      </div>
    </section>

    <section class="section">
      <h2>Featured Services</h2>
      <div class="grid">
        <mat-card *ngFor="let service of services">
          <mat-card-content>
            <h3>{{ service.title }}</h3>
            <p>{{ service.text }}</p>
          </mat-card-content>
        </mat-card>
      </div>
    </section>

    <section class="cta">
      <h2>Begin With A Private Consultation</h2>
      <p>Share your goals with the team and receive clear next steps.</p>
      <button mat-raised-button class="gold-button" routerLink="/book-now">Book Appointment</button>
    </section>
  `,
  styles: [`
    :host {
      display: block;
      overflow-x: hidden;
    }
    .hero {
      position: relative;
      background: linear-gradient(120deg, #001a33 0%, #003366 100%);
      color: white;
      padding: clamp(40px, 8vw, 82px) 20px;
      min-width: 0;
      overflow: hidden;
    }
    .hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background: url('/assets/images/logo1.jpg') 28% center / min(46vw, 680px) auto no-repeat;
      opacity: 0.07;
      mix-blend-mode: soft-light;
      filter: saturate(0.8) contrast(0.9);
      pointer-events: none;
    }
    .hero-inner {
      position: relative;
      z-index: 1;
      width: 100%;
      max-width: 1180px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(320px, 480px);
      gap: clamp(24px, 5vw, 54px);
      align-items: center;
      min-width: 0;
    }
    .hero-copy {
      min-width: 0;
    }
    .eyebrow {
      color: #d4af37;
      font-size: 13px;
      font-weight: 800;
      letter-spacing: 0;
      margin-bottom: 12px;
      text-transform: uppercase;
    }
    h1 {
      color: white;
      font-size: clamp(34px, 6vw, 58px);
      line-height: 1.06;
      margin: 0 0 16px;
      overflow-wrap: anywhere;
    }
    .lead {
      max-width: 620px;
      color: rgba(255, 255, 255, 0.9);
      font-size: clamp(16px, 2.4vw, 21px);
      line-height: 1.55;
      margin-bottom: 24px;
    }
    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      max-width: 100%;
      min-width: 0;
    }
    .actions button,
    .cta button {
      min-height: 48px;
      max-width: 100%;
      padding: 0 28px;
      white-space: normal;
    }
    .gold-button {
      background: #d4af37;
      color: #003366;
      font-weight: 700;
    }
    .gold-button:hover {
      background: #e0bd47;
    }
    .gold-outline-button {
      border-color: rgba(212, 175, 55, 0.85);
      color: #d4af37;
      font-weight: 700;
    }
    .gold-outline-button:hover {
      background: rgba(212, 175, 55, 0.12);
    }
    .actions button {
      flex: 1 1 210px;
    }
    .logo-card {
      width: 100%;
      max-width: 480px;
      justify-self: end;
      display: flex;
      align-items: center;
      justify-content: center;
      aspect-ratio: 7 / 4;
      min-width: 0;
      padding: clamp(14px, 2.6vw, 24px);
      background: linear-gradient(135deg, #f7f3ea, #fff);
      border: 1px solid rgba(212, 175, 55, 0.35);
      border-radius: 8px;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.22);
      overflow: hidden;
    }
    .logo-card img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
      aspect-ratio: 7 / 4;
      flex: 0 0 auto;
      mix-blend-mode: multiply;
    }
    .section {
      width: 100%;
      max-width: 1180px;
      margin: 0 auto;
      padding: clamp(34px, 6vw, 56px) 20px;
      min-width: 0;
    }
    .section h2,
    .cta h2 {
      color: #003366;
      font-size: clamp(28px, 5vw, 38px);
      line-height: 1.15;
      text-align: center;
      margin-bottom: 24px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(260px, 100%), 1fr));
      gap: 20px;
      min-width: 0;
    }
    mat-card {
      min-width: 0;
    }
    h3 {
      color: #003366;
      margin-bottom: 10px;
      line-height: 1.2;
    }
    p {
      line-height: 1.6;
    }
    .cta {
      width: calc(100% - 40px);
      max-width: 1180px;
      margin: 0 auto;
      padding: clamp(32px, 6vw, 48px) 20px;
      text-align: center;
      background: linear-gradient(135deg, #003366, #001a33);
      color: white;
      border-radius: 8px;
      min-width: 0;
    }
    .cta h2 {
      color: white;
    }
    .cta p {
      margin-bottom: 20px;
    }
    @media (max-width: 960px) {
      .hero {
        padding-top: 34px;
        padding-bottom: 40px;
      }
      .hero::before {
        background-position: center 28px;
        background-size: min(92vw, 560px) auto;
        opacity: 0.05;
      }
      .hero-inner {
        grid-template-columns: 1fr;
        gap: 26px;
      }
      .hero-copy {
        text-align: center;
      }
      .lead {
        margin-left: auto;
        margin-right: auto;
      }
      .actions {
        justify-content: center;
      }
      .logo-card {
        justify-self: center;
        max-width: min(100%, 520px);
      }
    }
    @media (max-width: 640px) {
      .hero,
      .section {
        padding-left: 16px;
        padding-right: 16px;
      }
      .hero {
        padding-top: 28px;
        padding-bottom: 30px;
      }
      .eyebrow {
        font-size: 11px;
        margin-bottom: 10px;
      }
      h1 {
        font-size: clamp(29px, 9vw, 38px);
        line-height: 1.08;
        margin-bottom: 12px;
      }
      .lead {
        font-size: 15px;
        line-height: 1.45;
        margin-bottom: 18px;
      }
      .actions {
        flex-direction: column;
        align-items: center;
        gap: 10px;
      }
      .actions button,
      .cta button {
        width: min(100%, 260px);
        min-height: 40px;
        padding: 0 16px;
        font-size: 13px;
      }
      .actions button {
        flex: 0 1 auto;
      }
      .logo-card {
        aspect-ratio: 7 / 4;
        max-width: min(100%, 360px);
        padding: 12px;
        box-shadow: 0 14px 34px rgba(0, 0, 0, 0.2);
      }
      .section {
        padding-top: 30px;
        padding-bottom: 36px;
      }
      .grid {
        gap: 14px;
      }
      .cta {
        width: calc(100% - 32px);
        padding: 28px 16px;
      }
    }
    @media (max-width: 380px) {
      .hero {
        padding-left: 12px;
        padding-right: 12px;
      }
      .logo-card {
        max-width: 100%;
      }
      .actions button,
      .cta button {
        width: min(100%, 230px);
        min-height: 38px;
        padding: 0 14px;
        font-size: 12px;
      }
    }
  `]
})
export class HomeComponent {
  services = [
    { title: 'Aesthetic Surgery', text: 'Consultation-led surgical care focused on safety, proportion and natural results.' },
    { title: 'Reconstructive Surgery', text: 'Restorative procedures planned around function, confidence and recovery.' },
    { title: 'Skin & Wellness', text: 'Minimally invasive and wellness treatments tailored to each patient.' }
  ];
}
