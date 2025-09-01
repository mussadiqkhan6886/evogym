import React from 'react'
import { benefits } from '@/constants'
import BenefitCard from '@/components/BenefitCard'
import Image from 'next/image'
import benefitsImage from "../public/BenefitsPageGraphic.png"
import ActionButton from '@/components/ActionButton'
import sparks from "../public/Sparkles.png"
import waves from "../public/AbstractWaves.png"
import { motion } from "framer-motion"
import Title from '@/components/Title'

const Benefits = ({setSelectedPage}: {setSelectedPage: (page: string) => void}) => {
  return (
    <motion.section onViewportEnter={() =>setSelectedPage("benefits")} id='benefits' className='padding-main md:pt-40 mb=10 sm:pt-15 flex flex-col gap-20'>
      <section className='flex flex-col gap-10'>
        <article className='w-full md:w-3/4'>
            <Title>MORE THEN JUST GYM.</Title>
            <p className='text-gray-500'>We Provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We Provide true care into each and every member</p>
        </article>
        <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            {benefits.map(benefit => (
                <BenefitCard key={benefit.title} {...benefit} />
            ))}
        </div>
      </section>
      <section className='flex flex-col mb-15 lg:flex-row center gap-9'>
            <Image src={benefitsImage} width={400} height={400} alt='benefits image main' />
            <div className='relative'>
                <Image src={waves} width={90} height={100} alt='abstract waves' className='absolute -left-8 -top-13  sm:-top-16 sm:-left-13' />
                <Image src={sparks} width={90} height={100} alt='sparks' className='absolute -bottom-10 right-0 sm:right-15' />
                <h4 className='font-bold text-2xl uppercase text-gray-500'>Millions of happy members getting <span className='text-primary-500'>fit</span> </h4>
                <div className='text-gray-500'>
                    <p className="my-5 ">
                        Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                        egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                        fames vitae vitae quis. Quis amet vulputate tincidunt at in
                        nulla nec. Consequat sed facilisis dui sit egestas ultrices
                        tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                        Felis orci diam odio.
                    </p>
                    <p className="mb-5">
                        Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                        tellus quam porttitor. Mauris velit euismod elementum arcu neque
                        facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                        enim mattis odio in risus nunc.
                    </p>
                </div>
                <ActionButton text='Join Now' />
            </div>
      </section>
    </motion.section>
  )
}

export default Benefits
