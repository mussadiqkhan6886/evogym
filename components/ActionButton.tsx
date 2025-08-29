import React from 'react'

type Props = {
    text: string
}

const ActionButton = (props: Props) => {
  return (
    <button className='bg-secondary-500 cursor-pointer w-36 py-2 rounded-lg hover:text-white hover:bg-primary-500 duration-500 text-gray-500'>{props.text}</button>
  )
}

export default ActionButton