import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="about-container">
      <div class="page-hero">
        <p class="eyebrow">About Our Clinic</p>
        <h1>Dr. Ruth <em>Njoroge</em>, MD</h1>
        <p>MBChB(UoN), MMed PRAS(UoN)</p>
      </div>
      
      <div class="about-content">
        <section class="doctor-profile">
          <div class="bio-section">
            <p class="section-eye">Professional Background</p>
            <h2>Specialist surgical care with a measured aesthetic eye.</h2>
            <p>
              Dr. Ruth Njoroge is a board-certified plastic and reconstructive surgeon with extensive training in both
              aesthetic and reconstructive surgery. With over 15 years of clinical experience, she specializes in delivering
              transformative results through advanced surgical techniques and meticulous attention to surgical artistry.
            </p>
            <p>
              Dr. Njoroge is committed to providing comprehensive surgical solutions for aesthetic enhancement, trauma
              reconstruction, cancer-related procedures, and congenital deformity correction.
            </p>
            <p>
              Her practice in Mombasa combines careful consultation, evidence-informed planning, and discreet follow-up care
              for patients seeking reconstructive, aesthetic, skin, and wellness services.
            </p>
          </div>
          <figure class="doctor-portrait">
            <img
              src="assets/images/drruth.jpeg"
              alt="Dr. Ruth Njoroge in her consultation office"
              loading="eager">
            <figcaption>
              <span>Dr. Ruth Njoroge, MD</span>
              <p>Plastic, reconstructive and aesthetic surgery in Mombasa.</p>
            </figcaption>
          </figure>
        </section>

        <div class="care-section">
          <p class="section-eye">Approach</p>
          <h2>Consultation-led care, from first conversation to follow-up.</h2>
          <p>
            Every patient begins with a private consultation focused on medical history, personal goals, realistic outcomes,
            safety considerations, and recovery planning. Treatment recommendations are tailored to the individual rather
            than presented as one-size-fits-all packages.
          </p>
          <p>
            Our clinic emphasizes clear communication before and after treatment, natural-looking outcomes, and surgical
            decision-making guided by function, proportion, confidence, and long-term wellbeing.
          </p>
        </div>

        <div class="authority-section">
          <div class="authority-copy">
            <p class="section-eye">Why Patients Choose Our Clinic</p>
            <h2>Specialist training, aesthetic restraint and a deeply human consultation style.</h2>
            <p>
              Patients come to our clinic for more than a procedure. They come for careful assessment, privacy,
              honest guidance and the reassurance of a specialist who understands both reconstruction and aesthetic
              proportion.
            </p>
          </div>
          <div class="authority-grid">
            <article>
              <span>01</span>
              <h3>Specialist plastic surgery training</h3>
              <p>Plastic, reconstructive and aesthetic concerns are assessed through a specialist surgical lens.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Reconstructive depth</h3>
              <p>Experience with burns, trauma, wounds, scars and cancer-related reconstruction supports complex planning.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Natural aesthetic judgement</h3>
              <p>The goal is refinement that respects anatomy, proportion, skin quality and the patient's own features.</p>
            </article>
            <article>
              <span>04</span>
              <h3>Mombasa-based access</h3>
              <p>Patients can access specialist consultation and follow-up at Mombasa Trade Centre on Nkurumah Road.</p>
            </article>
          </div>
        </div>

        <div class="patient-experience">
          <div>
            <p class="section-eye">Patient Experience</p>
            <h2>Premium care should feel calm, informed and never rushed.</h2>
            <p>
              Many patients arrive with a mix of hope, uncertainty and private concerns. The consultation process is
              structured to give space for questions, review medical suitability, explain trade-offs clearly and help
              each patient understand what a responsible treatment journey can look like.
            </p>
          </div>
          <div class="experience-points">
            <article>
              <span>01</span>
              <h3>Clarity before commitment</h3>
              <p>Patients receive direct guidance on options, likely recovery, limitations and timing before making a decision.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Respect for privacy</h3>
              <p>Our clinic is designed for discreet conversations, confidential planning and supportive follow-up.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Clinical honesty</h3>
              <p>When treatment is not the right choice, patients are guided toward safer or more appropriate next steps.</p>
            </article>
          </div>
        </div>

        <div class="trust-section">
          <p class="section-eye">Patient Confidence</p>
          <h2>What the consultation experience is built to provide.</h2>
          <div class="trust-grid">
            <article *ngFor="let item of trustSignals">
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </article>
          </div>
        </div>
        
        <div class="philosophy-section">
          <p class="section-eye">Surgical Philosophy</p>
          <h2>Principles that shape each treatment plan.</h2>
          <div class="philosophy-grid">
            <mat-card class="philosophy-card">
              <mat-card-content>
                <h3>Surgical Excellence</h3>
                <p>Precision, technique, and artistic vision in every procedure to achieve optimal outcomes.</p>
              </mat-card-content>
            </mat-card>
            
            <mat-card class="philosophy-card">
              <mat-card-content>
                <h3>Patient Safety</h3>
                <p>Comprehensive preoperative evaluation and adherence to highest surgical standards.</p>
              </mat-card-content>
            </mat-card>
            
            <mat-card class="philosophy-card">
              <mat-card-content>
                <h3>Patient-Centered Care</h3>
                <p>Detailed consultations to understand your goals and develop personalized surgical plans.</p>
              </mat-card-content>
            </mat-card>
            
            <mat-card class="philosophy-card">
              <mat-card-content>
                <h3>Natural Aesthetics</h3>
                <p>Procedures designed to enhance your natural features while maintaining facial harmony.</p>
              </mat-card-content>
            </mat-card>
          </div>
        </div>
        
        <div class="expertise-section">
          <p class="section-eye">Surgical Specialties</p>
          <h2>Focused areas of practice.</h2>
          <div class="specialty-columns">
            <div class="specialty-column">
              <h3>Aesthetic Surgery</h3>
              <ul class="expertise-list">
                <li>Breast Augmentation & Reconstruction</li>
                <li>Body Contouring & Liposuction</li>
                <li>Facial Surgery & Rhinoplasty</li>
                <li>Hair Transplant & Restoration</li>
              </ul>
            </div>
            <div class="specialty-column">
              <h3>Reconstructive Surgery</h3>
              <ul class="expertise-list">
                <li>Trauma & Burn Reconstruction</li>
                <li>Cancer Reconstruction</li>
                <li>Congenital Deformity Correction</li>
                <li>Scar Revision & Contracture Release</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .about-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: clamp(28px, 6vw, 64px) 20px 80px;
    }
    .page-hero {
      display: grid;
      gap: 14px;
      margin-bottom: clamp(46px, 8vw, 76px);
      padding: clamp(42px, 8vw, 76px) 0;
      border-bottom: 1px solid var(--bdr);
      text-align: center;
    }
    .eyebrow,
    .section-eye {
      font-size: 0.68rem;
      letter-spacing: 0.26em;
      text-transform: uppercase;
      color: var(--rose);
      line-height: 1.5;
    }
    .page-hero h1 {
      font-size: clamp(2.4rem, 6vw, 4.2rem);
      line-height: 1.08;
    }
    .page-hero h1 em,
    h2 em {
      color: var(--rose);
      font-style: italic;
    }
    .page-hero p:not(.eyebrow) {
      color: var(--slate-m);
      font-size: clamp(0.95rem, 2vw, 1.1rem);
    }
    .about-content {
      line-height: 1.8;
      color: var(--slate-m);
    }
    .doctor-profile, .bio-section, .care-section, .authority-section, .patient-experience, .trust-section, .philosophy-section, .expertise-section {
      margin-bottom: clamp(38px, 7vw, 60px);
    }
    .bio-section h2, .care-section h2, .authority-section h2, .patient-experience h2, .trust-section h2, .philosophy-section h2, .expertise-section h2 {
      color: var(--char);
      font-size: clamp(1.8rem, 4vw, 2.6rem);
      margin: 10px 0 22px;
      line-height: 1.2;
      max-width: 760px;
    }
    .bio-section p, .care-section p, .authority-section p, .patient-experience p, .trust-section p {
      font-size: 0.98rem;
      color: var(--slate-m);
      margin-bottom: 15px;
      max-width: 880px;
    }
    .doctor-profile {
      display: grid;
      grid-template-columns: minmax(0, 0.95fr) minmax(300px, 0.72fr);
      gap: clamp(28px, 6vw, 70px);
      align-items: center;
    }
    .doctor-profile .bio-section {
      margin-bottom: 0;
    }
    .doctor-portrait {
      position: relative;
      min-width: 0;
      margin: 0;
      padding: clamp(12px, 2vw, 18px);
      background:
        linear-gradient(145deg, rgba(255, 255, 255, 0.86), rgba(244, 239, 235, 0.96)),
        var(--off);
      border: 1px solid var(--bdr);
      box-shadow: var(--shadow);
    }
    .doctor-portrait::before {
      content: '';
      position: absolute;
      inset: clamp(20px, 3vw, 34px) clamp(-10px, -1vw, -4px) auto auto;
      width: 42%;
      height: 58%;
      border: 1px solid rgba(125, 54, 82, 0.22);
      pointer-events: none;
      z-index: 0;
    }
    .doctor-portrait img {
      position: relative;
      z-index: 1;
      display: block;
      width: 100%;
      aspect-ratio: 4 / 5;
      object-fit: cover;
      object-position: center 26%;
      border-radius: 6px;
      background: var(--off);
      filter: saturate(0.96) contrast(1.02);
    }
    .doctor-portrait figcaption {
      position: relative;
      z-index: 2;
      margin-top: 14px;
      padding: 16px 2px 0;
      border-top: 1px solid var(--bdr);
    }
    .doctor-portrait figcaption span {
      display: block;
      color: var(--plum);
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(1.35rem, 3vw, 1.7rem);
      line-height: 1.1;
    }
    .doctor-portrait figcaption p {
      margin: 5px 0 0;
      color: var(--slate-m);
      font-size: 0.84rem;
      line-height: 1.55;
    }
    .authority-section {
      display: grid;
      grid-template-columns: minmax(280px, 0.85fr) minmax(320px, 1.15fr);
      gap: clamp(24px, 5vw, 56px);
      align-items: start;
    }
    .authority-grid,
    .trust-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1px;
      background: var(--bdr);
      border: 1px solid var(--bdr);
    }
    .authority-grid article,
    .trust-grid article {
      background: #fff;
      padding: clamp(24px, 4vw, 34px);
      min-width: 0;
    }
    .authority-grid span {
      color: var(--rose);
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.55rem;
      display: block;
      margin-bottom: 10px;
    }
    .authority-grid h3,
    .trust-grid h3 {
      color: var(--char);
      font-size: 1.28rem;
      line-height: 1.2;
      margin-bottom: 8px;
    }
    .authority-grid p,
    .trust-grid p {
      font-size: 0.88rem;
      margin: 0;
    }
    .patient-experience {
      display: grid;
      grid-template-columns: minmax(280px, 0.9fr) minmax(320px, 1.1fr);
      gap: clamp(24px, 5vw, 56px);
      align-items: start;
      padding: clamp(30px, 6vw, 48px);
      background: var(--off);
      border: 1px solid var(--bdr);
    }
    .experience-points {
      display: grid;
      gap: 1px;
      background: var(--bdr);
      border: 1px solid var(--bdr);
    }
    .experience-points article {
      background: #fff;
      padding: 26px 30px;
    }
    .experience-points span {
      color: var(--rose);
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.45rem;
      display: block;
      margin-bottom: 8px;
    }
    .experience-points h3 {
      color: var(--char);
      font-size: 1.26rem;
      line-height: 1.2;
      margin-bottom: 8px;
    }
    .experience-points p {
      font-size: 0.88rem;
      margin: 0;
    }
    .trust-section {
      padding: clamp(30px, 6vw, 48px);
      background: var(--off);
      border: 1px solid var(--bdr);
    }
    .trust-section h2 {
      max-width: 720px;
    }
    .trust-grid {
      margin-top: 24px;
    }
    .philosophy-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
      gap: 20px;
      margin-top: 20px;
    }
    .philosophy-card {
      background: white;
      border: 1px solid var(--bdr);
      border-radius: 8px;
      box-shadow: 0 4px 18px rgba(26, 43, 52, 0.05);
      min-width: 0;
    }
    .philosophy-card h3 {
      color: var(--char);
      margin-bottom: 10px;
      font-size: 1.08rem;
      line-height: 1.25;
      overflow-wrap: anywhere;
    }
    .specialty-columns {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
      gap: 1px;
      margin-top: 20px;
      background: var(--bdr);
      border: 1px solid var(--bdr);
    }
    .specialty-column {
      background: #fff;
      padding: 32px;
    }
    .specialty-column h3 {
      color: var(--char);
      font-size: 1.35rem;
      margin-bottom: 15px;
      line-height: 1.25;
    }
    .expertise-list {
      list-style: none;
      padding: 0;
    }
    .expertise-list li {
      padding: 10px 0;
      padding-left: 30px;
      position: relative;
      color: var(--slate-m);
      font-size: 14px;
    }
    .expertise-list li:before {
      content: "✓";
      position: absolute;
      left: 0;
      color: var(--rose);
      font-weight: bold;
      font-size: 18px;
    }
    @media (max-width: 640px) {
      .about-container {
        padding-left: 16px;
        padding-right: 16px;
      }
      .about-header {
        margin-bottom: 32px;
      }
      .bio-section p {
        font-size: 15px;
      }
      .doctor-profile {
        grid-template-columns: 1fr;
      }
      .doctor-portrait {
        width: min(100%, 420px);
        margin: 0 auto;
      }
      .doctor-portrait img {
        aspect-ratio: 3 / 4;
        object-position: center 22%;
      }
      .specialty-columns {
        gap: 24px;
      }
      .patient-experience {
        grid-template-columns: 1fr;
        padding: 28px 20px;
      }
      .authority-section,
      .authority-grid,
      .trust-grid {
        grid-template-columns: 1fr;
      }
      .authority-grid article,
      .trust-grid article {
        padding-left: 22px;
        padding-right: 22px;
      }
      .expertise-list li {
        padding-left: 24px;
      }
    }
  `]
})
export class AboutComponent {
  trustSignals = [
    { title: 'Space to ask private questions', text: 'The consultation is designed for the concerns patients may not want to discuss in a rushed setting.' },
    { title: 'Clear next steps', text: 'Patients leave with a better understanding of preparation, suitability, alternatives and follow-up.' },
    { title: 'Respect for natural results', text: 'Treatment planning favors balanced refinement and restoration rather than exaggerated change.' },
    { title: 'Support beyond the procedure', text: 'Aftercare, healing expectations and recovery milestones are part of the treatment conversation.' }
  ];
}
