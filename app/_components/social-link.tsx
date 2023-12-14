import { ReactElement } from 'react'

export default function SocialLink ({
  href,
  label
}: {
  href: string,
  label: string
}): ReactElement {
  return (
    <a
      className="block max-w-sm py-4 px-8 rounded-lg bg-slate-800"
      href={href}
    >
      <span className="text-p2 text-slate-50">
        {label}
      </span>
    </a>
  )
}
