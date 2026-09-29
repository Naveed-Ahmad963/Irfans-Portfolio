import React, { useState, useEffect, useRef } from "react";
import { icons, projects, skills, timeline, navLinks } from "../data";
import { Icon } from "../components/ui/Icon";
import { GlowOrb } from "../components/ui/GlowOrb";
import { SectionLabel } from "../components/ui/SectionLabel";
import { SkillBar } from "../components/ui/SkillBar";

export default function AboutPage() {
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
      <GlowOrb x="80%" y="15%" color="#0F766E" size={400} opacity={0.07} />
      <GlowOrb x="15%" y="70%" color="#2563EB" size={350} opacity={0.06} />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "clamp(48px,7vw,88px) clamp(20px,5vw,80px) 80px",
        }}
      >
        <SectionLabel>About Me</SectionLabel>
        <h2
          className="section-heading"
          style={{
            fontSize: "clamp(28px,4vw,48px)",
            color: "var(--color-text)",
            marginBottom: 16,
            lineHeight: 1.1,
          }}
        >
          Committed to safer
          <br />
          <span className="gradient-text">construction sites</span>
        </h2>
        <p
          style={{
            fontSize: 16,
            color: "var(--color-text-muted-2)",
            lineHeight: 1.8,
            maxWidth: 600,
            marginBottom: 56,
          }}
        >
          HSE Professional with 3+ years of hands-on experience across
          earthworks construction and OHTL projects in the UAE and building
          projects in Pakistan. Skilled in site inspections, hazard control,
          and ensuring full HSE compliance across high-risk construction
          activities.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1.2fr) minmax(0,0.8fr)",
            gap: "clamp(28px,4vw,48px)",
            marginBottom: 64,
          }}
          className="about-grid"
        >
          {/* Who I am */}
          <div
            className="glass"
            style={{ borderRadius: 20, padding: "36px 32px" }}
          >
            <h3
              className="section-heading"
              style={{ fontSize: 20, color: "var(--color-text)", marginBottom: 20 }}
            >
              Who I Am
            </h3>
            {[
              {
                label: "Background",
                value:
                  "Diploma-qualified HSE professional with 3+ years' experience across earthworks construction and OHTL projects in the UAE and building projects in Pakistan.",
              },
              {
                label: "Focus",
                value:
                  "Specializes in hazard identification, risk assessment (HIRA/JSA), and full HSE compliance across high-risk excavation and earthworks activities.",
              },
              {
                label: "Approach",
                value:
                  "Believes safety is proactive, not reactive — combining daily site inspections with clear toolbox talks and thorough documentation.",
              },
              {
                label: "Growth Mindset",
                value:
                  "Continuously building on NEBOSH, IOSH, OSHA and ISO 45001 foundations through ongoing certifications and safety-academy training.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{ display: "flex", gap: 14, marginBottom: 20 }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg,#2563EB,#0F766E)",
                    marginTop: 8,
                    flexShrink: 0,
                  }}
                />
                <div>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#2563EB",
                      fontFamily: "'Space Grotesk', sans-serif",
                      display: "block",
                      marginBottom: 4,
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{ fontSize: 14, color: "var(--color-text-muted)", lineHeight: 1.6 }}
                  >
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div>
            {/* Quick facts */}
            <div
              className="glass"
              style={{ borderRadius: 20, padding: "28px" }}
            >
              <h4
                className="section-heading"
                style={{ fontSize: 15, color: "var(--color-text)", marginBottom: 18 }}
              >
                Quick Facts
              </h4>
              {[
                { label: "Location", value: "Abu Dhabi, UAE" },
                { label: "Focus", value: "HSE Professional" },
                { label: "Current Role", value: "HSE Officer, L&T – Al Wathba" },
                { label: "Languages", value: "English, Urdu, Hindi, Arabic" },
              ].map((f, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 0",
                    borderBottom:
                      i < 3 ? "1px solid var(--color-border-softer)" : "none",
                  }}
                >
                  <span style={{ fontSize: 13, color: "var(--color-text-muted-2)" }}>
                    {f.label}
                  </span>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: "var(--color-text-muted)",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    {f.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <SectionLabel>Experience</SectionLabel>
        <h3
          className="section-heading"
          style={{
            fontSize: "clamp(22px,3vw,32px)",
            color: "var(--color-text)",
            marginBottom: 40,
          }}
        >
          The road so far
        </h3>

        <div style={{ position: "relative", paddingLeft: 32 }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: 15,
              top: 0,
              bottom: 0,
              width: 2,
              background: "linear-gradient(180deg, #0F766E, #2563EB, #0F766E)",
              opacity: 0.3,
            }}
          />

          {timeline.map((item, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                marginBottom: i < timeline.length - 1 ? 32 : 0,
              }}
            >
              {/* Dot */}
              <div
                style={{
                  position: "absolute",
                  left: -22,
                  top: 14,
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: item.color,
                  border: "2px solid var(--color-bg)",
                  boxShadow: `0 0 12px ${item.color}60`,
                }}
              />

              <div
                className="glass glass-hover"
                style={{
                  borderRadius: 16,
                  padding: "24px 28px",
                  cursor: "default",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    marginBottom: 10,
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      padding: "4px 14px",
                      borderRadius: 9999,
                      background: `${item.color}18`,
                      border: `1px solid ${item.color}35`,
                      fontSize: 12,
                      fontWeight: 700,
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: item.color,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {item.year}
                  </span>
                  <h4
                    className="section-heading"
                    style={{ fontSize: 16, color: "var(--color-text)" }}
                  >
                    {item.title}
                  </h4>
                </div>
                {item.org && (
                  <p style={{ fontSize: 13, fontWeight: 600, color: item.color, fontFamily: "'Space Grotesk', sans-serif", marginBottom: 8 }}>
                    {item.org}
                  </p>
                )}
                {item.desc && (
                  <p style={{ fontSize: 14, color: "var(--color-text-muted-2)", lineHeight: 1.7 }}>
                    {item.desc}
                  </p>
                )}
                {item.bullets && (
                  <ul style={{ margin: 0, paddingLeft: 20, fontSize: 14, color: "var(--color-text-muted-2)", lineHeight: 1.7 }}>
                    {item.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`@media(max-width:1024px){.about-grid{grid-template-columns:1fr !important;}}`}</style>
    </div>
  );
}
