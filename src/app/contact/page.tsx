'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, Copy, Github, Linkedin, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';

const cardContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const email = 'sdo92122@hotmail.com';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      setCopied(false);
    }
  };

  return (
    <div className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-20 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-4"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accentneongreen/80">Contact</p>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">Let&apos;s Connect</h1>
          <p className="max-w-3xl text-lg text-primary-foreground/80">
            Whether it&apos;s research, engineering, collaboration, or opportunities—I&apos;m always happy to talk.
          </p>
        </motion.div>

        <motion.div
          variants={cardContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-6 md:grid-cols-3"
        >
          <motion.div
            variants={cardItem}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-accentneongreen/60"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-full border border-accentneongreen/40 bg-accentneongreen/10 p-3 text-accentneongreen">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-accentneongreen/80">Email</p>
                <p className="mt-1 text-white">sdo92122@hotmail.com</p>
              </div>
            </div>
            <p className="mt-4 text-primary-foreground/70">Direct email is the fastest way to reach me.</p>
            <Button
              onClick={handleCopy}
              variant="outline"
              className="mt-5 w-full justify-center border-accentneongreen/50 text-accentneongreen hover:bg-accentneongreen/10"
            >
              {copied ? (
                <span className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4" /> Copied
                </span>
              ) : (
                <span className="inline-flex items-center gap-2">
                  <Copy className="h-4 w-4" /> Copy email
                </span>
              )}
            </Button>
          </motion.div>

          <motion.div
            variants={cardItem}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-accentneongreen/60"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-full border border-accentneongreen/40 bg-accentneongreen/10 p-3 text-accentneongreen">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-accentneongreen/80">LinkedIn</p>
                <p className="mt-1 text-white">Stay connected on LinkedIn</p>
              </div>
            </div>
            <p className="mt-4 text-primary-foreground/70">Follow project updates and professional milestones.</p>
            <Button
              asChild
              variant="outline"
              className="mt-5 w-full justify-center border-accentneongreen/50 text-accentneongreen hover:bg-accentneongreen/10"
            >
              <Link href="https://www.linkedin.com/in/saahil-doshi-a2564a332/i" target="_blank" rel="noreferrer">
                Open LinkedIn
              </Link>
            </Button>
          </motion.div>

          <motion.div
            variants={cardItem}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-accentneongreen/60"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-full border border-accentneongreen/40 bg-accentneongreen/10 p-3 text-accentneongreen">
                <Github className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-accentneongreen/80">GitHub</p>
                <p className="mt-1 text-white">Explore my repositories</p>
              </div>
            </div>
            <p className="mt-4 text-primary-foreground/70">
              See how I build interfaces, data tools, and aerospace utilities.
            </p>
            <Button
              asChild
              variant="outline"
              className="mt-5 w-full justify-center border-accentneongreen/50 text-accentneongreen hover:bg-accentneongreen/10"
            >
              <Link href="https://github.com/saahildoshi/saahildoshi-portfolio" target="_blank" rel="noreferrer">
                View GitHub
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="border-t border-white/5 bg-gradient-to-r from-white/5 via-white/0 to-white/5 py-14"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accentneongreen/80">Collaboration</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Interested in research, engineering projects, or collaboration? I&apos;d love to hear from you.
            </h2>
          </div>
          <Button
            asChild
            className="rounded-full bg-accentneongreen px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary hover:bg-accentneongreen/90"
          >
            <a href="mailto:sdo92122@hotmail.com">Email Me</a>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
