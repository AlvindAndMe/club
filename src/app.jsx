import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Typed from "typed.js";

const RED = "#ec3750";
const CYAN = "#5bc0de";
const YELLOW = "#ffbc42";
const INK = "#0b0b12";

function Marquee() {
  const words = [
    "BUILD NIGHTS",
    "★",
    "HACKATHONS",
    "★",
    "OPEN SOURCE",
    "★",
    "GAME JAMS",
    "★",
    "HARDWARE",
    "★",
    "WORKSHOPS",
    "★",
  ];
  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        backgroundColor: RED,
        padding: "12px 0",
      }}
    >
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        style={{ display: "flex", whiteSpace: "nowrap", width: "max-content" }}
      >
        {[...words, ...words, ...words].map((w, i) => (
          <span
            key={i}
            style={{
              fontWeight: 800,
              fontSize: "1rem",
              letterSpacing: "0.06em",
              color: INK,
              padding: "0 18px",
            }}
          >
            {w}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function Navbar() {
  const links = [
    { label: "About", href: "#about" },
    { label: "What We Do", href: "#what-we-do" },
    { label: "Projects", href: "#projects" },
    { label: "Events", href: "#events" },
    { label: "Team", href: "#team" },
    { label: "Join", href: "#join" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 32px",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        backgroundColor: "rgba(11, 11, 18, 0.55)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <a href="https://hackclub.com/"><img src="https://assets.hackclub.com/flag-orpheus-top.svg" alt="Hack Club"/></a>
      <div style={{ display: "flex", gap: "26px", flexWrap: "wrap" }}>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "#fff",
              opacity: 0.78,
              transition: "opacity 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = 1;
              e.currentTarget.style.color = CYAN;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = 0.78;
              e.currentTarget.style.color = "#fff";
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}

function Hero() {
  const typedEl = useRef(null);
  const typedInstance = useRef(null);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    if (typedInstance.current) return;
    typedInstance.current = new Typed(typedEl.current, {
      strings: [
        "We build.",
        "We hack.",
        "We ship.",
        "We create.",
        "We are Hack Club.",
      ],
      typeSpeed: 55,
      backSpeed: 30,
      backDelay: 1400,
      loop: false,
      smartBackspace: true,
      showCursor: true,
      cursorChar: "_",
    });
    return () => {
      typedInstance.current?.destroy();
      typedInstance.current = null;
    };
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "140px 24px 80px",
        overflow: "hidden",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          inset: "-10% -10% -10% -10%",
          y: bgY,
          backgroundImage: `url(https://hackclub.com/assets/background.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -3,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -2,
          background:
            "linear-gradient(180deg, rgba(11,11,18,0.35) 0%, rgba(11,11,18,0.65) 55%, #0b0b12 100%)",
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          opacity: fade,
          background:
            "radial-gradient(circle at 15% 15%, rgba(236,55,80,0.22), transparent 45%), radial-gradient(circle at 85% 75%, rgba(91,192,222,0.18), transparent 45%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "7px 16px",
          borderRadius: "999px",
          border: `1px solid rgba(91,192,222,0.5)`,
          color: CYAN,
          fontSize: "0.78rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          marginBottom: "30px",
          backgroundColor: "rgba(91,192,222,0.06)",
        }}
      >
        <span
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: CYAN,
            display: "inline-block",
            boxShadow: `0 0 8px ${CYAN}`,
          }}
        />
        VENDELSÖMALMSSKOLANS HACK CLUB
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontSize: "clamp(2.6rem, 8vw, 6.2rem)",
          fontWeight: 800,
          lineHeight: 0.98,
          letterSpacing: "-0.04em",
          maxWidth: "1100px",
        }}
      >
        Code. Create.
        <br />
        <span style={{ color: RED }}>Hack Club.</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.24 }}
        style={{
          fontSize: "clamp(1.15rem, 2.6vw, 1.6rem)",
          fontWeight: 600,
          color: CYAN,
          marginTop: "26px",
          minHeight: "2.2rem",
          fontFamily: "monospace",
        }}
      >
        <span ref={typedEl} />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.36 }}
        style={{
          maxWidth: "600px",
          margin: "26px auto 0",
          fontSize: "1.05rem",
          opacity: 0.78,
          lineHeight: 1.65,
        }}
      >
        A student-run coding club at Vendelsömalmsskolan, building weird,
        wonderful, and useful things  together. No experience needed.
        Just curiosity.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.48 }}
        style={{
          display: "flex",
          gap: "14px",
          marginTop: "38px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <motion.a
          href="#join"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.97 }}
          style={{
            padding: "15px 30px",
            borderRadius: "8px",
            backgroundColor: RED,
            color: "#fff",
            fontWeight: 700,
            fontSize: "0.98rem",
            boxShadow: "0 10px 28px rgba(236,55,80,0.3)",
          }}
        >
          Join the Club
        </motion.a>
        <motion.a
          href="#what-we-do"
          whileHover={{ y: -3, borderColor: "rgba(255,255,255,0.5)" }}
          whileTap={{ scale: 0.97 }}
          style={{
            padding: "15px 30px",
            borderRadius: "8px",
            backgroundColor: "transparent",
            border: "1px solid rgba(255,255,255,0.22)",
            color: "#fff",
            fontWeight: 700,
            fontSize: "0.98rem",
          }}
        >
          See What We Do
        </motion.a>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "28px",
          fontSize: "0.7rem",
          letterSpacing: "0.1em",
          opacity: 0.45,
          fontWeight: 600,
        }}
      >
        SCROLL ↓
      </motion.div>
    </section>
  );
}

function SectionHeader({ index, eyebrow, title }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: "16px",
        marginBottom: "28px",
      }}
    >
      {index && (
        <span
          style={{
            fontSize: "0.85rem",
            fontWeight: 800,
            color: RED,
            fontFamily: "monospace",
          }}
        >
          {index}
        </span>
      )}
      <div>
        {eyebrow && (
          <div
            style={{
              color: CYAN,
              fontWeight: 700,
              fontSize: "0.78rem",
              letterSpacing: "0.1em",
              marginBottom: "8px",
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </div>
        )}
        <h2
          style={{
            fontSize: "clamp(1.7rem, 3.6vw, 2.6rem)",
            fontWeight: 800,
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
          }}
        >
          {title}
        </h2>
      </div>
    </div>
  );
}

function Section({ id, index, eyebrow, title, children, accentEdge }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        maxWidth: "920px",
        margin: "0 auto",
        padding: "90px 24px",
        position: "relative",
        borderTop: accentEdge ? "1px solid rgba(255,255,255,0.08)" : "none",
      }}
    >
      <SectionHeader index={index} eyebrow={eyebrow} title={title} />
      {children}
    </motion.section>
  );
}

function About() {
  return (
    <Section id="about" index="01" eyebrow="About Us" title="Hackers at heart.">
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "48px" }}>
        <div>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, opacity: 0.82, marginBottom: "18px" }}>
            Vendelsömalmsskolans Hack Club is part of the global{" "}
            <span style={{ color: RED, fontWeight: 700 }}>Hack Club</span>{" "}
            network, a movement of teenagers building things they
            actually care about. We meet to write code, build hardware,
            design games, and ship projects that didn't exist yesterday.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, opacity: 0.82 }}>
            We started this chapter because the best way to learn to
            build is by building. Every
            member ships something, and every project gets celebrated and rewarded.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "14px",
            alignContent: "start",
          }}
        >
          {[
            { num: "2+", label: "Members" },
            { num: "0+", label: "Projects" },
            { num: "Weekly", label: "Hack days" },
            { num: "0", label: "Boring Meetings" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                padding: "18px",
                borderRadius: "10px",
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div style={{ fontSize: "1.5rem", fontWeight: 800, color: RED, fontFamily: "monospace" }}>
                {stat.num}
              </div>
              <div style={{ fontSize: "0.78rem", opacity: 0.65, marginTop: "4px" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function WhatWeDo() {
  const items = [
    { title: "Build Nights", desc: "Weekly sessions where we sit down and ship. Sites, games, bots, whatever you're into." },
    { title: "Workshops", desc: "Hands-on intros to web dev, hardware hacking, and game design, taught by leaders." },
    { title: "Hackathons", desc: "We organize and travel to hackathons, turning 24-hour sprints into real projects." },
    { title: "Open Source", desc: "We contribute to and maintain tools the whole Hack Club community uses." },
    { title: "Hardware Lab", desc: "Microcontrollers, soldering irons, and 3D printers. If it has a circuit, we're in it." },
    { title: "Game Jams", desc: "Themed weekends where we build a full game from scratch, solo or in teams." },
  ];

  return (
    <Section id="what-we-do" index="02" eyebrow="What We Do" title="Make stuff. Break stuff. Learn fast." accentEdge>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1px", backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", overflow: "hidden" }}>
        {items.map((item) => (
          <motion.div
            key={item.title}
            whileHover={{ backgroundColor: "rgba(236,55,80,0.06)" }}
            style={{ padding: "28px 24px", backgroundColor: "#0e0e16" }}
          >
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "8px", color: CYAN }}>
              {item.title}
            </h3>
            <p style={{ fontSize: "0.92rem", opacity: 0.72, lineHeight: 1.6 }}>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  const projects = [
    { name: "ClubSite", tag: "Web App", desc: "This very site.  Designed, animated, and shipped by Arvin Angali Nezhad." },
  ];

  const tagColor = (tag) => (tag === "Hardware" ? YELLOW : tag === "Game" ? CYAN : RED);

  return (
    <Section id="projects" index="03" eyebrow="Projects" title="Things we've shipped." accentEdge>
      <div style={{ display: "flex", flexDirection: "column", gap: "1px", backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", overflow: "hidden" }}>
        {projects.map((p) => (
          <motion.div
            key={p.name}
            whileHover={{ x: 6 }}
            transition={{ duration: 0.2 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              padding: "22px 26px",
              backgroundColor: "#0e0e16",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "2px",
                  backgroundColor: tagColor(p.tag),
                  transform: "rotate(45deg)",
                  flexShrink: 0,
                }}
              />
              <div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700 }}>{p.name}</h3>
                <p style={{ fontSize: "0.88rem", opacity: 0.65, marginTop: "3px", maxWidth: "480px" }}>
                  {p.desc}
                </p>
              </div>
            </div>
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                color: tagColor(p.tag),
                letterSpacing: "0.05em",
                fontFamily: "monospace",
                flexShrink: 0,
              }}
            >
              {p.tag.toUpperCase()}
            </span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Events() {
  const events = [
    { date: "Every Week", name: "Build Night @ Vendelsömalmsskolan" },
  ];

  return (
    <Section id="events" index="04" eyebrow="Events" title="Where things happen." accentEdge>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {events.map((ev, i) => (
          <motion.div
            key={ev.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px 4px",
              borderBottom: i < events.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
            }}
          >
            <span style={{ fontWeight: 700, fontSize: "1.02rem" }}>{ev.name}</span>
            <span style={{ color: RED, fontWeight: 700, fontSize: "0.85rem", fontFamily: "monospace" }}>
              {ev.date}
            </span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Team() {
  const team = [
    {
      name: "Morgan",
      role: "Club Lead",
      img: "https://user-cdn.hackclub-assets.com/019f18ed-b74e-7897-a29a-7b365902434f/Screenshot%202026-06-30%20162653.png",
    },
    {
      name: "Olivier Maksymovicz",
      role: "Co-Lead",
      img: "https://user-cdn.hackclub-assets.com/019f18f4-96f4-746d-b0da-17d4054bddd1/Screenshot%202026-03-26%2010.23.34.png",
    },
  ];

  return (
    <Section id="team" index="05" eyebrow="Team" title="Run by us." accentEdge>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          maxWidth: "560px",
        }}
      >
        {team.map((m) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            style={{
              padding: "24px",
              borderRadius: "14px",
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {m.img ? (
              <img
                src={m.img}
                alt={m.name}
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: "16px",
                  border: `2px solid ${RED}`,
                }}
              />
            ) : (
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  marginBottom: "16px",
                  background: `linear-gradient(135deg, ${CYAN}, ${RED})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "1.2rem",
                  border: `2px solid ${CYAN}`,
                }}
              >
                OM
              </div>
            )}
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700 }}>{m.name}</h3>
            <p style={{ fontSize: "0.85rem", color: CYAN, fontWeight: 600, marginTop: "2px" }}>
              {m.role}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Do I need coding experience?", a: "Nope. Everyone builds at their own pace." },
    { q: "How much does it cost?", a: "Nothing. Hack Club covers everything." },
    { q: "What do I need to bring?", a: "Only your school laptop!" },
    { q: "Can I start my own project?", a: "Always. Club time is largely unstructured. Bring an idea and we'll help you build it." },
  ];

  return (
    <Section id="faq" index="06" eyebrow="FAQ" title="Questions? Answered." accentEdge>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {faqs.map((f, i) => (
          <motion.div
            key={f.q}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            style={{
              padding: "20px 4px",
              borderBottom: i < faqs.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
            }}
          >
            <h4 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "6px", color: CYAN }}>
              {f.q}
            </h4>
            <p style={{ fontSize: "0.92rem", opacity: 0.72, lineHeight: 1.6 }}>{f.a}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Join() {
  return (
    <Section id="join" index="07" eyebrow="Join" title="Ready to build something?" accentEdge>
      <p style={{ fontSize: "1.05rem", lineHeight: 1.8, opacity: 0.82, marginBottom: "30px", maxWidth: "560px" }}>
        No applications, no prerequisites. If you go to
        Vendelsömalmsskolan and want to make things, you're already in.
        Show up to a build night or drop us a line and we'll get back to
        you.
      </p>
      <motion.a
        href="https://leaders.hackclub.com/join/UGVADCe"
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.97 }}
        style={{
          display: "inline-block",
          padding: "16px 34px",
          borderRadius: "8px",
          backgroundColor: RED,
          color: "#fff",
          fontWeight: 700,
          fontSize: "1rem",
          boxShadow: "0 10px 28px rgba(236,55,80,0.3)",
        }}
      >
        Get In Touch →
      </motion.a>
    </Section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "36px 24px 50px",
        opacity: 0.5,
        fontSize: "0.82rem",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      Built with ❤️ by Arvin Angali Nezhad · Part of{" "}
      <span style={{ color: CYAN, fontWeight: 700, opacity: 1 }}>hackclub.com</span>
    </footer>
  );
}

export default function App() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", backgroundColor: INK, color: "#fff" }}>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <WhatWeDo />
      <Projects />
      <Events />
      <Team />
      <FAQ />
      <Join />
      <Footer />
    </div>
  );
}