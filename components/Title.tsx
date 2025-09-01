import React from 'react'

type Props = {
    children: React.ReactNode
}

const Title = (props: Props) => {
  return (
    <h2 className='uppercase font-gray-500 text-3xl mb-2 font-bold'>{props.children}</h2>
  )
}

export default Title