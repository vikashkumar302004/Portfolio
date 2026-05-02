'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import { Sparkles, Cloud, Zap, Monitor, BadgeCheck, Brain, Code, Rocket, GraduationCap } from 'lucide-react'
import SectionBadge from '@/components/ui/SectionBadge'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { scaleIn } from '@/lib/animations'

/* ─── Animation variants ─────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

/* ─── 3-D tilt card hook ─────────────────────────── */
function useTilt() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { rotateX, rotateY, handleMouseMove, handleMouseLeave };
}

/* ─── Skill chip data ────────────────────────────── */
const chips = [
  {
    icon: Sparkles,
    title: "Gen AI",
    sub: "LangChain · RAG",
    color: "violet",
  },
  {
    icon: Cloud,
    title: "Cloud",
    sub: "AWS · Docker",
    color: "cyan",
  },
  {
    icon: Zap,
    title: "Backend",
    sub: "Node · FastAPI",
    color: "amber",
  },
  {
    icon: Monitor,
    title: "Frontend",
    sub: "React · Next.js",
    color: "emerald",
  },
] as const;

const chipColors = {
  violet:  { bg: "rgba(124,58,237,0.12)",  border: "rgba(124,58,237,0.25)",  icon: "#a78bfa", hover: "rgba(124,58,237,0.22)" },
  cyan:    { bg: "rgba(34,211,238,0.08)",   border: "rgba(34,211,238,0.22)",   icon: "#22d3ee", hover: "rgba(34,211,238,0.16)" },
  amber:   { bg: "rgba(245,158,11,0.08)",   border: "rgba(245,158,11,0.22)",   icon: "#fbbf24", hover: "rgba(245,158,11,0.16)" },
  emerald: { bg: "rgba(16,185,129,0.08)",   border: "rgba(16,185,129,0.22)",   icon: "#34d399", hover: "rgba(16,185,129,0.16)" },
};

/* ─── Cert data ──────────────────────────────────── */
const certs = [
  {
    title: "AWS Cloud Practitioner",
    url: "https://www.credly.com/badges/2dcfa2ac-b43e-4994-8b9c-78b10f74388f/linked_in_profile",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.07)",
    border: "rgba(245,158,11,0.22)",
  },
  {
    title: "AWS AI Practitioner",
    url: "https://www.credly.com/badges/1f71a78a-d1d4-48a4-af21-0549093302a4/linked_in_profile",
    color: "#22d3ee",
    bg: "rgba(34,211,238,0.07)",
    border: "rgba(34,211,238,0.22)",
  },
];

/* ─── Stats ──────────────────────────────────────── */
const stats = [
  { num: "2x",  label: "AWS certs" },
  { num: "3+",  label: "projects"  },
  { num: "∞",   label: "learning"  },
];

export function AboutRightPanel() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const tilt = useTilt();

  return (
    <motion.div
      ref={sectionRef}
      variants={fadeUp}
      custom={0.1}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={tilt.handleMouseMove}
        onMouseLeave={tilt.handleMouseLeave}
      >
        <div
          style={{
            background: "linear-gradient(145deg, #0d1424, #111827)",
            border: "1px solid rgba(99,102,241,0.22)",
            borderRadius: 20,
            padding: 28,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0, left: 0, right: 0,
              height: 2,
              background: "linear-gradient(90deg, #7c3aed, #6366f1, #22d3ee, transparent)",
            }}
          />

          <div
            style={{
              position: "absolute",
              top: -80, right: -80,
              width: 240, height: 240,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <motion.div variants={stagger} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.div
              variants={fadeUp} custom={0}
              style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}
            >
              <motion.div
                animate={{ boxShadow: ["0 0 6px #10b981", "0 0 18px #10b981, 0 0 32px rgba(16,185,129,0.4)", "0 0 6px #10b981"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  width: 8, height: 8, borderRadius: "50%",
                  background: "#10b981", flexShrink: 0,
                }}
              />
              <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: "#10b981", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Available for opportunities
              </span>
              <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(16,185,129,0.3), transparent)" }} />
            </motion.div>

            <motion.div
              variants={fadeUp} custom={0.05}
              style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                style={{
                  width: 60, height: 60,
                  borderRadius: 14,
                  background: "linear-gradient(135deg, #7c3aed, #22d3ee)",
                  padding: 2,
                  flexShrink: 0,
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    width: "100%", height: "100%",
                    borderRadius: 12,
                    overflow: "hidden",
                    background: "#0d1424",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  <Image 
                    src="/assets/hi.png" 
                    alt="VK Logo" 
                    width={40} 
                    height={40} 
                    className="w-[70%] h-[70%] object-contain"
                  />
                </div>
              </motion.div>

              <div>
                <p style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 600, fontSize: 17, color: "#f8fafc", margin: "0 0 2px" }}>
                  Vikash Kumar
                </p>
                <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 12, color: "#64748b", margin: 0 }}>
                  KIET · IT · <span style={{ color: "#818cf8" }}>2024 → 2028</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp} custom={0.1}
              style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.2), transparent)", marginBottom: 20 }}
            />

            <motion.div variants={fadeUp} custom={0.15} style={{ marginBottom: 20 }}>
              <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: "#475569", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>
                Currently deep-diving into
              </p>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#94a3b8", lineHeight: 1.7, margin: 0 }}>
                Orchestrating{" "}
                <span style={{ color: "#a78bfa", fontWeight: 500 }}>LLM agents</span>{" "}
                with LangGraph, building{" "}
                <span style={{ color: "#a78bfa", fontWeight: 500 }}>RAG pipelines</span>{" "}
                with vector databases, and deploying{" "}
                <span style={{ color: "#a78bfa", fontWeight: 500 }}>production AI systems</span>{" "}
                on AWS.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 20 }}
            >
              {chips.map((chip) => {
                const c = chipColors[chip.color];
                const Icon = chip.icon;
                return (
                  <motion.div
                    key={chip.title}
                    variants={fadeUp}
                    whileHover={{ y: -3, background: c.hover, borderColor: c.border, scale: 1.02 }}
                    style={{
                      display: "flex", alignItems: "center", gap: 10,
                      padding: "10px 12px",
                      background: c.bg,
                      border: `1px solid ${c.border}`,
                      borderRadius: 10,
                      cursor: "default",
                      transition: "background 0.2s, border-color 0.2s",
                    }}
                  >
                    <div
                      style={{
                        width: 30, height: 30,
                        borderRadius: 8,
                        background: c.bg,
                        border: `1px solid ${c.border}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={15} color={c.icon} />
                    </div>
                    <div>
                      <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: 12, fontWeight: 500, color: "#e2e8f0", display: "block", lineHeight: 1.2 }}>
                        {chip.title}
                      </span>
                      <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: "#64748b", display: "block" }}>
                        {chip.sub}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              variants={stagger}
              style={{ display: "flex", gap: 8, marginBottom: 20 }}
            >
              {certs.map((cert) => (
                <motion.a
                  key={cert.title}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeUp}
                  whileHover={{ y: -2, scale: 1.02 }}
                  style={{
                    flex: 1,
                    padding: "10px 12px",
                    background: cert.bg,
                    border: `1px solid ${cert.border}`,
                    borderRadius: 10,
                    display: "flex", alignItems: "center", gap: 8,
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  <BadgeCheck size={14} color={cert.color} style={{ flexShrink: 0 }} />
                  <div>
                    <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: 11, fontWeight: 500, color: "#e2e8f0", display: "block", lineHeight: 1.3 }}>
                      {cert.title}
                    </span>
                    <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: "#64748b", display: "block" }}>
                      amazon web services ↗
                    </span>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              variants={stagger}
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}
            >
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={scaleIn}
                  whileHover={{ y: -2 }}
                  style={{
                    padding: "12px 10px",
                    background: "rgba(8,13,26,0.8)",
                    border: "1px solid rgba(99,102,241,0.1)",
                    borderTop: "2px solid rgba(99,102,241,0.45)",
                    borderRadius: 10,
                    textAlign: "center",
                  }}
                >
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: 22, fontWeight: 700,
                      background: "linear-gradient(135deg, #a78bfa, #67e8f9)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      display: "block", lineHeight: 1.2,
                    }}
                  >
                    {s.num}
                  </motion.span>
                  <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: "#475569", display: "block", marginTop: 2, letterSpacing: "0.05em" }}>
                    {s.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const About = () => {
  const highlights = [
    { icon: <Brain size={20} />, title: "Gen AI Enthusiast", desc: "Building RAG pipelines and AI agents using LLMs like Llama 3 and Gemini." },
    { icon: <Cloud size={20} />, title: "AWS Dual Certified", desc: "Architecting scalable cloud solutions as a Cloud & AI Practitioner." },
    { icon: <Code size={20} />, title: "Full Stack Dev", desc: "Engineering end-to-end applications with React, Node.js, and FastAPI." },
  ]

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <SectionBadge>About Me</SectionBadge>
            <h2 className="mb-6">Bridging <span className="gradient-text">Human Ideas</span> & Intelligent Systems</h2>
            <div className="space-y-6 text-secondary text-lg leading-relaxed">
              <p>
                I&apos;m a 2nd-year IT student at <span className="text-primary font-medium">KIET Group of Institutions</span> with a relentless drive to build systems that solve real problems. My journey began with competitive programming, but quickly evolved into a passion for full-stack engineering and cloud architecture.
              </p>
              <p>
                Currently, I&apos;m deep-diving into the world of <span className="text-violet-light font-medium">Generative AI</span>, exploring how large language models can be orchestrated to create autonomous, intelligent agents. 
              </p>
              <p>
                I don&apos;t just write code; I architect experiences. Whether it&apos;s optimizing a React frontend for ultra-smooth interactions or designing a resilient backend on AWS, I focus on <span className="text-cyan font-medium">performance</span>, <span className="text-cyan font-medium">scalability</span>, and <span className="text-cyan font-medium">security</span>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
              {highlights.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="p-4 rounded-2xl bg-surface border border-subtle hover:border-violet/30 transition-colors">
                    <div className="text-violet mb-2">{item.icon}</div>
                    <div className="text-sm font-bold font-grotesk text-primary mb-1">{item.title}</div>
                    <div className="text-[11px] text-muted leading-tight">{item.desc}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right: Visual Block */}
          <AboutRightPanel />
        </div>
      </div>
    </section>
  )
}

export default About
