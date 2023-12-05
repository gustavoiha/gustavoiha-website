'use client'

import { useState } from 'react'

import Image from 'next/image'

interface Image {
  image: any;
  alternativeText: string;
  id: string;
}

export default function ImageSwitch ({ images, name }: { images: Array<Image>, name: string }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const currentImage = images[currentImageIndex]

  const handleSetCurrentImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentImageIndex(parseInt(event.target.value))
  }

  return (
    <div className="grid justify-items-center">
      <Image
        src={currentImage.image}
        alt={currentImage.alternativeText}
        className="rounded-3xl"
      />

      <fieldset className="flex flex-nowrap gap-3 mt-6">
        {
          images.map((image, index) => (
            <input
              className="appearance-none rounded-xl w-3 h-3 bg-sand-100 checked:bg-sand-400 cursor-pointer"
              type="radio"
              id={image.id}
              name={name}
              value={index}
              checked={index === currentImageIndex}
              onChange={handleSetCurrentImage}
            />
          ))
        }
      </fieldset>
    </div>
  )
}
