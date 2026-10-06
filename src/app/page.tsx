import Link from "next/link";
import Icon from "../components/Icon";
import { Button, Badge, Title } from "../components/ui";

// This is the pure CSS illustration Figma Make built!
function DashboardArt() {
  return (
    <div className="hero-art">
      <div className="art-top">
        <span><i></i><i></i><i></i></span>
        <Badge tone="success">HQ ONLINE</Badge>
      </div>
      <div className="art-title">
        <span className="mini-mark">J</span>
        <div><small>SAMADHAAN HQ</small><strong>Support Console</strong></div>
        <Badge tone="dark">LIVE</Badge>
      </div>
      <div className="art-grid">
        <div className="art-stats"><small>OPEN CASES</small><b>42</b><span>+4 aaj</span></div>
        <div className="art-chart">
          <div><small>DEPARTMENT ACTIVITY</small><b>Normal-ish</b></div>
          <span className="bars"><i></i><i></i><i></i><i></i><i></i><i></i></span>
        </div>
      </div>
      <div className="case-list">
        <div>
          <span className="case-icon"><Icon name="file" /></span>
          <p><b>Hostel Situation</b><small>Case #J-042</small></p>
          <Badge tone="warning">REVIEWING</Badge>
        </div>
        <div>
          <span className="case-icon orange"><Icon name="search" /></span>
          <p><b>Unnecessary Investigation</b><small>Case #J-041</small></p>
          <Badge tone="accent">ACTIVE</Badge>
        </div>
      </div>
      <div className="tea-float">
        <Icon name="tea" />
        <span>Tea dept.<b>Operational</b></span>
      </div>
    </div>
  );
}

const services = [
  { icon: "wallet" as const, title: "Arthik Sahayata", text: "Paise ki problem? Hum aapki problem ko samjhenge. Fund department ko abhi inform kiya gaya hai.", label: "Funds: Under Investigation" },
  { icon: "chair" as const, title: "Sharirik Suvidha", text: "Paani, chair aur basic moral support. Luxury package abhi available nahi hai.", label: "Basic Package" },
  { icon: "brain" as const, title: "Mansik Support", text: "Aap boliye. Hum sunenge. Solution milega ya nahi, woh situation par depend karta hai.", label: "Listening Department" },
  { icon: "search" as const, title: "Investigation Department", text: "Situation ko unnecessarily serious tareeke se investigate kiya jayega.", label: "Investigation: Active" },
];

export default function Page() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero section">
        <div className="hero-copy">
          <Badge tone="accent"><span className="pulse"></span> SAMADHAAN HQ • STUDENT SUPPORT</Badge>
          <Title as="h1">KOI SAMASYA HAI?<br /><span>FORM BHARO.</span></Title>
          <p className="lead">Agar school life mein koi situation aapko disturb kar rahi hai, humein batao. Baaki hum dekh lenge.</p>
          <div className="button-row">
            <Link href="/submit">
              <Button icon="arrow">Samasya Batayein</Button>
            </Link>
            <Link href="/about">
              <Button variant="secondary">Samadhaan Ke Baare Mein</Button>
            </Link>
          </div>
          <p className="fineprint"><Icon name="info" size={15} /> Result ki guarantee nahi hai. Response ki koshish zaroor hai.</p>
        </div>
        <DashboardArt />
      </section>

      {/* Notice Section */}
      <section className="notice-wrap section">
        <div className="notice-card">
          <div className="notice-side"><span>!</span><strong>IMPORTANT<br />SUCHNA</strong><small>NOTICE NO. 07/24</small></div>
          <div className="notice-body">
            <Title as="h2">Sabhi students ko suchit kiya jaata hai.</Title>
            <p>Agar aapko koi samasya hai to form bharein.</p>
            <p>Hum aapko <b>arthik, sharirik aur mansik sahayata</b> dene ka poora prayas karenge.</p>
            <p className="notice-foot">*Arthik sahayata ki vartaman sthiti: department dekh raha hai.</p>
          </div>
          <div className="stamp">APPROVED<span>SAMADHAAN HQ</span></div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="section section-block">
        <div className="section-heading">
          <div><span className="eyebrow">OUR DEPARTMENTS</span><Title>Hum kya karte hain?</Title></div>
          <p>Officially kaafi kuch.<br />Practically dekhte hain.</p>
        </div>
        <div className="service-grid">
          {services.map((service, i) => (
            <article className="service-card" key={service.title}>
              <div className="service-top">
                <span className="service-icon"><Icon name={service.icon} size={24} /></span>
                <span className="card-number">0{i + 1}</span>
              </div>
              <Title as="h3">{service.title}</Title>
              <p>{service.text}</p>
              <Badge tone={i === 3 ? "success" : "neutral"}><span className="status-dot"></span>{service.label}</Badge>
            </article>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="section section-block">
          <span className="eyebrow">STANDARD OPERATING PROCEDURE</span>
          <Title>Process bahut simple hai.</Title>
          <div className="timeline">
            {[
              ["01", "Form Bharo", "Apni problem clearly batao."], 
              ["02", "Hum Padhenge", "Samadhaan department case ko dekhega."],
              ["03", "Action Hoga", "Ya kam se kam action lene ki planning hogi."]
            ].map(([n, t, d], i) => (
              <div className="step" key={n}>
                <div className="step-marker"><span>{n}</span>{i < 2 && <i />}</div>
                <Title as="h3">{t}</Title>
                <p>{d}</p>
              </div>
            ))}
          </div>
          <div className="team-section">
            <span className="eyebrow">SAMADHAAN TEAM</span>
            <Title as="h3">Team jo aapki samasya dekhegi.</Title>
            <div className="team-grid">
              {[
                ["Mukhya Manager", "Vairaat Koli"],
                ["Head Manager", "Siddharth Watti"],
                ["Paise Ka Manager", "Deepak Netam"],
                ["Sharirik Suvidha Manager", "Ansh Dwivedi"],
                ["Aarthik Suvidha Manager", "Roshan Mistry"],
                ["Mansik Suvidha Manager", "Geetesh Yadav"],
                ["Data Sambhalne Wala", "Sameer Chandel"],
                ["Dekhne Wala", "Kunal Yadav"]
              ].map(([role, name]) => (
                <div className="team-member" key={role}>
                  <span>{role}</span>
                  <strong>{name}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section section-block stats-section">
        <div className="stats-intro">
          <span className="eyebrow">TOTALLY VERIFIED DATA*</span>
          <Title>Numbers jo kaafi<br />official lagte hain.</Title>
          <p>*Demo data hai. Calculator ko unnecessarily involve nahi kiya gaya.</p>
        </div>
        <div className="stats-grid">
          {[
            ["127+", "Problems Received"], 
            ["89%", "Actually Read"], 
            ["42", "Under Investigation"], 
            ["∞", "Tea Consumed"]
          ].map(([n, l]) => (
            <div className="stat-card" key={l}>
              <strong>{n}</strong><span>{l}</span><small>SAMPLE DATA</small>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="section final-cta">
        <div>
          <Badge tone="dark">SAMADHAAN SUPPORT DESK</Badge>
          <Title>Problem chhoti ho ya badi…<br /><span>…form bharne mein kya ja raha hai?</span></Title>
          <Link href="/submit">
            <Button icon="arrow">Problem Submit Karo</Button>
          </Link>
          <p><Icon name="info" size={16} /> Please real emergencies ke liye trusted adult ya school authority se contact karein.</p>
        </div>
      </section>
    </main>
  );
}