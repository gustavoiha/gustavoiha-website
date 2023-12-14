import { ReactElement } from 'react'
import SocialLink from '@/app/_components/social-link'

export default function Contact (): ReactElement {
  return (
    <article className='bg-slate-50'>
      <section className="max-w-screen-lg mx-auto w-full py-20 md:pt-32 px-5">
        <h1 className="text-h1 text-purple-800 font-medium">
          Stay Connected
        </h1>

        <p className="text-h2 text-slate-950 mt-8">
          Here's how we can be in touch
        </p>

        <div className="mt-20">
          <SocialLink label="Github" href="https://github.com/gustavoiha" />
        </div>

        <div className="mt-6">
          <SocialLink label="Linkedin" href="https://www.linkedin.com/in/gustavoiha" />
        </div>

        <div className="mt-6">
          <SocialLink label="WhatsApp" href="https://wa.me/5511997129911" />
        </div>

        <div className="mt-6">
          <SocialLink label="Phone" href="tel:+5511997129911" />
        </div>
      </section>
    </article>
  )
}
