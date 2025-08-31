import React from 'react'
import { classes } from '@/constants'
import ClassCard from '@/components/ClassCard'

const Classes = () => {
  return (
    <section id='classes' className=' bg-primary-300 py-20'>
      <article className='padding-main mb-8 w-full md:w-3/4'>
        <h4 className='uppercase font-bold text-2xl text-gray-500'>our classes</h4>
        <p className="py-3">
            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
            tellus quam porttitor. Mauris velit euismod elementum arcu neque
            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
            enim mattis odio in risus nunc.
        </p>
      </article>
      <div className="overflow-x-auto">
        <div className="flex gap-7 px-3 w-max">
          {classes.map((classDiv) => (
            <ClassCard key={classDiv.name} {...classDiv} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Classes
