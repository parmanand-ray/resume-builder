import React from "react";

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "#0f2515",
        color: "#a7c9a0",
      }}
    >
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=DM+Sans:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: -80,
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 300,
          background:
            "radial-gradient(ellipse, rgba(99,153,34,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Top CTA Bar */}
      <div
        className="relative z-10 flex flex-wrap items-center justify-between gap-6 px-12 py-9"
        style={{ borderBottom: "0.5px solid rgba(99,153,34,0.25)" }}
      >
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div
            className="flex items-center justify-center rounded-xl"
            style={{
              width: 40,
              height: 40,
              background: "linear-gradient(135deg, #3B6D11, #639922)",
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline
                points="14 2 14 8 20 8"
                style={{
                  fill: "none",
                  stroke: "rgba(255,255,255,0.5)",
                  strokeWidth: 1.5,
                }}
              />
              <line
                x1="16"
                y1="13"
                x2="8"
                y2="13"
                style={{
                  fill: "none",
                  stroke: "rgba(255,255,255,0.7)",
                  strokeWidth: 1.5,
                }}
              />
              <line
                x1="16"
                y1="17"
                x2="8"
                y2="17"
                style={{
                  fill: "none",
                  stroke: "rgba(255,255,255,0.7)",
                  strokeWidth: 1.5,
                }}
              />
            </svg>
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 20,
                fontWeight: 600,
                color: "#e8f5e0",
                letterSpacing: "-0.3px",
              }}
            >
              ProResume AI
            </div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 500,
                color: "#639922",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                marginTop: -2,
              }}
            >
              Resume Builder
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <span style={{ fontSize: 13, color: "#7aaa68" }}>
            Start building for free — no credit card needed
          </span>
          <button
            style={{
              background: "#3B6D11",
              color: "#e0f0d0",
              border: "none",
              padding: "10px 22px",
              borderRadius: 100,
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              fontWeight: 500,
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#4d8c16")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#3B6D11")}
          >
            Build My Resume →
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div
        className="relative z-10 grid gap-12 px-12 py-11"
        style={{ gridTemplateColumns: "2fr 3fr" }}
      >
        {/* Left: Description + Stats */}
        <div>
          <p
            style={{
              fontSize: 13,
              lineHeight: 1.8,
              color: "#7aaa68",
              maxWidth: 260,
              marginTop: 4,
            }}
          >
            Build professional, ATS-optimized resumes in minutes. Powered by AI
            that understands what recruiters look for — so you land more
            interviews.
          </p>
          <div className="flex gap-5 mt-6">
            {[
              { num: "2M+", lbl: "Resumes built" },
              { num: "94%", lbl: "ATS pass rate" },
              { num: "50+", lbl: "Templates" },
            ].map(({ num, lbl }) => (
              <div
                key={lbl}
                className="flex flex-col"
                style={{
                  borderLeft: "2px solid rgba(99,153,34,0.4)",
                  paddingLeft: 12,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 22,
                    fontWeight: 600,
                    color: "#c6e0a4",
                  }}
                >
                  {num}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    color: "#5a8a4e",
                    textTransform: "uppercase",
                    letterSpacing: "0.8px",
                    marginTop: 1,
                  }}
                >
                  {lbl}
                </span>
              </div>
            ))}
          </div>
          <div
            className="inline-flex items-center gap-2 mt-5"
            style={{
              background: "rgba(59,109,17,0.2)",
              border: "0.5px solid rgba(99,153,34,0.3)",
              borderRadius: 100,
              padding: "5px 12px",
              fontSize: 11,
              color: "#97C459",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#639922",
                display: "inline-block",
                animation: "pulseGreen 2s ease infinite",
              }}
            />
            Trusted by professionals at Google, Apple &amp; Meta
          </div>
        </div>

        {/* Right: 3 Link Columns */}
        <div
          className="grid gap-8"
          style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
        >
          {[
            {
              title: "Product",
              links: [
                "Resume Builder",
                "Resume Templates",
                "ATS Checker",
                "Cover Letter",
                "Pricing",
              ],
            },
            {
              title: "Resources",
              links: ["Resume Examples", "Career Tips", "Blog", "Help Center"],
            },
            {
              title: "Company",
              links: [
                "About Us",
                "Careers",
                "Privacy Policy",
                "Terms & Conditions",
              ],
            },
          ].map(({ title, links }) => (
            <div key={title}>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "1.4px",
                  color: "#639922",
                  marginBottom: 16,
                }}
              >
                {title}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {links.map((link) => (
                  <li key={link} style={{ marginBottom: 11 }}>
                    <a
                      href="/"
                      className="group"
                      style={{
                        fontSize: 13.5,
                        color: "#7aaa68",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = "#c6e0a4";
                        e.currentTarget.querySelector(".dot").style.background =
                          "#97C459";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = "#7aaa68";
                        e.currentTarget.querySelector(".dot").style.background =
                          "#3B6D11";
                      }}
                    >
                      <span
                        className="dot"
                        style={{
                          width: 4,
                          height: 4,
                          borderRadius: "50%",
                          background: "#3B6D11",
                          flexShrink: 0,
                          transition: "background 0.15s",
                        }}
                      />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="relative z-10 flex flex-wrap items-center justify-between gap-4 px-12 py-5"
        style={{ borderTop: "0.5px solid rgba(99,153,34,0.2)" }}
      >
        <span style={{ fontSize: 12, color: "#4d7a42" }}>
          © {new Date().getFullYear()} ProResume AI. All rights reserved.
        </span>
        <div className="flex gap-2">
          {[
            {
              title: "Twitter",
              path: (
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              ),
            },
            {
              title: "LinkedIn",
              path: (
                <>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </>
              ),
            },
            {
              title: "Dribbble",
              path: (
                <>
                  <circle cx="12" cy="12" r="10" />
                  <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
                  <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
                  <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
                </>
              ),
            },
            {
              title: "YouTube",
              path: (
                <>
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </>
              ),
            },
          ].map(({ title, path }) => (
            <div
              key={title}
              title={title}
              style={{
                width: 34,
                height: 34,
                borderRadius: 8,
                border: "0.5px solid rgba(99,153,34,0.25)",
                background: "rgba(99,153,34,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "border-color 0.15s, background 0.15s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = "rgba(99,153,34,0.6)";
                e.currentTarget.style.background = "rgba(99,153,34,0.15)";
                e.currentTarget.querySelector("svg").style.stroke = "#c6e0a4";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "rgba(99,153,34,0.25)";
                e.currentTarget.style.background = "rgba(99,153,34,0.06)";
                e.currentTarget.querySelector("svg").style.stroke = "#7aaa68";
              }}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                style={{
                  stroke: "#7aaa68",
                  fill: "none",
                  strokeWidth: 1.8,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  transition: "stroke 0.15s",
                }}
              >
                {path}
              </svg>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulseGreen {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
