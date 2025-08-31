import React from 'react'

type Props = {
    text: string
}

const Button = (props: Props) => {
  return (
    <button type='button' className='cursor-pointer border border-gray-500 px-5 rounded-lg py-1 sm:py-2 text-gray-500'>{props.text}</button>
  )
}

export default Button