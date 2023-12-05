import Image from 'next/image'

import awsLogo from '@/images/technology-logos/aws.png'
import dockerLogo from '@/images/technology-logos/docker.png'
import githubLogo from '@/images/technology-logos/github.png'
import nextJsLogo from '@/images/technology-logos/next-js.png'
import nuxtLogo from '@/images/technology-logos/nuxt.png'
import reactLogo from '@/images/technology-logos/react.png'
import rubyOnRailsLogo from '@/images/technology-logos/ruby-on-rails.png'
import sassLogo from '@/images/technology-logos/sass.png'
import vercelLogo from '@/images/technology-logos/vercel.png'
import vueJsLogo from '@/images/technology-logos/vue-js.png'

const technologies = [{
  label: 'AWS',
  logo: awsLogo
}, {
  label: 'Docker',
  logo: dockerLogo
}, {
  label: 'Github',
  logo: githubLogo
}, {
  label: 'Next.JS',
  logo: nextJsLogo
}, {
  label: 'Nuxt',
  logo: nuxtLogo
}, {
  label: 'React',
  logo: reactLogo
}, {
  label: 'Ruby on Rails 7',
  logo: rubyOnRailsLogo
}, {
  label: 'SASS',
  logo: sassLogo
}, {
  label: 'Vercel',
  logo: vercelLogo
}, {
  label: 'Vue 3',
  logo: vueJsLogo
}]

export default function SectionTechnologies () {
  return (
    <section className="bg-sand-500">
      <div className="max-w-screen-lg mx-auto w-full pt-16 pb-32 px-5">
        <h2 className="text-h2 text-purple-500 text-center">
          Technologies I have worked closely with
        </h2>

        <div className="mt-12">
          <ul className="flex flex-wrap justify-center gap-4">
            {technologies.map((technology) => (
              <li
                className="block grid justify-center min-w-[10rem] bg-sand-100 text-center text-subtitle text-neutral-300 p-5 rounded-lg flex-auto"
                key={technology.label}
              >
                <Image
                  src={technology.logo}
                  alt={`Logo of ${technology.label}`}
                  quality={100}
                />

                <span className="mt-2 self-end">
                  {technology.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
