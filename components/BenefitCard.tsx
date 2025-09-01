import React from 'react'
import Button from './Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type Props = {
    icon: IconProp
    title: string
    description: string
}

const BenefitCard = (props: Props) => {
  return (
    <article className='border rounded-lg border-gray-500 flex flex-col gap-3 text-center center p-8'>
        <FontAwesomeIcon icon={props.icon} className="h-10 w-10" />
        <h4 className='font-semibold text-lg'>{props.title}</h4>
        <p className='text-center text-sm mb-2'>{props.description}</p>
        <Button text='Learn More' />
    </article>
  )
}

export default BenefitCard