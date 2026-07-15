"use client";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useLanguage } from "@/lib/i18n";
import { TEAM, VENTURES, PARTNERS } from "@/lib/team";

export default function AboutPage() {
  const { t } = useLanguage();

  const steps = [
    { icon: "🤝", title: t("about_step1_title"), desc: t("about_step1_desc") },
    { icon: "👩‍🌾", title: t("about_step2_title"), desc: t("about_step2_desc") },
    { icon: "🌾", title: t("about_step3_title"), desc: t("about_step3_desc") },
    { icon: "💚", title: t("about_step4_title"), desc: t("about_step4_desc") },
  ];

  const whyPoints = [t("about_why_1"), t("about_why_2"), t("about_why_3"), t("about_why_4")];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="section-wrap section-y" style={{ paddingBottom: 20 }}>
          <div className="inner text-center" style={{ maxWidth: 680, margin: "0 auto" }}>
            <span className="eyebrow">🌱 About Us</span>
            <h1 className="section-title" style={{ fontSize: "clamp(2rem, 4.5vw, 2.8rem)" }}>
              {t("about_hero_title")}
            </h1>
            <p className="section-sub" style={{ marginBottom: 0 }}>{t("about_hero_sub")}</p>
          </div>
        </section>

        {/* How we work — process story */}
        <section className="section-wrap section-y">
          <div className="inner" style={{ maxWidth: 760 }}>
            <div className="timeline-vine">
              {steps.map((s, i) => (
                <div className="timeline-node" key={i}>
                  <div className="blob-card how-step-card">
                    <div className="how-step-icon">{s.icon}</div>
                    <div>
                      <h3 style={{ fontSize: "1.15rem", marginBottom: 6 }}>{s.title}</h3>
                      <p style={{ color: "var(--ink-soft)" }}>{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why this model works */}
        <section className="section-wrap section-y section-alt">
          <div className="inner">
            <h2 className="text-center section-title">{t("about_why_title")}</h2>
            <div className="why-grid">
              {whyPoints.map((p, i) => (
                <div className="blob-card why-card" key={i}>
                  <span className="why-check">✓</span>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ventures */}
        <section className="section-wrap section-y">
          <div className="inner">
            <h2 className="text-center section-title">{t("ventures_title")}</h2>
            <p className="text-center section-sub">{t("ventures_sub")}</p>
            <div className="venture-grid">
              {VENTURES.map((v) => (
                <div className="blob-card venture-card" key={v.name}>
                  <img src={v.logo} alt={v.name} className="venture-logo" />
                  <div className="product-card-body">
                    <span className="blob-badge blob-badge-growing">{v.type}</span>
                    <h4 style={{ marginTop: 8 }}>{v.name}</h4>
                    <p style={{ color: "var(--ink-soft)", fontSize: "0.92rem", margin: "6px 0" }}>{v.desc}</p>
                    <p style={{ fontSize: "0.8rem", color: "var(--rust-600)", fontWeight: 600 }}>{v.since}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="section-wrap section-y section-alt">
          <div className="inner">
            <h2 className="text-center section-title">{t("partners_title")}</h2>
            <p className="text-center section-sub">{t("partners_sub")}</p>
            <div className="venture-grid">
              {PARTNERS.map((p) => {
                const Card = (
                  <div className="blob-card venture-card">
                    <img src={p.logo} alt={p.name} className="venture-logo" />
                    <div className="product-card-body">
                      <span className="blob-badge">{p.type}</span>
                      <h4 style={{ marginTop: 8 }}>{p.name}</h4>
                      <p style={{ color: "var(--ink-soft)", fontSize: "0.92rem", margin: "6px 0" }}>{p.desc}</p>
                      <p style={{ fontSize: "0.8rem", color: "var(--rust-600)", fontWeight: 600 }}>{p.since}</p>
                    </div>
                  </div>
                );
                return p.url ? (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" key={p.name}>
                    {Card}
                  </a>
                ) : (
                  <div key={p.name}>{Card}</div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-wrap section-y">
          <div className="inner">
            <h2 className="text-center section-title">{t("team_title")}</h2>
            <p className="text-center section-sub">{t("team_sub")}</p>
            <div className="team-grid">
              {TEAM.map((m) => (
                <div className="blob-card team-card" key={m.name}>
                  <img src={m.img} alt={m.name} className="team-photo" />
                  <div className="product-card-body">
                    <h4>{m.name}</h4>
                    <p className="team-role">{m.role}</p>
                    <p className="team-detail"><strong>{t("team_experience")}:</strong> {m.experience}</p>
                    <p className="team-detail"><strong>{t("team_expertise")}:</strong> {m.expertise}</p>
                    {m.phone && (
                      <a href={`tel:${m.phone}`} className="team-phone">📞 {m.phone}</a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
