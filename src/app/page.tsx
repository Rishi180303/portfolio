"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, FileText } from "lucide-react";

export default function Home() {
  const easeOutBezier: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const container: Variants = {
    hidden: { opacity: 0, y: 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.06, duration: 0.5, ease: easeOutBezier },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOutBezier } },
  };

  const experience: Array<{
    title: string;
    period: string;
    desc: string;
  }> = [
    {
      title: "Traxidy — ASU Capstone",
      period: "Jan 2025 – Current",
      desc: "Integrated Google Calendar & Meet so task deadlines auto‑appear; OAuth linking and invites.",
    },
    {
      title: "Technology Support Assistant — ASU",
      period: "Jan 2023 – Oct 2023",
      desc: "Built a Python package that boosted streaming speed 3× and resolved complex dual‑OS classroom issues.",
    },
  ];

  const projects: Array<{
    title: string;
    desc: string;
    badges?: string[];
    href?: string;
  }> = [
    {
      title: "Unihabitat",
      desc: "Student-first housing marketplace with secure listings, messaging, and moderation.",
      badges: ["Next.js", "Supabase", "TypeScript", "Tailwind", "Google Places"],
      href: "https://www.unihabitat.org/",
    },
    {
      title: "RallyUp (iOS)",
      desc: "Discover & host local sports sessions; live maps, host tools, and auto-created chats.",
      badges: ["SwiftUI", "Firebase", "MapKit", "Foursquare"],
      href: "https://github.com/Rishi180303/RallyUp",
    },
    {
      title: "Unblock AI",
      desc: "A writing flow booster using AI prompts, realtime notes, and image support.",
      badges: ["Next.js", "Clerk", "OpenAI", "Firebase", "React Query"],
      href: "https://unblock-ai.vercel.app/",
    },
  ];

  return (
    <main className="font-sans min-h-screen flex items-center justify-center px-6 py-10 sm:px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-44 bg-background text-primary">
      <motion.section
        initial="hidden"
        animate="show"
        variants={container}
        className="max-w-3xl w-full"
      >
        {/* Header with circle avatar and greeting */}
        <motion.header variants={item} className="mb-6 flex items-center justify-start gap-4">
          <span className="inline-block w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-secondary/30" aria-hidden>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/profile_pic.jpg" alt="Rishikumar Senthilvel" className="w-12 h-12 sm:w-14 sm:h-14 object-cover" />
          </span>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-primary">
            Hi, I’m Rishikumar Senthilvel
          </h1>
        </motion.header>

        {/* Taglines */}
        <motion.p variants={item} className="text-secondary text-[15px] sm:text-base leading-relaxed">
          I’m a senior CS student at ASU who likes to build things.
        </motion.p>
        <motion.p variants={item} className="text-secondary text-[15px] sm:text-base leading-relaxed mb-8">
          Actively seeking opportunities to contribute to innovative and groundbreaking projects.
        </motion.p>

        {/* Experience */}
        <motion.h2 variants={item} className="text-[17px] font-semibold text-primary mb-3">
          Experience
        </motion.h2>
        <motion.ul variants={container} className="space-y-5 mb-10">
          {experience.map((e) => (
            <motion.li key={e.title} variants={item}>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-[18px] sm:text-lg font-medium text-primary">{e.title}</h3>
                <span className="text-[11px] leading-5 px-2 py-0.5 rounded-full bg-[color:var(--color-accent)] text-secondary">
                  {e.period}
                </span>
              </div>
              <p className="text-secondary text-[15px] leading-relaxed">{e.desc}</p>
            </motion.li>
          ))}
        </motion.ul>

        {/* Projects */}
        <motion.h2 variants={item} className="text-[17px] font-semibold text-primary mb-3">
          Projects
        </motion.h2>
        <motion.ul variants={container} className="space-y-6 mb-10">
          {projects.map((p) => (
            <motion.li key={p.title} variants={item}>
              <div className="flex items-center justify-start gap-2 mb-1">
                <h3 className="text-[18px] sm:text-lg font-medium text-primary">
                  {p.title}
                </h3>
                {p.href && (
                  <Link
                    href={p.href}
                    className="inline-flex items-center text-secondary hover:text-primary"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${p.title}`}
                  >
                    <ExternalLink size={16} />
                  </Link>
                )}
                {/* Badges: show first 2; reveal the rest when hovering the +N chip area only */}
                <span className="inline-flex items-center gap-0">
                  {p.badges?.slice(0, 2).map((b) => (
                    <span
                      key={b}
                      className="ml-2 text-[11px] leading-5 px-2 py-0.5 rounded-full bg-[color:var(--color-accent)] text-secondary"
                    >
                      {b}
                    </span>
                  ))}
                  {p.badges && p.badges.length > 2 && (
                    <span className="relative inline-flex items-center ml-2 group/badges">
                      <span
                        className="text-[11px] leading-5 px-2 py-0.5 rounded-full bg-[color:var(--color-accent)] text-secondary transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/badges:opacity-0 group-hover/badges:scale-90 group-hover/badges:max-w-0 group-hover/badges:px-0 group-hover/badges:mr-0 overflow-hidden"
                      >
                        +{p.badges.length - 2}
                      </span>
                      {p.badges.slice(2).map((b) => (
                        <span
                          key={b}
                          className="ml-2 text-[11px] leading-5 rounded-full bg-[color:var(--color-accent)] text-secondary opacity-0 scale-95 -translate-x-1 max-w-0 px-0 mr-0 overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/badges:opacity-100 group-hover/badges:scale-100 group-hover/badges:translate-x-0 group-hover/badges:max-w-[160px] group-hover/badges:px-2"
                        >
                          {b}
                        </span>
                      ))}
                    </span>
                  )}
                </span>
              </div>
              <p className="text-secondary text-[15px] leading-relaxed">
                {p.desc}
              </p>
            </motion.li>
          ))}
        </motion.ul>

        {/* Links */}
        <motion.div variants={item} className="flex flex-wrap items-center justify-start gap-5 mb-10 text-[15px]">
          <Link
            href="mailto:rsenthi4@asu.edu"
            className="inline-flex items-center gap-2 text-primary hover:opacity-80"
          >
            <Mail size={18} /> Say hi
          </Link>
          <Link
            href="https://github.com/Rishi180303"
            target="_blank"
            className="inline-flex items-center gap-2 text-primary hover:opacity-80"
            rel="noreferrer"
          >
            <Github size={18} /> GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/rishikumar18"
            target="_blank"
            className="inline-flex items-center gap-2 text-primary hover:opacity-80"
            rel="noreferrer"
          >
            <Linkedin size={18} /> LinkedIn
          </Link>
          <Link
            href="/Rishikumar_Resume.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 text-primary hover:opacity-80"
            rel="noreferrer"
          >
            <FileText size={18} /> Résumé
          </Link>
        </motion.div>

        {/* Footer removed per request */}
      </motion.section>
    </main>
  );
}
