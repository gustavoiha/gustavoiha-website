import Image from 'next/image'

import profilePicture from '@/images/gustavo-iha-profile.png'

export default function SectionHero () {
  return (
    <section className="bg-gradient-to-t from-slate-200 to-slate-50 from-10% to-10%">
      <div className="max-w-screen-lg mx-auto w-full md:flex pt-20 md:pt-32 px-5">
        <div className="md:w-1/2">
          <p className="text-h2 text-purple-800">
            Hey! I'm
          </p>

          <h1 className="text-h1 text-slate-950 font-medium mt-4">
            Gustavo Iha
          </h1>

          <p className="text-p1 text-slate-950 mt-10">
            A multidisciplinary nerd passionate about writing code, 3D printing, and talking about business and science.
          </p>
        </div>

        <div className="mt-20 md:mt-0 md:w-1/2 md:flex md:justify-end">
          <Image
            src={profilePicture}
            alt="Picture of Gustavo Iha seen from the front."
            className="rounded-3xl"
            quality={100}
            priority={true}
          />
        </div>
      </div>
    </section>
  )
}
