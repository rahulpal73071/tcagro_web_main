"use client";

import SectionLabel from "../ui/SectionLabel";
import { 
  MapPin, 
  FlaskConical, 
  LineChart, 
  Stethoscope, 
  Mail, 
  Sprout, 
  RefreshCw, 
  ShieldCheck, 
  CheckCircle2 
} from "lucide-react";

const BENEFITS = [
  { Icon: MapPin,        title: "Farm Visit Included",    desc: "We come to your farm for on-site assessment. You don't have to travel anywhere." },
  { Icon: FlaskConical,  title: "Tailored Input Plans",   desc: "Custom organic fertilizer and bio-pesticide schedules built specifically for your crop." },
  { Icon: LineChart,     title: "Yield Optimization",     desc: "Transition without the dreaded yield drop through our science-backed transition methods." },
  { Icon: Stethoscope,   title: "Ongoing Field Support",  desc: "An agronomist monitors your field's progress and adapts the plan as the seasons change." },
];

const ORGANIC_FLOW = [
  { 
    step: "01", 
    title: "Soil Detox & Biomass Setup", 
    desc: "We analyze your soil's chemical residue and introduce targeted microbial inoculants and green manure crops to jumpstart natural biological activity.",
    Icon: Sprout,
    tag: "Months 1 - 3"
  },
  { 
    step: "02", 
    title: "Biological Pest & Nutrient Routing", 
    desc: "Replacing synthetic urea and pesticides with custom-brewed Jeevamrutham, neem-based repellents, and pheromone traps tailored to your pest pressure.",
    Icon: RefreshCw,
    tag: "Months 4 - 12"
  },
  { 
    step: "03", 
    title: "Yield Stabilization & Certification", 
    desc: "Your ecosystem achieves self-sustaining balance. We assist with third-party organic audit paperwork to help you secure premium market pricing.",
    Icon: ShieldCheck,
    tag: "Year 2+"
  },
];

export default function Consultation() {
  return (
    <section id="consultation" className="section-wrap bg-white" style={{ paddingTop: "96px", paddingBottom: "96px" }}>
      <div className="inner">

        {/* Two-column layout */}
        <div className="consult-grid">

          {/* ── Left: Info & Organic Flowchart ── */}
          <div className="reveal">
            <SectionLabel text="Expert Advisory" />
            <h2 
              className="font-display leading-tight mb-4"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.9rem)", color: "var(--green-800)" }}
            >
              Talk to an Agronomist —{" "}
              <span style={{ display: "block" }}>We Visit Your Farm</span>
            </h2>
            <div className="section-line" />
            <p style={{ fontSize: "0.92rem", lineHeight: 1.7, color: "#5a5a5a", marginBottom: "28px" }}>
              Our agronomy team has hands-on experience transitioning hundreds of farms 
              across different crops and soil types. Whether you are dealing with degraded soil, 
              rising chemical costs, or want to shift to high-value organic farming — we give honest, 
              science-based guidance that works in the field.
            </p>

            {/* Benefits Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "48px" }} className="benefits-subgrid">
              {BENEFITS.map(({ Icon, title, desc }) => (
                <div 
                  key={title}
                  className="benefit-card"
                  style={{ 
                    display: "flex", 
                    flexDirection: "column", 
                    gap: "10px", 
                    padding: "16px", 
                    borderRadius: "14px", 
                    background: "var(--beige-200)",
                    border: "1px solid transparent",
                    transition: "all 0.3s ease" 
                  }}
                >
                  <div style={{
                    width: 38, height: 38, borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--green-800)", background: "var(--green-200)", transition: "all 0.3s"
                  }} className="benefit-icon">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--green-800)", marginBottom: "4px" }}>{title}</h4>
                    <p style={{ fontSize: "0.76rem", lineHeight: 1.5, color: "#6a6a6a" }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Cool Organic Farming Flowchart ── */}
            <div style={{ marginBottom: "40px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
                <div>
                  <span style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--green-600)" }}>
                    The Roadmap
                  </span>
                  <h3 className="font-display" style={{ fontSize: "1.4rem", color: "var(--green-800)", margin: 0 }}>
                    Organic Transition Flow
                  </h3>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", background: "var(--green-100)", padding: "6px 12px", borderRadius: "50px" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green-600)" }} />
                  <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--green-800)" }}>Chemical to Certified</span>
                </div>
              </div>

              {/* Flowchart Timeline */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", position: "relative" }}>
                {ORGANIC_FLOW.map((flow, i) => {
                  const FlowIcon = flow.Icon;
                  return (
                    <div 
                      key={flow.step} 
                      className="flow-card"
                      style={{ 
                        display: "flex", 
                        gap: "18px", 
                        alignItems: "flex-start", 
                        padding: "20px", 
                        borderRadius: "16px",
                        background: "white",
                        border: "1px solid var(--beige-300)",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                        position: "relative",
                        overflow: "hidden",
                        transition: "transform 0.3s, box-shadow 0.3s"
                      }}
                    >
                      {/* Step Number Watermark */}
                      <span style={{
                        position: "absolute", right: "14px", bottom: "-10px",
                        fontSize: "4rem", fontWeight: 900, color: "var(--beige-200)",
                        lineHeight: 1, zIndex: 0, pointerEvents: "none"
                      }}>
                        {flow.step}
                      </span>

                      {/* Icon Indicator */}
                      <div style={{
                        width: 46, height: 46, borderRadius: "12px",
                        background: "var(--green-800)", color: "white",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0, zIndex: 1, boxShadow: "0 4px 12px rgba(26,61,43,0.15)"
                      }}>
                        <FlowIcon size={20} />
                      </div>

                      {/* Content */}
                      <div style={{ zIndex: 1, flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                          <span style={{ 
                            fontSize: "0.68rem", fontWeight: 700, padding: "2px 8px", 
                            borderRadius: "6px", background: "var(--beige-200)", color: "var(--earth-700)" 
                          }}>
                            {flow.tag}
                          </span>
                          <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--green-800)", margin: 0 }}>
                            {flow.title}
                          </h4>
                        </div>
                        <p style={{ fontSize: "0.8rem", lineHeight: 1.6, color: "#5a5a5a", margin: 0, maxWidth: "90%" }}>
                          {flow.desc}
                        </p>
                      </div>

                      {/* Connecting Line between cards */}
                      {i < ORGANIC_FLOW.length - 1 && (
                        <div style={{
                          position: "absolute", bottom: "-16px", left: "42px",
                          width: "2px", height: "16px", background: "var(--green-400)",
                          zIndex: 2
                        }} />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <a 
              href="mailto:info@tcagro.com"
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                background: "var(--green-800)", color: "white",
                borderRadius: "50px", padding: "14px 32px",
                fontSize: "0.875rem", fontWeight: 700, textDecoration: "none",
                transition: "all 0.3s", boxShadow: "0 4px 14px rgba(26,61,43,0.2)"
              }}
              onMouseEnter={(e) => { 
                (e.currentTarget as HTMLElement).style.background = "var(--green-600)"; 
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; 
              }}
              onMouseLeave={(e) => { 
                (e.currentTarget as HTMLElement).style.background = "var(--green-800)"; 
                (e.currentTarget as HTMLElement).style.transform = ""; 
              }}
            >
              <Mail size={16} />
              Book a Farm Visit — info@tcagro.com
            </a>
          </div>

          {/* ── Right: Upgraded Contact Card ── */}
          <div className="reveal reveal-d2">
            <div style={{
              background: "linear-gradient(145deg, var(--green-800) 0%, #12281c 100%)", 
              borderRadius: "24px", 
              padding: "clamp(28px,4vw,44px)",
              color: "white", 
              height: "100%", 
              display: "flex", 
              flexDirection: "column",
              boxShadow: "0 20px 40px rgba(26,61,43,0.15)",
              border: "1px solid rgba(255,255,255,0.08)",
              position: "relative",
              overflow: "hidden"
            }}>
              
              {/* Subtle decorative glow */}
              <div style={{
                position: "absolute", top: "-50px", right: "-50px", width: "150px", height: "150px",
                background: "radial-gradient(circle, rgba(74,168,110,0.2) 0%, rgba(0,0,0,0) 70%)",
                borderRadius: "50%", pointerEvents: "none"
              }} />

              <div style={{ marginBottom: "32px", position: "relative", zIndex: 1 }}>
                <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--green-300)", marginBottom: "12px" }}>
                  — Get in Touch Directly
                </div>
                <h3 className="font-display" style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "white", lineHeight: 1.2, marginBottom: "14px" }}>
                  Ready to Transform Your Farm?
                </h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "rgba(255,255,255,0.75)" }}>
                  Whether you have a quick question about disease management, want to transition to organic, 
                  order nursery plants, or explore long-term consulting — our team is ready to help.
                </p>
              </div>

              {/* 2x2 Contact Options Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "32px", position: "relative", zIndex: 1 }} className="contact-subgrid">
                {[
                  { label: "General Enquiries", value: "info@tcagro.com", href: "mailto:info@tcagro.com" },
                  { label: "Consultation Requests", value: "consult@tcagro.com", href: "mailto:consult@tcagro.com" },
                  { label: "Nursery Orders", value: "nursery@tcagro.com", href: "mailto:nursery@tcagro.com" },
                  { label: "Urgent Field Support", value: "+91 98765 43210", href: "tel:+919876543210" },
                ].map((item) => (
                  <div 
                    key={item.label} 
                    className="contact-box"
                    style={{ 
                      background: "rgba(255,255,255,0.05)", 
                      borderRadius: "14px", 
                      padding: "14px 16px",
                      border: "1px solid rgba(255,255,255,0.05)",
                      transition: "all 0.3s"
                    }}
                  >
                    <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "4px" }}>
                      {item.label}
                    </div>
                    <a href={item.href} style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--green-300)", textDecoration: "none", display: "block", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {item.value}
                    </a>
                  </div>
                ))}
              </div>

              {/* What to include checklist */}
              <div style={{ background: "rgba(0,0,0,0.2)", borderRadius: "16px", padding: "20px", border: "1px solid rgba(255,255,255,0.05)", position: "relative", zIndex: 1 }}>
                <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "white", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <CheckCircle2 size={16} className="text-green-400" />
                  What to include in your inquiry:
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }} className="checklist-subgrid">
                  {["Name & phone number", "Village / district / state", "Crop type & acreage", "Specific problem faced"].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--green-400)", flexShrink: 0 }} />
                      <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.65)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: "auto", paddingTop: "32px", position: "relative", zIndex: 1 }}>
                <a 
                  href="mailto:info@tcagro.com"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                    background: "white", color: "var(--green-800)", borderRadius: "50px",
                    padding: "16px 28px", fontWeight: 700, fontSize: "0.875rem", textDecoration: "none",
                    transition: "all 0.3s", boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
                  }}
                  onMouseEnter={(e) => { 
                    (e.currentTarget as HTMLElement).style.background = "var(--green-100)"; 
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => { 
                    (e.currentTarget as HTMLElement).style.background = "white"; 
                    (e.currentTarget as HTMLElement).style.transform = "";
                  }}
                >
                  <Mail size={16} /> Email Us Your Query Now
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
            grid-template-columns: 11fr 10fr;
            gap: 64px;
            align-items: start;
          }
        }
        @media (max-width: 640px) {
          .benefits-subgrid, .contact-subgrid, .checklist-subgrid {
            grid-template-columns: 1fr !important;
          }
        }
        
        /* Cool Hover Animations */
        .benefit-card:hover {
          background: white !important;
          border-color: var(--green-400) !important;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          transform: translateY(-2px);
        }
        .benefit-card:hover .benefit-icon {
          background: var(--green-800) !important;
          color: white !important;
        }
        .flow-card:hover {
          border-color: var(--green-600) !important;
          transform: translateX(6px);
          box-shadow: 0 8px 24px rgba(26,61,43,0.08) !important;
        }
        .contact-box:hover {
          background: rgba(255,255,255,0.1) !important;
          border-color: rgba(255,255,255,0.2) !important;
        }
      `}</style>
    </section>
  );
}