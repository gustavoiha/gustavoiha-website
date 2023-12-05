import Image from 'next/image'

import natureWaterfall from '@/images/nature/nature-waterfall.png'
import natureFamily from '@/images/nature/nature-family.png'
import naturePlains from '@/images/nature/nature-plains.png'
import natureMother from '@/images/nature/nature-mother.png'

export default function SectionNature () {
  return (
    <section className="bg-sand-200">
      <div className="py-32 overflow-hidden">
        <div className="max-w-screen-lg mx-auto w-full px-5">
          <h2 className="text-h2 text-purple-500">
            I'm best friends with Nature
          </h2>
        </div>

        <div
          className="flex gap-4 mt-16 h-[32rem] animate-[bannermove_5s_linear_infinite] md:animate-[bannermove_15s_linear_infinite] lg:animate-[bannermove_20s_linear_infinite]"
        >
          <Image
            src={natureWaterfall}
            alt=""
            className="rounded-3xl"
          />

          <Image
            src={natureFamily}
            alt=""
            className="rounded-3xl"
          />

          <Image
            src={naturePlains}
            alt=""
            className="rounded-3xl"
          />

          <Image
            src={natureMother}
            alt=""
            className="rounded-3xl"
          />

          <Image
            src={natureWaterfall}
            alt=""
            className="rounded-3xl"
          />

          <Image
            src={natureFamily}
            alt=""
            className="rounded-3xl"
          />

          <Image
            src={naturePlains}
            alt=""
            className="rounded-3xl"
          />

          <Image
            src={natureMother}
            alt=""
            className="rounded-3xl"
          />
        </div>
      </div>
    </section>
  )
}
