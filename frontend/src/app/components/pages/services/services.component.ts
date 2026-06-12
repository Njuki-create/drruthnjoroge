import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  template: `
    <div class="services-container">
      <div class="services-header">
        <h1>Specialized surgical and aesthetic care</h1>
        <p>Explore consultation areas designed around safety, discretion and individualized treatment planning.</p>
      </div>
      
      <div class="services-grid">
        <mat-card class="service-card">
          <mat-card-header>
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
      <div class="services-cta">
        <h2>Not sure which service fits?</h2>
        <p>A consultation helps clarify suitability, safety, recovery expectations and the right next step.</p>
        <button mat-raised-button color="accent" routerLink="/book-now">Request Consultation</button>
      </div>
    </div>
  `,
  styles: [`
    .services-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: clamp(24px, 5vw, 40px) 20px;
    }
    .services-header {
      text-align: center;
      margin-bottom: clamp(36px, 7vw, 60px);
      padding: clamp(30px, 6vw, 40px) 20px;
      background: linear-gradient(135deg, #003366 0%, #001a33 100%);
      border-radius: 8px;
      color: white;
    }
    .services-header h1 {
      color: #fff;
      font-size: clamp(30px, 6vw, 40px);
      margin-bottom: 10px;
      line-height: 1.1;
    }
    .services-header p {
      color: rgba(255, 255, 255, 0.86);
      font-size: clamp(15px, 3vw, 18px);
    }
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
      gap: clamp(18px, 4vw, 30px);
      margin-top: clamp(24px, 5vw, 40px);
      min-width: 0;
    }
    .service-card {
      background: white;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s, box-shadow 0.3s;
      border-left: 4px solid #d4af37;
      min-width: 0;
    }
    .service-card mat-card-header {
      align-items: flex-start;
      padding-bottom: 8px;
      min-width: 0;
    }
    .service-card mat-card-header div {
      min-width: 0;
    }
    .service-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }
    .service-card h3 {
      color: #003366;
      font-size: clamp(18px, 4vw, 20px);
      margin: 0;
      line-height: 1.25;
      overflow-wrap: anywhere;
    }
    .service-tag {
      display: inline-block;
      color: #7a6a30;
      font-size: 12px;
      font-weight: 700;
      margin-bottom: 5px;
      text-transform: uppercase;
    }
    .service-card ul {
      list-style: none;
      padding: 0;
      margin: 15px 0;
    }
    .service-card li {
      padding: 5px 0;
      color: #666;
      overflow-wrap: anywhere;
    }
    .service-card li:before {
      content: "→ ";
      color: #d4af37;
      font-weight: bold;
    }
    .services-cta {
      margin-top: clamp(30px, 6vw, 54px);
      padding: clamp(26px, 5vw, 36px);
      background: #f7f2ec;
      border-radius: 8px;
      text-align: center;
      min-width: 0;
    }
    .services-cta h2 {
      color: #003366;
      font-size: clamp(24px, 4vw, 32px);
      margin-bottom: 8px;
    }
    .services-cta p {
      color: #5d6670;
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
    @media (max-width: 640px) {
      .services-container {
        padding-left: 16px;
        padding-right: 16px;
      }
      .services-header {
        margin-bottom: 28px;
      }
      .service-card:hover {
        transform: none;
      }
      .services-cta button {
        width: 100%;
      }
    }
  `]
})
export class ServicesComponent { }
