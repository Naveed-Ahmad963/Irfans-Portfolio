import React, { useState } from 'react';
import { icons, projects } from '../data';
import { Icon } from '../components/ui/Icon';
import { GlowOrb } from '../components/ui/GlowOrb';
import { SectionLabel } from '../components/ui/SectionLabel';

export default function ProjectsPage() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="mesh-bg" style={{ minHeight: '100vh', paddingTop: 68, position: 'relative', overflow: 'hidden' }}>
      <GlowOrb x="90%" y="30%" color="#0F766E" size={400} opacity={0.06} />
      <GlowOrb x="10%" y="60%" color="#2563EB" size={350} opacity={0.06} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(48px,7vw,88px) clamp(20px,5vw,80px) 80px' }}>
        <SectionLabel>Certifications</SectionLabel>
        <h2 className="section-heading" style={{ fontSize: 'clamp(28px,4vw,48px)', color: 'var(--color-text)', marginBottom: 16 }}>
          Certifications &amp; <span className="gradient-text">credentials</span>
        </h2>
        <p style={{ fontSize: 15, color: 'var(--color-text-muted-2)', lineHeight: 1.7, maxWidth: 560, marginBottom: 12 }}>
          Internationally recognised HSE qualifications and training, built up across construction and industrial safety work in the UAE and Pakistan.
        </p>
        <p style={{ fontSize: 12.5, color: 'var(--color-text-muted-2)', marginBottom: 56, opacity: 0.75 }}>
          Certificate numbers and verification codes are withheld here — available on request or for direct employer verification.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2,1fr)',
          gap: 24,
        }} className="projects-grid">
          {projects.map((proj, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="glass"
              style={{
                borderRadius: 20,
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                transform: hovered === i ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow: hovered === i ? `0 20px 48px ${proj.color}20` : '0 4px 16px rgba(0,0,0,0.12)',
                borderColor: hovered === i ? `${proj.color}55` : undefined,
              }}
            >
              {/* Header band */}
              <div style={{
                position: 'relative',
                padding: '28px 28px 24px',
                background: `linear-gradient(135deg, ${proj.color}22, transparent)`,
                borderBottom: `1px solid ${proj.color}30`,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: `${proj.color}20`,
                    border: `1px solid ${proj.color}45`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: proj.color,
                  }}>
                    <Icon d={icons.shield} size={24} />
                  </div>
                  <span style={{
                    padding: '5px 14px',
                    background: 'var(--color-border-softer)',
                    border: `1px solid ${proj.color}40`,
                    borderRadius: 9999,
                    fontSize: 11,
                    fontWeight: 700,
                    color: proj.color,
                    fontFamily: "'Space Grotesk', sans-serif",
                    letterSpacing: '0.05em',
                  }}>
                    {proj.category}
                  </span>
                </div>
                <h3 className="section-heading" style={{ fontSize: 19, color: 'var(--color-text)', marginBottom: 6, lineHeight: 1.25 }}>{proj.title}</h3>
                <p style={{ fontSize: 12.5, color: proj.color, fontWeight: 600, fontFamily: "'Space Grotesk', sans-serif" }}>
                  {proj.issuer}
                </p>
              </div>

              {/* Content */}
              <div style={{ padding: '22px 28px 28px' }}>
                <p style={{ fontSize: 13.5, color: 'var(--color-text-muted-2)', lineHeight: 1.7, marginBottom: 18 }}>{proj.description}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 22 }}>
                  {proj.tech.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                  <span style={{ fontSize: 12, color: 'var(--color-text-muted-2)', fontFamily: "'Space Grotesk', sans-serif" }}>
                    {proj.date}
                  </span>
                  <a href={proj.verify} target="_blank" rel="noopener noreferrer" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 7,
                    padding: '9px 16px',
                    background: `${proj.color}18`,
                    border: `1px solid ${proj.color}35`,
                    borderRadius: 10,
                    fontSize: 12.5,
                    fontWeight: 600,
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: proj.color,
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                    onMouseEnter={e => { const el = e.currentTarget; el.style.background = `${proj.color}28` }}
                    onMouseLeave={e => { const el = e.currentTarget; el.style.background = `${proj.color}18` }}
                  >
                    <Icon d={icons.external} size={14} />
                    Issuing Body
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`@media(max-width:1024px){.projects-grid{grid-template-columns:1fr !important;}}`}</style>
    </div>
  )
}
