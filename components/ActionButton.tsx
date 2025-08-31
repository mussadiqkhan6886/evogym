import React from 'react'

type Props = {
    text: string
}

const ActionButton = (props: Props) => {
  return (
    <button type='button' className='bg-secondary-500 cursor-pointer md:w-36 md:py-2 w-30 py-1.5 rounded-lg hover:text-white hover:bg-primary-500 duration-500 text-gray-500'>{props.text}</button>
  )
}

export default ActionButton