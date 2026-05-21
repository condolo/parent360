'use client';

import { motion } from 'framer-motion';
import { BrainCircuit, ChartNoAxesCombined, HeartHandshake, Rocket, ShieldCheck, Sparkles, Star, WandSparkles } from 'lucide-react';
import Image from 'next/image';

const sectionAnim = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const features = [
  { icon: BrainCircuit, title: '3. AI Coach', text: 'Personalized guidance for real-time parenting decisions and emotional coaching.' },
  { icon: Rocket, title: '4. FutureSchool Hub', text: 'Learning pathways, future-ready skills, and school partnership tools in one space.' },
  { icon: ChartNoAxesCombined, title: 'Behavior Tracker', text: 'Track patterns, wins, and growth trends with actionable family insights.' },
  { icon: WandSparkles, title: '6. Parenting Toolkit', text: 'Scripts, routines, and proven frameworks for calmer mornings and smoother evenings.' },
];

export default function Home() {
  return (
    <main className="bg-radialGlow">
      <section className="section-shell py-8 md:py-12">
        <header className="glass-card flex items-center justify-between px-5 py-4">
          <Image src="/parent360-logo.svg" alt="Parent360 logo" width={180} height={44} priority />
          <button className="rounded-full bg-indigoDeep px-5 py-2 text-sm font-semibold text-creamSoft transition hover:-translate-y-0.5">
            Start Free
          </button>
        </header>
      </section>

      <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} variants={sectionAnim} transition={{ duration: 0.6 }} className="section-shell pb-16 pt-6 text-center md:pb-24">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigoDeep/10 bg-white px-4 py-2 text-xs font-semibold tracking-wide text-indigoDeep">
          <Sparkles className="h-4 w-4 text-goldWarm" /> Parenting, elevated.
        </p>
        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-indigoDeep md:text-6xl">Raising resilient kids with clarity, calm, and AI-powered support.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-charcoal/80">Parent360 combines evidence-based parenting philosophy with elegant tools your family will actually use.</p>
      </motion.section>

      <section className="section-shell grid gap-6 pb-16 md:grid-cols-2 md:pb-24">
        <motion.article variants={sectionAnim} initial="hidden" whileInView="show" viewport={{ once: true }} className="glass-card p-8">
          <h2 className="text-2xl font-semibold text-indigoDeep">1. Parenting philosophy</h2>
          <p className="mt-4 text-charcoal/80">Grounded in attachment, boundaries, and reflective listening. Parent360 helps families build trust while staying consistent.</p>
        </motion.article>
        <motion.article variants={sectionAnim} initial="hidden" whileInView="show" viewport={{ once: true }} className="glass-card p-8">
          <h2 className="text-2xl font-semibold text-indigoDeep">2. AI Coach</h2>
          <p className="mt-4 text-charcoal/80">Ask for help in the moment: tantrums, transitions, screen time, sibling conflict, and more.</p>
        </motion.article>
      </section>

      <section className="section-shell pb-16 md:pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {features.map(({ icon: Icon, title, text }) => (
            <motion.article key={title} variants={sectionAnim} initial="hidden" whileInView="show" viewport={{ once: true }} className="glass-card p-8 transition hover:-translate-y-1">
              <Icon className="h-8 w-8 text-goldWarm" />
              <h3 className="mt-4 text-xl font-semibold text-indigoDeep">{title}</h3>
              <p className="mt-2 text-charcoal/80">{text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-16 md:pb-24">
        <motion.div variants={sectionAnim} initial="hidden" whileInView="show" viewport={{ once: true }} className="glass-card overflow-hidden p-8">
          <h2 className="text-2xl font-semibold text-indigoDeep">5. Behavior Tracker dashboard preview</h2>
          <div className="mt-6 grid gap-4 rounded-2xl bg-indigoDeep p-5 text-creamSoft md:grid-cols-3">
            <div><p className="text-xs uppercase">Positive interactions</p><p className="text-3xl font-bold">89%</p></div>
            <div><p className="text-xs uppercase">Routine consistency</p><p className="text-3xl font-bold">74%</p></div>
            <div><p className="text-xs uppercase">Emotional regulation</p><p className="text-3xl font-bold">+23%</p></div>
          </div>
        </motion.div>
      </section>

      <section className="section-shell grid gap-6 pb-16 md:grid-cols-3 md:pb-24">
        <article className="glass-card p-8 md:col-span-2">
          <h2 className="text-2xl font-semibold text-indigoDeep">7. Testimonials</h2>
          <blockquote className="mt-4 border-l-4 border-goldWarm pl-4 text-charcoal/80">“Parent360 has changed our evenings. Less yelling, more connection, and practical tools we use daily.”</blockquote>
          <p className="mt-2 text-sm text-charcoal/60">— Maya R., Parent of 2</p>
        </article>
        <article className="glass-card p-8">
          <h2 className="text-2xl font-semibold text-indigoDeep">8. Pricing</h2>
          <p className="mt-4 text-sm text-charcoal/70">Starting at</p>
          <p className="text-4xl font-bold text-indigoDeep">$19<span className="text-lg font-medium">/month</span></p>
          <ul className="mt-4 space-y-2 text-sm text-charcoal/80">
            <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-goldWarm" /> AI Coach access</li>
            <li className="flex items-center gap-2"><HeartHandshake className="h-4 w-4 text-goldWarm" /> Family profiles</li>
            <li className="flex items-center gap-2"><Star className="h-4 w-4 text-goldWarm" /> Toolkit library</li>
          </ul>
        </article>
      </section>

      <footer className="border-t border-indigoDeep/10 bg-white/80 py-10">
        <div className="section-shell flex flex-col items-center justify-between gap-4 md:flex-row">
          <Image src="/parent360-logo.svg" alt="Parent360 logo" width={140} height={34} />
          <p className="text-sm text-charcoal/70">© {new Date().getFullYear()} Parent360. Conscious parenting, future-ready families.</p>
        </div>
      </footer>
    </main>
  );
}
