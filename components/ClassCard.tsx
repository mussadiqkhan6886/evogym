import Image, { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
    name: string
    description: string
    image: StaticImageData
}

const ClassCard = (props: Props) => {
  return (
    <div className='w-[300px] h-[200px] '>
        <div className='absolute w-[300px] opacity-0 bg-primary-100 hover:opacity-75 duration-300  cursor-pointer'>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
        </div>
        <Image src={props.image} alt={props.name} width={500} className='inline'  height={300} />
    </div>
  )
}

export default ClassCard