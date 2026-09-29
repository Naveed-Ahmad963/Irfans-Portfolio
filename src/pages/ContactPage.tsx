import React, { useState, useEffect, useRef } from "react";
import { icons, projects, skills, timeline, navLinks } from "../data";
import { Icon } from "../components/ui/Icon";
import { GlowOrb } from "../components/ui/GlowOrb";
import { SectionLabel } from "../components/ui/SectionLabel";
import { SkillBar } from "../components/ui/SkillBar";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const contactLinks = [
    {
      label: "Email",
      value: "mirfankhan1819@gmail.com",
      icon: icons.mail,
      color: "#2563EB",
      href: "mailto:mirfankhan1819@gmail.com",
    },
    {
      label: "Phone",
      value: "0506605194",
      icon: icons.phone,
      color: "#0F766E",
      href: "tel:+971506605194",
    },
    {
      label: "WhatsApp",
      value: "+971 50 660 5194",
      icon: icons.whatsapp,
      color: "#25D366",
      href: "https://wa.me/971506605194",
    },
    {
      label: "Location",
      value: "Abu Dhabi, UAE",
      icon: icons.pin,
      color: "#B45309",
      href: "https://www.google.com/maps/place/Abu+Dhabi",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/mirfankhan1819@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            subject: form.subject,
            message: form.message,
          }),
        },
      );
      if (response.ok) {
        setSent(true);
        setTimeout(() => setSent(false), 5000);
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message. Please try emailing directly.");
      }
    } catch (error) {
      alert("An error occurred. Please try emailing directly.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "13px 16px",
    background: "var(--color-border-softer)",
    border: "1px solid var(--color-border)",
    borderRadius: 10,
    fontSize: 14,
    color: "var(--color-text)",
    fontFamily: "'Inter', sans-serif",
    outline: "none",
    transition: "border-color 0.2s ease",
    boxSizing: "border-box",
  };

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
      <GlowOrb x="15%" y="25%" color="#0F766E" size={400} opacity={0.07} />
      <GlowOrb x="85%" y="70%" color="#2563EB" size={350} opacity={0.06} />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "clamp(48px,7vw,88px) clamp(20px,5vw,80px) 80px",
        }}
      >
        {sent && (
          <div
            style={{
              position: "fixed",
              top: 24,
              right: 24,
              zIndex: 110,
              padding: "16px 22px",
              borderRadius: 18,
              background: "rgba(34,197,94,0.96)",
              color: "#0F172A",
              boxShadow: "0 18px 44px rgba(15,23,42,0.24)",
              fontWeight: 700,
              letterSpacing: "0.01em",
              maxWidth: 300,
            }}
          >
            Message sent successfully.
          </div>
        )}
        <SectionLabel>Get In Touch</SectionLabel>
        <h2
          className="section-heading"
          style={{
            fontSize: "clamp(28px,4vw,48px)",
            color: "var(--color-text)",
            marginBottom: 16,
          }}
        >
          Let's talk
          <br />
          <span className="gradient-text">site safety</span>
        </h2>
        <p
          style={{
            fontSize: 15,
            color: "var(--color-text-muted-2)",
            lineHeight: 1.7,
            maxWidth: 480,
            marginBottom: 56,
          }}
        >
          Whether you have an HSE role to fill, a site that needs a safety
          audit, or just want to connect — my inbox is always open.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,0.9fr) minmax(0,1.1fr)",
            gap: "clamp(24px,4vw,48px)",
          }}
          className="contact-grid"
        >
          {/* Contact links */}
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
                marginBottom: 36,
              }}
            >
              {contactLinks.map((c, i) => (
                <a key={i} href={c.href} style={{ textDecoration: "none" }}>
                  <div
                    className="glass glass-hover"
                    style={{
                      borderRadius: 16,
                      padding: "20px 24px",
                      display: "flex",
                      alignItems: "center",
                      gap: 18,
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: 14,
                        background: `${c.color}15`,
                        border: `1px solid ${c.color}30`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: c.color,
                        flexShrink: 0,
                      }}
                    >
                      <Icon d={c.icon} size={20} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 12,
                          color: "var(--color-text-muted-2)",
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontWeight: 600,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          marginBottom: 4,
                        }}
                      >
                        {c.label}
                      </div>
                      <div
                        style={{
                          fontSize: 14,
                          color: "var(--color-text-muted)",
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {c.value}
                      </div>
                    </div>
                    <Icon
                      d={icons.external}
                      size={16}
                      className=""
                      style={
                        {
                          marginLeft: "auto",
                          color: "var(--color-text-muted-2)",
                        } as React.CSSProperties
                      }
                    />
                  </div>
                </a>
              ))}
            </div>

            {/* Availability banner */}
            <div
              style={{
                borderRadius: 16,
                padding: "24px",
                background:
                  "linear-gradient(135deg, rgba(37,99,235,0.12), rgba(124,58,237,0.12))",
                border: "1px solid rgba(37,99,235,0.2)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 12,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#22D3EE",
                    boxShadow: "0 0 8px #22D3EE",
                    animation: "pulse 2s infinite",
                  }}
                />
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#22D3EE",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  Currently Available
                </span>
              </div>
              <p style={{ fontSize: 13, color: "var(--color-text-muted-2)", lineHeight: 1.6 }}>
                Open to full-time HSE Professional roles and site safety
                consulting across the UAE and Pakistan.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div
            className="glass"
            style={{ borderRadius: 20, padding: "clamp(24px,4vw,40px)" }}
          >
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: "rgba(34,197,94,0.12)",
                    border: "2px solid rgba(34,197,94,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    color: "#22C55E",
                  }}
                >
                  <Icon d={icons.check} size={28} />
                </div>
                <h3
                  className="section-heading"
                  style={{ fontSize: 22, color: "var(--color-text)", marginBottom: 10 }}
                >
                  Message sent successfully!
                </h3>
                <p style={{ fontSize: 14, color: "var(--color-text-muted-2)" }}>
                  Thanks for reaching out. I will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3
                  className="section-heading"
                  style={{ fontSize: 20, color: "var(--color-text)", marginBottom: 28 }}
                >
                  Send a message
                </h3>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 14,
                    marginBottom: 14,
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: 12,
                        fontWeight: 600,
                        color: "var(--color-text-muted-2)",
                        fontFamily: "'Space Grotesk', sans-serif",
                        marginBottom: 8,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      required
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor =
                          "rgba(37,99,235,0.5)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor =
                          "var(--color-border)")
                      }
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: 12,
                        fontWeight: 600,
                        color: "var(--color-text-muted-2)",
                        fontFamily: "'Space Grotesk', sans-serif",
                        marginBottom: 8,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      required
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor =
                          "rgba(37,99,235,0.5)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor =
                          "var(--color-border)")
                      }
                    />
                  </div>
                </div>

                <div style={{ marginBottom: 14 }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: 12,
                      fontWeight: 600,
                      color: "var(--color-text-muted-2)",
                      fontFamily: "'Space Grotesk', sans-serif",
                      marginBottom: 8,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="_subject"
                    placeholder="What is this about?"
                    value={form.subject}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, subject: e.target.value }))
                    }
                    required
                    style={inputStyle}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(37,99,235,0.5)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor =
                        "var(--color-border)")
                    }
                  />
                </div>

                <div style={{ marginBottom: 28 }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: 12,
                      fontWeight: 600,
                      color: "var(--color-text-muted-2)",
                      fontFamily: "'Space Grotesk', sans-serif",
                      marginBottom: 8,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell me about the role or site you need help with..."
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    required
                    rows={5}
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      minHeight: 120,
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(37,99,235,0.5)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor =
                        "var(--color-border)")
                    }
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    padding: "14px",
                    fontSize: 15,
                    opacity: loading ? 0.7 : 1,
                    cursor: loading ? "not-allowed" : "pointer",
                  }}
                >
                  <Icon d={icons.send} size={17} />
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`@media(max-width:1024px){.contact-grid{grid-template-columns:1fr !important;}}`}</style>
    </div>
  );
}
