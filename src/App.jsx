import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  Globe2,
  GraduationCap,
  Menu,
  MessageCircle,
  Plane,
  Sparkles,
  X,
} from 'lucide-react'

const MOCK_TEST_URL = 'https://speakinternational.tcyonline.com/login'

const courses = [
  {
    number: '01',
    name: 'IELTS',
    subtitle: 'International English Language Testing System',
    description:
      'Prepare for your English proficiency test with focused practice in listening, reading, writing and speaking.',
    tags: ['Academic', 'General Training'],
    icon: Globe2,
  },
  {
    number: '02',
    name: 'OET',
    subtitle: 'Occupational English Test',
    description:
      'Build the language and communication skills needed for English assessments in healthcare.',
    tags: ['Healthcare', 'Professional English'],
    icon: BookOpen,
  },
  {
    number: '03',
    name: 'PTE',
    subtitle: 'Pearson Test of English',
    description:
      'Develop your English proficiency through structured practice and computer-based test preparation.',
    tags: ['Computer-based', 'Skills practice'],
    icon: Sparkles,
  },
  {
    number: '04',
    name: 'Spoken English',
    subtitle: 'Speak with greater confidence',
    description:
      'Improve fluency, vocabulary, pronunciation and everyday communication through guided learning.',
    tags: ['Fluency', 'Communication'],
    icon: MessageCircle,
  },
]

const benefits = [
  {
    number: '01',
    title: 'Learning with purpose',
    text: 'Focus on your goals with a learning path designed around the skills you want to develop.',
  },
  {
    number: '02',
    title: 'Practice that builds confidence',
    text: 'Strengthen your communication through regular practice and constructive feedback.',
  },
  {
    number: '03',
    title: 'Guidance for your next step',
    text: 'Build the confidence to pursue your academic, professional and personal ambitions.',
  },
]

const navLinks = [
  ['Home', '#home'],
  ['Courses', '#courses'],
  ['About', '#about'],
  ['Why GenZ', '#why-genz'],
  ['Contact', '#contact'],
]

function Brand({ footer = false }) {
  return (
    <a
      href="#home"
      aria-label="GenZ Education Hub home"
      className={`group flex shrink-0 items-center gap-3 ${
        footer ? 'mb-5' : ''
      }`}
    >
      <img
        src="/genz-logo.jpg"
        alt="GenZ Education Hub logo"
        className="h-12 w-12 rounded-full border border-[#d7b66d]/50 object-cover transition duration-500 group-hover:scale-105 sm:h-14 sm:w-14"
      />

      <span className="leading-tight">
        <span className="block text-lg font-semibold tracking-[0.1em] text-[#f8f5ed] sm:text-xl">
          GenZ
        </span>
        <span className="mt-1 block text-[9px] tracking-[0.17em] text-[#d7b66d] sm:text-[10px]">
          EDUCATION HUB
        </span>
      </span>
    </a>
  )
}

function SectionLabel({ children }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.23em] text-[#c8a45d]">
      <span className="h-px w-7 bg-[#c8a45d]" />
      {children}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCourse, setActiveCourse] = useState('')

  function selectCourse(courseName) {
    setActiveCourse(courseName)
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#0b0b0c] text-[#f8f5ed]">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#0b0b0c]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-12">
          <Brand />

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm text-white/65 transition hover:text-[#d7b66d]"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={MOCK_TEST_URL}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-white/65 transition hover:text-[#d7b66d]"
            >
              Mock tests ↗
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#c8a45d] px-5 py-3 text-xs font-semibold text-[#11100d] transition hover:bg-[#e5ca89]"
            >
              Enquire now <ArrowUpRight size={15} />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-md border border-white/15 p-2 lg:hidden"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-white/10 bg-[#101011] lg:hidden"
            >
              <div className="flex flex-col gap-1 px-5 py-4">
                {navLinks.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-md px-3 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-[#d7b66d]"
                  >
                    {label}
                  </a>
                ))}

                <a
                  href={MOCK_TEST_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-3 text-sm text-[#d7b66d]"
                >
                  Open mock tests ↗
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* CINEMATIC LANDING PAGE */}
        <section
          id="home"
          className="genz-hero relative flex min-h-[720px] items-center overflow-hidden sm:min-h-[790px]"
        >
          <div className="genz-hero-image" />
          <div className="genz-hero-overlay" />
          <div className="genz-grid" />
          <div className="genz-orb genz-orb-one" />
          <div className="genz-orb genz-orb-two" />

          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {Array.from({ length: 24 }, (_, i) => (
              <span
                key={i}
                className="genz-particle"
                style={{
                  left: `${(i * 37 + 7) % 100}%`,
                  top: `${(i * 53 + 11) % 100}%`,
                  animationDelay: `${(i % 8) * -0.7}s`,
                  animationDuration: `${7 + (i % 6)}s`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85 }}
            >
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#d7b66d]/30 bg-black/30 px-4 py-2 backdrop-blur-md">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#d7b66d]" />
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#f0d99f]">
                  Empowering students. Shaping futures.
                </span>
              </div>

              <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-6xl lg:text-[78px]">
                Think bigger.
                <br />
                Speak{' '}
                <span className="genz-gold-text font-serif italic">
                  brighter.
                </span>
                <br />
                Go further.
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
                Build your English skills, prepare for international
                proficiency tests and take confident steps towards the future
                you imagine.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#courses"
                  className="genz-gold-button inline-flex items-center gap-3 px-6 py-4 text-sm font-semibold text-[#11100d]"
                >
                  Explore our courses <ArrowRight size={17} />
                </a>

                <a
                  href="#about"
                  className="inline-flex items-center gap-3 border border-white/35 bg-black/20 px-6 py-4 text-sm transition hover:border-[#d7b66d] hover:text-[#f0d99f]"
                >
                  Discover GenZ <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-6 gap-y-4 border-t border-white/20 pt-6">
                {['IELTS', 'OET', 'PTE', 'Spoken English'].map((name) => (
                  <span
                    key={name}
                    className="text-xs font-medium text-white/75"
                  >
                    <span className="mr-2 text-[#d7b66d]">✦</span>
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="relative mx-auto hidden w-full max-w-sm lg:block lg:translate-x-48"
            >
              <div className="genz-glass-card relative rounded-2xl p-7">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-white/55">
                    The GenZ mindset
                  </span>
                  <Sparkles size={20} className="text-[#d7b66d]" />
                </div>

                <div className="my-9">
                  <p className="font-serif text-4xl leading-tight">
                    Your future
                    <br />
                    isn't a dream.
                    <br />
                    <span className="italic text-[#d7b66d]">
                      It's a direction.
                    </span>
                  </p>
                </div>

                <div className="space-y-4 border-t border-white/15 pt-5">
                  {[
                    'Build communication skills',
                    'Prepare with a clear learning path',
                    'Take your next step confidently',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-[#d7b66d]"
                      />
                      <span className="text-sm leading-6 text-white/75">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex items-center justify-between rounded-lg border border-[#d7b66d]/20 bg-[#d7b66d]/[0.07] p-4">
                  <div>
                    <p className="text-xs text-white/50">Your next step</p>
                    <p className="mt-1 text-sm font-medium">
                      Starts with learning.
                    </p>
                  </div>

                  <GraduationCap
                    size={28}
                    className="text-[#d7b66d]"
                  />
                </div>
              </div>

              <div className="genz-floating-label absolute -right-10 top-16 rounded-lg border border-white/15 bg-[#111112]/90 px-4 py-3 shadow-xl backdrop-blur-xl">
                <span className="block text-[9px] uppercase tracking-widest text-white/45">
                  Learn
                </span>
                <span className="mt-1 block text-sm text-[#e5cb8b]">
                  Grow. Explore.
                </span>
              </div>

              <div className="genz-floating-label absolute -bottom-7 -right-5 rounded-lg border border-[#d7b66d]/25 bg-[#111112]/90 px-4 py-3 shadow-xl backdrop-blur-xl">
                <span className="flex items-center gap-2 text-xs text-white/80">
                  <Globe2 size={15} className="text-[#d7b66d]" />
                  A world of possibilities
                </span>
              </div>
            </motion.div>
          </div>

          <a
            href="#courses"
            className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[9px] uppercase tracking-[0.24em] text-white/55"
          >
            Scroll to explore
            <span className="genz-scroll-line" />
          </a>
        </section>

        {/* COURSE QUICK LINKS */}
        <section className="border-y border-white/10 bg-[#111112]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 sm:px-8 md:grid-cols-4 lg:px-12">
            {courses.map((course, index) => (
              <a
                key={course.name}
                href="#courses"
                className={`group flex items-center gap-3 py-5 transition hover:bg-white/[0.04] sm:py-6 ${
                  index % 2 === 0 ? 'pr-3' : 'pl-3'
                } ${
                  index < 2 ? 'border-b border-white/10 md:border-b-0' : ''
                } ${
                  index === 0 || index === 2
                    ? 'md:border-r md:border-white/10 md:pr-5'
                    : ''
                } md:px-5`}
              >
                <course.icon
                  size={21}
                  className="shrink-0 text-[#c8a45d]"
                />

                <div>
                  <p className="text-sm font-medium">{course.name}</p>
                  <p className="mt-1 text-[10px] text-white/40">
                    Explore course
                  </p>
                </div>

                <ArrowUpRight
                  size={14}
                  className="ml-auto text-white/30 transition group-hover:text-[#d7b66d]"
                />
              </a>
            ))}
          </div>
        </section>

        {/* COURSES */}
        <section
          id="courses"
          className="scroll-mt-24 bg-[#f5f1e8] py-20 text-[#151514] sm:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
            >
              <div>
                <SectionLabel>Find your starting point</SectionLabel>

                <h2 className="text-4xl font-medium tracking-[-0.045em] sm:text-5xl">
                  The right skills.
                  <br />
                  <span className="font-serif italic text-[#9a7736]">
                    A world of possibilities.
                  </span>
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-7 text-[#151514]/65">
                Choose the learning path that fits your goals. Start building
                the skills to move forward.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {courses.map((course, index) => (
                <motion.article
                  key={course.name}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group flex min-h-[350px] flex-col border border-[#151514]/10 bg-white/65 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#b08c48]/60 hover:bg-white hover:shadow-xl hover:shadow-black/[0.05] sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs tracking-[0.16em] text-[#151514]/40">
                      {course.number}
                    </span>

                    <course.icon
                      size={24}
                      strokeWidth={1.4}
                      className="text-[#9a7736] transition duration-300 group-hover:scale-110"
                    />
                  </div>

                  <h3 className="mt-9 text-3xl font-medium tracking-tight">
                    {course.name}
                  </h3>

                  <p className="mt-2 text-[11px] font-medium leading-5 text-[#9a7736]">
                    {course.subtitle}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-[#151514]/65">
                    {course.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {course.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-[#151514]/10 px-2.5 py-1 text-[10px] text-[#151514]/65"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => selectCourse(course.name)}
                    className="mt-auto flex items-center justify-between border-t border-[#151514]/10 pt-5 text-left text-xs font-semibold"
                  >
                    Enquire about {course.name}
                    <ArrowUpRight
                      size={16}
                      className="text-[#9a7736] transition group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </button>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="scroll-mt-24 bg-[#0b0b0c] py-20 sm:py-28"
        >
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-24 lg:px-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -left-4 -top-4 h-24 w-24 border-l border-t border-[#c8a45d]/60" />

              <div className="relative flex min-h-[380px] flex-col justify-between overflow-hidden border border-white/10 bg-[#141415] p-7 sm:min-h-[440px] sm:p-10">
                <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full border border-[#c8a45d]/15" />
                <div className="absolute -bottom-10 -right-10 h-52 w-52 rounded-full border border-[#c8a45d]/20" />

                <div className="relative">
                  <img
                    src="/genz-logo.jpg"
                    alt="GenZ Education Hub emblem"
                    className="h-24 w-24 rounded-full object-cover sm:h-28 sm:w-28"
                  />

                  <p className="mt-8 max-w-sm font-serif text-4xl leading-tight sm:text-5xl">
                    Small steps can lead to{' '}
                    <span className="italic text-[#d7b66d]">
                      big destinations.
                    </span>
                  </p>
                </div>

                <div className="relative mt-10 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-xs text-white/45">
                    Learn · Practice · Progress
                  </span>
                  <Plane size={19} className="text-[#d7b66d]" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel>A little about us</SectionLabel>

              <h2 className="text-4xl font-medium leading-tight tracking-[-0.045em] sm:text-5xl">
                Education that
                <br />
                <span className="font-serif italic text-[#d7b66d]">
                  moves you forward.
                </span>
              </h2>

              <p className="mt-7 text-sm leading-8 text-white/60 sm:text-base">
                GenZ Education Hub is built around a simple idea: learning
                should help you move closer to the future you want. Whether
                you're preparing for an English proficiency test or developing
                your spoken English, your journey begins with building the
                right skills.
              </p>

              <p className="mt-4 text-sm leading-8 text-white/60 sm:text-base">
                Based in Kozhencherry, Pathanamthitta, Kerala, we aim to help
                learners develop confidence and prepare for new opportunities.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-3 border-b border-[#c8a45d]/60 pb-2 text-sm text-[#d7b66d] transition hover:border-[#e0c27e]"
              >
                Let's discuss your goals <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>
        </section>

        {/* WHY GENZ */}
        <section
          id="why-genz"
          className="scroll-mt-24 border-y border-white/10 bg-[#111112] py-20 sm:py-24"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <SectionLabel>The GenZ approach</SectionLabel>

                <h2 className="text-4xl font-medium tracking-[-0.045em] sm:text-5xl">
                  More than a
                  <br />
                  <span className="font-serif italic text-[#d7b66d]">
                    test score.
                  </span>
                </h2>

                <p className="mt-6 max-w-md text-sm leading-8 text-white/55">
                  The aim is not only to prepare for an exam, but also to
                  develop communication skills and confidence that you can
                  carry into everyday life.
                </p>
              </motion.div>

              <div className="divide-y divide-white/10">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.number}
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="grid gap-3 py-6 sm:grid-cols-[55px_1fr] sm:gap-5 sm:py-8"
                  >
                    <span className="pt-1 text-xs tracking-widest text-[#c8a45d]">
                      {benefit.number}
                    </span>

                    <div>
                      <h3 className="text-xl font-medium">
                        {benefit.title}
                      </h3>

                      <p className="mt-3 max-w-xl text-sm leading-7 text-white/50">
                        {benefit.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Correctly closed paragraph, container and section */}
            <p className="mt-6 border-t border-white/10 pt-5 text-xs leading-6 text-white/50">
              Every learner's journey is unique. We focus on building skills,
              confidence, and progress through purposeful learning and practice.
            </p>
          </div>
        </section>

        {/* ADMISSIONS CTA */}
        <section
          id="contact"
          className="scroll-mt-24 bg-[#c8a45d] text-[#11100d]"
        >
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.23em] text-[#11100d]/65">
                Your next step begins here
              </p>

              <h2 className="max-w-2xl text-4xl font-medium leading-tight tracking-[-0.045em] sm:text-5xl">
                Ready to work towards your goals?
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#11100d]/70">
                Interested in a course? Prepare an enquiry and contact our
                team to learn more about available training.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href={`mailto:?subject=${encodeURIComponent(
                  `Course enquiry — GenZ Education Hub${
                    activeCourse ? ` — ${activeCourse}` : ''
                  }`,
                )}&body=${encodeURIComponent(
                  `Hello GenZ Education Hub,\n\nI'm interested in ${
                    activeCourse || 'your courses'
                  }.\n\nPlease share more information about the course and admissions.\n\nThank you.`,
                )}`}
                className="inline-flex items-center gap-3 bg-[#11100d] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#29251b]"
              >
                {activeCourse
                  ? `Ask about ${activeCourse}`
                  : 'Start an enquiry'}

                <ArrowUpRight size={17} />
              </a>

              <a
                href={MOCK_TEST_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-[#11100d]/30 px-5 py-4 text-sm font-semibold transition hover:bg-black/5"
              >
                Mock tests <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#09090a]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.7fr] lg:px-12">
          <div>
            <Brand footer />

            <p className="max-w-sm text-sm leading-7 text-white/45">
              Building English skills and confidence for the opportunities
              ahead.
            </p>

            <p className="mt-4 text-xs text-white/35">
              Kozhencherry, Pathanamthitta, Kerala
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#d7b66d]">
              Explore
            </h3>

            <div className="flex flex-col items-start gap-3 text-sm text-white/55">
              {navLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="transition hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#d7b66d]">
              Our courses
            </h3>

            <div className="flex flex-col items-start gap-3 text-sm text-white/55">
              {courses.map((course) => (
                <a
                  key={course.name}
                  href="#courses"
                  className="transition hover:text-white"
                >
                  {course.name}
                </a>
              ))}

              <a
                href={MOCK_TEST_URL}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                Mock test login ↗
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-[11px] text-white/35 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
            <span>
              © {new Date().getFullYear()} GenZ Education Hub. All rights
              reserved.
            </span>

            <span>Learn today. Go further.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App