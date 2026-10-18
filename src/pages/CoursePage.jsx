
import { Link, useParams } from 'react-router-dom'

const courseData = {
  ielts: {
    title: 'IELTS Preparation',
    eyebrow: 'International English Testing',
    description:
      'Prepare for IELTS with focused practice in Listening, Reading, Writing, and Speaking.',
    skills: ['Listening', 'Reading', 'Writing', 'Speaking'],
  },
  oet: {
    title: 'OET Preparation',
    eyebrow: 'English for Healthcare',
    description:
      'Build your English skills for healthcare-focused communication and OET preparation.',
    skills: ['Listening', 'Reading', 'Writing', 'Speaking'],
  },
  pte: {
    title: 'PTE Preparation',
    eyebrow: 'PTE Academic',
    description:
      'Practise academic English and become familiar with the key skills assessed in PTE Academic.',
    skills: ['Speaking & Writing', 'Reading', 'Listening', 'Practice tests'],
  },
  'spoken-english': {
    title: 'Spoken English',
    eyebrow: 'Everyday Communication',
    description:
      'Develop clearer communication, improve fluency, and build confidence using English.',
    skills: ['Conversation', 'Pronunciation', 'Vocabulary', 'Fluency'],
  },
}

export default function CoursePage() {
  const { courseSlug } = useParams()
  const course = courseData[courseSlug]

  if (!course) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#101b2e] px-6 text-center text-white">
        <h1 className="text-4xl font-bold">Course not found</h1>
        <Link to="/" className="mt-6 text-amber-300 underline">
          Return to GenZ Education Hub
        </Link>
      </main>
    )
  }

  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/genz-logo.jpg"
              alt="GenZ Education Hub"
              className="h-12 w-12 rounded-full object-contain"
            />
            <span>
              <span className="block font-bold">GenZ</span>
              <span className="block text-[10px] uppercase tracking-[0.18em] text-slate-500">
                Education Hub
              </span>
            </span>
          </Link>
          <Link to="/#courses" className="text-sm font-semibold hover:text-amber-700">
            ← All courses
          </Link>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[#101b2e] text-white">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-300">
              {course.eyebrow}
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
              {course.title}
              <span className="mt-2 block font-serif italic text-amber-300">
                Your next step starts here.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              {course.description}
            </p>
            <a
              href={`/?course=${encodeURIComponent(course.title)}#contact`}
              className="mt-9 inline-flex rounded-full bg-[#c29a52] px-7 py-4 font-bold text-[#151c27] transition hover:bg-amber-300"
            >
              Enquire about this course ↗
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a77931]">
            What you can work on
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Build your skills, step by step.
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {course.skills.map((skill, index) => (
              <div
                key={skill}
                className="rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="font-serif text-2xl italic text-[#a77931]">
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-xl font-semibold">{skill}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Explore this skill as part of your preparation plan.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-[#f0ede6] p-8 md:p-10">
            <h2 className="text-2xl font-semibold">Ready to take the next step?</h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Contact GenZ Education Hub to ask about course availability,
              preparation options, and admissions.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={`/?course=${encodeURIComponent(course.title)}#contact`}
                className="rounded-full bg-[#122038] px-6 py-3 font-semibold text-white hover:bg-[#243653]"
              >
                Contact us ↗
              </a>
              <a
                href="https://speakinternational.tcyonline.com/login"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-300 px-6 py-3 font-semibold hover:bg-white"
              >
                Open mock tests ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-5 py-7 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} GenZ Education Hub · Kozhencherry, Kerala
      </footer>
    </div>
  )
}
