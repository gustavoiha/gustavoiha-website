'use client'

import Link from 'next/link'

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
  const pathname = usePathname()

  return (
    <nav>
      <div className="max-w-screen-lg mx-auto w-full flex gap-x-12 py-6">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className={pathname === link.href ? 'font-medium text-sand-300' : ''}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
