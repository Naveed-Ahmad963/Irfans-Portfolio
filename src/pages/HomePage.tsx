import React from "react";
import { Link } from "react-router-dom";
import { icons } from "../data";
import { Icon } from "../components/ui/Icon";
import { GlowOrb } from "../components/ui/GlowOrb";

export default function HomePage() {
  const certBadges = [
    { label: "NEBOSH", color: "#0F766E" },
    { label: "IOSH", color: "#2563EB" },
    { label: "OSHA", color: "#B45309" },
    { label: "ISO 45001", color: "#0F766E" },
    { label: "HIRA / JSA", color: "#DC2626" },
    { label: "PTW", color: "#0EA5E9" },
  ];

  const stats = [
    {
      value: "3+",
      label: "Years HSE Experience",
      icon: icons.shield,
      color: "#0F766E",
    },
    {
      value: "NEBOSH",
      label: "IGC Certified",
      icon: icons.star,
      color: "#0F766E",
    },
    {
      value: "UAE & PK",
      label: "Project Locations",
      icon: icons.globe,
      color: "#2563EB",
    },
    {
      value: "Earthworks & OHTL",
      label: "Construction Focus",
      icon: icons.hardhat,
      color: "#B45309",
    },
  ];

  const checklist = [
    { label: "Hazard Identification & Risk Assessment", done: true },
    { label: "Site Inspections & Audits", done: true },
    { label: "Incident Investigation & Reporting", done: true },
    { label: "Toolbox Talks & Safety Briefings", done: true },
    { label: "PPE & Emergency Response", done: true },
    { label: "Plant & Equipment Machinery Inspection at Site", done: true },
  ];

  return (
    <div
      className="mesh-bg grid-bg"
      style={{
        minHeight: "100vh",
        paddingTop: 68,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <GlowOrb x="10%" y="30%" color="#0F766E" size={500} opacity={0.08} />
      <GlowOrb x="85%" y="20%" color="#2563EB" size={400} opacity={0.07} />
      <GlowOrb x="50%" y="90%" color="#0F766E" size={350} opacity={0.05} />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "clamp(16px,3vw,32px) clamp(20px,5vw,80px) 80px",
        }}
      >
        {/* Hero */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
            gap: "clamp(40px, 6vw, 80px)",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left */}
          <div className="animate-slide-up">
            {/* Availability Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(15,118,110,0.1)",
                border: "1px solid rgba(15,118,110,0.3)",
                borderRadius: 9999,
                padding: "6px 16px",
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#2DD4BF",
                  boxShadow: "0 0 8px #2DD4BF",
                }}
              />
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#2DD4BF",
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: "0.05em",
                }}
              >
                Available for opportunities
              </span>
            </div>

            {/* Avatar and Name inline */}
            <div className="hero-title-group">
              <div
                style={{
                  position: "relative",
                  width: 130,
                  height: 130,
                  borderRadius: "50%",
                  padding: 4,
                  background: "linear-gradient(135deg, #0F766E, #2563EB)",
                  boxShadow: "0 10px 30px rgba(15,118,110,0.35)",
                  flexShrink: 0,
                }}
              >
                <img
                  src="/Irfan.jpg"
                  alt="Muhammad Irfan"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                    objectPosition: "top center",
                    background:
                      "radial-gradient(circle at center, #1E293B 0%, #0F172A 100%)",
                  }}
                />
              </div>

              <h1
                className="section-heading"
                style={{
                  fontSize: "clamp(36px,5vw,64px)",
                  lineHeight: 1.08,
                  color: "var(--color-text)",
                  margin: 0,
                }}
              >
                Muhammad
                <br />
                <span className="gradient-text">Irfan</span>
              </h1>
            </div>

            <p
              style={{
                fontSize: "clamp(14px,1.5vw,18px)",
                fontWeight: 500,
                color: "var(--color-text-muted)",
                fontFamily: "'Space Grotesk', sans-serif",
                marginBottom: 20,
                letterSpacing: "0.01em",
              }}
            >
              HSE Professional
              <br />
              <span style={{ color: "#0F766E" }}>
                Building Safer Sites, One Inspection at a Time
              </span>
            </p>

            <p
              style={{
                fontSize: 15,
                color: "var(--color-text-muted-2)",
                lineHeight: 1.7,
                maxWidth: 460,
                marginBottom: 36,
              }}
            >
              HSE professional with 3+ years of experience in earthworks
              construction and OHTL projects across the UAE and Pakistan — skilled in
              site inspections, hazard control, and HSE compliance on
              high-risk excavation and earthworks activities.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link
                to="/certifications"
                className="btn-primary"
                style={{ textDecoration: "none" }}
              >
                <Icon d={icons.folder} size={16} />
                View Certifications
              </Link>
              <Link
                to="/education"
                className="btn-primary"
                style={{
                  textDecoration: "none",
                  background: "rgba(5, 150, 105, 0.1)",
                  color: "#34D399",
                  border: "1px solid rgba(5, 150, 105, 0.25)",
                }}
              >
                <Icon d={icons.star} size={16} />
                Education
              </Link>
              <Link
                to="/skills"
                className="btn-primary"
                style={{
                  textDecoration: "none",
                  background: "rgba(37, 99, 235, 0.1)",
                  color: "#60A5FA",
                  border: "1px solid rgba(59, 130, 246, 0.2)",
                }}
              >
                <Icon d={icons.file} size={16} />
                View Skills
              </Link>
              <a
                href="/Resume/Muhammad-Irfan-HSE-Safety-Officer-CV.pdf"
                download="Muhammad-Irfan-HSE-Safety-Officer-CV.pdf"
                className="btn-secondary"
                style={{ textDecoration: "none" }}
              >
                <Icon d={icons.download} size={16} />
                Download Resume
              </a>
            </div>

            {/* Social */}
            <div style={{ display: "flex", gap: 14, marginTop: 36 }}>
              {[
                {
                  label: "Email",
                  icon: icons.mail,
                  href: "mailto:mirfankhan1819@gmail.com",
                },
                {
                  label: "Phone",
                  icon: icons.phone,
                  href: "tel:+971506605194",
                },
                {
                  label: "WhatsApp",
                  icon: icons.whatsapp,
                  href: "https://wa.me/971506605194",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.label === "WhatsApp" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "var(--color-border-softer)",
                    border: "1px solid var(--color-border-soft)",
                    color: "var(--color-text-muted)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "rgba(15,118,110,0.15)";
                    el.style.borderColor = "rgba(15,118,110,0.4)";
                    el.style.color = "var(--color-text)";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "var(--color-border-softer)";
                    el.style.borderColor = "var(--color-border-soft)";
                    el.style.color = "var(--color-text-muted)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  <Icon d={s.icon} size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Right – Safety Snapshot Visual */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "min(440px, calc(100% - 60px))",
              }}
            >
              {/* Main card */}
              <div
                className="animate-float glass"
                style={{
                  borderRadius: 20,
                  padding: 28,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 22,
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      background: "rgba(15,118,110,0.15)",
                      border: "1px solid rgba(15,118,110,0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#0F766E",
                    }}
                  >
                    <Icon d={icons.shield} size={18} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: "var(--color-text)",
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    >
                      Site Safety Snapshot
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "var(--color-text-muted-2)",
                      }}
                    >
                      Daily HSE checklist
                    </div>
                  </div>
                </div>

                {checklist.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 14,
                    }}
                  >
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 6,
                        background: "rgba(15,118,110,0.18)",
                        border: "1px solid rgba(15,118,110,0.45)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#0F766E",
                        flexShrink: 0,
                      }}
                    >
                      <Icon d={icons.check} size={12} />
                    </div>
                    <span
                      style={{
                        fontSize: 13,
                        color: "var(--color-text-muted)",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}

                <div
                  style={{
                    marginTop: 18,
                    paddingTop: 18,
                    borderTop: "1px solid var(--color-border-soft)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      color: "var(--color-text-muted-2)",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    Status
                  </span>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#2DD4BF",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    Site Clear ✓
                  </span>
                </div>
              </div>

              {/* Floating certification badges */}
              {certBadges.map((badge, i) => {
                const positions = [
                  { top: -16, right: 30 },
                  { top: 40, right: -30 },
                  { top: 120, right: -25 },
                  { bottom: 90, right: -30 },
                  { bottom: 10, right: 10 },
                  { top: 60, left: -35 },
                ];
                const pos = positions[i];
                return (
                  <div
                    key={badge.label}
                    style={{
                      position: "absolute",
                      ...pos,
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                      background: "var(--nav-bg-solid)",
                      backdropFilter: "blur(12px)",
                      border: `1px solid ${badge.color}30`,
                      borderRadius: 10,
                      padding: "7px 14px",
                      whiteSpace: "nowrap",
                      animation: `float ${3 + i * 0.4}s ease-in-out infinite`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  >
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: badge.color,
                        boxShadow: `0 0 8px ${badge.color}`,
                      }}
                    />
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: badge.color,
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    >
                      {badge.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 16,
            marginTop: "clamp(40px,6vw,72px)",
          }}
          className="stats-grid"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass glass-hover"
              style={{
                borderRadius: 16,
                padding: "24px 20px",
                textAlign: "center",
                cursor: "default",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: `${stat.color}18`,
                  border: `1px solid ${stat.color}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 14px",
                  color: stat.color,
                }}
              >
                <Icon d={stat.icon} size={20} />
              </div>
              <div
                style={{
                  fontSize: "clamp(20px,3vw,26px)",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: "-0.02em",
                  marginBottom: 6,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "var(--color-text-muted-2)",
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: 1.4,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
}
