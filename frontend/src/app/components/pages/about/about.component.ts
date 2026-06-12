import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="about-container">
      <div class="about-header">
        <h1>Dr. Ruth Njoroge, MD</h1>
        <p>MBChB(UoN), MMed PRAS(UoN)</p>
      </div>
      
      <div class="about-content">
        <div class="bio-section">
          <h2>Professional Background</h2>
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

        <div class="care-section">
          <h2>Consultation & Care Approach</h2>
          <p>
            Every patient begins with a private consultation focused on medical history, personal goals, realistic outcomes,
            safety considerations, and recovery planning. Treatment recommendations are tailored to the individual rather
            than presented as one-size-fits-all packages.
          </p>
          <p>
            The practice emphasizes clear communication before and after treatment, natural-looking outcomes, and surgical
            decision-making guided by function, proportion, confidence, and long-term wellbeing.
          </p>
        </div>
        
        <div class="philosophy-section">
          <h2>Surgical Philosophy</h2>
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
          <h2>Surgical Specialties</h2>
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
      max-width: 1200px;
      margin: 0 auto;
      padding: clamp(24px, 5vw, 40px) 20px;
    }
    .about-header {
      text-align: center;
      margin-bottom: clamp(36px, 7vw, 60px);
      padding: clamp(32px, 7vw, 50px) 24px;
      background: linear-gradient(135deg, #003366 0%, #001a33 100%);
      border-radius: 8px;
      color: white;
    }
    .about-header h1 {
      color: #d4af37;
      font-size: clamp(30px, 6vw, 42px);
      margin-bottom: 10px;
      line-height: 1.1;
    }
    .about-header p {
      color: #e0e0e0;
      font-size: clamp(15px, 3vw, 18px);
    }
    .about-content {
      line-height: 1.8;
      color: #333;
    }
    .bio-section, .care-section, .philosophy-section, .expertise-section {
      margin-bottom: clamp(38px, 7vw, 60px);
    }
    .bio-section h2, .care-section h2, .philosophy-section h2, .expertise-section h2 {
      color: #003366;
      font-size: clamp(23px, 4vw, 28px);
      margin-bottom: 20px;
      border-bottom: 3px solid #d4af37;
      padding-bottom: 10px;
      line-height: 1.2;
    }
    .bio-section p, .care-section p {
      font-size: 16px;
      color: #666;
      margin-bottom: 15px;
    }
    .philosophy-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
      gap: 20px;
      margin-top: 20px;
    }
    .philosophy-card {
      background: white;
      border-left: 4px solid #d4af37;
      box-shadow: 0 4px 12px rgba(0, 51, 102, 0.1);
      min-width: 0;
    }
    .philosophy-card h3 {
      color: #003366;
      margin-bottom: 10px;
      font-size: 16px;
      line-height: 1.25;
      overflow-wrap: anywhere;
    }
    .specialty-columns {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
      gap: 40px;
      margin-top: 20px;
    }
    .specialty-column h3 {
      color: #003366;
      font-size: 18px;
      margin-bottom: 15px;
      padding-bottom: 8px;
      border-bottom: 2px solid #d4af37;
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
      color: #666;
      font-size: 14px;
    }
    .expertise-list li:before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #d4af37;
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
      .specialty-columns {
        gap: 24px;
      }
      .expertise-list li {
        padding-left: 24px;
      }
    }
  `]
})
export class AboutComponent { }
