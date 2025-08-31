"use client";

import React, { FormEvent, useState } from 'react'
import contactImage from "../public/ContactUsPageGraphic.png"
import Image from 'next/image'
import ActionButton from '@/components/ActionButton'
import backgroundImage from "../public/EvolveText.png"
import {motion} from "framer-motion"

const Contact = ({setSelectedPage}: {setSelectedPage: (page: string) => void}) => {

  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <motion.section onViewportEnter={() =>setSelectedPage("contact")} id="contact" className='padding-main center flex flex-col lg:flex-row my-20 gap-20'>
      <div className='flex flex-col w-[90%] gap-5'>
        <h4 className='uppercase font-gray-500 text-2xl font-bold'><span className='text-primary-500'>join now </span> to get in shape</h4>
        <p> Fngue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.</p>
        {/* <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
            <input defaultValue={name} onChange={(e) => setName(e.target.defaultValue)} className='input'  type='text' placeholder='mussadiq khan' required />
            <input defaultValue={email} onChange={(e) => setEmail(e.target.defaultValue)} className='input'  type="email" placeholder='mussadiqkhan@gmail.com' required />
            <textarea defaultValue={message} onChange={(e) => setMessage(e.target.value)} className='input' required placeholder='Message' cols={50} rows={6}></textarea>
            <ActionButton text="SUBMIT" />
        </form> */}
      </div>
      <div className='relative'>
        <Image src={contactImage} width={500} height={300} alt='contact image main' />
        <Image src={backgroundImage} alt="background hero image" width={500} height={100} className="absolute -z-20 hidden md:block -bottom-12 -right-12" />
      </div>
    </motion.section>
  )
}

export default Contact
