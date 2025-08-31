"use client";

import React from 'react'
import contactImage from "../public/ContactUsPageGraphic.png"
import Image from 'next/image'
import ActionButton from '@/components/ActionButton'

const Contact = () => {
  return (
    <section className='padding-main center flex mt-20 gap-20'>
      <div className='flex flex-col'>
        <h4 className='uppercase font-gray-500 text-2xl font-bold'><span className='text-primary-500'>join now </span> to get in shape</h4>
        <p> Fngue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.</p>
        <form className='flex flex-col'>
            <input type='text' placeholder='mussadiq khan' required />
            <input type="email" placeholder='mussadiqkhan@gmail.com' required />
            <textarea required placeholder='Message' cols={50}></textarea>
            <ActionButton text="SUBMIT" />
        </form>
      </div>
      <div>
        <Image src={contactImage} width={500} height={300} alt='contact image main' />
      </div>
    </section>
  )
}

export default Contact
