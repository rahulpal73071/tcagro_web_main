"use client";
import SectionLabel from "../ui/SectionLabel";
import { SOIL_STEPS } from "@/lib/data";
import { MapPin, FlaskConical, LineChart, Stethoscope, Mail } from "lucide-react";

const BENEFITS = [
  { Icon: MapPin,        title: "Farm Visit Included",    desc: "We come to your farm for sample collection. You don't have to travel anywhere." },
  { Icon: FlaskConical,  title: "Accredited Lab Testing", desc: "25+ parameters tested in a certified laboratory with accurate, reliable results." },
  { Icon: LineChart,     title: "Plain Language Report",  desc: "Your report is written in simple language — not just numbers and technical jargon." },
  { Icon: Stethoscope,   title: "Expert Follow-up",       desc: "An agronomist walks you through the report and answers all your questions." },
];

export default function Consultation() {
  return (
    <section id="consultation" className="section-wrap bg-white" style={{ paddingTop: "96px", paddingBottom: "96px" }}>
      <div className="inner">

        {/* Two-column layout */}
        <div className="consult-grid">

          {/* ── Left: Info column ── */}
          <div className="reveal">
            <SectionLabel text="Expert Advisory" />
            <h2 className="font-display leading-tight mb-4"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.9rem)", color: "var(--green-800)" }}>
              Talk to an Agronomist —{" "}
              <span style={{ display: "block" }}>We Visit Your Farm</span>
            </h2>
            <div className="section-line" />
            <p style={{ fontSize: "0.92rem", lineHeight: 1.7, color: "#5a5a5a", marginBottom: "28px" }}>
              Our agronomy team has hands-on experience with hundreds of farms
              across different crops and soil types. Whether it&apos;s a persistent disease problem,
              a yield plateau, or a new crop you want to try — we give honest, science-based
              guidance that actually works in the field.
            </p>

            {/* Benefits */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "36px" }}>
              {BENEFITS.map(({ Icon, title, desc }) => (
                <div key={title}
                  className="benefit-row"
                  style={{ display: "flex", alignItems: "flex-start", gap: "14px", padding: "14px 16px", borderRadius: "12px", transition: "background 0.25s" }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, color: "white",
                    background: "linear-gradient(135deg,var(--green-600),var(--green-400))",
                  }}>
                    <Icon size={17} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--green-800)", marginBottom: "3px" }}>{title}</h4>
                    <p style={{ fontSize: "0.78rem", lineHeight: 1.55, color: "#6a6a6a" }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Soil Testing Steps */}
            <h3 className="font-display" style={{ fontSize: "1.35rem", color: "var(--green-800)", marginBottom: "20px" }}>
              How Soil Testing Works
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "36px" }}>
              {SOIL_STEPS.map((step, i) => (
                <div key={step.step} style={{ display: "flex", gap: "18px", alignItems: "flex-start", position: "relative" }}>
                  {i < SOIL_STEPS.length - 1 && (
                    <div style={{
                      position: "absolute", left: "19px", top: "42px", width: "1px",
                      height: "calc(100% + 8px)",
                      background: "linear-gradient(to bottom, var(--green-400), transparent)",
                    }} />
                  )}
                  <div style={{
                    width: 40, height: 40, borderRadius: "50%", background: "var(--green-800)",
                    color: "white", display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.85rem", fontWeight: 700, flexShrink: 0, zIndex: 1,
                  }}>
                    {step.step}
                  </div>
                  <div>
                    <h4 style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--green-800)", marginBottom: "4px" }}>{step.title}</h4>
                    <p style={{ fontSize: "0.82rem", lineHeight: 1.6, color: "#5a5a5a" }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="mailto:info@tcagro.com"
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                background: "var(--green-800)", color: "white",
                borderRadius: "50px", padding: "13px 28px",
                fontSize: "0.875rem", fontWeight: 600, textDecoration: "none",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--green-600)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--green-800)"; (e.currentTarget as HTMLElement).style.transform = ""; }}>
              <Mail size={16} />
              Book a Soil Test — info@tcagro.com
            </a>
          </div>

          {/* ── Right: Contact card ── */}
          <div className="reveal reveal-d2">
            <div style={{
              background: "var(--green-800)", borderRadius: "20px", padding: "clamp(28px,4vw,44px)",
              color: "white", height: "100%", display: "flex", flexDirection: "column",
            }}>
              <div style={{ marginBottom: "32px" }}>
                <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--green-300)", marginBottom: "12px" }}>
                  — Get in Touch Directly
                </div>
                <h3 className="font-display" style={{ fontSize: "clamp(1.5rem,3vw,2.1rem)", color: "white", lineHeight: 1.2, marginBottom: "14px" }}>
                  Reach Out for Any Agricultural Query
                </h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "rgba(255,255,255,0.7)" }}>
                  Whether you have a quick question about a crop problem, want to book a
                  soil test, order nursery plants, or explore a long-term consulting engagement —
                  our team is responsive and ready to help.
                </p>
              </div>

              {/* Contact options */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
                {[
                  { label: "General Enquiries", value: "info@tcagro.com", href: "mailto:info@tcagro.com" },
                  { label: "Consultation Requests", value: "consult@tcagro.com", href: "mailto:consult@tcagro.com" },
                  { label: "Nursery Orders", value: "nursery@tcagro.com", href: "mailto:nursery@tcagro.com" },
                ].map((item) => (
                  <div key={item.label} style={{ background: "rgba(255,255,255,0.07)", borderRadius: "12px", padding: "16px 18px" }}>
                    <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "5px" }}>
                      {item.label}
                    </div>
                    <a href={item.href} style={{ fontSize: "0.92rem", fontWeight: 600, color: "var(--green-300)", textDecoration: "none" }}>
                      {item.value}
                    </a>
                  </div>
                ))}
              </div>

              {/* What to include */}
              <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: "12px", padding: "20px" }}>
                <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "rgba(255,255,255,0.8)", marginBottom: "10px" }}>
                  When emailing, include:
                </div>
                {["Your name and phone number", "Village / district / state", "Crop type or farm size", "What help you are looking for"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "7px" }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--green-400)", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.65)" }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "auto", paddingTop: "28px" }}>
                <a href="mailto:info@tcagro.com"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                    background: "white", color: "var(--green-800)", borderRadius: "50px",
                    padding: "14px 28px", fontWeight: 700, fontSize: "0.875rem", textDecoration: "none",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--green-100)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "white"; }}>
                  <Mail size={16} /> Email Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .consult-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
        }
        @media (min-width: 1024px) {
          .consult-grid {
            grid-template-columns: 1fr 1fr;
            gap: 64px;
            align-items: start;
          }
        }
        .benefit-row:hover { background: var(--beige-200) !important; }
      `}</style>
    </section>
  );
}
