import { useState } from 'react'
import { ArrowUpRight, Code, Briefcase, Mail, Menu, X, MessageCircle, Send } from 'lucide-react'
import { supabase } from './supabase'
import { links, stack, featured, projects } from './data'

const nav = ['About', 'Stack', 'Work', 'Contact']
const wrap = 'mx-auto max-w-6xl px-5'
const btn = 'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition'
const primary = `${btn} bg-emerald-400 text-emerald-950 hover:bg-emerald-300`
const ghost = `${btn} border border-zinc-700 text-zinc-100 hover:border-emerald-400 hover:text-emerald-300`
const Tag = ({ children }) => (
  <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-400">{children}</span>
)
const Title = ({ k, children }) => (
  <div className="mb-10">
    <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">{k}</p>
    <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">{children}</h2>
  </div>
)

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur">
      <div className={`${wrap} flex h-16 items-center justify-between`}>
        <a href="#" className="text-lg font-bold text-white">Olawale<span className="text-emerald-400">.</span></a>
        <nav className="hidden gap-8 md:flex">
          {nav.map((n) => <a key={n} href={`#${n.toLowerCase()}`} className="text-sm hover:text-white">{n}</a>)}
        </nav>
        <button className="md:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-zinc-800 px-5 py-4 md:hidden">
          {nav.map((n) => <a key={n} onClick={() => setOpen(false)} href={`#${n.toLowerCase()}`}>{n}</a>)}
        </nav>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className={`${wrap} relative grid items-center gap-12 md:grid-cols-[1.4fr_1fr]`}>
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> Open to frontend & full-stack roles
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-6xl">
            I build fast, real-world web apps with <span className="text-emerald-400">React</span> & <span className="text-emerald-400">Supabase</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-zinc-400">
            Hi, I’m Olawale. I ship complete products, from interface to database. My latest is
            <a href={featured.url} target="_blank" rel="noreferrer" className="text-white underline decoration-emerald-400 underline-offset-4"> universalmarket.ng</a>, a live marketplace.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={featured.url} target="_blank" rel="noreferrer" className={primary}>See my live product <ArrowUpRight size={16} /></a>
            <a href="#contact" className={ghost}>Work with me</a>
          </div>
        </div>
        <img src="/images/profile.jpeg" alt="Olawale Raji" className="mx-auto aspect-square w-64 rounded-3xl object-cover ring-1 ring-zinc-700 md:w-full md:max-w-sm" />
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className={`${wrap} py-20`}>
      <Title k="About">From curiosity to shipping products</Title>
      <div className="max-w-3xl space-y-4 text-lg text-zinc-400">
        <p>It started with a question about how a smooth website worked. It turned into tutorials, then projects, then real products for real users.</p>
        <p>I began with plain HTML, CSS and JavaScript, and have since moved to React, Tailwind CSS and Supabase, which let me build full applications with authentication, databases and secure data access on my own.</p>
        <p>I build in public and care about clean code, fast load times and interfaces that work well on the phones most people actually use.</p>
      </div>
    </section>
  )
}

function Stack() {
  return (
    <section id="stack" className={`${wrap} py-20`}>
      <Title k="Stack">Tools I use to ship</Title>
      <div className="grid gap-5 md:grid-cols-3">
        {stack.map((g) => (
          <div key={g.group} className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
            <h3 className="mb-4 font-semibold text-white">{g.group}</h3>
            <div className="flex flex-wrap gap-2">{g.items.map((i) => <Tag key={i}>{i}</Tag>)}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Work() {
  return (
    <section id="work" className={`${wrap} py-20`}>
      <Title k="Work">Selected projects</Title>
      <a href={featured.url} target="_blank" rel="noreferrer"
        className="group mb-8 block overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950 via-zinc-900 to-zinc-900 p-8 transition hover:border-emerald-400 sm:p-12">
        <span className="rounded-full bg-emerald-400 px-3 py-1 text-xs font-bold text-emerald-950">FEATURED · LIVE</span>
        <h3 className="mt-5 text-3xl font-bold text-white sm:text-4xl">{featured.title}</h3>
        <p className="mt-2 text-lg text-emerald-300">{featured.tagline}</p>
        <p className="mt-4 max-w-2xl text-zinc-400">{featured.description}</p>
        <div className="mt-6 flex flex-wrap items-center gap-2">
          {featured.tags.map((t) => <Tag key={t}>{t}</Tag>)}
          <span className="ml-auto inline-flex items-center gap-1 font-semibold text-white">universalmarket.ng <ArrowUpRight className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={18} /></span>
        </div>
      </a>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50">
            <img src={p.img} alt={p.title} loading="lazy" className="h-44 w-full object-cover object-top" />
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-semibold text-white">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm text-zinc-400">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">{p.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
              <div className="mt-5 flex gap-4 text-sm font-semibold">
                <a href={p.demo} target="_blank" rel="noreferrer" className="text-emerald-400 hover:text-emerald-300">Live ↗</a>
                <a href={p.code} target="_blank" rel="noreferrer" className="hover:text-white">Code ↗</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const [status, setStatus] = useState('idle')
  const submit = async (e) => {
    e.preventDefault()
    const f = Object.fromEntries(new FormData(e.target))
    if (!supabase) {
      location.href = `mailto:${links.email}?subject=Portfolio message from ${encodeURIComponent(f.name)}&body=${encodeURIComponent(f.message)}`
      return
    }
    setStatus('sending')
    const { error } = await supabase.from('messages').insert({ name: f.name, email: f.email, message: f.message })
    setStatus(error ? 'error' : 'sent')
    if (!error) e.target.reset()
  }
  const field = 'w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-emerald-400'
  return (
    <section id="contact" className={`${wrap} py-20`}>
      <Title k="Contact">Let’s build something</Title>
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-lg text-zinc-400">Have a project or role in mind? Send a message and I’ll reply soon.</p>
          {[
            [Mail, links.email, `mailto:${links.email}`],
            [MessageCircle, 'WhatsApp', links.whatsapp],
            [Code, 'GitHub', links.github],
            [Briefcase, 'LinkedIn', links.linkedin],
          ].map(([Icon, label, href]) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-emerald-300"><Icon size={20} className="text-emerald-400" />{label}</a>
          ))}
        </div>
        <form onSubmit={submit} className="space-y-4">
          <input name="name" required maxLength={100} placeholder="Your name" className={field} />
          <input name="email" type="email" required maxLength={200} placeholder="Your email" className={field} />
          <textarea name="message" required maxLength={2000} rows={5} placeholder="Your message" className={field} />
          <button disabled={status === 'sending'} className={primary}>{status === 'sending' ? 'Sending…' : 'Send message'} <Send size={16} /></button>
          {status === 'sent' && <p className="text-emerald-400">Thanks! Your message was sent.</p>}
          {status === 'error' && <p className="text-red-400">Something went wrong. Please email me directly.</p>}
        </form>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main><Hero /><About /><Stack /><Work /><Contact /></main>
      <footer className="border-t border-zinc-800 py-8 text-center text-sm text-zinc-500">© {new Date().getFullYear()} Olawale Raji. Built with React, Tailwind & Supabase.</footer>
    </>
  )
}
