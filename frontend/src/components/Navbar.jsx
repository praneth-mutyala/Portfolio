import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  return (
    <nav className="flex flex-wrap items-center justify-center gap-8 border-b border-border px-6 py-4">
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          className={({ isActive }) =>
            `rounded-md px-3 py-1.5 text-sm transition ${
              isActive ? 'text-accent' : 'text-text hover:text-text-h'
            }`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  )
}

export default Navbar
