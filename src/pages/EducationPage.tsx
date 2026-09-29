import React from "react";
import { Link } from "react-router-dom";
import { icons, education } from "../data";
import { Icon } from "../components/ui/Icon";
import { GlowOrb } from "../components/ui/GlowOrb";
import { SectionLabel } from "../components/ui/SectionLabel";

export default function EducationPage() {
  return (
    <div
      className="mesh-bg"
      style={{ minHeight: "100vh", paddingTop: 68, position: "relative", overflow: "hidden" }}
    >
      <GlowOrb x="85%" y="25%" color="#059669" size={400} opacity={0.07} />
      <GlowOrb x="12%" y="65%" color="#2563EB" size={350} opacity={0.06} />

      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "clamp(48px,7vw,88px) clamp(20px,5vw,80px) 80px",
        }}
      >
        <SectionLabel>Education</SectionLabel>
        <h2
          className="section-heading"
          style={{ fontSize: "clamp(28px,4vw,48px)", color: "var(--color-text)", marginBottom: 40 }}
        >
          Academic <span className="gradient-text">background</span>
        </h2>

        {education.map((ed) => (
          <div
            key={ed.title}
            className="glass gradient-border"
            style={{ borderRadius: 20, padding: "32px 28px", marginBottom: 24 }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: `linear-gradient(135deg,${ed.color},#2563EB)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon d={icons.star} size={22} />
              </div>
              <div>
                <h3
                  className="section-heading"
                  style={{ fontSize: 19, color: "var(--color-text)", marginBottom: 6 }}
                >
                  {ed.title}
                </h3>
                <p
                  style={{
                    fontSize: 13.5,
                    color: ed.color,
                    fontWeight: 600,
                    fontFamily: "'Space Grotesk', sans-serif",
                    marginBottom: 4,
                  }}
                >
                  {ed.institution}
                </p>
                <p style={{ fontSize: 13, color: "var(--color-text-muted-2)", marginBottom: 10 }}>
                  {ed.campus}
                </p>
                <p style={{ fontSize: 14, color: "var(--color-text-muted-2)", lineHeight: 1.7, marginBottom: 6 }}>
                  {ed.detail}
                </p>
                <p style={{ fontSize: 12, color: "var(--color-text-muted-2)", marginBottom: 14 }}>
                  {ed.date} · {ed.grade}
                </p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {ed.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        <Link
          to="/certifications"
          className="btn-primary"
          style={{ textDecoration: "none", marginTop: 12, display: "inline-flex" }}
        >
          <Icon d={icons.folder} size={16} />
          View Certifications
        </Link>
      </div>
    </div>
  );
}
