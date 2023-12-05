import Image from 'next/image'
import profilePicture from '@/images/gustavo-iha-profile.png'

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

import saoPauloImageBridge from '@/images/sao-paulo/sao-paulo-bridge.png'
import saoPauloImageLuz from '@/images/sao-paulo/sao-paulo-luz.png'
import saoPauloImageMasp from '@/images/sao-paulo/sao-paulo-masp.png'
import saoPauloImagePark from '@/images/sao-paulo/sao-paulo-park.png'
import saoPauloImageTrain from '@/images/sao-paulo/sao-paulo-train.png'

import ufabcSantoAndre from '@/images/ufabc/ufabc-santo-andre.png'
import ufabcSaoBernardo from '@/images/ufabc/ufabc-sao-bernardo.png'

import natureWaterfall from '@/images/nature/nature-waterfall.png'
import natureFamily from '@/images/nature/nature-family.png'
import naturePlains from '@/images/nature/nature-plains.png'
import natureMother from '@/images/nature/nature-mother.png'

import BD1 from '@/images/3d-printing/bd-1.png'
import luffy from '@/images/3d-printing/luffy.png'
import blueEyesWhiteDragon from '@/images/3d-printing/blue-eyes-white-dragon.png'
import gomuGomuNoMi from '@/images/3d-printing/gomu-gomu-no-mi.png'

import ImageSwitch from './_components/image-switch'

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

const saoPauloImages = [{
  image: saoPauloImagePark,
  alternativeText: 'An asphalt pathwalk on a sunny day at Ibirapuera park.',
  id: 'sao-paulo-park'
}, {
  image: saoPauloImageMasp,
  alternativeText: 'Masp Museum seen from across Paulista Avenue.',
  id: 'sao-paulo-masp'
}, {
  image: saoPauloImageTrain,
  alternativeText: 'Trains on the plataform at Luz train station.',
  id: 'sao-paulo-train'
}, {
  image: saoPauloImageLuz,
  alternativeText: 'Street view from the outside of Luz train station at night.',
  id: 'sao-paulo-luz'
}, {
  image: saoPauloImageBridge,
  alternativeText: 'Bridge at Pinheiros Highway with reflections from the river.',
  id: 'sao-paulo-bridge'
}]

const ufabcImages = [{
  image: ufabcSantoAndre,
  alternativeText: 'External wall of Santo Andre campus of UFABC seen at dusk.',
  id: 'ufabc-santo-andre'
}, {
  image: ufabcSaoBernardo,
  alternativeText: 'Sao Bernardo campus of UFABC seen from above.',
  id: 'ufabc-sao-bernardo'
}]

const threeDPrintingImages = [{
  image: BD1,
  alternativeText: 'A 3d printed replica of BD-1 about 40cm tall.',
  id: '3d-printing-bd1'
}, {
  image: luffy,
  alternativeText: 'A 3d printed Luffy with an inflated fist.',
  id: '3d-printing-luffy'
}, {
  image: blueEyesWhiteDragon,
  alternativeText: 'A 3d printed Blue Eyes Ultimate Dragon partially out of a Yu-Gi-Oh card.',
  id: '3d-printing-dragon'
}, {
  image: gomuGomuNoMi,
  alternativeText: 'A 3d printed replica of a Gomu Gomu no Mi.',
  id: '3d-printing-gomu'
}]

const TechnologiesWorkedWith = () => (
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
)

export default function Home () {
  return (
    <div>
      <section className="bg-gradient-to-t from-sand-200 to-dark-sand-500 from-10% to-10%">
        <div className="max-w-screen-lg mx-auto w-full md:flex pt-20 md:pt-40 px-5">
          <div className="md:w-1/2">
            <p className="text-h2 text-purple-200">
              Hey! I'm
            </p>

            <h1 className="text-h1 text-sand-100 font-medium mt-4">
              Gustavo Iha
            </h1>

            <p className="text-p1 text-sand-100 mt-10">
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

      <section className="bg-sand-200">
        <div className="max-w-screen-lg mx-auto w-full py-32 px-5">
          <h2 className="text-h2 font-medium text-purple-500">
            I help build amazing web applications
          </h2>

          <p className="text-p1 text-purple-500 mt-12">
            I started programming over a decade ago. My first full-time position was at Revelo,
            a VC-backed global startup, where I earned a partnership role and served
            as a <span className="text-dark-sand-300 font-medium">
              Senior Full-Stack Engineer
            </span> (Individual Contributor).
          </p>

          <p className="text-p1 text-purple-500 mt-8">
            I was a <span className="text-dark-sand-300 font-medium">
              recognized technical leader in front-end
            </span>, expert at JavaScript, CSS3, HTML5, VueJS 3, and Nuxt, and adept at addressing SEO, accessibility, and performance. My expertise extends to AWS S3 and Cloudfront, CI/CD pipelines, Vite, Babel, Webpack and Ruby on Rails.
          </p>

          <p className="text-p1 text-purple-500 mt-8">
            <span className="text-dark-sand-300 font-medium">
              I get involved at every step of the development cycle
            </span>, from refining ideas with business decision-makers to architecting solutions, designing code, deploying, monitoring, and providing support.
          </p>
        </div>
      </section>

      <section className="bg-sand-500">
        <div className="max-w-screen-lg mx-auto w-full pt-16 pb-32 px-5">
          <h2 className="text-h2 text-purple-500 text-center">
            Technologies I have worked closely with
          </h2>

          <div className="mt-12">
            <TechnologiesWorkedWith />
          </div>
        </div>
      </section>

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

      <section className="bg-gradient-to-t from-dark-sand-500 to-sand-200 from-15% to-15% md:from-10% md:to-10%">
        <div className="max-w-screen-lg mx-auto w-full pt-32 px-5">
          <h2 className="text-h2 font-medium text-purple-500">
            Why work with me?
          </h2>

          <p className="text-p1 text-purple-500 mt-12">
            I am a fast learning, creative, collaborative, multidisciplinary, dedicated and curious tech savvy engineer who's always eager to learn new ways of building technology!
          </p>

          <p className="text-p1 text-purple-500 mt-8">
            I thrive in a <span className="text-dark-sand-300 font-medium">responsibilities-heavy role</span>, working very close to C-levels and product decision-makers.
          </p>

          <div className="rounded-xl p-4 md:p-0 md:py-4 mt-24 bg-sand-500 text-purple-500 md:flex">
            <div className="md:w-1/2 md:px-8">
              <p className="text-h3">
                10 years and 3 months
              </p>

              <p className="text-p1 mt-2">
                since first line of code
              </p>
            </div>

            <div className="mt-6 pt-6 border-solid border-t border-dark-sand-300 md:border-t-0 md:border-l md:w-1/2 md:mt-0 md:pt-0 md:px-8">
              <p className="text-h3">
                4 years and 3 months
              </p>

              <p className="text-p1 mt-2">
                since first engineering job
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark-sand-500">
        <div className="max-w-screen-lg mx-auto w-full lg:flex lg:gap-16 pt-32 pb-16 px-5">
          <div className="lg:w-1/2">
            <p className="text-h3 text-neutral-200">
              Universidade Federal do ABC
            </p>

            <h2 className="text-h2 text-sand-100 mt-4">
              UFABC
            </h2>

            <p className="text-subtitle text-sand-100 mt-4">
              Bachelors in Science and Technology
            </p>

            <p className="text-p1 text-sand-100 mt-12">
              In 2013, I joined one of Brazil's most prestigious universities. All professors hold PhDs, and the curriculum is multidisciplinary, covering topics like Multi-vector Calculus, Quantum Physics, Ethics, and Evolutionary Biology.
            </p>

            <p className="text-p1 text-sand-100 mt-8">
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

      <section className="bg-sand-200">
        <div className="py-32 overflow-hidden">
          <div className="max-w-screen-lg mx-auto w-full px-5">
            <h2 className="text-h2 text-purple-500">
              Nature is my best friend
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

      <section className="bg-sand-200">
        <div className="max-w-screen-lg mx-auto w-full lg:flex lg:gap-16 pt-32 pb-16 px-5 border-solid border-t border-sand-500">
          <div className="lg:w-1/2">
            <h2 className="text-h2 text-purple-500 mt-4">
              3D Printing
            </h2>

            <p className="text-p1 text-purple-500 mt-12">
              My passion for 3D modeling began at college, when I developed a 3D game on Unity including a complete textured map and 3D characters that I modeled myself on Blender.
            </p>

            <p className="text-p1 text-purple-500 mt-8">
              In 2021 I tried out 3D printing and absolutely fell in love with the possibility of creating anything straight out of my imagination.
            </p>

            <p className="text-p1 text-purple-500 mt-8">
              I own a Creality CR-10 V3 FDM printer.
            </p>
          </div>

          <div className="mt-20 lg:mt-0 lg:w-1/2 lg:flex lg:justify-end">
            <ImageSwitch
              images={threeDPrintingImages}
              name="3d-printing"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
