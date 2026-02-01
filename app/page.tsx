"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setError(false);

    if (!name || !email) {
      setMessage("Fill all fields.");
      setError(true);
      return;
    }

    setLoading(true);

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setMessage(data.message);
      setError(true);
      return;
    }

    setMessage(data.message);
    setName("");
    setEmail("");
  };

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <main className="bg-black text-white overflow-hidden min-h-screen">
      {/* Subtle blue glow background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-150 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(ellipse, rgba(59,130,246,0.15) 0%, transparent 70%)",
          }}
        />
      </div>

      <style>{`
        @keyframes logoFlash {
          0%, 85%, 100% { opacity: 0.05; }
          90% { opacity: 0.35; }
          91% { opacity: 0.08; }
          93% { opacity: 0.32; }
          94% { opacity: 0.05; }
        }
        .logo-flash {
          animation: logoFlash 5s ease-in-out infinite;
          animation-delay: 0s;
        }
        .side-flash {
          animation: logoFlash 5s ease-in-out infinite;
          animation-delay: 0s;
        }
        .text-glow {
          text-shadow: 0 0 30px rgba(59,130,246,0.4), 0 0 60px rgba(59,130,246,0.2);
        }
      `}</style>

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 pt-16 overflow-hidden">
        {/* Side Flash Effects - Blob Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Top-left corner blob */}
          <svg
            viewBox="0 0 200 200"
            className="absolute -top-40 -left-40 w-96 h-96 side-flash"
            style={{ filter: "blur(60px)" }}
          >
            <g transform="translate(100 100)">
              <path
                fill="rgba(59,130,246,0.8)"
                d="M32.7,-60.3C39.7,-52.6,40.9,-38.4,49.8,-27.3C58.7,-16.2,75.3,-8.1,82.7,4.3C90.2,16.7,88.4,33.3,76.3,38.9C64.2,44.6,41.8,39.1,27.4,36.7C13,34.3,6.5,34.9,-5,43.6C-16.5,52.2,-32.9,68.9,-39.7,66.9C-46.5,64.9,-43.6,44.2,-42.1,29.9C-40.5,15.7,-40.3,7.8,-45.4,-3C-50.6,-13.7,-61,-27.5,-62.1,-41C-63.2,-54.5,-55.1,-67.9,-43.2,-72.8C-31.3,-77.7,-15.6,-74.3,-1.4,-71.9C12.8,-69.4,25.7,-68.1,32.7,-60.3Z"
              />
            </g>
          </svg>

          {/* Top-right corner blob */}
          <svg
            viewBox="0 0 200 200"
            className="absolute -top-40 -right-40 w-96 h-96 side-flash"
            style={{ filter: "blur(60px)", transform: "scaleX(-1)" }}
          >
            <g transform="translate(100 100)">
              <path
                fill="rgba(96,213,250,0.8)"
                d="M32.7,-60.3C39.7,-52.6,40.9,-38.4,49.8,-27.3C58.7,-16.2,75.3,-8.1,82.7,4.3C90.2,16.7,88.4,33.3,76.3,38.9C64.2,44.6,41.8,39.1,27.4,36.7C13,34.3,6.5,34.9,-5,43.6C-16.5,52.2,-32.9,68.9,-39.7,66.9C-46.5,64.9,-43.6,44.2,-42.1,29.9C-40.5,15.7,-40.3,7.8,-45.4,-3C-50.6,-13.7,-61,-27.5,-62.1,-41C-63.2,-54.5,-55.1,-67.9,-43.2,-72.8C-31.3,-77.7,-15.6,-74.3,-1.4,-71.9C12.8,-69.4,25.7,-68.1,32.7,-60.3Z"
              />
            </g>
          </svg>

          {/* Bottom-left corner blob */}
          <svg
            viewBox="0 0 200 200"
            className="absolute -bottom-40 -left-40 w-96 h-96 side-flash"
            style={{ filter: "blur(60px)", transform: "scaleY(-1)" }}
          >
            <g transform="translate(100 100)">
              <path
                fill="rgba(59,130,246,0.75)"
                d="M32.7,-60.3C39.7,-52.6,40.9,-38.4,49.8,-27.3C58.7,-16.2,75.3,-8.1,82.7,4.3C90.2,16.7,88.4,33.3,76.3,38.9C64.2,44.6,41.8,39.1,27.4,36.7C13,34.3,6.5,34.9,-5,43.6C-16.5,52.2,-32.9,68.9,-39.7,66.9C-46.5,64.9,-43.6,44.2,-42.1,29.9C-40.5,15.7,-40.3,7.8,-45.4,-3C-50.6,-13.7,-61,-27.5,-62.1,-41C-63.2,-54.5,-55.1,-67.9,-43.2,-72.8C-31.3,-77.7,-15.6,-74.3,-1.4,-71.9C12.8,-69.4,25.7,-68.1,32.7,-60.3Z"
              />
            </g>
          </svg>

          {/* Bottom-right corner blob */}
          <svg
            viewBox="0 0 200 200"
            className="absolute -bottom-40 -right-40 w-96 h-96 side-flash"
            style={{ filter: "blur(60px)", transform: "scaleX(-1) scaleY(-1)" }}
          >
            <g transform="translate(100 100)">
              <path
                fill="rgba(96,213,250,0.8)"
                d="M32.7,-60.3C39.7,-52.6,40.9,-38.4,49.8,-27.3C58.7,-16.2,75.3,-8.1,82.7,4.3C90.2,16.7,88.4,33.3,76.3,38.9C64.2,44.6,41.8,39.1,27.4,36.7C13,34.3,6.5,34.9,-5,43.6C-16.5,52.2,-32.9,68.9,-39.7,66.9C-46.5,64.9,-43.6,44.2,-42.1,29.9C-40.5,15.7,-40.3,7.8,-45.4,-3C-50.6,-13.7,-61,-27.5,-62.1,-41C-63.2,-54.5,-55.1,-67.9,-43.2,-72.8C-31.3,-77.7,-15.6,-74.3,-1.4,-71.9C12.8,-69.4,25.7,-68.1,32.7,-60.3Z"
              />
            </g>
          </svg>
        </div>
        {/* Logo Background - Flashing */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <img
            src="/logo.png"
            alt="CodeRush X Logo"
            className="w-[900px] h-[900px] object-contain logo-flash"
            style={{
              filter: "blur(4px) drop-shadow(0 0 100px rgba(59,130,246,0.5))",
            }}
          />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative max-w-4xl z-10"
        >
          <motion.h1
            variants={item}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-glow"
          >
            <span className="bg-linear-to-r from-blue-400 via-blue-300 to-white bg-clip-text text-transparent">
              CodeRush X
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 text-blue-400/90 tracking-widest uppercase text-base font-medium"
          >
            Future of Tech Communities
          </motion.p>

          <motion.p
            variants={item}
            className="mt-8 text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed"
          >
            A high-signal community for developers, hackers, and builders
            shaping the <span className="text-blue-400">next generation</span>{" "}
            of technology.
          </motion.p>

          <motion.div variants={item} className="mt-12">
            <a
              href="#join"
              className="inline-flex px-8 py-3 rounded-lg border border-blue-500/50 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 font-semibold transition-colors"
            >
              Join Now →
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative py-24 px-6 z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            What is CodeRush X?
          </h2>
          <p className="mt-4 text-slate-400 text-lg leading-relaxed">
            CodeRush X is a community-driven platform where tech enthusiasts
            collaborate, upskill, and build projects that matter.
          </p>
        </div>
      </motion.section>

      {/* ================= WHY JOIN ================= */}
      <section className="relative py-24 px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Why Join?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Real Projects",
                desc: "Work on production-level projects, not tutorials.",
              },
              {
                title: "Elite Network",
                desc: "Connect with serious builders, founders, and devs.",
              },
              {
                title: "Career Growth",
                desc: "Hackathons, mentorship, referrals, and opportunities.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/40 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-slate-400">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="relative py-20 px-6 z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              ["500+", "Developers"],
              ["30+", "Projects"],
              ["10+", "Events"],
              ["∞", "Growth"],
            ].map(([num, label], i) => (
              <div key={i}>
                <p className="text-3xl font-bold text-blue-500">{num}</p>
                <p className="text-slate-500 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= JOIN ================= */}
      <section id="join" className="relative py-24 px-6 z-10">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl bg-slate-900/50 border border-slate-800"
          >
            <h2 className="text-xl font-bold text-center text-white">
              Join the Community
            </h2>
            <p className="mt-2 text-center text-slate-500 text-sm">
              Early access. Zero spam.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-black/50 border border-slate-700 focus:border-blue-500 outline-none transition-colors placeholder:text-slate-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-black/50 border border-slate-700 focus:border-blue-500 outline-none transition-colors placeholder:text-slate-600"
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 font-semibold text-white disabled:opacity-70 transition-colors"
              >
                {loading ? "Joining..." : "Get Early Access"}
              </motion.button>

              {message && (
                <p
                  className={`text-center text-sm ${error ? "text-red-400" : "text-blue-400"}`}
                >
                  {message}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="relative py-12 text-center z-10">
        <p className="text-slate-600 text-sm">
          © {new Date().getFullYear()} CodeRush X. Built by the community.
        </p>
      </footer>
    </main>
  );
}
