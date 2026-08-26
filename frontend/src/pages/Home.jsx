import { Link } from 'react-router-dom'
import profile from '../assets/profile.PNG'

const socials = [
  { label: 'GitHub', href: 'https://github.com/pranethm', icon: 'github-icon' },
  { label: 'X', href: 'https://x.com/pranethm', icon: 'x-icon' },
  { label: 'Instagram', href: 'https://instagram.com/praneth_m__', icon: 'instagram-icon' },
]

const contactInfo = [
  { label: 'Email', value: 'saipranethm@gmail.com', icon: 'email-icon' },
  { label: 'Location', value: 'USA', icon: 'location-icon' },
]

const whatIDo = [
  {
    title: 'Orchestrating Multi-Agent Workflows',
    description: 'Coordinating AI agents to handle complex tasks together.',
    icon: 'workflow-icon',
  },
  {
    title: 'Deploying in Cloud Infrastructure',
    description: 'Taking AI apps live, reliably and at scale.',
    icon: 'cloud-icon',
  },
  {
    title: 'Fine-Tuning & Optimizing LLMs',
    description: 'Customizing models to perform better on specific tasks.',
    icon: 'tune-icon',
  },
  {
    title: 'Shipping Full-Stack AI Products',
    description: 'Building and launching complete AI products, start to finish.',
    icon: 'send-icon',
  },
]

function Home() {
  return (
    <section className="flex flex-col gap-8 px-6 pb-16 pt-8 md:flex-row md:items-start md:px-10 md:pb-24 md:pt-10">
      <aside className="flex shrink-0 flex-col items-center gap-5 rounded-2xl border border-border bg-surface p-6 text-center md:w-72">
        <div className="h-40 w-40 overflow-hidden rounded-2xl border border-border">
          <img
            src={profile}
            alt="Praneth Mutyala"
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <h1 className="text-xl">Praneth Mutyala</h1>
          <span className="mt-2 inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent">
            AI Engineer
          </span>
        </div>

        <div className="w-full border-t border-border" />

        <div className="flex w-full flex-col gap-4 text-left">
          {contactInfo.map(({ label, value, icon }) => (
            <div key={label} className="flex items-center gap-3">
              <svg className="h-4 w-4 shrink-0 text-accent" aria-hidden="true">
                <use href={`/icons.svg#${icon}`} />
              </svg>
              <div>
                <p className="text-[10px] uppercase tracking-wide text-text/50">{label}</p>
                <p className="text-sm text-text-h">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full border-t border-border" />

        <div className="flex gap-4">
          {socials.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="opacity-70 transition hover:opacity-100"
            >
              <svg className="h-5 w-5 invert brightness-200" aria-hidden="true">
                <use href={`/icons.svg#${icon}`} />
              </svg>
            </a>
          ))}
        </div>
      </aside>

      <div className="flex flex-1 flex-col gap-10 text-left">
        <div>
          <h2 className="text-2xl md:text-3xl">About Me</h2>
          <span className="mt-2 block h-1 w-10 rounded bg-accent" />

          <p className="mt-5 max-w-2xl text-text">
            Hi, I&apos;m <strong className="text-text-h">Praneth Mutyala</strong> — an AI
            Engineer passionate about building intelligent applications that solve
            real-world problems.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition hover:opacity-90"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-accent/40 px-5 py-2.5 text-sm text-text-h transition hover:border-accent hover:text-accent"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl">What I&apos;m Doing</h2>
          <span className="mt-2 block h-1 w-10 rounded bg-accent" />

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {whatIDo.map(({ title, description, icon }) => (
              <div
                key={title}
                className="rounded-xl border border-border bg-surface p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <svg className="h-5 w-5" aria-hidden="true">
                    <use href={`/icons.svg#${icon}`} />
                  </svg>
                </div>
                <h3 className="mt-4 text-base">{title}</h3>
                <p className="mt-1.5 text-sm text-text">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
