import React from 'react';
import { Link } from 'react-router-dom';
import { icons, navLinks } from '../../data';
import { Icon } from '../ui/Icon';

export function Footer() {
  return (
    <footer style={{
      background: 'var(--footer-bg)',
      borderTop: '1px solid var(--color-border-soft)',
      padding: '48px clamp(20px,5vw,80px) 32px',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24, marginBottom: 36 }}>
          <div>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 22,
              background: 'linear-gradient(135deg, #2563EB, #0F766E)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: 8,
            }}>
              Muhammad Irfan
            </div>
            <p style={{ fontSize: 13, color: 'var(--color-text-muted)', fontFamily: "'Inter', sans-serif" }}>
              HSE / Safety Officer
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {[
              { icon: icons.mail, label: 'Email', href: 'mailto:mirfankhan1819@gmail.com' },
              { icon: icons.phone, label: 'Phone', href: 'tel:+971506605194' },
              { icon: icons.whatsapp, label: 'WhatsApp', href: 'https://wa.me/971506605194' },
            ].map(s => (
              <a key={s.label} href={s.href} target={s.label !== 'Email' ? "_blank" : undefined} rel="noopener noreferrer" style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: 'var(--color-border-softer)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-muted)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                textDecoration: 'none',
              }}
                onMouseEnter={e => { const el = e.currentTarget; el.style.color = '#2563EB'; el.style.borderColor = 'rgba(37,99,235,0.3)' }}
                onMouseLeave={e => { const el = e.currentTarget; el.style.color = 'var(--color-text-muted)'; el.style.borderColor = 'var(--color-border)' }}
              >
                <Icon d={s.icon} size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Nav links */}
        <div style={{ display: 'flex', gap: 24, marginBottom: 32, flexWrap: 'wrap' }}>
          {navLinks.map(link => (
            <Link key={link.id} to={link.id === 'home' ? '/' : `/${link.id}`} style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: 13,
              color: 'var(--color-text-muted)',
              fontFamily: "'Inter', sans-serif",
              transition: 'color 0.2s ease',
              padding: 0,
              textDecoration: 'none',
            }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div style={{ height: 1, background: 'var(--color-border-softer)', marginBottom: 24 }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12, color: 'var(--color-text-muted-2)', fontFamily: "'Inter', sans-serif" }}>
            © 2026 Muhammad Irfan. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: 'var(--color-text-muted-2)', fontFamily: "'Space Grotesk', sans-serif" }}>
            NEBOSH · IOSH · OSHA · ISO 45001
          </p>
        </div>
      </div>
    </footer>
  )
}