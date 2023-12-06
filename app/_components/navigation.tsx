'use client'

import Link from 'next/link'

import { useState } from 'react'
import { usePathname } from 'next/navigation'

const links = [{
  label: 'home',
  href: '/'
}, {
  label: 'work experience',
  href: '/work-experience'
}, {
  label: 'side projects',
  href: '/side-projects'
}, {
  label: 'contact me',
  href: '/contact-me'
}, {
  label: 'visitor shoutouts',
  href: '/visitor-shoutouts'
}]

export default function Navigation () {
  const [showLinks, setShowLinks] = useState(false)
  const pathname = usePathname()

  const toggleVisibility = () => setShowLinks(!showLinks)

  const getCurrentLinkStyle = (href: string) => pathname === href ? 'font-medium text-purple-800' : ''

  const visibilityStyle = showLinks ? 'block' : 'hidden'

  return (
    <nav className="bg-slate-50">
      <div className="max-w-screen-lg mx-auto w-full px-5 py-6">
        <div className="grid justify-items-end md:justify-items-start text-end md:text-end md:flex md:flex-wrap gap-x-12 gap-y-8">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className={`md:block ${getCurrentLinkStyle(link.href)} ${visibilityStyle}`}
            >
              {link.label}
            </Link>
          ))}

          <button
            className="appearance-none block md:hidden row-start-1 md:row-start-auto"
            onClick={toggleVisibility}
          >menu</button>
        </div>
      </div>
    </nav>
  )
}
