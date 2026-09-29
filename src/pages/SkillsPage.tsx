import React, { useState, useEffect, useRef } from "react";
import { icons, projects, skills, timeline, navLinks, additionalSkills } from "../data";
import { Icon } from "../components/ui/Icon";
import { GlowOrb } from "../components/ui/GlowOrb";
import { SectionLabel } from "../components/ui/SectionLabel";
import { SkillBar } from "../components/ui/SkillBar";

export default function SkillsPage() {
  const skillTabs = Object.keys(skills);

  const experience: {
    role: string;
    org: string;
    period: string;
    desc?: string;
    bullets?: string[];
    tags: string[];
    color: string;
  }[] = [
    {
      role: "HSE Officer",
      org: "L&T – Al Wathba Project, Abu Dhabi",
      period: "June 2026 – Present",
      bullets: [
        "Ensure compliance with UAE & Abu Dhabi HSE/OSH standards.",
        "Conduct site inspections, TBTs, safety inductions, and plant & machinery inspections.",
        "Monitor PPE, PTW, RA/MS, equipment and site safety.",
        "Identify defects/unsafe conditions and follow up corrective actions.",
        "Report incidents/near misses and promote safe work practices.",
      ],
      tags: ["Site Inspections", "PTW", "Plant & Machinery Inspection"],
      color: "#2563EB",
    },
    {
      role: "HSE Officer",
      org: "Masdar Hybrid Project 1",
      period: "Jul 2025 – Jun 2026",
      bullets: [
        "Supported implementation of the ISO 45001:2018 OH&S management system on site.",
        "Delivered occupational health and safety awareness training to workers.",
        "Conducted daily site inspections to identify hazards and unsafe practices.",
        "Ensured welfare facilities were available and in good condition.",
        "Assisted in incident reporting and investigation; ran toolbox talks and safety briefings.",
        "Maintained safety logs and checklists for high-risk activities.",
      ],
      tags: ["ISO 45001:2018", "OH&S Awareness Training", "Site Inspections", "Toolbox Talks"],
      color: "#0F766E",
    },
    {
      role: "Safety Officer",
      org: "Zahir & Brothers — KPCIP Lot-4, Peshawar",
      period: "Apr 2023 – Aug 2024",
      desc: "Risk assessment and hazard identification before work starts, monitored compliance with safety policies and SOPs, conducted regular inspections and audits, and trained workers on safety awareness and emergency procedures.",
      tags: ["Risk Assessment", "Audits", "Worker Training"],
      color: "#B45309",
    },
  ];

  return (
    <div
      className="mesh-bg"
      style={{
        minHeight: "100vh",
        paddingTop: 68,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <GlowOrb x="20%" y="20%" color="#2563EB" size={400} opacity={0.07} />
      <GlowOrb x="85%" y="65%" color="#0F766E" size={350} opacity={0.06} />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "clamp(48px,7vw,88px) clamp(20px,5vw,80px) 80px",
        }}
      >
        <SectionLabel>Skills</SectionLabel>
        <h2
          className="section-heading"
          style={{
            fontSize: "clamp(28px,4vw,48px)",
            color: "var(--color-text)",
            marginBottom: 16,
          }}
        >
          Skills & <span className="gradient-text">Experience</span>
        </h2>
        <p
          style={{
            fontSize: 15,
            color: "var(--color-text-muted-2)",
            lineHeight: 1.7,
            maxWidth: 500,
            marginBottom: 56,
          }}
        >
          A skill set built through certified training and hands-on
          application across live construction sites in the UAE and
          Pakistan.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
            marginBottom: 24,
          }}
        >
          {skillTabs.map((tab) => (
            <div
              key={tab}
              className="glass"
              style={{ borderRadius: 20, padding: "32px 28px" }}
            >
              <h4
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#93BBFD",
                  marginBottom: 20,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {tab}
              </h4>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {skills[tab as keyof typeof skills].map((s, i) => (
                  <SkillBar
                    key={s.name}
                    name={s.name}
                    level={s.level}
                    delay={i * 50}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & certifications */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
            marginBottom: 56,
          }}
        >
          <div
            className="glass"
            style={{ borderRadius: 20, padding: "32px 28px" }}
          >
            <h3
              className="section-heading"
              style={{ fontSize: 18, color: "var(--color-text)", marginBottom: 24 }}
            >
              Core Tools &amp; Standards
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {[
                "Abu Dhabi HSE/OSH Standards – Currently Working",
                "ISO 45001 – Occupational Health & Safety Management System Awareness Training Completed",
              ].map((t) => (
                <span
                  key={t}
                  style={{
                    padding: "8px 14px",
                    background: "var(--color-border-softer)",
                    border: "1px solid var(--color-border)",
                    borderRadius: 8,
                    fontSize: 12,
                    fontWeight: 500,
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: "var(--color-text-muted)",
                    transition: "all 0.2s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "rgba(37,99,235,0.4)";
                    el.style.color = "#93BBFD";
                    el.style.background = "rgba(37,99,235,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "var(--color-border)";
                    el.style.color = "var(--color-text-muted)";
                    el.style.background = "var(--color-border-softer)";
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div
            className="glass"
            style={{ borderRadius: 20, padding: "32px 28px" }}
          >
            <h3
              className="section-heading"
              style={{ fontSize: 18, color: "var(--color-text)", marginBottom: 24 }}
            >
              Additional Skills
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {additionalSkills.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div
            className="glass"
            style={{ borderRadius: 20, padding: "32px 28px" }}
          >
            <h3
              className="section-heading"
              style={{ fontSize: 18, color: "var(--color-text)", marginBottom: 24 }}
            >
              Key Focus Areas
            </h3>
            {[
              { label: "Hazard Identification", pct: 92 },
              { label: "Site Inspection Accuracy", pct: 95 },
              { label: "Documentation & Reporting", pct: 88 },
              { label: "Emergency Preparedness", pct: 85 },
            ].map((item, i) => (
              <SkillBar
                key={item.label}
                name={item.label}
                level={item.pct}
                delay={i * 150}
              />
            ))}
          </div>
        </div>

        {/* Experience */}
        <SectionLabel>Experience</SectionLabel>
        <h3
          className="section-heading"
          style={{
            fontSize: "clamp(22px,3vw,30px)",
            color: "var(--color-text)",
            marginBottom: 36,
          }}
        >
          Project Experience
        </h3>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            marginBottom: 56,
          }}
        >
          {experience.map((exp, i) => (
            <div
              key={i}
              className="glass glass-hover"
              style={{
                borderRadius: 18,
                padding: "28px 32px",
                cursor: "default",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 12,
                  marginBottom: 14,
                }}
              >
                <div>
                  <h4
                    className="section-heading"
                    style={{ fontSize: 17, color: "var(--color-text)", marginBottom: 6 }}
                  >
                    {exp.role}
                  </h4>
                  <span
                    style={{
                      fontSize: 13,
                      color: exp.color,
                      fontWeight: 600,
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    {exp.org}
                  </span>
                </div>
                <span
                  style={{
                    padding: "5px 14px",
                    background: `${exp.color}15`,
                    border: `1px solid ${exp.color}30`,
                    borderRadius: 9999,
                    fontSize: 12,
                    fontWeight: 600,
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: exp.color,
                  }}
                >
                  {exp.period}
                </span>
              </div>
              {exp.desc && (
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--color-text-muted-2)",
                    lineHeight: 1.7,
                    marginBottom: 16,
                  }}
                >
                  {exp.desc}
                </p>
              )}
              {exp.bullets && (
                <ul
                  style={{
                    margin: "0 0 16px",
                    paddingLeft: 20,
                    fontSize: 14,
                    color: "var(--color-text-muted-2)",
                    lineHeight: 1.7,
                  }}
                >
                  {exp.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {exp.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Download CTA */}
        <div
          style={{
            borderRadius: 24,
            padding: "clamp(36px,5vw,56px)",
            background:
              "linear-gradient(135deg, rgba(37,99,235,0.15), rgba(124,58,237,0.15))",
            border: "1px solid rgba(37,99,235,0.25)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(37,99,235,0.08), transparent 70%)",
            }}
          />
          <div style={{ position: "relative" }}>
            <h3
              className="section-heading"
              style={{
                fontSize: "clamp(22px,3vw,32px)",
                color: "var(--color-text)",
                marginBottom: 14,
              }}
            >
              Ready to strengthen your site's safety?
            </h3>
            <p
              style={{
                fontSize: 15,
                color: "var(--color-text-muted)",
                marginBottom: 32,
                maxWidth: 480,
                margin: "0 auto 32px",
              }}
            >
              Download my full resume to see my complete experience,
              certifications, and site safety track record.
            </p>
            <a
              href="/Resume/Muhammad-Irfan-HSE-Safety-Officer-CV.pdf"
              download="Muhammad-Irfan-HSE-Safety-Officer-CV.pdf"
              className="btn-primary"
              style={{
                fontSize: 15,
                padding: "14px 36px",
                display: "inline-flex",
                textDecoration: "none",
                color: "#fff",
              }}
            >
              <Icon d={icons.download} size={18} />
              Download Full Resume (PDF)
            </a>
          </div>
        </div>
      </div>

      <style>{`@media(max-width:1024px){.resume-grid{grid-template-columns:1fr !important;}}`}</style>
    </div>
  );
}
