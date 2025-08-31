import Image from 'next/image'
import React from 'react'
import Button from './Button'

type Props = {
    icon: string
    title: string
    description: string
}

const BenefitCard = (props: Props) => {
  return (
    <article className='border rounded-lg border-gray-500 flex flex-col gap-3 text-center center p-8'>
        <Image src={"/Circles.png"} width={35} height={35} className='bg-primary-500' alt={props.title}  />
        <h4 className='font-semibold text-base'>{props.title}</h4>
        <p className='text-center text-sm mb-2'>{props.description}</p>
        <Button text='Learn More' />
    </article>
  )
}

export default BenefitCard