'use client'

import Image from 'next/image'

import './image-switch.css'

type Image = {
  image: any;
  alternativeText: string;
  id: string;
}

export default function ImageSwitch ({ images, name }: { images: Array<Image>, name: string }) {
  return (
    <div className="overflow-hidden rounded-3xl">
      <div className="flex overflow-x-scroll image-switch">
        {images.map((image) => (
          <Image
            src={image.image}
            alt={image.alternativeText}
            key={image.id}
          />
        ))}
      </div>
    </div>
  )
}
