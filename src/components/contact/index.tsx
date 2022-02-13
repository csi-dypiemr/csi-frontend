import { InputField } from '@components/inputField'
import { Title } from '@components/title'
import { Button } from '@components/button'
import Image from 'next/image'
import React from 'react'
import { useForm, ValidationError } from "@formspree/react";
export const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("meqngqvd");
  return (
    <div id="contact">
      <Title>Contact Us</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
        <div className='mx-auto pt-10'>
          <form className="w-80 max-w-lg" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                
                <input
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="fullname"
                  type="text"
                  placeholder='Full Name'
                />
                 <ValidationError prefix="Full Name" field="fullname" errors={state.errors} />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                
                <input
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type={'email'}
                  name="email"
                  placeholder='Email address' 
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
            </div>
            
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                
                <textarea
                  placeholder='message'
                  className=" no-resize appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  id="message"
                  name="message"
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
            </div>
            <div className="text-center">
             
                <Button  type="submit" disabled={state.succeeded}>Send Us</Button>
             {state.succeeded && <p className="text-green-500">Message sent successfully</p>}
              <div className="md:w-2/3"></div>
            </div>
          </form>
        </div>
        <div className="text-center">
          <Image src={'/img/BGI.svg'} width={500} height={500} />
        </div>

        
      </div>
    </div>
  )
}
