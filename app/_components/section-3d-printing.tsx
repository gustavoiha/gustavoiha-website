import ImageSwitch from './image-switch'

import BD1 from '@/images/3d-printing/bd-1.png'
import luffy from '@/images/3d-printing/luffy.png'
import blueEyesWhiteDragon from '@/images/3d-printing/blue-eyes-white-dragon.png'
import gomuGomuNoMi from '@/images/3d-printing/gomu-gomu-no-mi.png'

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

export default function Section3DPrinting () {
  return (
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
  )
}
