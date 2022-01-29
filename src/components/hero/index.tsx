import React from 'react'

import { Button, Logo } from '@components'

export const Hero: React.FC = () => {
  
  return (
    <section className="">
  <div className="bg-[url('https://i.imgur.com/jAXaawT.jpg')] h-screen bg-cover bg-center flex justify-items-center items-center">
    <div className="px-10 lg:px-32 xl:px-40">
      <h1 className="text-5xl font-semibold font-serif mb-6">
                      <span className="text-white">
                      Welcome to <br/>
Computer Society of India 
                      </span> <br />
      </h1>
        <span  className="text-3xl font-semibold text-white">Dr. D.Y. Patil Institute of Engineering, Management & Research</span>
                  <p className="mt-3 text-sm font-normal text-white max-w-lg">
                      
Keeping in mind the interest of the IT professionals & computer users CSI works towards making the profession an area of choice amongst all sections of the society. The promotion of Information Technology as a profession is the top priority of CSI today. To fulfill this objective, the CSI regularly organizes conferences, conventions, lectures, projects, awards. And at the same time it also ensures that regular training and skill updating are organised for the IT professionals. 

      </p>
    <Button className='mt-4'>Contact Us</Button>
    </div>
  </div>
</section>
  )
}
