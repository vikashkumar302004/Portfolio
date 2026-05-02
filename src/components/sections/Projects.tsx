'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { 
  ExternalLink, 
  Github, 
  GitBranch, 
  TrendingUp, 
  Layers, 
  Code2, 
  Cloud, 
  BarChart2, 
  BadgeCheck,
  Server,
  Database,
  Cpu
} from 'lucide-react'
import SectionBadge from '@/components/ui/SectionBadge'
import { fadeUp as globalFadeUp, staggerContainer } from '@/lib/animations'

/* ─── Local Animation variants ───────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

/* ─── PROJECT 1: NexGen Code Mock Browser ────────── */
export function NexGenMockBrowser() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Slower, more deliberate timing loop for readability
    const timers = [
      setTimeout(() => setStep(1), 1000),  // Wait 1s then start typing
      setTimeout(() => setStep(2), 4000),  // Type for 3s then analyze
      setTimeout(() => setStep(3), 6500),  // Analyze for 2.5s then flowchart
      setTimeout(() => setStep(4), 9500),  // Flowchart for 3s then Big-O
      setTimeout(() => setStep(0), 13500), // Show final for 4s then reset
    ];
    
    const loop = setInterval(() => {
      setStep(0);
      setTimeout(() => setStep(1), 1000);
      setTimeout(() => setStep(2), 4000);
      setTimeout(() => setStep(3), 6500);
      setTimeout(() => setStep(4), 9500);
    }, 14500); // 14.5s total cycle

    return () => { timers.forEach(clearTimeout); clearInterval(loop); };
  }, []);

  return (
    <div style={{
      background: "#080d1a",
      border: "1px solid rgba(99,102,241,0.25)",
      borderRadius: 16,
      overflow: "hidden",
      height: "100%",
      minHeight: 440,
      display: "flex",
      flexDirection: "column",
      boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
    }}>
      {/* Browser Bar */}
      <div style={{
        background: "#0d1424",
        borderBottom: "1px solid rgba(99,102,241,0.2)",
        padding: "12px 16px",
        display: "flex", alignItems: "center", gap: 12,
      }}>
        <div style={{ display: "flex", gap: 6 }}>
          {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
            <div key={i} style={{ width: 12, height: 12, borderRadius: "50%", background: c }} />
          ))}
        </div>
        <div style={{
          flex: 1, background: "#131d31", border: "1px solid rgba(99,102,241,0.2)",
          borderRadius: 8, padding: "6px 12px",
          fontFamily: "JetBrains Mono, monospace", fontSize: 12, color: "#94a3b8",
          display: "flex", alignItems: "center", gap: 8,
        }}>
          <span style={{ color: "#10b981", fontSize: 10 }}>🔒</span>
          nexgen-code.vercel.app
        </div>
      </div>

      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
        {/* Left Side: Code Editor */}
        <div style={{
          background: "#0a0f1e",
          borderRight: "1px solid rgba(99,102,241,0.15)",
          padding: 20,
          display: "flex", flexDirection: "column",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: "#64748b", textTransform: "uppercase", fontWeight: 600 }}>
              Source Code
            </span>
          </div>

          <div style={{
            flex: 1,
            background: "#05080f",
            borderRadius: 12,
            border: "1px solid rgba(99,102,241,0.15)",
            padding: 16,
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 12,
            lineHeight: 1.7,
            overflow: "hidden",
            boxShadow: "inset 0 2px 10px rgba(0,0,0,0.5)",
          }}>
            <AnimatePresence>
              {step >= 1 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  {[
                    { ln: "01", code: "def binary_search(arr, target):", color: "#a78bfa" },
                    { ln: "02", code: "  lo, hi = 0, len(arr)-1", color: "#94a3b8" },
                    { ln: "03", code: "  while lo <= hi:", color: "#a78bfa" },
                    { ln: "04", code: "    mid = (lo+hi) // 2", color: "#67e8f9" },
                    { ln: "05", code: "    if arr[mid]==target:", color: "#a78bfa" },
                    { ln: "06", code: "      return mid", color: "#10b981" },
                    { ln: "07", code: "  return -1", color: "#ef4444" },
                  ].map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.25, duration: 0.4 }} // Very clear, slow typing
                      style={{ display: "flex", gap: 10 }}
                    >
                      <span style={{ color: "#334155", minWidth: 20 }}>{line.ln}</span>
                      <span style={{ color: line.color }}>{line.code}</span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            {step === 0 && (
              <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} style={{ color: "#6366f1", fontWeight: 900 }}>_</motion.span>
            )}
          </div>

          <motion.button
            animate={step === 2 ? { background: ["rgba(99,102,241,0.2)", "rgba(99,102,241,0.5)", "rgba(99,102,241,0.2)"] } : {}}
            transition={{ duration: 1, repeat: step === 2 ? Infinity : 0 }}
            style={{
              marginTop: 14,
              background: step >= 1 ? "linear-gradient(135deg, #7c3aed, #6366f1)" : "rgba(99,102,241,0.1)",
              border: "none",
              color: "#fff",
              borderRadius: 10,
              padding: "10px 16px",
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 600,
              fontSize: 13,
              cursor: "default",
              transition: "all 0.5s ease",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            }}
          >
            {step === 2 ? (
              <>
                <motion.span animate={{ rotate: 360 }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}>⟳</motion.span>
                Analyzing Patterns...
              </>
            ) : step >= 3 ? "Analysis Complete ✓" : "Analyze Code →"}
          </motion.button>
        </div>

        {/* Right Side: Results */}
        <div style={{ background: "#080d1a", padding: 20, display: "flex", flexDirection: "column", gap: 12 }}>
          <AnimatePresence>
            {step >= 3 && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.3)", borderRadius: 12, padding: 16 }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                  <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: "#a78bfa", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 700 }}>Neural Architecture</span>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981", boxShadow: "0 0 10px #10b981" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                  {[
                    { label: "INPUT", color: "#7c3aed", bg: "rgba(124,58,237,0.25)" },
                    { label: "LOGIC_FLOW", color: "#818cf8", bg: "rgba(99,102,241,0.2)" },
                    { label: "CONDITION", color: "#22d3ee", bg: "rgba(34,211,238,0.15)", diamond: true },
                    { label: "SUCCESS", color: "#10b981", bg: "rgba(16,185,129,0.15)" },
                  ].map((node, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.3, type: "spring", stiffness: 200 }}
                      style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, width: "100%" }}
                    >
                      <div style={{
                        background: node.bg, border: `1px solid ${node.color}60`, borderRadius: node.diamond ? 4 : 8,
                        padding: "4px 12px", fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: node.color,
                        textAlign: "center", minWidth: 110, fontWeight: 600,
                      }}>
                        {node.label}
                      </div>
                      {i < 3 && <div style={{ width: 2, height: 10, background: "linear-gradient(to bottom, "+node.color+"40, transparent)" }} />}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {step >= 4 && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: 12, padding: 16 }}
              >
                <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: "#10b981", textTransform: "uppercase", letterSpacing: "0.15em", display: "block", marginBottom: 12, fontWeight: 700 }}>Efficiency Matrix</span>
                <div style={{ display: "flex", gap: 10 }}>
                  {[
                    { label: "Time", value: "O(log n)", color: "#10b981" },
                    { label: "Space", value: "O(1)", color: "#22d3ee" },
                    { label: "Score", value: "A+", color: "#a78bfa" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.3, type: "spring", stiffness: 150 }}
                      style={{ flex: 1, textAlign: "center", background: "rgba(0,0,0,0.4)", borderRadius: 8, padding: "8px 4px", border: "1px solid rgba(255,255,255,0.05)" }}
                    >
                      <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: 15, fontWeight: 800, color: item.color }}>{item.value}</div>
                      <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 9, color: "#64748b", marginTop: 4, fontWeight: 500 }}>{item.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {step < 3 && (
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, color: "#475569", fontFamily: "JetBrains Mono, monospace", fontSize: 12, textAlign: "center" }}>
              <motion.div 
                animate={step === 2 ? { rotate: 360 } : { scale: [1, 1.1, 1] }} 
                transition={{ duration: step === 2 ? 3 : 4, repeat: Infinity, ease: "linear" }} 
                style={{ fontSize: 32, opacity: 0.5 }}
              >
                {step === 2 ? "⚙️" : "🧠"}
              </motion.div>
              <span style={{ opacity: 0.6, letterSpacing: "0.05em" }}>
                {step === 0 && "Waiting for code input..."}
                {step === 1 && "Code detected. Initializing engine..."}
                {step === 2 && "Processing logical pathways..."}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── PROJECT 2: Let's Code Hub Stats Panel ───────── */
export function ActivityFeed() {
  const events = [
    { user: "rahul_dev", action: "solved", item: "Binary Search", time: "2s ago", color: "#10b981" },
    { user: "priya_cs", action: "passed", item: "AWS CLF-C02 Mock", time: "14s ago", color: "#f59e0b" },
    { user: "arjun_it", action: "solved", item: "LRU Cache", time: "31s ago", color: "#10b981" },
    { user: "sneha_k", action: "scored", item: "92% on Practice Test", time: "1m ago", color: "#818cf8" },
    { user: "dev_2024", action: "solved", item: "Two Sum", time: "2m ago", color: "#10b981" },
  ];

  const [visible, setVisible] = useState(events.slice(0, 3));

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(prev => {
        const currentIdx = events.findIndex(e => e.user === prev[0].user);
        const nextIdx = (currentIdx + 1) % events.length;
        return [
          events[nextIdx],
          events[(nextIdx + 1) % events.length],
          events[(nextIdx + 2) % events.length],
        ];
      });
    }, 4000); // Slower updates
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, height: 160, overflow: "hidden", position: "relative" }}>
      <AnimatePresence mode="popLayout">
        {visible.map((e, i) => (
          <motion.div
            key={e.user + e.time + i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            style={{ 
              display: "flex", alignItems: "center", gap: 12,
              padding: "10px 14px", background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.02)",
              borderRadius: 12, height: 44,
              width: "100%", boxSizing: "border-box"
            }}
          >
            <div style={{
              width: 26, height: 26, borderRadius: "50%", background: "linear-gradient(135deg, #7c3aed, #6366f1)",
              display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Space Grotesk, sans-serif", fontSize: 10, color: "#fff", fontWeight: 700, flexShrink: 0,
            }}>
              {e.user[0].toUpperCase()}
            </div>
            <div style={{ flex: 1, overflow: "hidden" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#94a3b8", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  <span style={{ color: "#f8fafc", fontWeight: 600 }}>{e.user}</span>
                  {" "}{e.action}{" "}
                  <span style={{ color: e.color, fontWeight: 500 }}>{e.item}</span>
                </span>
                <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 9, color: "#475569", marginLeft: 8, flexShrink: 0 }}>
                  {e.time}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export function LetsCodeHubPanel() {
  const [count, setCount] = useState(0);
  const targetUsers = 3000;

  useEffect(() => {
    let start = 0;
    const duration = 2500; // Slower count up
    const step = (targetUsers / duration) * 16;
    const timer = setInterval(() => {
      start += step;
      if (start >= targetUsers) { setCount(targetUsers); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      background: "linear-gradient(180deg, #0d1424, #080d1a)",
      border: "1px solid rgba(34,211,238,0.2)",
      borderLeft: "1px solid rgba(34,211,238,0.3)",
      borderRadius: "0 24px 24px 0",
      padding: 32,
      height: "100%",
      display: "flex", flexDirection: "column", gap: 20,
      position: "relative",
      overflow: "hidden"
    }}>
      <div className="absolute top-10 right-10 text-cyan/5 -rotate-12 pointer-events-none">
        <Cloud size={140} />
      </div>
      <div className="absolute bottom-10 left-10 text-violet/5 rotate-12 pointer-events-none">
        <Cpu size={120} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          background: "rgba(13,20,36,0.5)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(34,211,238,0.3)",
          borderRadius: 20, padding: "24px", textAlign: "center", position: "relative", overflow: "hidden",
          boxShadow: "0 10px 40px rgba(0,0,0,0.3)"
        }}
      >
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 140, height: 140, borderRadius: "50%", background: "radial-gradient(circle, rgba(34,211,238,0.15), transparent 75%)", pointerEvents: "none" }} />
        <motion.div style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 800, fontSize: 56, lineHeight: 1, background: "linear-gradient(135deg, #22d3ee, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          {count >= 3000 ? "3K+" : count.toLocaleString()}
        </motion.div>
        <div style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 600, fontSize: 16, color: "#94a3b8", marginTop: 4, letterSpacing: "0.05em" }}>Active Engineers</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 12 }}>
          <motion.div 
             animate={{ boxShadow: ["0 0 0px #10b981", "0 0 12px #10b981", "0 0 0px #10b981"] }}
             transition={{ duration: 2.5, repeat: Infinity }}
             style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981" }} 
          />
          <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: "#10b981", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>Network Stable</span>
        </div>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {[
          { num: "500+", label: "DSA Problems", color: "#818cf8" },
          { num: "200+", label: "AWS Questions", color: "#f59e0b" },
          { num: "95%", label: "Satisfaction", color: "#10b981" },
          { num: "24/7", label: "Uptime", color: "#22d3ee" },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.15, type: "spring", stiffness: 100 }}
            whileHover={{ y: -4, borderColor: s.color + "90" }}
            style={{ 
              background: "rgba(8,13,26,0.6)", 
              border: "1px solid rgba(255,255,255,0.06)", 
              borderRadius: 14, padding: "16px", 
              borderTop: `4px solid ${s.color}80`,
              transition: "all 0.4s ease"
            }}
          >
            <div style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 800, fontSize: 22, color: "#f8fafc", lineHeight: 1.2 }}>{s.num}</div>
            <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: "#64748b", marginTop: 4, fontWeight: 600, textTransform: "uppercase" }}>{s.label}</div>
          </motion.div>
        ))}
      </div>

      <div style={{ 
        background: "rgba(8,13,26,0.4)", 
        border: "1px solid rgba(255,255,255,0.03)", 
        borderRadius: 20, padding: "20px", flex: 1,
        display: "flex", flexDirection: "column"
      }}>
        <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: "#475569", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 16, fontWeight: 700 }}>Real-time Feed</div>
        <ActivityFeed />
      </div>
    </div>
  );
}

/* ─── MAIN PROJECTS SECTION ───────────────────────── */
export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="py-32 relative overflow-hidden bg-void">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-violet/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan/5 blur-[120px] rounded-full pointer-events-none" />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }} className="relative z-10">
        
        <motion.div variants={staggerContainer(0.1)} initial="hidden" animate={isInView ? "visible" : "hidden"} style={{ textAlign: "center", marginBottom: 80 }}>
          <motion.div variants={globalFadeUp}><SectionBadge>Selected Work</SectionBadge></motion.div>
          <motion.h2 variants={globalFadeUp} style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#f8fafc", letterSpacing: "-0.03em", marginTop: 16 }}>
            Engineering <span className="gradient-text">Production Systems</span>
          </motion.h2>
          <motion.p variants={globalFadeUp} style={{ color: "#94a3b8", fontSize: 18, marginTop: 12, maxWidth: 600, margin: "12px auto 0" }}>
            A showcase of architectural depth and AI-driven complexity.
          </motion.p>
        </motion.div>

        {/* ─ Card 1: NexGen Code ─ */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileHover={{ 
            y: -8, 
            borderColor: "rgba(99,102,241,0.6)",
            boxShadow: "0 40px 80px rgba(0,0,0,0.6)"
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", background: "linear-gradient(145deg, #0d1424, #0a0f1e)",
            border: "1px solid rgba(99,102,241,0.2)", borderRadius: 28, overflow: "hidden", marginBottom: 32, position: "relative",
            boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
          }}
          className="project-card-grid"
        >
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, #7c3aed, #6366f1, #22d3ee, transparent)" }} />
          
          <div style={{ padding: "54px 48px" }}>
            <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
              <span style={{ background: "rgba(124,58,237,0.25)", border: "1px solid rgba(124,58,237,0.45)", color: "#a78bfa", fontSize: 12, fontFamily: "JetBrains Mono, monospace", fontWeight: 700, padding: "6px 16px", borderRadius: 999, letterSpacing: "0.12em", textTransform: "uppercase" }}>Featured Project</span>
              <span style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.45)", color: "#10b981", fontSize: 12, fontFamily: "JetBrains Mono, monospace", padding: "6px 16px", borderRadius: 999, display: "flex", alignItems: "center", gap: 6, fontWeight: 700 }}>
                <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }} style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981", boxShadow: "0 0 12px #10b981" }} />
                LIVE
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 14 }}>
              <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 5, repeat: Infinity }} style={{ fontSize: 48 }}>🌌</motion.div>
              <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#f8fafc", margin: 0, letterSpacing: "-0.04em" }}>NexGen Code</h3>
            </div>

            <p style={{ background: "linear-gradient(90deg, #a78bfa, #67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontFamily: "Space Grotesk, sans-serif", fontSize: 18, fontWeight: 600, marginBottom: 24 }}>The Architectural Code Intelligence Engine</p>
            
            <p style={{ color: "#94a3b8", fontSize: 16, lineHeight: 1.8, marginBottom: 36, maxWidth: 520 }}>
              Paste any code. Get architectural blueprints, Big O complexity analysis, and multilingual documentation instantly — powered by Groq LLaMA-3-70B and Gemini 1.5 Flash.
            </p>

            {[
              { icon: GitBranch, title: "Neural Flowcharting", desc: "Dynamic Mermaid.js architecture diagrams with animated edges" },
              { icon: TrendingUp, title: "Big O Scoring", desc: "Instant Time & Space complexity with maintainability index" },
              { icon: Layers, title: "Expert Infrastructure Mapping", desc: "Infers AWS services, databases, APIs from code" },
            ].map(f => (
              <motion.div key={f.title} variants={globalFadeUp} style={{ display: "flex", gap: 18, alignItems: "flex-start", marginBottom: 20 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(99,102,241,0.18)", border: "1px solid rgba(99,102,241,0.35)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <f.icon size={20} color="#818cf8" />
                </div>
                <div>
                  <div style={{ color: "#f8fafc", fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{f.title}</div>
                  <div style={{ color: "#64748b", fontSize: 14, lineHeight: 1.5 }}>{f.desc}</div>
                </div>
              </motion.div>
            ))}

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, margin: "40px 0" }}>
              {["React 18", "Vite", "FastAPI", "Python", "Groq LLaMA-3", "Gemini Pro"].map(t => (
                <span key={t} style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 12, color: "#94a3b8", border: "1px solid rgba(99,102,241,0.25)", borderRadius: 10, padding: "8px 16px", background: "rgba(99,102,241,0.1)", fontWeight: 600 }}>{t}</span>
              ))}
            </div>

            <div style={{ display: "flex", gap: 16 }}>
              <motion.a href="https://nexgen-code.vercel.app/" target="_blank" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} style={{ background: "linear-gradient(135deg, #7c3aed, #6366f1, #22d3ee)", color: "#fff", padding: "16px 32px", borderRadius: 14, fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: 16, textDecoration: "none", display: "flex", alignItems: "center", gap: 10, boxShadow: "0 10px 25px rgba(124,58,237,0.4)" }}>
                Live Demo <ExternalLink size={18} />
              </motion.a>
              <motion.a href="https://github.com/vikashkumar302004/Nexgen-code" target="_blank" whileHover={{ scale: 1.05, y: -2, borderColor: "rgba(255,255,255,0.3)" }} style={{ background: "transparent", color: "#f8fafc", padding: "16px 32px", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 14, fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: 16, textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
                GitHub <Github size={18} />
              </motion.a>
            </div>
          </div>

          <div style={{ padding: "36px 36px 36px 0" }} className="hidden md:block">
            <NexGenMockBrowser />
          </div>
        </motion.div>

        {/* ─ Card 2: Let's Code Hub ─ */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileHover={{ 
            y: -8, 
            borderColor: "rgba(34,211,238,0.5)",
            boxShadow: "0 40px 80px rgba(0,0,0,0.6)"
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", background: "linear-gradient(145deg, #0d1424, #0a0f1e)",
            border: "1px solid rgba(34,211,238,0.2)", borderRadius: 28, overflow: "hidden", position: "relative",
            boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
          }}
          className="project-card-grid"
        >
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, #0891b2, #22d3ee, #a78bfa, transparent)" }} />
          
          <div style={{ padding: "54px 48px" }}>
            <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
              <span style={{ background: "rgba(34,211,238,0.25)", border: "1px solid rgba(34,211,238,0.45)", color: "#22d3ee", fontSize: 12, fontFamily: "JetBrains Mono, monospace", padding: "6px 16px", borderRadius: 999, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700 }}>Ed-Tech Platform</span>
              <span style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.45)", color: "#10b981", fontSize: 12, fontFamily: "JetBrains Mono, monospace", padding: "6px 16px", borderRadius: 999, display: "flex", alignItems: "center", gap: 6, fontWeight: 700 }}>
                <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }} style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981", boxShadow: "0 0 12px #10b981" }} />
                LIVE
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 14 }}>
              <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity }} style={{ fontSize: 48 }}>⚡</motion.div>
              <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#f8fafc", margin: 0, letterSpacing: "-0.04em" }}>Let's Code Hub</h3>
            </div>

            <p style={{ color: "#22d3ee", fontFamily: "Space Grotesk, sans-serif", fontSize: 18, fontWeight: 600, marginBottom: 24 }}>DSA Practice × AWS Certification Prep</p>
            
            <p style={{ color: "#94a3b8", fontSize: 16, lineHeight: 1.8, marginBottom: 36, maxWidth: 520 }}>
              A unified learning platform combining Data Structures & Algorithms practice with AWS Certification exam preparation.
            </p>

            {[
              { icon: Code2, text: "Curated DSA problem sets with progressive difficulty" },
              { icon: Cloud, text: "AWS certification mock exam questions" },
              { icon: BarChart2, text: "Real-time progress analytics and performance tracking" },
            ].map(f => (
              <motion.div key={f.text} variants={globalFadeUp} style={{ display: "flex", gap: 18, alignItems: "center", marginBottom: 16 }}>
                <div style={{ width: 38, height: 38, borderRadius: 12, background: "rgba(34,211,238,0.18)", border: "1px solid rgba(34,211,238,0.35)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <f.icon size={18} color="#22d3ee" />
                </div>
                <span style={{ color: "#f8fafc", fontSize: 16, fontWeight: 600 }}>{f.text}</span>
              </motion.div>
            ))}

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", margin: "40px 0" }}>
              {["React", "Node.js", "FastAPI", "LangChain", "AWS SDK"].map(t => (
                <span key={t} style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 12, color: "#22d3ee", border: "1px solid rgba(34,211,238,0.25)", borderRadius: 10, padding: "8px 16px", background: "rgba(34,211,238,0.1)", fontWeight: 600 }}>{t}</span>
              ))}
            </div>

            <div style={{ display: "flex", gap: 16 }}>
              <motion.a href="https://aws-exam-hub-private.vercel.app/#/" target="_blank" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} style={{ background: "linear-gradient(135deg, #0891b2, #22d3ee)", color: "#fff", padding: "16px 32px", borderRadius: 14, fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: 16, textDecoration: "none", display: "flex", alignItems: "center", gap: 10, boxShadow: "0 10px 25px rgba(8,145,178,0.4)" }}>
                Live Demo <ExternalLink size={18} />
              </motion.a>
              <motion.a href="https://github.com/vikashkumar302004" target="_blank" whileHover={{ scale: 1.05, y: -2, borderColor: "rgba(34,211,238,0.6)" }} style={{ background: "transparent", color: "#f8fafc", padding: "16px 32px", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 14, fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: 16, textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
                GitHub <Github size={18} />
              </motion.a>
            </div>
          </div>

          <div className="hidden md:block">
            <LetsCodeHubPanel />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
