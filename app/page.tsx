'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Compass,
  HeartHandshake,
  Leaf,
  PlayCircle,
  Quote,
  Sparkles,
  Stars,
  Sunrise,
  Users,
  Wind,
} from 'lucide-react';
import Image from 'next/image';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const fadeInUp = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0 } };

const moodData = [
  { week: 'W1', confidence: 54, resilience: 47, cooperation: 62 },
  { week: 'W2', confidence: 61, resilience: 53, cooperation: 66 },
  { week: 'W3', confidence: 69, resilience: 60, cooperation: 72 },
  { week: 'W4', confidence: 75, resilience: 67, cooperation: 79 },
  { week: 'W5', confidence: 82, resilience: 73, cooperation: 85 },
];

const microLessons = ['Emotional Intelligence', 'Discipline', 'Communication', 'Digital Parenting', 'Purpose', 'Resilience'];

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-heroGradient text-creamSoft">
      <section className="section-shell py-7 md:py-10">
        <nav className="glass-card-dark flex items-center justify-between px-5 py-4">
          <Image src="/parent360-logo.svg" alt="Parent360 logo" width={190} height={46} priority />
          <button className="rounded-full bg-goldWarm px-5 py-2 text-sm font-semibold text-charcoal">Begin the Journey</button>
        </nav>
      </section>

      <section className="section-shell pb-20 pt-8 md:pb-28 md:pt-14">
        <motion.div initial="hidden" animate="show" variants={fadeInUp} transition={{ duration: 0.8 }} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-indigoDeep via-[#243179] to-[#121a45] p-8 md:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(215,168,74,.28),transparent_40%),radial-gradient(circle_at_88%_8%,rgba(152,176,140,.2),transparent_42%)]" />
          <p className="relative mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-creamSoft/85"><Sparkles className="h-3.5 w-3.5 text-goldWarm" /> Collins Odhiambo Parenting Framework</p>
          <h1 className="relative max-w-5xl text-4xl font-semibold leading-tight md:text-6xl">In a world chasing grades, likes, and validation… raise a child who knows who they are.</h1>
          <p className="relative mt-6 max-w-3xl text-lg text-creamSoft/85">Parent360 helps modern parents raise emotionally resilient, purpose-driven, culturally grounded children.</p>
          <div className="relative mt-9 flex flex-wrap gap-3">{['Begin the Journey', 'Explore the Framework', 'Meet the AI Coach'].map((cta, i) => <button key={cta} className={`rounded-full px-5 py-3 text-sm font-semibold ${i === 0 ? 'bg-goldWarm text-charcoal' : 'border border-white/30 bg-white/5 text-creamSoft'}`}>{cta}</button>)}</div>
        </motion.div>
      </section>

      <section className="section-shell pb-20">
        <motion.article variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-7 rounded-[2rem] border border-white/10 bg-white/5 p-8 md:grid-cols-2 md:p-12">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-sageMuted">Why Parent360 Exists</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">A generation is overexposed, overpressured, and under-rooted.</h2>
          </div>
          <div className="space-y-4 text-creamSoft/82">
            <p>Modern parenting is navigating validation culture, emotionally disconnected education, and pressure-driven childhoods that reward performance over identity.</p>
            <p>Parent360 responds with a leadership ecosystem for families—combining emotional intelligence, cultural grounding, future readiness, and practical coaching for everyday moments.</p>
          </div>
        </motion.article>
      </section>

      <section className="section-shell pb-24">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-[2rem] border border-white/10 bg-[#121b49] p-8 md:p-12">
          <h2 className="text-3xl font-semibold md:text-5xl">Roots & Wings Experience</h2>
          <p className="mt-3 max-w-3xl text-creamSoft/80">A child anchored in identity and values can rise with courage into a global future.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <motion.div whileHover={{ y: -4 }} className="rounded-3xl border border-goldWarm/30 bg-gradient-to-b from-goldWarm/20 to-transparent p-6">
              <Leaf className="h-7 w-7 text-goldWarm" />
              <h3 className="mt-3 text-2xl font-semibold">Roots</h3>
              <p className="mt-2 text-creamSoft/80">Identity, values, culture, belonging, family systems, and internal validation.</p>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="rounded-3xl border border-sageMuted/30 bg-gradient-to-b from-sageMuted/20 to-transparent p-6">
              <Wind className="h-7 w-7 text-sageMuted" />
              <h3 className="mt-3 text-2xl font-semibold">Wings</h3>
              <p className="mt-2 text-creamSoft/80">Courage, innovation, confidence, global thinking, and future leadership.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="section-shell grid gap-6 pb-24 md:grid-cols-3">
        {[['Self-Validation', 'Teach children to self-affirm from within, not from social approval cycles.', Compass], ['Fear as Opportunity', 'Fear is excitement without breath—pause, breathe, and move toward growth.', Sunrise], ['Unique Purpose', 'Go beyond grades into gifts, contribution, and intrinsic purpose pathways.', Stars]].map(([title, text, Icon]) => (
          <motion.article key={title} variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <Icon className="h-6 w-6 text-goldWarm" />
            <h3 className="mt-3 text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-creamSoft/80">{text}</p>
          </motion.article>
        ))}
      </section>

      <section className="section-shell space-y-8 pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <h3 className="text-2xl font-semibold">FutureSchool Hub</h3>
            <p className="mt-3 text-creamSoft/80">The future of education beyond memorization: discovery quests, passion-based adventures, mastery maps, emotional intelligence, and future-ready skills.</p>
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <h3 className="text-2xl font-semibold">AI Parenting Coach</h3>
            <p className="mt-3 text-creamSoft/80">Compassionate and culturally aware support with exact scripts for hard conversations.</p>
            <div className="mt-4 rounded-2xl border border-white/15 bg-black/20 p-4 text-sm text-creamSoft/80"><HeartHandshake className="mb-2 h-4 w-4 text-goldWarm" />“I see how heavy this feels. Let&apos;s breathe, name the emotion, then choose one courageous step together.”</div>
          </article>
        </div>

        <article className="rounded-3xl border border-white/10 bg-white/5 p-7">
          <h3 className="text-2xl font-semibold">Behavior & Mood Intelligence</h3>
          <p className="mt-2 text-creamSoft/75">Emotional growth signals visualized with calm, human-centered insight.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="h-64 rounded-2xl bg-[#0c1130] p-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={moodData}>
                  <defs><linearGradient id="confidence" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#D7A84A" stopOpacity={0.7} /><stop offset="95%" stopColor="#D7A84A" stopOpacity={0} /></linearGradient></defs>
                  <CartesianGrid stroke="#ffffff22" />
                  <XAxis dataKey="week" stroke="#F6EFE3" /><YAxis stroke="#F6EFE3" />
                  <Tooltip />
                  <Area type="monotone" dataKey="confidence" stroke="#D7A84A" fill="url(#confidence)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="h-64 rounded-2xl bg-[#0c1130] p-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={moodData}>
                  <CartesianGrid stroke="#ffffff22" />
                  <XAxis dataKey="week" stroke="#F6EFE3" /><YAxis stroke="#F6EFE3" />
                  <Tooltip />
                  <Line type="monotone" dataKey="resilience" stroke="#98B08C" strokeWidth={3} dot={false} />
                  <Line type="monotone" dataKey="cooperation" stroke="#F6EFE3" strokeWidth={3} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </article>
      </section>

      <section className="section-shell pb-24">
        <h3 className="text-3xl font-semibold md:text-4xl">Parenting Corner</h3>
        <p className="mt-3 max-w-3xl text-creamSoft/80">Parenting wisdom, reels, reflections, and thought leadership—because Parent360 is also a philosophy and media movement.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {['The strongest homes raise self-trusting children.', 'Discipline with dignity builds character, not fear.', 'Purpose grows where curiosity is protected.'].map((q) => <article key={q} className="rounded-3xl border border-white/10 bg-white/5 p-5"><Quote className="h-5 w-5 text-goldWarm" /><p className="mt-3 text-sm text-creamSoft/85">{q}</p></article>)}
          <article className="rounded-3xl border border-white/10 bg-gradient-to-br from-sageMuted/25 to-transparent p-5 md:col-span-2"><PlayCircle className="h-6 w-6 text-goldWarm" /><p className="mt-3 text-sm text-creamSoft/85">Video preview: helping teens build identity beyond comparison culture.</p></article>
        </div>
      </section>

      <section className="section-shell grid gap-6 pb-24 md:grid-cols-2">
        <article className="rounded-3xl border border-white/10 bg-white/5 p-7"><h3 className="text-2xl font-semibold">Teen Mode</h3><p className="mt-3 text-creamSoft/80">Identity-building leadership space for teens with growth rituals and purpose prompts—empowering, never surveillance.</p><div className="mt-5 flex items-center gap-3 text-sm text-sageMuted"><Users className="h-5 w-5" /> Empowerment track enabled</div></article>
        <article className="rounded-3xl border border-white/10 bg-white/5 p-7"><h3 className="text-2xl font-semibold">Micro-Lessons</h3><div className="mt-4 grid grid-cols-2 gap-3">{microLessons.map((m) => <div key={m} className="rounded-2xl border border-white/15 bg-black/20 px-3 py-3 text-sm">{m}</div>)}</div></article>
      </section>

      <section className="section-shell pb-24">
        <article className="rounded-3xl border border-white/10 bg-white/5 p-8"><h3 className="text-3xl font-semibold">Testimonials & Transformation</h3><div className="mt-6 grid gap-4 md:grid-cols-3">{['“Our home moved from correction to connection.”', '“My son now speaks with grounded confidence.”', '“We rebuilt trust, rhythm, and joy.”'].map((t) => <blockquote key={t} className="rounded-2xl bg-black/20 p-4 text-sm text-creamSoft/85">{t}</blockquote>)}</div></article>
      </section>

      <section className="section-shell pb-20">
        <motion.div whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0.9, scale: 0.98 }} className="rounded-[2rem] border border-goldWarm/40 bg-gradient-to-r from-[#1b255f] to-[#2a3370] p-10 text-center md:p-14">
          <h3 className="mx-auto max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">The future is not built by better grades alone. It is built by emotionally whole children.</h3>
          <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-goldWarm px-6 py-3 text-sm font-semibold text-charcoal">Begin the Journey <ArrowRight className="h-4 w-4" /></button>
        </motion.div>
      </section>
    </main>
  );
}
