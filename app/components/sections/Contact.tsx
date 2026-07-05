"use client";
import SectionLabel from "../ui/SectionLabel";
import { SITE } from "@/lib/data";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const TEAM = [
  {
    name: "Manjeet Yadav",
    role: "Co-founder",
    experience: "MSc biotechnology, Experience 4yrs in Agri innovation",
    expertise: "Finace, Founder",
    phone: "+91 8168368079",
    email: "info@tcagro.com",
    initials: "MY",
    img:"/images/manjeet.jpeg"
  },
  {
    name: "Ankush Yadav",
    role: "Co-founder & Chief Agronomist",
    experience: "15+ years in field agronomy",
    expertise: "Organic farming, soil health, crop planning",
    phone: "+91 8168368079",
    email: "info@tcagro.com",
    initials: "AY",
    img:"/images/ankush.jpeg"
  },
  {
    name: "Sunidhi Chauhan",
    role: "Chief Operating Officer",
    experience: "MBA from IIT Bombay, 1 year Experience in Product Management",
    expertise: "Operations Management",
    phone: "+91 XXXXX XXXXX",
    email: "nursery@tcagro.com",
    initials: "SC",
    // img:"/images/sunidhi.png"
  },
  {
    name: "Rahul Pal",
    role: "Cheif Technical Officer",
    experience: "Chemical Engineer Student at IIT Bombay, 2+ years in tech and logistics",
    expertise: "Tech , Logistics ,farm leasing",
    phone: "+91 XXXXX XXXXX",
    email: "info@tcagro.com",
    initials: "RP",
    img:"/images/rahul_pal.jpeg"
  },
  {
    name: "Rajnish Raj",
    role: "Freelancer Agronomist",
    experience: "2.5 yrs experience",
    expertise: "Bsc Agriculture graduate, currently working with Pi industry MNC in India",
    phone: "+91 XXXXX XXXXX",
    email: "testing@tcagro.com",
    initials: "RR",
    img:"/images/rajneesh_raj.jpeg"
  },
  {
    name: "Rahul Saini",
    role: "farm manager, meerut",
    experience: "2+ years experience",
    expertise: "Soil testing, chemical residue, crop diagnostics",
    phone: "+91 8306278730",
    email: "rahulsaini3104@gmail.com",
    initials: "RS",
    img:"/images/rahul_saini.jpeg"
  },
  {
    name: "Sunil Saini",
    role: "farm manager, karnal ",
    experience: "B.Com , 1 year agaate anzix farm as a business developer Coagri ventures pvt ltd 1 year ",
    expertise: "Soil testing, Crop management, Crop Planing",
    // phone: "+91 8306278730",
    email: "sunil@tcagro.com",
    initials: "SS",
    img:"/images/sunil_saini.jpeg"
  },
  {
    name: "Vijay kumar",
    role: "Head Procurement and Sales Output",
    experience: "26 + year",
    expertise: "Sales team",
    phone: "+91 98135 66124",
    email: "vijaysinghyadav612@gmail.com",
    initials: "VK",
    img:"/images/vijay.jpeg"
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-wrap" style={{ background: "var(--beige-200)", paddingTop: "96px", paddingBottom: "96px" }}>
      <div className="inner">

        {/* Header */}
        <div className="text-center reveal" style={{ maxWidth: 520, margin: "0 auto 56px" }}>
          <SectionLabel text="Our Team" center />
          <h2 className="font-display" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.9rem)", color: "var(--green-800)", lineHeight: 1.15, marginBottom: "12px" }}>
            Meet the People Behind the Farm
          </h2>
          <p style={{ fontSize: "0.92rem", lineHeight: 1.7, color: "#5a5a5a" }}>
            Our team brings deep field experience, scientific knowledge, and
            genuine passion for helping farmers succeed.
          </p>
        </div>

        {/* Team cards */}
<div
  className={
    TEAM.length > 4
      ? "team-scroll-container reveal"
      : "grid-4 reveal"
  }
  style={{ marginBottom: "64px" }}
>
  {TEAM.map((member) => (
    <div
      key={member.email}
      className={TEAM.length > 4 ? "team-card-scroll" : ""}
      style={{
        background: "white",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "var(--shadow-sm)",
        transition: "transform 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "var(--shadow-md)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "var(--shadow-sm)";
      }}
    >
      {/* Photo */}
      <div
        style={{
          height: "180px",
          overflow: "hidden",
          background: "#f5f5f5",
        }}
      >
        {member.img ? (
          <img
            src={member.img}
            alt={member.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          <div
            className="img-ph"
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.1"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span>Photo</span>
          </div>
        )}
      </div>

      <div style={{ padding: "20px" }}>
        <h3
          className="font-display"
          style={{
            fontSize: "1.15rem",
            color: "var(--green-800)",
            marginBottom: "3px",
          }}
        >
          {member.name}
        </h3>

        <div
          style={{
            fontSize: "0.75rem",
            fontWeight: 700,
            color: "var(--earth-500)",
            textTransform: "uppercase",
            letterSpacing: "0.07em",
            marginBottom: "12px",
          }}
        >
          {member.role}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            marginBottom: "16px",
            paddingBottom: "16px",
            borderBottom: "1px solid var(--beige-300)",
          }}
        >
          <div
            style={{
              fontSize: "0.78rem",
              color: "#5a5a5a",
            }}
          >
            <span
              style={{
                fontWeight: 600,
                color: "var(--green-800)",
              }}
            >
              Experience:
            </span>{" "}
            {member.experience}
          </div>

          <div
            style={{
              fontSize: "0.78rem",
              color: "#5a5a5a",
            }}
          >
            <span
              style={{
                fontWeight: 600,
                color: "var(--green-800)",
              }}
            >
              Expertise:
            </span>{" "}
            {member.expertise}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <a
            href={`tel:${member.phone}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.8rem",
              color: "#3a3a3a",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--green-600)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#3a3a3a";
            }}
          >
            <Phone
              size={13}
              style={{
                color: "var(--green-600)",
                flexShrink: 0,
              }}
            />
            {member.phone}
          </a>

          <a
            href={`mailto:${member.email}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.8rem",
              color: "#3a3a3a",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--green-600)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#3a3a3a";
            }}
          >
            <Mail
              size={13}
              style={{
                color: "var(--green-600)",
                flexShrink: 0,
              }}
            />
            {member.email}
          </a>
        </div>
      </div>
    </div>
  ))}
</div>

        {/* Contact info strip */}
        <div className="reveal" style={{
          background: "var(--green-800)", borderRadius: "20px",
          padding: "clamp(28px,4vw,44px)",
          display: "grid", gap: "28px",
        }}
          >
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "28px", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--green-300)", marginBottom: "6px" }}>
                — Company Contact
              </div>
              <h3 className="font-display" style={{ fontSize: "clamp(1.2rem,2.5vw,1.8rem)", color: "white" }}>
                Tiera-Cielo Agro Private Limited
              </h3>
            </div>
            <a href="mailto:info@tcagro.com"
              style={{
                flexShrink: 0, display: "inline-flex", alignItems: "center", gap: "9px",
                background: "white", color: "var(--green-800)", borderRadius: "50px",
                padding: "12px 26px", fontSize: "0.875rem", fontWeight: 700, textDecoration: "none",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--green-100)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "white"; }}>
              <Mail size={15} /> info@tcagro.com
            </a>
          </div>

          <div style={{ display: "grid", gap: "16px" }} className="contact-info-grid">
            {[
              { Icon: MapPin, label: "Address", value: SITE.address },
              { Icon: Phone,  label: "Phone",   value: `${SITE.phone}  •  ${SITE.phoneAlt}` },
              { Icon: Mail,   label: "Email",   value: `${SITE.email}  |  ${SITE.emailConsult}` },
              { Icon: Clock,  label: "Hours",   value: SITE.hours },
            ].map(({ Icon, label, value }) => (
              <div key={label} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <div style={{ width: 38, height: 38, borderRadius: "10px", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "var(--green-300)" }}>
                  <Icon size={16} />
                </div>
                <div>
                  <div style={{ fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.45)", marginBottom: "3px" }}>{label}</div>
                  <p style={{ fontSize: "0.84rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div
  style={{
    width: "100%",
    height: "250px",
    borderRadius: "12px",
    overflow: "hidden",
  }}
>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210.30912488607402!2d76.65127571580996!3d28.20654676051195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d45c17c3a1fa1%3A0x4e4f0142c0716c87!2sShiv%20nagar%20part%202!5e1!3m2!1sen!2sin!4v1783186871860!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
    title="Location Map"
  />
</div>
        </div>
      </div>
<style>{`
  .contact-info-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Horizontal team scroll */
  .team-scroll-container {
    display: flex;
    gap: 24px;
    overflow-x: auto;
    padding-bottom: 12px;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }

  .team-scroll-container::-webkit-scrollbar {
    height: 8px;
  }

  .team-scroll-container::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,0.2);
    border-radius: 999px;
  }

  .team-card-scroll {
    min-width: 320px;
    max-width: 320px;
    flex-shrink: 0;
    scroll-snap-align: start;
  }

  @media (max-width: 768px) {
    .team-card-scroll {
      min-width: 280px;
      max-width: 280px;
    }
  }

  @media (max-width: 640px) {
    .contact-info-grid {
      grid-template-columns: 1fr;
    }

    .team-card-scroll {
      min-width: 260px;
      max-width: 260px;
    }
  }
`}</style>
    </section>
  );
}
