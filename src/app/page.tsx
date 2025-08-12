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

  const projects: Array<{
    title: string;
    desc: string;
    badges?: string[];
    href?: string;
  }> = [
    {
      title: "Traxidy (Capstone)",
      desc: "Integrated Google Calendar & Meet so task deadlines auto-appear with invites.",
      badges: ["2025"],
    },
    {
      title: "Unihabitat",
      desc: "Student-first housing marketplace with secure listings, messaging, and moderation.",
      badges: ["Next.js", "Supabase"],
      href: "https://unihabitat.app",
    },
    {
      title: "RallyUp (iOS)",
      desc: "Discover & host local sports sessions; live maps, host tools, and auto-created chats.",
      badges: ["SwiftUI"],
      href: "https://github.com/rsenthi4",
    },
    {
      title: "Unblock AI",
      desc: "A writing flow booster using AI prompts, realtime notes, and image support.",
      badges: ["Next.js", "Clerk"],
      href: "https://unblock-ai.example.com",
    },
  ];

  return (
    <main className="font-sans min-h-screen px-6 py-10 sm:px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-44 bg-background text-primary">
      <motion.section
        initial="hidden"
        animate="show"
        variants={container}
        className="max-w-3xl"
      >
        {/* Header with circle avatar and greeting */}
        <motion.header variants={item} className="mb-6 flex items-center gap-4">
          <span className="inline-block w-6 h-6 rounded-full bg-secondary/40" aria-hidden />
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-primary">
            Hi, I’m Rishikumar Senthilvel
          </h1>
        </motion.header>

        {/* Taglines */}
        <motion.p variants={item} className="text-secondary text-[15px] sm:text-base leading-relaxed">
          I build full-stack apps with clean UI and reliable backend plumbing.
        </motion.p>
        <motion.p variants={item} className="text-secondary text-[15px] sm:text-base leading-relaxed mb-8">
          Currently shipping calendar + auth integrations for product teams.
        </motion.p>

        {/* Projects */}
        <motion.ul variants={container} className="space-y-6 mb-10">
          {projects.map((p) => (
            <motion.li
              key={p.title}
              variants={item}
              className="group"
            >
              <div className="flex items-center gap-2 mb-1">
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
                {p.badges?.map((b) => (
                  <span
                    key={b}
                    className="ml-2 text-[11px] leading-5 px-2 py-0.5 rounded-full bg-[color:var(--color-accent)] text-secondary"
                  >
                    {b}
                  </span>
                ))}
              </div>
              <p className="text-secondary text-[15px] leading-relaxed">
                {p.desc}
              </p>
            </motion.li>
          ))}
        </motion.ul>

        {/* Links */}
        <motion.div variants={item} className="flex flex-wrap items-center gap-5 mb-10 text-[15px]">
          <Link
            href="mailto:rsenthi4@asu.edu"
            className="inline-flex items-center gap-2 text-primary hover:opacity-80"
          >
            <Mail size={18} /> Say hi
          </Link>
          <Link
            href="https://github.com/rsenthi4"
            target="_blank"
            className="inline-flex items-center gap-2 text-primary hover:opacity-80"
            rel="noreferrer"
          >
            <Github size={18} /> GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/rishikumar-s/"
            target="_blank"
            className="inline-flex items-center gap-2 text-primary hover:opacity-80"
            rel="noreferrer"
          >
            <Linkedin size={18} /> LinkedIn
          </Link>
          <Link
            href="/resume.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 text-primary hover:opacity-80"
            rel="noreferrer"
          >
            <FileText size={18} /> Résumé
          </Link>
        </motion.div>

        {/* Footer */}
        <motion.footer variants={item} className="text-xs text-secondary pb-8">
          © {new Date().getFullYear()} Rishikumar Senthilvel. Built with Next.js & Tailwind.
        </motion.footer>
      </motion.section>
    </main>
  );
}
