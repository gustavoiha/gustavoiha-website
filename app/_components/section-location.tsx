import ImageSwitch from './image-switch'

import saoPauloBridge from '@/images/sao-paulo/sao-paulo-bridge.png'
import saoPauloLuz from '@/images/sao-paulo/sao-paulo-luz.png'
import saoPauloMasp from '@/images/sao-paulo/sao-paulo-masp.png'
import saoPauloPark from '@/images/sao-paulo/sao-paulo-park.png'
import saoPauloTrain from '@/images/sao-paulo/sao-paulo-train.png'

const saoPauloImages = [{
  image: saoPauloPark,
  alternativeText: 'An asphalt pathwalk on a sunny day at Ibirapuera park.',
  id: 'sao-paulo-park'
}, {
  image: saoPauloMasp,
  alternativeText: 'Masp Museum seen from across Paulista Avenue.',
  id: 'sao-paulo-masp'
}, {
  image: saoPauloTrain,
  alternativeText: 'Trains on the plataform at Luz train station.',
  id: 'sao-paulo-train'
}, {
  image: saoPauloLuz,
  alternativeText: 'Street view from the outside of Luz train station at night.',
  id: 'sao-paulo-luz'
}, {
  image: saoPauloBridge,
  alternativeText: 'Bridge at Pinheiros Highway with reflections from the river.',
  id: 'sao-paulo-bridge'
}]

export default function SectionLocation () {
  return (
    <section className="bg-purple-500">
      <div className="max-w-screen-lg mx-auto w-full lg:flex lg:gap-16 pt-32 pb-16 px-5">
        <div className="lg:w-1/2">
          <p className="text-h3 text-sand-300">
            I'm currently living in
          </p>

          <h2 className="text-h2 text-sand-100 mt-4">
            São Paulo, Brazil
          </h2>

          <p className="text-p1 text-sand-100 mt-12">
            São Paulo is the international hub for amazing food and culture. I love moving around the city riding a bicycle and taking the subway.
          </p>

          <p className="text-p1 text-sand-100 mt-8">
            I enjoy spending time here with my family and most of my friends, who all live near to me.
          </p>

          <p className="text-p1 text-sand-100 mt-8">
            And as much as I love this city, I am very eager to begin my international career and spend time abroad.
          </p>
        </div>

        <div className="mt-20 lg:mt-0 lg:w-1/2 lg:flex lg:justify-end">
          <ImageSwitch
            images={saoPauloImages}
            name="sao-paulo"
          />
        </div>
      </div>
    </section>
  )
}
