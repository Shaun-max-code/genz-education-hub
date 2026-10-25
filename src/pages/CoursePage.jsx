import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, CheckCircle2, Clock3, GraduationCap, MessageCircle, BookOpen, Target } from 'lucide-react'
import {
  EnquiryButtons,
  MOCK_TEST_URL,
  PageHero,
  SiteLayout,
} from '../components/SiteLayout'

const courseInfo = {
  ielts: {
    name: 'IELTS Preparation',
    short: 'IELTS',
    subtitle: 'International English Language Testing System',
    description:
      'Prepare for IELTS with structured English practice, exam-focused strategies, and guidance across all four language skills.',
    intro:
      'Whether you are preparing for higher education, migration, or professional opportunities, our IELTS preparation program focuses on developing your English skills and understanding the test format.',
    skills: [
      {
        title: 'Listening',
        description:
          'Practice listening tasks, identifying key information, understanding different accents, and managing question time.',
      },
      {
        title: 'Reading',
        description:
          'Build reading speed, understand question types, identify relevant information, and develop skimming and scanning techniques.',
      },
      {
        title: 'Writing',
        description:
          'Work on task structure, paragraph organisation, vocabulary, grammar, and clear written communication.',
      },
      {
        title: 'Speaking',
        description:
          'Develop fluency, pronunciation, vocabulary, and confidence through guided speaking practice.',
      },
    ],
    outcomes: [
      'Understand the IELTS test format and question types.',
      'Develop strategies for listening and reading tasks.',
      'Improve writing structure, grammar, and vocabulary.',
      'Build confidence when answering speaking questions.',
      'Identify areas for improvement through practice.',
    ],
    suitableFor: [
      'Students planning to study abroad.',
      'Candidates preparing for English proficiency requirements.',
      'Learners who want structured IELTS practice.',
    ],
    note:
      'IELTS Academic and General Training serve different purposes. Contact our team to discuss which test is appropriate for your goals.',
    faqs: [
      {
        question: 'Which IELTS test should I take?',
        answer:
          'IELTS Academic is commonly used for higher education, while General Training is used for certain migration and other purposes. Check the requirements of your intended institution or organisation.',
      },
      {
        question: 'Does the course cover all four skills?',
        answer:
          'The preparation areas described here cover listening, reading, writing, and speaking. Contact the institute to confirm the current class structure and available practice sessions.',
      },
      {
        question: 'How long does preparation take?',
        answer:
          'Preparation time depends on your current English level, target score, and available study time. Contact our team to discuss your needs.',
      },
    ],
  },

  oet: {
    name: 'OET Preparation',
    short: 'OET',
    subtitle: 'Occupational English Test',
    description:
      'Develop English communication skills for healthcare-focused language assessment and professional situations.',
    intro:
      'OET preparation focuses on using English in healthcare-related contexts. Learners can work on language skills and communication tasks relevant to the test.',
    skills: [
      {
        title: 'Listening',
        description:
          'Practice understanding spoken information in healthcare-related situations and identifying important details.',
      },
      {
        title: 'Reading',
        description:
          'Develop techniques for understanding healthcare texts, locating information, and responding to different question types.',
      },
      {
        title: 'Writing',
        description:
          'Practise organising written communication for healthcare scenarios, with attention to purpose, clarity, and appropriate language.',
      },
      {
        title: 'Speaking',
        description:
          'Develop professional communication through role-play practice and healthcare-related speaking scenarios.',
      },
    ],
    outcomes: [
      'Understand the structure of the OET test.',
      'Improve comprehension of healthcare-related texts and conversations.',
      'Practise writing clearly for professional healthcare contexts.',
      'Build confidence with role-play speaking scenarios.',
      'Identify language skills that need further practice.',
    ],
    suitableFor: [
      'Healthcare professionals preparing for an English test.',
      'Candidates who need healthcare-focused English practice.',
      'Learners seeking to improve professional communication.',
    ],
    note:
      'OET is designed for healthcare professionals. Test requirements vary by profession and organisation, so confirm the requirements relevant to your career plans.',
    faqs: [
      {
        question: 'Who is OET designed for?',
        answer:
          'OET is designed for healthcare professionals. Check whether it is accepted by the regulator, employer, or institution relevant to your profession.',
      },
      {
        question: 'What skills are covered?',
        answer:
          'OET assesses listening, reading, writing, and speaking in healthcare-related contexts.',
      },
      {
        question: 'Can I ask about preparation for my profession?',
        answer:
          'Yes. Contact the institute and explain your professional background and target requirements to discuss suitable preparation options.',
      },
    ],
  },

  pte: {
    name: 'PTE Preparation',
    short: 'PTE',
    subtitle: 'Pearson Test of English',
    description:
      'Prepare for a computer-based English proficiency test with structured practice and strategies for different task types.',
    intro:
      'PTE preparation helps learners become familiar with the computer-based test format and practise the language skills needed for their goals.',
    skills: [
      {
        title: 'Speaking',
        description:
          'Practise spoken responses, pronunciation, fluency, and completing tasks within the allotted time.',
      },
      {
        title: 'Writing',
        description:
          'Develop written responses with attention to grammar, vocabulary, organisation, and task requirements.',
      },
      {
        title: 'Reading',
        description:
          'Practise reading comprehension, vocabulary, and strategies for answering questions efficiently.',
      },
      {
        title: 'Listening',
        description:
          'Work on understanding spoken English, recognising important information, and responding to listening tasks.',
      },
    ],
    outcomes: [
      'Become familiar with the computer-based test experience.',
      'Understand different question and task formats.',
      'Improve spoken English fluency and pronunciation.',
      'Strengthen writing, reading, and listening skills.',
      'Develop time-management strategies for practice tasks.',
    ],
    suitableFor: [
      'Students exploring English proficiency tests for overseas study.',
      'Candidates whose target institution accepts PTE.',
      'Learners who want structured computer-based test practice.',
    ],
    note:
      'PTE test types and acceptance requirements can vary. Confirm the specific test and score requirements with your intended institution or organisation.',
    faqs: [
      {
        question: 'Is PTE a computer-based test?',
        answer:
          'PTE tests are computer-based. The specific format depends on the PTE test you choose.',
      },
      {
        question: 'Which skills should I practise?',
        answer:
          'Preparation can cover speaking, writing, reading, and listening, along with test-format awareness and time management.',
      },
      {
        question: 'How can I choose my target score?',
        answer:
          'Check the current score requirements published by your intended institution, employer, or other relevant organisation.',
      },
    ],
  },

  'spoken-english': {
    name: 'Spoken English',
    short: 'Spoken English',
    subtitle: 'Speak with greater confidence',
    description:
      'Improve everyday English communication through guided practice in fluency, vocabulary, pronunciation, and conversation.',
    intro:
      'Our Spoken English course is designed around practical communication. The focus is on expressing your ideas more clearly, expanding vocabulary, and becoming more comfortable speaking English.',
    skills: [
      {
        title: 'Everyday conversation',
        description:
          'Practise common conversations and learn to communicate more naturally in everyday situations.',
      },
      {
        title: 'Vocabulary building',
        description:
          'Expand useful vocabulary and learn how to form clear, meaningful sentences.',
      },
      {
        title: 'Pronunciation and fluency',
        description:
          'Work on pronunciation, speaking rhythm, and expressing ideas with greater confidence.',
      },
      {
        title: 'Communication practice',
        description:
          'Build confidence through guided speaking activities and practical communication exercises.',
      },
    ],
    outcomes: [
      'Become more comfortable speaking English.',
      'Build vocabulary for everyday situations.',
      'Improve sentence formation and grammar awareness.',
      'Practise pronunciation and speaking fluency.',
      'Develop clearer communication in familiar situations.',
    ],
    suitableFor: [
      'Students who want to improve conversational English.',
      'Job seekers preparing for interviews and workplace communication.',
      'Learners who want to build confidence speaking English.',
    ],
    note:
      'Learning needs differ from person to person. Contact our team to discuss your current level, goals, and the class options available.',
    faqs: [
      {
        question: 'Is Spoken English suitable for beginners?',
        answer:
          'Contact the institute to discuss your current English level and whether the available classes are suitable for your learning needs.',
      },
      {
        question: 'What will I practise?',
        answer:
          'Practice areas can include everyday conversation, vocabulary, sentence formation, pronunciation, and fluency.',
      },
      {
        question: 'Will I get information about class timings?',
        answer:
          'Yes. Contact our team for current class timings, availability, course structure, and enrolment information.',
      },
    ],
  },
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7b66d]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-medium leading-tight sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm leading-7 text-white/60">
          {description}
        </p>
      )}
    </div>
  )
}

export default function CoursePage({ course }) {
  const data = courseInfo[course]

  if (!data) {
    return (
      <SiteLayout>
        <PageHero
          eyebrow="Course not found"
          title="Course details unavailable"
          description="Please return to the courses page and select a course."
        />
        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-sm text-[#d7b66d]"
          >
            <ArrowLeft size={16} />
            Back to all courses
          </Link>
        </section>
      </SiteLayout>
    )
  }

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Course details"
        title={
          <>
            {data.short}{' '}
            <span className="font-serif italic text-[#d7b66d]">
              preparation.
            </span>
          </>
        }
        description={`${data.subtitle}. ${data.description}`}
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <SectionHeading
            eyebrow="About the course"
            title={`Take the next step with ${data.name}.`}
            description={data.intro}
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="border border-white/10 bg-white/[0.03] p-5">
              <BookOpen className="text-[#d7b66d]" size={22} />
              <h3 className="mt-4 font-medium">Structured learning</h3>
              <p className="mt-2 text-sm leading-6 text-white/55">
                Focus on the skills and practice areas relevant to your course.
              </p>
            </div>
            <div className="border border-white/10 bg-white/[0.03] p-5">
              <Target className="text-[#d7b66d]" size={22} />
              <h3 className="mt-4 font-medium">Goal-focused practice</h3>
              <p className="mt-2 text-sm leading-6 text-white/55">
                Discuss your learning goals and areas where you need support.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <SectionHeading
              eyebrow="What you can learn"
              title="Build your skills step by step."
              description="Explore the main learning areas covered by this course."
            />

            <div className="mt-6 space-y-4">
              {data.skills.map((skill, index) => (
                <article
                  key={skill.title}
                  className="border border-white/10 bg-[#121213] p-5 sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex size-9 shrink-0 items-center justify-center border border-[#d7b66d]/30 text-xs text-[#d7b66d]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-medium">{skill.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-white/60">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <SectionHeading
              eyebrow="Learning outcomes"
              title="What you can work towards."
              description="Your progress will depend on your starting level, practice, and learning goals."
            />

            <ul className="mt-6 space-y-4">
              {data.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex items-start gap-3 text-sm leading-7 text-white/70"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-1 shrink-0 text-[#d7b66d]"
                  />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 border-l-2 border-[#d7b66d]/60 bg-white/[0.03] p-5">
            <h3 className="font-medium">Important information</h3>
            <p className="mt-2 text-sm leading-7 text-white/60">
              {data.note}
            </p>
          </div>

          <div className="mt-12">
            <SectionHeading
              eyebrow="Who is this for?"
              title="Is this course right for you?"
            />

            <ul className="mt-6 space-y-4">
              {data.suitableFor.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-7 text-white/70"
                >
                  <GraduationCap
                    size={19}
                    className="mt-1 shrink-0 text-[#d7b66d]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <SectionHeading
              eyebrow="Frequently asked questions"
              title="Things you may want to know."
            />

            <div className="mt-6 space-y-3">
              {data.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group border border-white/10 bg-[#121213] p-5"
                >
                  <summary className="cursor-pointer list-none pr-4 font-medium marker:hidden">
                    <span className="flex items-center justify-between gap-4">
                      <span>{faq.question}</span>
                      <span className="text-xl text-[#d7b66d] group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-white/60">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>

          <Link
            to="/courses"
            className="mt-10 inline-flex items-center gap-2 text-sm text-[#d7b66d] transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to all courses
          </Link>
        </div>

        <aside className="h-fit border border-[#d7b66d]/25 bg-[#121213] p-6 sm:p-8 lg:sticky lg:top-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d7b66d]">
            Take the next step
          </p>

          <h2 className="mt-4 text-2xl font-medium">
            Ask about {data.name}
          </h2>

          <p className="mt-3 text-sm leading-7 text-white/60">
            Want to know more about course content, available timings, fees, or
            admissions? Contact GenZ Education Hub for the latest information.
          </p>

          <div className="mt-6 space-y-3">
            <EnquiryButtons course={data.name} />
          </div>

          <a
            href={MOCK_TEST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-[#d7b66d]"
          >
            Open mock test login
            <ArrowUpRight size={15} />
          </a>

          <div className="mt-8 border-t border-white/10 pt-6">
            <div className="flex items-start gap-3">
              <MessageCircle
                size={20}
                className="mt-1 shrink-0 text-[#d7b66d]"
              />
              <div>
                <h3 className="text-sm font-medium">Need course guidance?</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">
                  Tell us your goals so our team can share the current course
                  options and help you decide your next step.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-start gap-3 text-xs leading-6 text-white/45">
            <Clock3 size={17} className="mt-1 shrink-0" />
            <p>
              Contact the institute to confirm class timings, course duration,
              fees, and current availability.
            </p>
          </div>
        </aside>
      </section>
    </SiteLayout>
  )
}