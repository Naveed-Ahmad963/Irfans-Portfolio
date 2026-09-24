import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks, icons } from "../../data";
import { Icon } from "../ui/Icon";
import { useTheme } from "../../context/ThemeContext";

const sunPath =
  "M12 3v2 M12 19v2 M4.22 4.22l1.42 1.42 M18.36 18.36l1.42 1.42 M1 12h2 M21 12h2 M4.22 19.78l1.42-1.42 M18.36 5.64l1.42-1.42 M12 8a4 4 0 100 8 4 4 0 000-8z";
const moonPath = "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const currentPath = location.pathname;
  const active = currentPath === "/" ? "home" : currentPath.substring(1);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "all 0.3s ease",
          background: scrolled ? "var(--nav-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--color-border-soft)" : "none",
          padding: "0 clamp(20px, 5vw, 80px)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            height: 68,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              textDecoration: "none",
            }}
          >
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: 20,
                background: "linear-gradient(135deg, #2563EB, #0F766E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "-0.02em",
              }}
            >
              Muhammad Irfan
            </span>
          </Link>

          {/* Desktop links */}
          <div
            style={{ display: "flex", alignItems: "center", gap: 4 }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id === "home" ? "/" : `/${link.id}`}
                className={`nav-link ${active === link.id ? "active" : ""}`}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px 16px",
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: active === link.id ? "var(--color-text)" : "var(--color-text-muted)",
                  transition: "color 0.2s ease",
                  letterSpacing: "0.01em",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              style={{ marginLeft: 8 }}
              aria-label="Toggle theme"
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              <Icon d={theme === "dark" ? sunPath : moonPath} size={17} />
            </button>
            <a
              href="/Resume/Muhammad-Irfan-HSE-Safety-Officer-CV.pdf"
              download="Muhammad-Irfan-HSE-Safety-Officer-CV.pdf"
              className="btn-primary"
              style={{
                marginLeft: 12,
                padding: "9px 20px",
                fontSize: 13,
                textDecoration: "none",
              }}
            >
              <Icon d={icons.download} size={15} />
              Download CV
            </a>
          </div>

          {/* Mobile: theme toggle + menu button */}
          <div className="show-mobile" style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              <Icon d={theme === "dark" ? sunPath : moonPath} size={16} />
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--color-text)",
                padding: 8,
              }}
            >
              <div
                style={{
                  transition: "transform 0.3s ease",
                  transform: menuOpen ? "rotate(90deg)" : "rotate(0deg)",
                  display: "flex",
                }}
              >
                <Icon d={menuOpen ? icons.x : icons.menu} size={22} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 68,
            right: 0,
            bottom: 0,
            width: 260,
            background: "var(--nav-bg-solid)",
            backdropFilter: "blur(20px)",
            borderLeft: "1px solid var(--color-border-soft)",
            padding: "24px",
            boxShadow: "-20px 0 60px rgba(0,0,0,0.6)",
            animation: "slideLeft 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            zIndex: 99,
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id === "home" ? "/" : `/${link.id}`}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                width: "100%",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "16px 0",
                fontSize: 16,
                fontWeight: 500,
                fontFamily: "'Space Grotesk', sans-serif",
                color: active === link.id ? "#2563EB" : "var(--color-text-muted)",
                textAlign: "left",
                borderBottom: "1px solid var(--color-border-softer)",
                transition: "color 0.2s ease, padding-left 0.2s ease",
                textDecoration: "none",
              }}
            >
              <Icon d={link.icon} size={18} />
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
