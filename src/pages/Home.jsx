
import { Link } from 'react-router-dom'

const courses = [
  {
    title: 'IELTS Preparation',
    slug: 'ielts',
    subtitle: 'Prepare for your international English test.',
    tag: 'STUDY ABROAD',
    icon: '✈',
  },
  {
    title: 'OET Preparation',
    slug: 'oet',
    subtitle: 'English preparation for healthcare professionals.',
    tag: 'HEALTHCARE',
    icon: '＋',
  },
  {
    title: 'PTE Preparation',
    slug: 'pte',
    subtitle: 'Build your skills for the PTE Academic test.',
    tag: 'PTE ACADEMIC',
    icon: '◈',
  },
  {
    title: 'Spoken English',
    slug: 'spoken-english',
    subtitle: 'Develop confidence in everyday communication.',
    tag: 'COMMUNICATION',
    icon: '✳',
  },
]

function Brand({ light = false }) {
  return (
    <a href="/" className="flex items-center gap-3">
      <img
        src="/genz-logo.jpg"
        alt="GenZ Education Hub logo"
        className="h-14 w-14 rounded-full object-contain"
      />
      <span>
        <span className={`block text-lg font-bold tracking-wide ${light ? 'text-white' : 'text-slate-950'}`}>
          GenZ
        </span>
        <span className={`block text-[10px] font-semibold uppercase tracking-[0.2em] ${light ? 'text-amber-300' : 'text-slate-500'}`}>
          Education Hub
        </span>
      </span>
    </a>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3 md:px-8">
          <Brand />
          <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
            <a href="#home" className="hover:text-amber-700">Home</a>
            <a href="#courses" className="hover:text-amber-700">Courses</a>
            <a href="#about" className="hover:text-amber-700">About Us</a>
            <a href="#success" className="hover:text-amber-700">Student Success</a>
          </nav>
          <a href="#contact" className="rounded-full bg-[#b78b43] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#98702f]">
            Enquire Now ↗
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="relative isolate overflow-hidden bg-[#101b2e]">
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center opacity-25"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=85')",
            }}
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101b2e] via-[#101b2e]/95 to-[#101b2e]/45" />

          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-[1.15fr_.85fr]">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
                <span className="h-2 w-2 rounded-full bg-amber-300" />
                Your journey. Your future.
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
                Open doors to a
                <span className="block font-serif italic text-amber-300">world of opportunity.</span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
                Build your English skills, prepare for your next milestone,
                and take the next step towards your global ambitions with
                GenZ Education Hub.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a href="#courses" className="rounded-full bg-[#c29a52] px-7 py-4 text-sm font-bold text-[#151c27] transition hover:bg-amber-300">
                  Explore our courses <span className="ml-2">↗</span>
                </a>
                <a href="#about" className="rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10">
                  Discover GenZ
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-300">
                <span>✦ Personalised guidance</span>
                <span>✦ Goal-focused preparation</span>
                <span>✦ Supportive learning</span>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative mx-auto max-w-md rounded-[2rem] border border-white/15 bg-white/[0.07] p-4 shadow-2xl backdrop-blur-sm">
                <img
                  src="/genz-logo.jpg"
                  alt="GenZ Education Hub emblem"
                  className="mx-auto aspect-square w-full max-w-[310px] rounded-3xl object-contain"
                />
                <div className="rounded-2xl border border-white/10 bg-[#101b2e]/80 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-amber-300">Start with purpose</p>
                  <p className="mt-2 text-xl font-semibold text-white">
                    Every next step begins with learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="courses" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a77931]">Find your path</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Learning built around <span className="font-serif italic text-[#a77931]">your goals.</span>
              </h2>
            </div>
            <p className="max-w-md leading-7 text-slate-600">
              Explore our English preparation programmes and choose a course
              that fits where you want to go next.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((course, index) => (
              <article
                key={course.slug}
                className="group flex min-h-72 flex-col rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f4eee2] text-2xl text-[#9b702e]">
                    {course.icon}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">0{index + 1}</span>
                </div>
                <p className="mt-7 text-[10px] font-bold tracking-[0.16em] text-[#a77931]">
                  {course.tag}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{course.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{course.subtitle}</p>
                <Link
                  to={`/courses/${course.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-[#a77931]"
                >
                  Explore course <span>↗</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="bg-[#f0ede6]">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-2">
            <div className="rounded-[2rem] bg-[#122038] p-8 text-white md:p-12">
              <img
                src="/genz-logo.jpg"
                alt="GenZ Education Hub"
                className="mb-8 h-24 w-24 rounded-full object-contain"
              />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">Welcome to GenZ</p>
              <h2 className="mt-4 text-3xl font-semibold leading-snug md:text-4xl">
                A learning space for your next chapter.
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                We aim to help learners strengthen their communication skills
                and prepare with greater confidence for their academic,
                professional, and international goals.
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a77931]">About our approach</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
                Your ambition deserves a clear direction.
              </h2>
              <p className="mt-6 leading-8 text-slate-600">
                At GenZ Education Hub in Kozhencherry, Pathanamthitta,
                Kerala, our aim is to make learning purposeful, supportive,
                and aligned with each learner's goals.
              </p>
              <div className="mt-8 space-y-5">
                {[
                  ['01', 'Goal-focused learning', 'Start with what you want to achieve.'],
                  ['02', 'Guidance that supports you', 'Get information to help plan your preparation.'],
                  ['03', 'Confidence through practice', 'Build skills step by step and keep improving.'],
                ].map(([number, title, description]) => (
                  <div key={number} className="flex gap-4 border-b border-slate-300 pb-5">
                    <span className="font-serif text-xl italic text-[#a77931]">{number}</span>
                    <div>
                      <h3 className="font-semibold">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="success" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a77931]">Your progress matters</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              The next success story could be <span className="font-serif italic text-[#a77931]">yours.</span>
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Every learner has a different destination. Talk to our team
              about your goals, preparation needs, and the right course for you.
            </p>
            <a href="#contact" className="mt-8 inline-flex rounded-full bg-[#122038] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#243653]">
              Discuss your goals ↗
            </a>
          </div>
        </section>

        <section id="contact" className="px-5 pb-20 md:px-8 md:pb-24">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#122038] px-7 py-12 text-white md:px-14 md:py-16">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">Take the first step</p>
                <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Let's plan your next move.</h2>
                <p className="mt-4 max-w-xl leading-7 text-slate-300">
                  Get in touch to ask about courses, preparation, and admissions.
                </p>
                <p className="mt-3 text-sm text-slate-300">Kozhencherry, Pathanamthitta, Kerala</p>
              </div>
              <a
                href="mailto:?subject=GenZ%20Education%20Hub%20Enquiry"
                className="inline-flex items-center justify-center rounded-full bg-[#c29a52] px-7 py-4 text-sm font-bold text-[#151c27] transition hover:bg-amber-300"
              >
                Make an enquiry ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 md:flex-row md:items-center md:justify-between md:px-8">
          <Brand />
          <p className="text-xs leading-6 text-slate-500">
            © {new Date().getFullYear()} GenZ Education Hub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
