import Image, { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
  name: string
  description: string
  image: StaticImageData
}

const ClassCard = ({ name, description, image }: Props) => {
  return (
    <div className="relative pb-2 w-[300px] h-[200px] shrink-0 rounded-lg overflow-hidden">
      {/* Hover overlay */}
      <div className="h-[192px] absolute inset-0 flex flex-col justify-center items-center 
                      bg-primary-100 opacity-0 hover:opacity-80 transition-opacity 
                      duration-300 text-center p-4 cursor-pointer">
        <h4 className="font-bold text-lg">{name}</h4>
        <p className="text-sm mt-2">{description}</p>
      </div>

      {/* Background Image */}
      <Image
        src={image}
        alt={name}
        width={300}
        height={200}
        className="object-cover w-full h-full"
      />
    </div>
  )
}

export default ClassCard
