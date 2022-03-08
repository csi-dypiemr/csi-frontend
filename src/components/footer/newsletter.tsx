import React from 'react'
import Image from 'next/image'

export const NewsLetter: React.FC = () => {
  return (
    <div className="flex justify-center ">
      <div className="py-4 px-20 bg-white shadow-lg rounded-md  -mb-28 text-center">
        <Image src="/img/newsletter.svg" width={100} height={100} />

        <div className="text-center">
          <h2 className='font-bold text-2xl'>Subscribe to our newsletter</h2>
        </div>
        <div className="flex items-stretch mt-12">
          <input 
                  className="appearance-none block w-full lg:w-80  bg-grey text-gray-700 border border-gray-200  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-grey-100 focus:border-gray-500"
                    type={'email'}
                  placeholder='Your Email'
                />
         <button type="button" className="text-white h-12  m-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </div>
      </div>
    </div>
  )
}
