import React from 'react'

type Props = {
    text: string
}

const Button = (props: Props) => {
  return (
    <button className='text-gray-500'>{props.text}</button>
  )
}

export default Button