import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  template: `
    <div class="services-container">
      <div class="services-header">
        <p class="eyebrow">Services</p>
        <h1>Specialized surgical and <em>aesthetic</em> care</h1>
        <p>Explore consultation areas designed around safety, discretion, individualized treatment planning and premium follow-through.</p>
      </div>

      <section class="service-guide">
        <div>
          <p class="eyebrow">Clinical Direction</p>
          <h2>Every treatment category begins with a medical conversation, not a sales pitch.</h2>
        </div>
        <p>
          The practice supports patients who are exploring subtle refinement, post-pregnancy body change,
          post-weight-loss concerns, scar improvement, reconstruction after injury or illness, and long-standing
          aesthetic goals. Your consultation clarifies which options are suitable, what recovery may require and
          what result can be pursued responsibly.
        </p>
      </section>

      <section class="interest-finder">
        <div class="finder-copy">
          <p class="eyebrow">Find Your Direction</p>
          <h2>Start with what you want to understand.</h2>
          <p>
            If you are not ready to name a procedure, choose the concern that feels closest. The consultation can
            then guide you toward plastic surgery, reconstructive surgery, skin treatment, hair restoration or a safer
            non-surgical option.
          </p>
        </div>
        <div class="finder-grid">
          <button type="button" routerLink="/book-now" *ngFor="let item of interestFinder">
            <span>{{ item.no }}</span>
            <strong>{{ item.title }}</strong>
            <small>{{ item.text }}</small>
          </button>
        </div>
      </section>
      
      <div class="services-list">
        <mat-card class="service-card">
          <mat-card-header>
            <span class="service-no">01</span>
            <div>
              <span class="service-tag">Surgical</span>
              <h3>Breast Procedures</h3>
            </div>
          </mat-card-header>
          <mat-card-content>
            <p>Comprehensive breast enhancement and reconstruction:</p>
            <ul>
              <li>Breast Augmentation</li>
              <li>Breast Reduction</li>
              <li>Breast Lift (Mastopexy)</li>
              <li>Breast Reconstruction</li>
              <li>Implant Revision Surgery</li>
            </ul>
          </mat-card-content>
        </mat-card>
        
        <mat-card class="service-card">
          <mat-card-header>
            <span class="service-no">02</span>
            <div>
              <span class="service-tag">Surgical</span>
              <h3>Body Contouring</h3>
            </div>
          </mat-card-header>
          <mat-card-content>
            <p>Advanced body sculpting and shaping procedures:</p>
            <ul>
              <li>Liposuction</li>
              <li>Tummy Tuck (Abdominoplasty)</li>
              <li>Arm Lift</li>
              <li>Thigh Lift</li>
              <li>Body Lift</li>
              <li>Brazilian Butt Lift (BBL)</li>
              <li>Fat Transfer Procedures</li>
            </ul>
          </mat-card-content>
        </mat-card>
        
        <mat-card class="service-card">
          <mat-card-header>
            <span class="service-no">03</span>
            <div>
              <span class="service-tag">Non-surgical</span>
              <h3>Skin & Minimally Invasive Treatments</h3>
            </div>
          </mat-card-header>
          <mat-card-content>
            <p>Non-surgical skin rejuvenation and enhancement:</p>
            <ul>
              <li>Botox</li>
              <li>Dermal Fillers</li>
              <li>PRP Therapy</li>
              <li>Scar Revision</li>
              <li>Skin Lesion Excision</li>
            </ul>
          </mat-card-content>
        </mat-card>
        
        <mat-card class="service-card">
          <mat-card-header>
            <span class="service-no">04</span>
            <div>
              <span class="service-tag">Reconstructive</span>
              <h3>Reconstructive Surgery</h3>
            </div>
          </mat-card-header>
          <mat-card-content>
            <p>Medical reconstructive procedures for various conditions:</p>
            <ul>
              <li>Burn Reconstruction</li>
              <li>Skin Grafting</li>
              <li>Post-Trauma Reconstruction</li>
              <li>Scar Contracture Release</li>
              <li>Cancer Reconstruction</li>
              <li>Hand Reconstruction</li>
              <li>Congenital Deformity Correction</li>
              <li>Wound Coverage Procedures</li>
            </ul>
          </mat-card-content>
        </mat-card>
        
        <mat-card class="service-card">
          <mat-card-header>
            <span class="service-no">05</span>
            <div>
              <span class="service-tag">Specialized</span>
              <h3>Specialized Services</h3>
            </div>
          </mat-card-header>
          <mat-card-content>
            <p>Specialized treatment options for unique conditions:</p>
            <ul>
              <li>Keloid Treatment</li>
              <li>Chronic Wound Management</li>
              <li>Post Weight-Loss Body Contouring</li>
            </ul>
          </mat-card-content>
        </mat-card>
        
        <mat-card class="service-card">
          <mat-card-header>
            <span class="service-no">06</span>
            <div>
              <span class="service-tag">Restorative</span>
              <h3>Hair Restoration Services</h3>
            </div>
          </mat-card-header>
          <mat-card-content>
            <p>Advanced hair restoration and rejuvenation treatments:</p>
            <ul>
              <li>Hair Transplant Procedures</li>
              <li>PRP Hair Restoration</li>
              <li>Hairline Restoration</li>
              <li>Eyebrow Restoration</li>
              <li>Hair Loss Assessment & Treatment</li>
            </ul>
          </mat-card-content>
        </mat-card>
      </div>

      <section class="procedure-guide">
        <div class="guide-heading">
          <p class="eyebrow">Procedure Guide</p>
          <h2>Understand the care pathway before you enquire.</h2>
          <p>
            These guides help patients arrive prepared for consultation, with clearer expectations about suitability,
            recovery and the kind of planning each treatment category requires.
          </p>
        </div>
        <div class="guide-grid">
          <article *ngFor="let guide of procedureGuides">
            <span>{{ guide.label }}</span>
            <h3>{{ guide.title }}</h3>
            <p>{{ guide.summary }}</p>
            <dl>
              <div>
                <dt>Best discussed when</dt>
                <dd>{{ guide.for }}</dd>
              </div>
              <div>
                <dt>Consultation focus</dt>
                <dd>{{ guide.consultation }}</dd>
              </div>
              <div>
                <dt>Recovery conversation</dt>
                <dd>{{ guide.recovery }}</dd>
              </div>
            </dl>
            <button mat-stroked-button routerLink="/book-now">{{ guide.cta }}</button>
          </article>
        </div>
      </section>

      <section class="seo-section">
        <p class="eyebrow">Specialist Care In Mombasa</p>
        <h2>Plastic, reconstructive and aesthetic surgery for patients seeking informed, private care.</h2>
        <p>
          Patients visit the practice for breast surgery, body contouring, tummy tuck planning, liposuction,
          reconstructive surgery, burn and trauma reconstruction, keloid treatment, scar revision, chronic wound
          care, Botox, dermal fillers, PRP therapy and hair restoration in Mombasa. Every service begins with a
          consultation so the plan is grounded in safety, anatomy, recovery and realistic expectations.
        </p>
      </section>

      <section class="standards-section">
        <div class="standards-copy">
          <p class="eyebrow">What Sets The Experience Apart</p>
          <h2>Premium care is measured by judgement, privacy and follow-through.</h2>
        </div>
        <div class="standards-grid">
          <article>
            <span>01</span>
            <h3>Safety-led recommendations</h3>
            <p>Procedures are discussed through suitability, risk, healing, scarring and realistic outcomes before a treatment plan is confirmed.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Natural proportion</h3>
            <p>Aesthetic plans are designed to enhance your own structure and avoid an over-treated or one-size-fits-all result.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Private patient journey</h3>
            <p>Consultation, planning and aftercare are handled discreetly for patients who value confidentiality and calm communication.</p>
          </article>
          <article>
            <span>04</span>
            <h3>Recovery clarity</h3>
            <p>You receive practical guidance on preparation, expected downtime, follow-up and signs that require attention.</p>
          </article>
        </div>
      </section>

      <section class="concerns-section">
        <div class="concerns-copy">
          <p class="eyebrow">Common Patient Concerns</p>
          <h2>Questions patients often ask before taking the next step.</h2>
        </div>
        <div class="concerns-list">
          <article *ngFor="let concern of concerns">
            <h3>{{ concern.question }}</h3>
            <p>{{ concern.answer }}</p>
          </article>
        </div>
      </section>

      <section class="faq-section">
        <div class="faq-copy">
          <p class="eyebrow">Consultation FAQ</p>
          <h2>Simple answers before you book.</h2>
        </div>
        <div class="faq-list">
          <article *ngFor="let item of faqs">
            <h3>{{ item.q }}</h3>
            <p>{{ item.a }}</p>
          </article>
        </div>
      </section>

      <div class="services-cta">
        <p class="eyebrow">Next Step</p>
        <h2>Not sure which service fits?</h2>
        <p>A consultation helps clarify suitability, safety, recovery expectations and the right next step. Private guidance first; no obligation to proceed.</p>
        <button mat-raised-button color="accent" routerLink="/book-now">Request Consultation</button>
      </div>

      <p class="medical-note">
        Information on this page is educational and does not replace a private medical consultation. Suitability,
        risks and recovery expectations can only be confirmed after an individual assessment.
      </p>
    </div>
  `,
  styles: [`
    .services-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: clamp(28px, 6vw, 64px) 20px 86px;
    }
    .services-header {
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
    .services-header h1 {
      font-size: clamp(2.35rem, 6vw, 4rem);
      margin-bottom: 14px;
      line-height: 1.1;
    }
    .services-header h1 em {
      color: var(--rose);
      font-style: italic;
    }
    .services-header p {
      color: var(--slate-m);
      font-size: clamp(0.95rem, 2vw, 1.08rem);
      max-width: 680px;
      margin: 0 auto;
    }
    .service-guide {
      display: grid;
      grid-template-columns: minmax(260px, 0.9fr) minmax(320px, 1.1fr);
      gap: clamp(24px, 5vw, 56px);
      align-items: end;
      margin-bottom: clamp(30px, 6vw, 54px);
      padding: clamp(30px, 6vw, 48px);
      background: var(--off);
      border: 1px solid var(--bdr);
    }
    .service-guide h2,
    .finder-copy h2,
    .seo-section h2,
    .standards-copy h2 {
      color: var(--char);
      font-size: clamp(1.85rem, 4vw, 2.7rem);
      line-height: 1.12;
    }
    .service-guide p:not(.eyebrow) {
      color: var(--slate-m);
      font-size: 0.94rem;
      line-height: 1.82;
    }
    .interest-finder {
      margin-bottom: clamp(34px, 7vw, 58px);
      display: grid;
      grid-template-columns: minmax(260px, 0.82fr) minmax(320px, 1.18fr);
      gap: clamp(24px, 5vw, 56px);
      align-items: start;
      padding: clamp(30px, 6vw, 48px);
      background: #fff;
      border: 1px solid var(--bdr);
    }
    .finder-copy p:not(.eyebrow) {
      font-size: 0.94rem;
      line-height: 1.82;
    }
    .finder-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1px;
      background: var(--bdr);
      border: 1px solid var(--bdr);
    }
    .finder-grid button {
      appearance: none;
      border: 0;
      background: var(--w);
      display: grid;
      gap: 8px;
      min-width: 0;
      padding: 24px 26px;
      text-align: left;
      cursor: pointer;
      transition: background 0.25s, transform 0.25s;
    }
    .finder-grid button:hover {
      background: rgba(139, 15, 85, 0.045);
      transform: translateY(-2px);
    }
    .finder-grid span {
      color: var(--rose);
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.45rem;
      line-height: 1;
    }
    .finder-grid strong {
      color: var(--char);
      font-size: 0.95rem;
      line-height: 1.25;
    }
    .finder-grid small {
      color: var(--slate-m);
      font-size: 0.8rem;
      line-height: 1.65;
    }
    .services-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1px;
      margin-top: clamp(24px, 5vw, 40px);
      min-width: 0;
      background: var(--bdr);
      border: 1px solid var(--bdr);
    }
    .service-card {
      border: 0 !important;
      border-radius: 0 !important;
      box-shadow: none !important;
      transition: background 0.25s;
      min-width: 0;
    }
    .service-card mat-card-header {
      align-items: flex-start;
      gap: 18px;
      padding: 32px 32px 8px;
      min-width: 0;
    }
    .service-card mat-card-header div {
      min-width: 0;
    }
    .service-card:hover {
      background: rgba(139, 15, 85, 0.04) !important;
    }
    .service-no {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.65rem;
      color: var(--rose-l);
      flex: 0 0 auto;
    }
    .service-card h3 {
      color: var(--char);
      font-size: clamp(1.24rem, 3vw, 1.52rem);
      margin: 0;
      line-height: 1.25;
      overflow-wrap: anywhere;
    }
    .service-tag {
      display: inline-block;
      color: var(--rose);
      font-size: 0.68rem;
      letter-spacing: 0.18em;
      font-weight: 500;
      margin-bottom: 5px;
      text-transform: uppercase;
    }
    .service-card mat-card-content {
      padding: 0 32px 32px 82px;
    }
    .service-card p {
      color: var(--slate-m);
      font-size: 0.9rem;
    }
    .service-card ul {
      list-style: none;
      padding: 0;
      margin: 15px 0;
    }
    .service-card li {
      padding: 5px 0;
      color: var(--slate-m);
      overflow-wrap: anywhere;
    }
    .service-card li:before {
      content: "→ ";
      color: var(--rose);
      font-weight: bold;
    }
    .procedure-guide {
      margin-top: clamp(42px, 8vw, 72px);
    }
    .guide-heading {
      display: grid;
      grid-template-columns: minmax(260px, 0.9fr) minmax(320px, 1.1fr);
      gap: clamp(24px, 5vw, 56px);
      align-items: end;
      margin-bottom: 24px;
    }
    .guide-heading h2,
    .concerns-copy h2,
    .faq-copy h2 {
      color: var(--char);
      font-size: clamp(1.85rem, 4vw, 2.7rem);
      line-height: 1.12;
    }
    .guide-heading p:not(.eyebrow) {
      color: var(--slate-m);
      font-size: 0.94rem;
      line-height: 1.82;
    }
    .guide-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1px;
      background: var(--bdr);
      border: 1px solid var(--bdr);
    }
    .guide-grid article {
      background: #fff;
      padding: clamp(28px, 4vw, 40px);
      min-width: 0;
    }
    .guide-grid span {
      color: var(--rose);
      font-size: 0.68rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }
    .guide-grid h3 {
      color: var(--char);
      font-size: clamp(1.45rem, 3vw, 1.85rem);
      line-height: 1.14;
      margin: 12px 0 12px;
    }
    .guide-grid p,
    .guide-grid dd {
      color: var(--slate-m);
      font-size: 0.88rem;
      line-height: 1.7;
    }
    .guide-grid dl {
      display: grid;
      gap: 14px;
      margin: 20px 0 22px;
    }
    .guide-grid dt {
      color: var(--char);
      font-size: 0.72rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 3px;
    }
    .guide-grid button {
      max-width: 100%;
      white-space: normal;
    }
    .standards-section {
      margin-top: clamp(34px, 7vw, 64px);
      display: grid;
      grid-template-columns: minmax(260px, 0.85fr) minmax(320px, 1.15fr);
      gap: clamp(24px, 5vw, 56px);
      align-items: start;
    }
    .standards-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1px;
      background: var(--bdr);
      border: 1px solid var(--bdr);
    }
    .standards-grid article {
      background: #fff;
      padding: clamp(24px, 4vw, 34px);
    }
    .standards-grid span {
      color: var(--rose);
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.55rem;
      display: block;
      margin-bottom: 10px;
    }
    .standards-grid h3 {
      color: var(--char);
      font-size: 1.35rem;
      line-height: 1.2;
      margin-bottom: 10px;
    }
    .standards-grid p {
      font-size: 0.88rem;
    }
    .seo-section {
      margin-top: clamp(38px, 7vw, 64px);
      padding: clamp(30px, 6vw, 48px);
      background: var(--off);
      border: 1px solid var(--bdr);
      text-align: center;
    }
    .seo-section h2 {
      max-width: 820px;
      margin: 0 auto 16px;
    }
    .seo-section p:not(.eyebrow) {
      max-width: 880px;
      margin: 0 auto;
      font-size: 0.94rem;
      line-height: 1.82;
    }
    .concerns-section,
    .faq-section {
      margin-top: clamp(42px, 8vw, 70px);
      display: grid;
      grid-template-columns: minmax(260px, 0.82fr) minmax(320px, 1.18fr);
      gap: clamp(24px, 5vw, 56px);
      align-items: start;
    }
    .concerns-list,
    .faq-list {
      display: grid;
      gap: 1px;
      background: var(--bdr);
      border: 1px solid var(--bdr);
    }
    .concerns-list article,
    .faq-list article {
      background: #fff;
      padding: 26px 30px;
    }
    .concerns-list h3,
    .faq-list h3 {
      color: var(--char);
      font-size: 1.28rem;
      line-height: 1.2;
      margin-bottom: 8px;
    }
    .concerns-list p,
    .faq-list p {
      font-size: 0.88rem;
    }
    .services-cta {
      margin-top: clamp(30px, 6vw, 54px);
      padding: clamp(34px, 6vw, 48px);
      background: var(--off);
      border: 1px solid var(--bdr);
      border-radius: 8px;
      text-align: center;
      min-width: 0;
    }
    .services-cta h2 {
      color: var(--char);
      font-size: clamp(1.8rem, 4vw, 2.5rem);
      margin-bottom: 10px;
    }
    .services-cta p {
      color: var(--slate-m);
      margin: 0 auto 18px;
      max-width: 680px;
      line-height: 1.6;
    }
    .services-cta button {
      max-width: 100%;
      min-height: 46px;
      padding-left: 20px;
      padding-right: 20px;
      white-space: normal;
    }
    .medical-note {
      margin: 22px auto 0;
      max-width: 820px;
      text-align: center;
      font-size: 0.78rem;
      color: var(--slate-m);
      line-height: 1.7;
    }
    @media (max-width: 640px) {
      .services-container {
        padding-left: 16px;
        padding-right: 16px;
      }
      .services-header { margin-bottom: 28px; }
      .services-list,
      .service-guide,
      .interest-finder,
      .finder-grid,
      .guide-heading,
      .guide-grid,
      .standards-section,
      .standards-grid,
      .concerns-section,
      .faq-section {
        grid-template-columns: 1fr;
      }
      .guide-grid article,
      .concerns-list article,
      .faq-list article {
        padding-left: 22px;
        padding-right: 22px;
      }
      .finder-grid button {
        padding-left: 22px;
        padding-right: 22px;
      }
      .finder-grid button:hover {
        transform: none;
      }
      .service-card mat-card-header { padding: 26px 22px 8px; }
      .service-card mat-card-content { padding: 0 22px 28px; }
      .service-no { display: none; }
      .service-card:hover {
        transform: none;
      }
      .services-cta button {
        width: 100%;
      }
    }
  `]
})
export class ServicesComponent {
  interestFinder = [
    { no: '01', title: 'I want to feel more confident in my body', text: 'Breast surgery, tummy tuck, liposuction and body contouring can be discussed privately.' },
    { no: '02', title: 'I have a scar, wound or keloid', text: 'Scar revision, keloid care, wound management and reconstructive options can be reviewed.' },
    { no: '03', title: 'I want skin or facial refinement', text: 'Botox, fillers, PRP, skin lesion care and scar support can be planned with restraint.' },
    { no: '04', title: 'I am considering hair restoration', text: 'Hair loss assessment, PRP and transplant suitability can be explored in consultation.' }
  ];

  procedureGuides = [
    {
      label: 'Breast',
      title: 'Breast procedures',
      summary: 'For patients considering breast size, lift, symmetry, reconstruction or revision after previous surgery.',
      for: 'You want to discuss proportion, comfort, asymmetry, post-pregnancy change, reconstruction or implant revision.',
      consultation: 'Breast shape, skin quality, measurements, medical history, implant or non-implant options, scarring and goals.',
      recovery: 'Downtime, garment use, activity limits, scar care, follow-up timing and how results settle over time.',
      cta: 'Discuss Breast Surgery'
    },
    {
      label: 'Body',
      title: 'Body contouring',
      summary: 'For changes after weight fluctuation, pregnancy, aging or personal aesthetic goals around shape and contour.',
      for: 'You are considering liposuction, tummy tuck, arm lift, thigh lift, body lift, BBL or fat transfer planning.',
      consultation: 'Skin laxity, fat distribution, muscle separation, scars, weight stability and realistic contour improvement.',
      recovery: 'Compression, mobility, time away from work, swelling, staged healing and safe return to exercise.',
      cta: 'Plan Body Contouring'
    },
    {
      label: 'Skin',
      title: 'Skin and minimally invasive treatments',
      summary: 'For patients seeking refreshed skin, softer lines, volume support, scar care or skin lesion assessment.',
      for: 'You want improvement without surgery, or you need guidance on whether a skin concern should be removed or treated.',
      consultation: 'Skin quality, facial balance, medical suitability, product selection, treatment intervals and natural-looking limits.',
      recovery: 'Expected redness, bruising, aftercare, review timing and when results are likely to appear.',
      cta: 'Ask About Skin Care'
    },
    {
      label: 'Reconstruction',
      title: 'Reconstructive surgery',
      summary: 'For restoring function, coverage, comfort and appearance after trauma, burns, cancer treatment or congenital concerns.',
      for: 'You need specialist input for scars, contractures, wounds, skin grafting, hand concerns or cancer-related reconstruction.',
      consultation: 'Function, tissue quality, previous operations, wound history, imaging or reports and staged treatment needs.',
      recovery: 'Dressing care, healing milestones, therapy needs, follow-up frequency and protection of the reconstruction.',
      cta: 'Discuss Reconstruction'
    },
    {
      label: 'Specialized',
      title: 'Keloids, scars and chronic wounds',
      summary: 'For persistent scars, keloids, non-healing wounds or complex healing concerns that need structured management.',
      for: 'You have a scar or wound that is painful, raised, recurring, limiting movement or not healing as expected.',
      consultation: 'Scar behavior, wound history, triggers, previous treatments, recurrence risk and combined treatment options.',
      recovery: 'Wound care, pressure or silicone use, injection schedules, review timing and recurrence monitoring.',
      cta: 'Review My Scar or Wound'
    },
    {
      label: 'Hair',
      title: 'Hair restoration',
      summary: 'For hairline, thinning, eyebrow or hair density concerns where assessment guides the most appropriate option.',
      for: 'You want to understand hair loss causes, PRP suitability, transplant planning or restoration expectations.',
      consultation: 'Hair pattern, scalp health, donor area, medical contributors, timeline and maintenance planning.',
      recovery: 'Shedding phases, treatment sessions, post-procedure care and the timeline for visible change.',
      cta: 'Explore Hair Restoration'
    }
  ];

  concerns = [
    { question: 'Will I still look like myself?', answer: 'The practice prioritizes proportion, restraint and anatomy-led planning so enhancement supports your own features rather than replacing them.' },
    { question: 'How visible will scars be?', answer: 'Scarring depends on the procedure, skin type, healing history and aftercare. Scar placement, maturation and care are discussed before treatment.' },
    { question: 'How long is recovery?', answer: 'Recovery varies widely. Your consultation covers downtime, activity limits, follow-up and practical planning for work, family and travel.' },
    { question: 'What if surgery is not right for me?', answer: 'A responsible recommendation may include non-surgical care, waiting, medical optimization or choosing not to proceed.' }
  ];

  faqs = [
    { q: 'Do I need to know exactly which procedure I want?', a: 'No. You can book with a concern or goal, and the consultation will clarify which options fit safely.' },
    { q: 'Can I discuss more than one concern?', a: 'Yes. Many patients discuss related concerns together, especially breast and body changes or scars and skin quality.' },
    { q: 'Are results guaranteed?', a: 'No medical or aesthetic result can be guaranteed. The consultation focuses on realistic expectations and individualized planning.' },
    { q: 'Is my enquiry private?', a: 'Yes. Appointment requests and consultations are handled discreetly by the practice team.' }
  ];
}
