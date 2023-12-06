import ImageSwitch from './image-switch'

import ufabcSantoAndre from '@/images/ufabc/ufabc-santo-andre.png'
import ufabcSaoBernardo from '@/images/ufabc/ufabc-sao-bernardo.png'

const ufabcImages = [{
  image: ufabcSantoAndre,
  alternativeText: 'External wall of Santo Andre campus of UFABC seen at dusk.',
  id: 'ufabc-santo-andre'
}, {
  image: ufabcSaoBernardo,
  alternativeText: 'Sao Bernardo campus of UFABC seen from above.',
  id: 'ufabc-sao-bernardo'
}]

export default function SectionEducation () {
  return (
    <section className="bg-slate-200">
      <div className="max-w-screen-lg mx-auto w-full lg:flex lg:gap-16 pt-32 pb-16 px-5">
        <div className="lg:w-1/2">
          <p className="text-h3 text-purple-800">
            Universidade Federal do ABC
          </p>

          <h2 className="text-h2 text-slate-950 mt-4">
            UFABC
          </h2>

          <p className="text-subtitle text-slate-950 mt-4">
            Bachelors in Science and Technology
          </p>

          <p className="text-p1 text-slate-950 mt-12">
            In 2013, I joined one of Brazil's most prestigious universities. All professors hold PhDs, and the curriculum is multidisciplinary, covering topics like Multi-vector Calculus, Quantum Physics, Ethics, and Evolutionary Biology.
          </p>

          <p className="text-p1 text-slate-950 mt-8">
            My projects ranged from scripting numerical computations for asteroid and fluid particle movements in C to creating a Java-based Android app that controlled an Arduino robot via Bluetooth. I even delved into the world of gaming and developed a 3D game complete with 3D assets, character animations, and C# scripts.
          </p>
        </div>

        <div className="mt-20 lg:mt-0 lg:w-1/2 justify-start">
          <ImageSwitch
            images={ufabcImages}
            name="ufabc"
          />
        </div>
      </div>
    </section>
  )
}
