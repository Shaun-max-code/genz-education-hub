import { Link, NavLink } from 'react-router-dom'
import { ArrowUpRight, BookOpen, MapPin, MessageCircle } from 'lucide-react'

export const WHATSAPP_NUMBERS = [
  { label: 'WhatsApp 1', display: '+91 89431 67472', number: '918943167472' },
  { label: 'WhatsApp 2', display: '+91 85472 67472', number: '918547267472' },
]
export const MOCK_TEST_URL = 'https://speakinternational.tcyonline.com/login'
export const BUSINESS_LOCATION = 'Kozhencherry, Pathanamthitta, Kerala'
export const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=GenZ+Education+Hub%2C+Poyanil+Junction%2C+Kozhencherry%2C+Pathanamthitta%2C+Kerala+689641'
export const INSTAGRAM_URL = 'https://www.instagram.com/genzedu_learning_hub/'

export function whatsappUrl(number, course = 'your English courses', message = '') {
  const text = `Hello GenZ Education Hub!\n\nI'm interested in ${course} at your Kozhencherry branch.${message ? `\n\n${message}` : ''}\n\nPlease share more information about the course, timings and admissions.\n\nThank you.`
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`
}

const links = [
  ['Home', '/'],
  ['Courses', '/courses'],
  ['Mock Tests', MOCK_TEST_URL],
  ['Contact', '/contact'],
]

export function SiteLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#0b0b0c] text-[#f8f5ed]">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b0b0c]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link to="/" className="flex items-center gap-3" aria-label="GenZ Education Hub home">
            <img src="/genz-logo.jpg" alt="GenZ Education Hub logo" className="h-11 w-11 rounded-full border border-[#d7b66d]/50 object-cover" />
            <span><span className="block text-lg font-semibold tracking-[0.1em]">GenZ</span><span className="block text-[9px] tracking-[0.17em] text-[#d7b66d]">EDUCATION HUB</span></span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm md:flex" aria-label="Main navigation">
            {links.map(([label, href]) => href.startsWith('http') ? <a key={label} href={href} target="_blank" rel="noreferrer" className="text-white/65 transition hover:text-[#d7b66d]">{label} ↗</a> : <NavLink key={label} to={href} className={({isActive}) => `transition hover:text-[#d7b66d] ${isActive ? 'text-[#d7b66d]' : 'text-white/65'}`}>{label}</NavLink>)}
          </nav>
          <Link to="/contact" className="rounded-full bg-[#c8a45d] px-4 py-2.5 text-xs font-bold text-[#11100d] transition hover:bg-[#e5ca89] sm:text-sm">Enquire now <ArrowUpRight className="ml-1 inline" size={15} /></Link>
        </div>
        <nav className="flex gap-5 overflow-x-auto border-t border-white/5 px-5 py-3 text-xs text-white/60 md:hidden" aria-label="Mobile navigation">
          {links.map(([label, href]) => href.startsWith('http') ? <a key={label} href={href} target="_blank" rel="noreferrer" className="shrink-0">{label} ↗</a> : <NavLink key={label} to={href} className={({isActive}) => `shrink-0 ${isActive ? 'text-[#d7b66d]' : ''}`}>{label}</NavLink>)}
        </nav>
      </header>
      <main>{children}</main>
      <footer className="border-t border-white/10 bg-[#09090a]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-3">
          <div><Link to="/" className="flex items-center gap-3"><img src="/genz-logo.jpg" alt="" className="h-12 w-12 rounded-full object-cover"/><span><strong className="block tracking-widest">GenZ</strong><span className="text-[10px] tracking-widest text-[#d7b66d]">EDUCATION HUB</span></span></Link><p className="mt-4 max-w-sm text-sm leading-7 text-white/50">English test preparation and communication learning in Kozhencherry, Pathanamthitta, Kerala.</p></div>
          <div><h2 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#d7b66d]">Explore</h2><div className="flex flex-col items-start gap-3 text-sm text-white/60"><Link to="/courses">All courses</Link><Link to="/courses/ielts">IELTS preparation</Link><Link to="/courses/oet">OET preparation</Link><Link to="/courses/pte">PTE preparation</Link><Link to="/courses/spoken-english">Spoken English</Link><a href={MOCK_TEST_URL} target="_blank" rel="noreferrer">Mock test login ↗</a><Link to="/contact">Contact and admissions</Link></div></div>
          <div><h2 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#d7b66d]">Contact</h2><p className="mb-4 flex items-start gap-2 text-sm text-white/60"><MapPin size={17} className="mt-1 shrink-0 text-[#d7b66d]"/>{BUSINESS_LOCATION}</p><div className="flex flex-col items-start gap-3">{WHATSAPP_NUMBERS.map(n=><a key={n.number} href={whatsappUrl(n.number)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#d7b66d]"><MessageCircle size={16}/>{n.display}</a>)}<a href={MAPS_URL} target="_blank" rel="noreferrer" className="text-sm text-[#d7b66d]">Get directions ↗</a><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-sm text-white/65 hover:text-[#d7b66d]">Instagram ↗</a></div></div>
        </div>
        <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/35">© {new Date().getFullYear()} GenZ Education Hub. All rights reserved.</div>
      </footer>
    </div>
  )
}

export function PageHero({ eyebrow, title, description }) {
  return <section className="border-b border-white/10 bg-[radial-gradient(ellipse_at_top_right,_rgba(200,164,93,0.13),_transparent_50%)]"><div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24"><p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#d7b66d]">{eyebrow}</p><h1 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-6xl">{title}</h1><p className="mt-6 max-w-2xl text-sm leading-8 text-white/60 sm:text-base">{description}</p></div></section>
}

export function EnquiryButtons({ course }) {
  return <div className="flex flex-wrap gap-3">{WHATSAPP_NUMBERS.map(n=><a key={n.number} href={whatsappUrl(n.number, course)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#c8a45d] px-5 py-3 text-sm font-semibold text-[#11100d] transition hover:bg-[#e5ca89]"><MessageCircle size={17}/>{n.label}: {n.display}<ArrowUpRight size={15}/></a>)}</div>
}
