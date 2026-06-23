import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero">
      <div class="hero-stage">
        <div class="brand-line rise r1">
          <span class="brand-mark">n</span>
          <span>Ruth Njoroge</span>
        </div>

        <div class="portrait-wrap rise r2">
          <img src="assets/images/dr-ruth-theme-portrait.jpg" alt="Dr. Ruth Njoroge" loading="eager">
        </div>

        <div class="hero-copy">
          <p class="kicker rise r1">Board-certified specialist care</p>
          <h1 class="rise r2">Dr. Ruth <em>Njoroge</em></h1>
          <p class="hero-p rise r3">
            A consultation-led practice for plastic, reconstructive and aesthetic surgery in Mombasa.
            Planning is private, measured and grounded in safety, proportion and clear recovery guidance.
          </p>
          <div class="hero-btns rise r4">
            <button class="btn-light" type="button" routerLink="/book-now">Book a Consultation</button>
            <button class="btn-ghost" type="button" routerLink="/services">View Procedures</button>
          </div>
        </div>
      </div>
    </section>

    <section class="services" id="services">
      <div class="s-intro">
        <div>
          <p class="sec-eye">Procedures</p>
          <h2 class="sec-t">Carefully planned around <em>you</em></h2>
        </div>
        <p class="s-body">A premium surgical experience begins with listening. Each recommendation is shaped around your anatomy, medical history, recovery capacity and the outcome that will feel refined rather than overdone.</p>
      </div>
      <div class="srows">
        <button class="srow" type="button" routerLink="/services" *ngFor="let service of services; let i = index">
          <div class="srow-no">{{ (i + 1).toString().padStart(2, '0') }}</div>
          <div class="srow-info">
            <div class="srow-name">{{ service.title }}</div>
            <div class="srow-sub">{{ service.text }}</div>
          </div>
          <div class="srow-tags">
            <span class="rtag" *ngFor="let tag of service.tags">{{ tag }}</span>
          </div>
          <div class="srow-arr">→</div>
        </button>
      </div>
    </section>

    <section class="signature">
      <div class="signature-copy">
        <p class="sec-eye">Signature Focus</p>
        <h2 class="sec-t">Subtle transformation, specialist judgement.</h2>
        <p>
          Our clinic brings together reconstructive discipline and aesthetic refinement for patients who want their
          treatment to feel considered, private and medically grounded.
        </p>
      </div>
      <div class="signature-grid">
        <article *ngFor="let item of signatureFocus">
          <span>{{ item.label }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section class="process">
      <div class="p-intro">
        <div>
          <p class="sec-eye">Experience</p>
          <h2 class="sec-t">A calm path to <em>care</em></h2>
        </div>
        <p>Each step is designed to make decisions clearer and recovery more supported.</p>
      </div>
      <div class="p-steps">
        <div class="pstep" *ngFor="let step of steps; let i = index">
          <div class="ps-icon">{{ (i + 1).toString().padStart(2, '0') }}</div>
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
        </div>
      </div>
    </section>

    <section class="journey">
      <div class="journey-copy">
        <p class="sec-eye">New Patient Journey</p>
        <h2 class="sec-t">From first enquiry to aftercare, the path is clear.</h2>
        <p>
          Clients should never feel rushed into a procedure. The journey is designed to help you understand your
          options, prepare well, and make decisions with confidence.
        </p>
      </div>
      <div class="journey-grid">
        <article *ngFor="let item of patientJourney">
          <span>{{ item.no }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section class="consultation-detail">
      <div>
        <p class="sec-eye">Consultation Depth</p>
        <h2 class="sec-t">What your first visit is designed to answer.</h2>
      </div>
      <div class="detail-list">
        <article *ngFor="let detail of consultationDetails">
          <h3>{{ detail.title }}</h3>
          <p>{{ detail.text }}</p>
        </article>
      </div>
    </section>

    <section class="statement">
      <div class="statement-copy">
        <p class="sec-eye">Practice Promise</p>
        <h2>Discreet, measured and deeply personal.</h2>
        <p>"The goal is not to make every patient look the same. It is to understand the patient, respect anatomy, and plan carefully."</p>
        <span>Dr. Ruth Njoroge, MD</span>
      </div>
      <div class="value-grid">
        <article *ngFor="let value of values">
          <p>{{ value.role }}</p>
          <h3>{{ value.title }}</h3>
          <span>{{ value.text }}</span>
        </article>
      </div>
    </section>

    <section class="patient-fit">
      <div class="fit-panel">
        <p class="sec-eye">Is This Right For You?</p>
        <h2>For patients seeking thoughtful, specialist-led change.</h2>
        <p>
          Whether you are considering surgery for confidence, restoration, comfort, function, or a long-standing concern,
          Our clinic helps you move from uncertainty to a clear, medically sound plan.
        </p>
      </div>
      <div class="fit-grid">
        <div *ngFor="let point of patientFit">
          <span>{{ point.no }}</span>
          <p>{{ point.text }}</p>
        </div>
      </div>
    </section>

    <section class="feature">
      <div class="feat-l">
        <p class="feat-eye">Specialist Care</p>
        <h2>Reconstruction and aesthetics with clinical restraint.</h2>
        <p>Patients come with different histories: injury, cancer treatment, weight change, congenital concerns, aging, or aesthetic goals. The plan should honor that context.</p>
        <div class="feat-list">
          <div>Private consultation and medical history review</div>
          <div>Individualized surgical and non-surgical planning</div>
          <div>Clear recovery and aftercare guidance</div>
          <div>Options grounded in safety and suitability</div>
        </div>
        <button class="btn-magenta" type="button" routerLink="/book-now">Begin Consultation</button>
      </div>
      <div class="feat-r">
        <div class="fc" *ngFor="let card of featureCards">
          <div class="fc-ico">{{ card.icon }}</div>
          <div>
            <div class="fc-name">{{ card.title }}</div>
            <div class="fc-sub">{{ card.text }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="experience-proof">
      <div class="proof-copy">
        <p class="sec-eye">Patient Experience</p>
        <h2 class="sec-t">A premium clinic experience should feel clear before it feels clinical.</h2>
        <p>
          Our clinic is designed for patients who want privacy, thoughtful answers and a plan that respects both
          confidence and health.
        </p>
      </div>
      <div class="proof-grid">
        <article *ngFor="let item of patientExperience">
          <span>{{ item.no }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section class="home-faq">
      <div class="home-faq-copy">
        <p class="sec-eye">Client Questions</p>
        <h2 class="sec-t">Helpful answers before you book.</h2>
      </div>
      <div class="home-faq-list">
        <article *ngFor="let item of homeFaqs">
          <h3>{{ item.q }}</h3>
          <p>{{ item.a }}</p>
        </article>
      </div>
    </section>

    <section class="cta-sec">
      <div class="cta-inner">
        <p class="sec-eye">Start Your Journey</p>
        <h2 class="sec-t">Ready to <em>talk?</em></h2>
        <p>Share your goals with our clinic and receive clear next steps for consultation, planning and care. Private consultation first; no obligation to proceed.</p>
        <div class="cta-btns">
          <button class="btn-light dark" type="button" routerLink="/book-now">Book Appointment</button>
          <button class="btn-ghost dark" type="button" routerLink="/contact">Contact Practice</button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
      overflow-x: hidden;
    }
    button {
      font: inherit;
      cursor: pointer;
    }
    .hero {
      min-height: calc(100svh - 72px);
      padding: clamp(22px, 4vw, 52px);
      background:
        linear-gradient(90deg, rgba(91, 24, 53, 0.035), transparent 42%),
        var(--w);
      color: var(--plum);
      display: grid;
      align-items: center;
      border-bottom: 1px solid rgba(75, 23, 50, 0.08);
    }
    .hero-stage {
      width: min(1180px, 100%);
      min-height: min(620px, calc(100svh - 150px));
      margin: 0 auto;
      position: relative;
      display: grid;
      grid-template-columns: minmax(300px, 0.9fr) minmax(320px, 1fr);
      align-items: center;
      gap: clamp(24px, 6vw, 76px);
      padding: clamp(28px, 6vw, 62px) 0;
      overflow: hidden;
      background: transparent;
      border: 0;
      box-shadow: none;
    }
    .hero-stage::after {
      content: none;
    }
    .brand-line {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      gap: 10px;
      color: rgba(75, 23, 50, 0.72);
      font-family: 'Cormorant Garamond', serif;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      z-index: 2;
    }
    .brand-mark {
      font-size: 2.5rem;
      line-height: 0.8;
      font-style: italic;
      color: var(--plum);
      text-transform: lowercase;
      letter-spacing: 0;
    }
    .portrait-wrap {
      position: relative;
      grid-column: 2;
      z-index: 1;
      justify-self: center;
      max-width: 470px;
      margin: 0;
      filter: none;
    }
    .portrait-wrap::before {
      content: '';
      position: absolute;
      inset: auto -24px -24px 38px;
      height: 74%;
      background: rgba(234, 218, 212, 0.72);
      z-index: -1;
      pointer-events: none;
    }
    .portrait-wrap img {
      width: 100%;
      display: block;
      aspect-ratio: 4 / 5;
      object-fit: cover;
      object-position: center top;
      border-radius: 2px 2px 8px 8px;
      border: 1px solid rgba(75, 23, 50, 0.08);
      box-shadow: 0 24px 60px rgba(62, 36, 48, 0.2);
    }
    .hero-copy {
      position: relative;
      grid-column: 1;
      grid-row: 1;
      z-index: 2;
      align-self: center;
      max-width: 560px;
      padding-top: 54px;
    }
    .kicker,
    .sec-eye,
    .feat-eye {
      font-size: 0.68rem;
      letter-spacing: 0.24em;
      text-transform: uppercase;
      color: var(--magenta);
      line-height: 1.5;
    }
    h1 {
      color: var(--plum);
      font-size: clamp(3.35rem, 7.4vw, 6.7rem);
      line-height: 0.88;
      margin: 16px 0 24px;
    }
    h1 em,
    .sec-t em {
      color: var(--magenta-l);
      font-style: italic;
    }
    .hero-p {
      color: var(--slate-m);
      font-size: 0.98rem;
      line-height: 1.86;
      max-width: 520px;
      margin-bottom: 32px;
    }
    .hero-btns,
    .cta-btns {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }
    .btn-light,
    .btn-ghost,
    .btn-magenta {
      border-radius: 4px;
      padding: 13px 24px;
      min-height: 46px;
      border: 1px solid transparent;
      font-size: 0.82rem;
      letter-spacing: 0.04em;
      transition: all 0.25s ease;
    }
    .btn-light {
      background: var(--plum);
      color: #fff;
    }
    .btn-light:hover {
      background: var(--magenta-l);
      transform: translateY(-2px);
    }
    .btn-ghost {
      background: transparent;
      border-color: rgba(75, 23, 50, 0.14);
      color: var(--plum);
    }
    .btn-ghost:hover {
      border-color: var(--magenta);
      color: var(--magenta);
    }
    .btn-light.dark {
      background: var(--magenta);
      color: #fff;
    }
    .btn-ghost.dark {
      color: var(--plum);
      border-color: var(--bdr);
    }
    .services,
    .process,
    .statement,
    .signature,
    .journey,
    .consultation-detail,
    .patient-fit,
    .experience-proof,
    .home-faq,
    .cta-sec {
      padding: clamp(72px, 9vw, 112px) clamp(20px, 5vw, 56px);
    }
    .services {
      background: #fff;
    }
    .s-intro {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 56px;
      margin: 0 auto 58px;
      max-width: 1140px;
      align-items: end;
    }
    .sec-eye {
      color: var(--magenta);
      margin-bottom: 14px;
    }
    .sec-t {
      font-size: clamp(2rem, 4vw, 3.2rem);
      line-height: 1.04;
    }
    .s-body {
      font-size: 0.94rem;
      line-height: 1.82;
    }
    .srows {
      max-width: 1140px;
      margin: 0 auto;
      border-top: 1px solid var(--bdr);
    }
    .srow {
      width: 100%;
      display: grid;
      grid-template-columns: 72px 1fr 1fr 28px;
      align-items: center;
      gap: 28px;
      padding: 32px 0;
      border: 0;
      border-bottom: 1px solid var(--bdr);
      background: transparent;
      text-align: left;
      transition: padding-left 0.25s, background 0.25s;
    }
    .srow:hover {
      padding-left: 14px;
      background: rgba(139, 15, 85, 0.035);
    }
    .srow-no {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.8rem;
      color: var(--magenta-l);
    }
    .srow-name {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.45rem;
      color: var(--char);
      margin-bottom: 5px;
    }
    .srow-sub,
    .f-sub {
      font-size: 0.82rem;
      color: var(--slate-m);
    }
    .srow-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 7px;
    }
    .rtag {
      font-size: 0.68rem;
      padding: 4px 11px;
      border-radius: 100px;
      background: var(--off);
      border: 1px solid var(--bdr);
      color: var(--slate-m);
      letter-spacing: 0.04em;
    }
    .srow-arr {
      color: var(--magenta);
      text-align: right;
    }
    .signature {
      background: var(--w);
      display: grid;
      grid-template-columns: minmax(280px, 0.82fr) minmax(320px, 1.18fr);
      gap: clamp(28px, 5vw, 68px);
      align-items: start;
    }
    .signature-copy {
      max-width: 480px;
    }
    .signature-copy p:not(.sec-eye) {
      margin-top: 22px;
      font-size: 0.96rem;
    }
    .signature-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1px;
      background: var(--bdr);
      border: 1px solid var(--bdr);
    }
    .signature-grid article {
      background: #fff;
      padding: clamp(26px, 4vw, 38px);
      min-width: 0;
    }
    .signature-grid span {
      color: var(--magenta);
      font-size: 0.68rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }
    .signature-grid h3 {
      color: var(--plum);
      font-size: 1.55rem;
      line-height: 1.18;
      margin: 14px 0 10px;
    }
    .signature-grid p {
      font-size: 0.9rem;
    }
    .process {
      background: var(--off);
    }
    .p-intro {
      max-width: 1140px;
      margin: 0 auto 54px;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 24px;
      flex-wrap: wrap;
    }
    .process .sec-t,
    .process h3 {
      color: var(--plum);
    }
    .process p {
      color: var(--slate-m);
    }
    .p-intro > p {
      max-width: 360px;
      font-size: 0.92rem;
    }
    .p-steps {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      max-width: 1140px;
      margin: 0 auto;
      border: 1px solid rgba(226, 177, 194, 0.16);
    }
    .pstep {
      padding: 34px 26px;
      border-right: 1px solid rgba(75, 23, 50, 0.1);
      background: rgba(255, 255, 255, 0.58);
    }
    .pstep:last-child {
      border-right: none;
    }
    .ps-icon {
      font-family: 'Cormorant Garamond', serif;
      color: var(--magenta);
      font-size: 1.6rem;
      margin-bottom: 18px;
    }
    .pstep h3 {
      font-family: 'Inter', sans-serif;
      font-size: 0.92rem;
      font-weight: 500;
      margin-bottom: 10px;
    }
    .pstep p {
      font-size: 0.8rem;
      line-height: 1.75;
    }
    .journey {
      background: #fff;
      display: grid;
      grid-template-columns: minmax(280px, 0.82fr) minmax(320px, 1.18fr);
      gap: clamp(24px, 5vw, 64px);
      align-items: start;
      border-top: 1px solid var(--bdr);
    }
    .journey-copy {
      max-width: 520px;
    }
    .journey-copy p:not(.sec-eye) {
      margin-top: 20px;
      font-size: 0.94rem;
    }
    .journey-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1px;
      background: var(--bdr);
      border: 1px solid var(--bdr);
    }
    .journey-grid article {
      background: var(--w);
      padding: clamp(24px, 4vw, 34px);
      min-width: 0;
    }
    .journey-grid span {
      display: block;
      color: var(--magenta);
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.55rem;
      margin-bottom: 10px;
    }
    .journey-grid h3 {
      color: var(--char);
      font-size: 1.28rem;
      line-height: 1.2;
      margin-bottom: 8px;
    }
    .journey-grid p {
      font-size: 0.88rem;
    }
    .consultation-detail {
      background: #fff;
      display: grid;
      grid-template-columns: minmax(280px, 0.88fr) minmax(320px, 1.12fr);
      gap: clamp(30px, 6vw, 70px);
      align-items: start;
      border-top: 1px solid var(--bdr);
      border-bottom: 1px solid var(--bdr);
    }
    .detail-list {
      display: grid;
      gap: 1px;
      background: rgba(75, 23, 50, 0.1);
      border: 1px solid rgba(75, 23, 50, 0.1);
    }
    .detail-list article {
      background: var(--w);
      padding: 28px 32px;
    }
    .detail-list h3 {
      color: var(--plum);
      font-size: 1.35rem;
      margin-bottom: 8px;
    }
    .detail-list p {
      font-size: 0.9rem;
    }
    .statement {
      background: #fff;
      display: grid;
      grid-template-columns: minmax(280px, 0.95fr) minmax(320px, 1.05fr);
      gap: clamp(24px, 5vw, 64px);
      align-items: stretch;
      color: var(--char);
    }
    .statement-copy {
      padding: clamp(30px, 6vw, 58px);
      border: 1px solid rgba(226, 177, 194, 0.18);
      background: var(--w);
    }
    .statement h2 {
      color: var(--plum);
      font-size: clamp(2.2rem, 5vw, 4rem);
      line-height: 1;
      margin: 16px 0 24px;
    }
    .statement-copy p:not(.sec-eye) {
      font-family: 'Cormorant Garamond', serif;
      color: var(--slate);
      font-size: 1.35rem;
      font-style: italic;
      line-height: 1.5;
      margin-bottom: 22px;
    }
    .statement-copy span {
      color: var(--magenta);
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .value-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1px;
      background: rgba(75, 23, 50, 0.1);
      border: 1px solid rgba(75, 23, 50, 0.1);
    }
    .value-grid article {
      background: var(--w);
      padding: 32px;
    }
    .value-grid p {
      color: var(--magenta);
      font-size: 0.68rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .value-grid h3 {
      color: var(--plum);
      font-size: 1.45rem;
      margin-bottom: 10px;
    }
    .value-grid span {
      color: var(--slate-m);
      font-size: 0.84rem;
      line-height: 1.7;
    }
    .patient-fit {
      background: var(--off);
      display: grid;
      grid-template-columns: minmax(280px, 0.9fr) minmax(320px, 1.1fr);
      gap: clamp(24px, 5vw, 64px);
      align-items: stretch;
    }
    .fit-panel {
      background: var(--plum);
      padding: clamp(34px, 6vw, 58px);
      color: #fff;
    }
    .fit-panel h2 {
      color: #fff;
      font-size: clamp(2rem, 4vw, 3.2rem);
      line-height: 1.04;
      margin: 16px 0 22px;
    }
    .fit-panel p:not(.sec-eye) {
      color: rgba(248, 241, 243, 0.72);
    }
    .fit-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1px;
      background: rgba(75, 23, 50, 0.12);
      border: 1px solid rgba(75, 23, 50, 0.12);
    }
    .fit-grid div {
      background: #fff;
      padding: clamp(24px, 4vw, 34px);
    }
    .fit-grid span {
      display: block;
      color: var(--magenta);
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.7rem;
      margin-bottom: 10px;
    }
    .fit-grid p {
      font-size: 0.9rem;
    }
    .feature {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .feat-l {
      background: var(--plum);
      padding: clamp(54px, 7vw, 86px) clamp(20px, 5vw, 58px);
    }
    .feat-eye {
      color: var(--blush);
      margin-bottom: 18px;
    }
    .feat-l h2 {
      color: #fff;
      font-size: clamp(2rem, 4vw, 3rem);
      line-height: 1.08;
      margin-bottom: 22px;
    }
    .feat-l p,
    .feat-list div {
      color: rgba(248, 241, 243, 0.62);
    }
    .feat-l p {
      font-size: 0.9rem;
      margin-bottom: 34px;
    }
    .feat-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 36px;
    }
    .feat-list div {
      display: flex;
      gap: 12px;
      font-size: 0.84rem;
      line-height: 1.6;
    }
    .feat-list div::before {
      content: '+';
      color: var(--blush);
      flex: 0 0 auto;
    }
    .btn-magenta {
      background: var(--magenta);
      color: #fff;
    }
    .btn-magenta:hover {
      background: var(--magenta-l);
      transform: translateY(-2px);
    }
    .feat-r {
      background: var(--off);
      padding: clamp(48px, 7vw, 72px) clamp(20px, 5vw, 52px);
      display: flex;
      flex-direction: column;
      gap: 14px;
      justify-content: center;
    }
    .fc {
      background: rgba(255, 255, 255, 0.88);
      border: 1px solid var(--bdr);
      border-radius: 8px;
      padding: 22px 24px;
      display: flex;
      align-items: center;
      gap: 14px;
      box-shadow: 0 12px 34px rgba(36, 29, 34, 0.08);
    }
    .fc-ico {
      color: var(--magenta);
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.6rem;
    }
    .fc-name {
      font-weight: 600;
      font-size: 0.88rem;
      color: var(--char);
      margin-bottom: 2px;
    }
    .fc-sub {
      font-size: 0.76rem;
    }
    .experience-proof {
      background: #fff;
      display: grid;
      grid-template-columns: minmax(280px, 0.82fr) minmax(320px, 1.18fr);
      gap: clamp(24px, 5vw, 64px);
      align-items: start;
      border-top: 1px solid var(--bdr);
    }
    .proof-copy {
      max-width: 520px;
    }
    .proof-copy p:not(.sec-eye) {
      margin-top: 20px;
      font-size: 0.94rem;
    }
    .proof-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1px;
      background: var(--bdr);
      border: 1px solid var(--bdr);
    }
    .proof-grid article {
      background: var(--w);
      padding: clamp(24px, 4vw, 34px);
    }
    .proof-grid span {
      color: var(--magenta);
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.55rem;
      display: block;
      margin-bottom: 10px;
    }
    .proof-grid h3 {
      color: var(--char);
      font-size: 1.28rem;
      line-height: 1.2;
      margin-bottom: 8px;
    }
    .proof-grid p {
      font-size: 0.88rem;
    }
    .home-faq {
      background: var(--off);
      display: grid;
      grid-template-columns: minmax(280px, 0.82fr) minmax(320px, 1.18fr);
      gap: clamp(24px, 5vw, 64px);
      align-items: start;
    }
    .home-faq-list {
      display: grid;
      gap: 1px;
      background: var(--bdr);
      border: 1px solid var(--bdr);
    }
    .home-faq-list article {
      background: #fff;
      padding: clamp(24px, 4vw, 32px);
      min-width: 0;
    }
    .home-faq-list h3 {
      color: var(--char);
      font-size: 1.24rem;
      line-height: 1.2;
      margin-bottom: 8px;
    }
    .home-faq-list p {
      font-size: 0.88rem;
    }
    .cta-sec {
      background: var(--w);
      text-align: center;
    }
    .cta-inner {
      max-width: 620px;
      margin: 0 auto;
    }
    .cta-inner .sec-t {
      margin-bottom: 16px;
    }
    .cta-inner p:not(.sec-eye) {
      margin-bottom: 36px;
    }
    .cta-btns {
      justify-content: center;
    }
    @media (max-width: 1024px) {
      .hero-stage,
      .s-intro,
      .signature,
      .journey,
      .consultation-detail,
      .statement,
      .patient-fit,
      .feature,
      .experience-proof,
      .home-faq {
        grid-template-columns: 1fr;
      }
      .portrait-wrap {
        grid-column: 1;
        grid-row: 2;
        max-width: 360px;
        margin: 58px auto 0;
      }
      .hero-copy {
        grid-column: 1;
        grid-row: 1;
      }
      .hero-copy {
        padding-top: 12px;
      }
      .srow {
        grid-template-columns: 60px 1fr 28px;
      }
      .srow-tags {
        display: none;
      }
      .p-steps {
        grid-template-columns: 1fr 1fr;
      }
      .signature-copy {
        max-width: none;
      }
      .pstep:nth-child(2) {
        border-right: none;
      }
    }
    @media (max-width: 700px) {
      .hero {
        padding: 0;
      }
      .hero-stage {
        min-height: auto;
        padding: 86px 20px 48px;
        border-left: 0;
        border-right: 0;
      }
      .brand-line {
        top: 24px;
        left: 20px;
      }
      .portrait-wrap {
        max-width: 280px;
        margin-bottom: 0;
      }
      .hero-btns .btn-light,
      .hero-btns .btn-ghost,
      .cta-btns .btn-light,
      .cta-btns .btn-ghost {
        flex: 1 1 220px;
      }
      .srow {
        grid-template-columns: 48px 1fr 22px;
        gap: 14px;
        padding: 24px 0;
      }
      .p-steps,
      .value-grid,
      .signature-grid,
      .journey-grid,
      .fit-grid,
      .proof-grid,
      .home-faq-list {
        grid-template-columns: 1fr;
      }
      .detail-list article,
      .signature-grid article,
      .journey-grid article,
      .fit-grid div,
      .proof-grid article,
      .home-faq-list article {
        padding-left: 22px;
        padding-right: 22px;
      }
      .pstep {
        border-right: none;
        border-bottom: 1px solid rgba(226, 177, 194, 0.16);
      }
      .value-grid article {
        padding: 26px;
      }
    }
  `]
})
export class HomeComponent {
  services = [
    { title: 'Breast Procedures', text: 'Enhancement, reduction, lift, reconstruction and revision planned for proportion, comfort and long-term confidence.', tags: ['Augmentation', 'Reduction', 'Reconstruction'] },
    { title: 'Body Contouring', text: 'Surgical shaping after weight change, pregnancy or personal aesthetic goals, with realistic recovery planning.', tags: ['Liposuction', 'Tummy Tuck', 'Body Lift'] },
    { title: 'Skin & Minimally Invasive Treatments', text: 'Refinement and rejuvenation for skin quality, facial balance, scars and early aging concerns.', tags: ['Botox', 'Fillers', 'PRP'] },
    { title: 'Reconstructive Surgery', text: 'Restoring function and form after burns, trauma, cancer treatment or congenital concerns.', tags: ['Burns', 'Trauma', 'Cancer'] },
    { title: 'Specialized Services', text: 'Keloid treatment, chronic wound support and post weight-loss planning for complex healing needs.', tags: ['Keloids', 'Wounds', 'Scars'] },
    { title: 'Hair Restoration', text: 'Hair loss assessment, transplant planning, hairline restoration and regenerative PRP support.', tags: ['Transplant', 'PRP', 'Hairline'] }
  ];

  steps = [
    { title: 'Consultation', text: 'A private assessment of medical history, goals, options and suitability.' },
    { title: 'Custom Plan', text: 'A tailored recommendation with realistic outcomes and recovery expectations.' },
    { title: 'Treatment', text: 'Care delivered with clinical precision, discretion and attention to safety.' },
    { title: 'Aftercare', text: 'Follow-up guidance to support healing, comfort and long-term wellbeing.' }
  ];

  values = [
    { title: 'Safety First', role: 'Clinical standards', text: 'Every recommendation begins with suitability, risk review and informed decision-making.' },
    { title: 'Natural Balance', role: 'Aesthetic restraint', text: 'Enhancement is planned around proportion, anatomy and the patient’s own features.' },
    { title: 'Clear Communication', role: 'Patient-centered care', text: 'Patients receive direct explanations about options, recovery and next steps.' },
    { title: 'Discreet Follow-Up', role: 'Ongoing support', text: 'Care continues beyond the procedure with practical recovery guidance.' }
  ];

  featureCards = [
    { icon: '01', title: 'Board-Certified Expertise', text: 'Specialist plastic and reconstructive surgery training' },
    { icon: '02', title: 'Private Planning', text: 'Every journey begins with a confidential consultation' },
    { icon: '03', title: 'Mombasa Practice', text: 'Care at Mombasa Trade Centre, Nkurumah Road' },
    { icon: '04', title: 'Simple Booking', text: 'Online requests with confirmation follow-up' }
  ];

  signatureFocus = [
    { label: 'Restoration', title: 'Reconstructive confidence', text: 'Care for scars, wounds, burns, trauma and cancer-related reconstruction where function and appearance both matter.' },
    { label: 'Aesthetic Surgery', title: 'Balanced enhancement', text: 'Breast and body procedures planned around proportion, anatomy and a result that belongs to the patient.' },
    { label: 'Refinement', title: 'Skin and injectables', text: 'Non-surgical treatments selected with restraint to refresh, soften and support skin quality.' },
    { label: 'Renewal', title: 'Hair restoration', text: 'Assessment-led hair restoration options for hairline, thinning, eyebrow and PRP-supported concerns.' }
  ];

  consultationDetails = [
    { title: 'Suitability', text: 'A clear discussion of what is medically appropriate, what can wait, and when another path may be safer.' },
    { title: 'Outcome Planning', text: 'A realistic explanation of likely change, limitations, scarring, recovery time and how results mature.' },
    { title: 'Preparation', text: 'Guidance on medical history, documents, medications, lifestyle factors and practical planning before treatment.' },
    { title: 'Aftercare', text: 'Follow-up expectations, warning signs, comfort support and healing milestones are discussed before you commit.' }
  ];

  patientJourney = [
    { no: '01', title: 'Enquiry', text: 'Share your concern, preferred service and timing through the booking form or contact channels.' },
    { no: '02', title: 'Consultation', text: 'Your goals, medical history, suitability, alternatives and questions are reviewed privately.' },
    { no: '03', title: 'Treatment plan', text: 'If treatment is appropriate, you receive clear guidance on preparation, risks, cost direction and recovery.' },
    { no: '04', title: 'Care and aftercare', text: 'Procedure or treatment is followed by practical aftercare, healing expectations and follow-up guidance.' }
  ];

  patientFit = [
    { no: '01', text: 'You want expert guidance before deciding whether surgery or a non-surgical option is suitable.' },
    { no: '02', text: 'You value natural-looking refinement, privacy and a direct conversation about risk and recovery.' },
    { no: '03', text: 'You are seeking restoration after injury, burns, cancer treatment, congenital concerns or major body change.' },
    { no: '04', text: 'You want a clinic experience that feels calm, premium and grounded in medical judgement.' }
  ];

  patientExperience = [
    { no: '01', title: 'Heard properly', text: 'Your concerns are explored in context, including health history, goals, lifestyle and timing.' },
    { no: '02', title: 'Guided honestly', text: 'You receive practical advice about what is suitable, what is not and what can be expected.' },
    { no: '03', title: 'Protected privately', text: 'Sensitive aesthetic and reconstructive concerns are handled with discretion and respect.' },
    { no: '04', title: 'Supported aftercare', text: 'The conversation includes follow-up, healing milestones and clear next steps after treatment.' }
  ];

  homeFaqs = [
    { q: 'Can I come in just to ask questions?', a: 'Yes. A consultation can be purely exploratory and does not oblige you to proceed with treatment.' },
    { q: 'Do I need to know the exact procedure?', a: 'No. You can describe your concern and receive guidance on suitable surgical or non-surgical options.' },
    { q: 'Will my consultation be private?', a: 'Yes. Sensitive aesthetic and reconstructive concerns are handled discreetly by our clinic.' },
    { q: 'Can non-surgical options be discussed?', a: 'Yes. If surgery is not suitable or not desired, alternatives can be reviewed during consultation.' }
  ];
}
