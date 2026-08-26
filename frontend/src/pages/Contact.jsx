import { useState } from 'react'

const email = 'saipranethm@gmail.com'

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mutyala-praneth/', icon: 'linkedin-icon' },
  { label: 'X', href: 'https://x.com/pranethm', icon: 'x-icon' },
  { label: 'GitHub', href: 'https://github.com/pranethm', icon: 'github-icon' },
]

function Contact() {
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent('Portfolio contact')
    const body = encodeURIComponent(message)
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  }

  return (
    <section className="px-6 py-16 text-left md:px-10 md:py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl md:text-3xl">Get in Touch</h2>
        <span className="mt-2 block h-1 w-10 rounded bg-accent" />

        <p className="mt-5 text-text">
          Have a question or want to work together? Send a message below, or reach out
          directly.
        </p>

        <a
          href={`mailto:${email}`}
          className="mt-6 flex w-fit items-center gap-3 rounded-xl border border-border bg-surface px-5 py-3 transition hover:border-accent/50"
        >
          <svg className="h-5 w-5 shrink-0 text-accent" aria-hidden="true">
            <use href="/icons.svg#email-icon" />
          </svg>
          <span className="text-sm text-text-h">{email}</span>
        </a>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
          <label htmlFor="message" className="text-sm text-text/70">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="What's on your mind?"
            className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-h outline-none transition focus:border-accent/50"
          />
          <button
            type="submit"
            className="w-fit rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition hover:opacity-90"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 flex items-center gap-4 border-t border-border pt-8">
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
      </div>
    </section>
  )
}

export default Contact
