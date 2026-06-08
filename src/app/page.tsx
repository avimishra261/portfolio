"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Terminal, Code2, Server, GraduationCap, Award, BrainCircuit, ExternalLink } from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <main className="min-h-screen text-foreground pb-20">
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-card rounded-none border-t-0 border-x-0 border-b border-border/50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono font-bold text-xl tracking-tighter">Avi.M</span>
          <div className="flex gap-6 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 pt-32">
        {/* Hero Section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="min-h-[70vh] flex flex-col justify-center"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit mb-6 border border-primary/20">
            <Award className="w-4 h-4" />
            <span>AIR 888 @GATE CS26</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Hi, I'm Avi Mishra. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Systems & OS Enthusiast
            </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            I am a computer science student deeply interested in understanding how systems work beneath the surface. I enjoy exploring operating systems, computer networks, and low-level programming in C.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4">
            <a href="mailto:avimishra261@gmail.com" className="glass-card px-6 py-3 font-medium flex items-center gap-2 hover:bg-white/5 transition-colors">
              <Mail className="w-5 h-5" />
              Get in touch
            </a>
            <div className="flex gap-4 items-center px-4">
              <a href="https://github.com/avimishra261" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/avimish261" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </motion.section>

        {/* Education & Achievements Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          id="about" 
          className="py-20 border-t border-border/50"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-10 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-primary" />
            Education & Background
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="glass-card p-8">
              <h3 className="text-xl font-bold mb-2">B.Tech Computer Science</h3>
              <p className="text-primary font-medium mb-4">Indore Institute of Science and Technology • 2023 - 2027</p>
              <p className="text-muted-foreground leading-relaxed">
                Focusing on core computer science fundamentals. Built a compiler frontend interfacing with a GCC backend as a major academic project. Passionate about problem-solving and structured learning.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card p-8">
              <h3 className="text-xl font-bold mb-2">Major Achievements</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>GATE CS 2026:</strong> Cleared with All India Rank (AIR) 888 and a score of 724.</span>
                </li>
                <li className="flex items-start gap-3">
                  <BrainCircuit className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Generative AI:</strong> Certified in "What is Generative AI?" and exploring Agentic AI systems.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          id="projects" 
          className="py-20 border-t border-border/50"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-10 flex items-center gap-3">
            <Terminal className="w-8 h-8 text-primary" />
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Exam-Portal",
                desc: "A highly structured, GATE-like exam portal with dual views, AI-powered analysis, real-time leaderboard, and full-screen proctoring.",
                tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
                link: "https://github.com/avimishra261/Exam-Portal"
              },
              {
                title: "Custom Version Control",
                desc: "A lightweight version control system built from scratch, inspired by Git. Focuses on systems programming and file differencing.",
                tech: ["C++", "Systems", "Data Structures"],
                link: "https://github.com/avimishra261/own_version_control"
              },
              {
                title: "MiniLang-Compiler",
                desc: "A mini compiler for a C-like language. Features Lexical, Syntax, and Semantic Analysis, mapping to a GCC backend.",
                tech: ["C", "Compiler Design"],
                link: "https://github.com/avimishra261/MiniLang-Compiler"
              },
              {
                title: "Custom Printf",
                desc: "Implementation of the standard C library printf function to understand variadic functions, formatting, and low-level I/O.",
                tech: ["C", "Memory Management"],
                link: "https://github.com/avimishra261/_printf_in_c"
              }
            ].map((project, i) => (
              <motion.a 
                key={i}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                variants={itemVariants}
                className="glass-card p-8 group cursor-pointer block"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, j) => (
                    <span key={j} className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          id="skills" 
          className="py-20 border-t border-border/50"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-10 flex items-center gap-3">
            <Code2 className="w-8 h-8 text-primary" />
            Technical & Soft Skills
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={itemVariants} className="glass-card p-6">
              <Server className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-4">Systems & Low-Level</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Operating Systems</li>
                <li>Computer Networks</li>
                <li>Compiler Design</li>
                <li>C / C++ Programming</li>
                <li>Linux System Calls</li>
              </ul>
            </motion.div>
            
            <motion.div variants={itemVariants} className="glass-card p-6">
              <BrainCircuit className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-4">AI & Modern Dev</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Agentic AI Systems</li>
                <li>Generative AI</li>
                <li>Next.js & TypeScript</li>
                <li>PostgreSQL & Prisma</li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card p-6">
              <Code2 className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-4">Values & Principles</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Rational Problem Solving</li>
                <li>Continuous Learner</li>
                <li>Legal & Ethical Work Frame</li>
                <li>Equality & Equity</li>
              </ul>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Footer */}
        <footer className="pt-10 pb-6 border-t border-border/50 text-center text-muted-foreground text-sm">
          <p>Built by Antigravity (Agentic AI) for Avi Mishra.</p>
        </footer>
      </div>
    </main>
  );
}
