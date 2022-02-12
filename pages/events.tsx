import { Footer } from '@components/footer'
import { Header } from '@components/header'
import HomeHero from '@components/hero/HomeHero'
import { Button, Title } from '@components/title'
import { Title2 } from '@components/title/title2'
import Image from 'next/image'
import React from 'react'

export default function login() {
  return (
    <div>
      <div className="hero-image h-screen bg-cover bg-center ">
        <Header />
        <div className="my-auto ">
          <Title2 className="align-middle">Events</Title2>
        </div>
      </div>

      <div className="w-full">
        <div className="sm:pt-10">
          <Title>Upcoming Events</Title>
          <div className="flex justify-center p-0">
            <Image src="/img/image 20.png" width={'1000'} height={'726'} />
          </div>
        </div>
        <div className="flex justify-center lg:p-20">
          <Button>Register Now</Button>
        </div>
        <div className='flex justify-center '>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeWMR9xcnViI2WHhhuQxT2cNbBrYGFCcNuowyZkLyK_uWF72A/viewform?embedded=true" width="640" height="1949" frameBorder={"0"} marginHeight={0} marginWidth={ 0}>Loading…</iframe>
      </div>
        <div className="sm:pt-10">
          <Title>Past Events</Title>

          <div className="flex flex-wrap -m-4 bg-black-100 md:pt-10 flex items-center text-gray-600 p-10 lg:p-20 sm:justify-center">
            <div className="p-4 sm:w-1/2 lg:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-72 md:h-48 w-full object-cover object-center"
                  src="https://picsum.photos/id/188/720/400"
                  alt="blog"
                ></img>
                <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                  <h2 className="text-base font-medium text-indigo-300 mb-1">
                    October 29, 2021
                  </h2>
                  <h1 className="text-2xl font-semibold mb-3">
                    Cities are crowded
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam modi, expedita quos doloremque autem ipsum itaque
                    incidunt ipsam reprehenderit fuga! Dolores quisquam eius cum
                    accusamus?
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">
                      Read More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-72 md:h-48 w-full object-cover object-center"
                  src="https://picsum.photos/id/1016/720/400"
                  alt="blog"
                ></img>
                <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                  <h2 className="text-base font-medium text-indigo-300 mb-1">
                    October 29, 2021
                  </h2>
                  <h1 className="text-2xl font-semibold mb-3">
                    Mountains are alone
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam modi, expedita quos doloremque autem ipsum itaque
                    incidunt ipsam reprehenderit fuga! Dolores quisquam eius cum
                    accusamus?
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">
                      Read More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 sm:w-1/2 lg:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-72 md:h-48 w-full object-cover object-center"
                  src="https://picsum.photos/id/1011/720/400"
                  alt="blog"
                ></img>
                <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                  <h2 className="text-base font-medium text-indigo-300 mb-1">
                    October 29, 2021
                  </h2>
                  <h1 className="text-2xl font-semibold mb-3">
                    Lakes are silent
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam modi, expedita quos doloremque autem ipsum itaque
                    incidunt ipsam reprehenderit fuga! Dolores quisquam eius cum
                    accusamus?
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">
                      Read More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-72 md:h-48 w-full object-cover object-center"
                  src="https://picsum.photos/id/188/720/400"
                  alt="blog"
                ></img>
                <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                  <h2 className="text-base font-medium text-indigo-300 mb-1">
                    October 29, 2021
                  </h2>
                  <h1 className="text-2xl font-semibold mb-3">
                    Cities are crowded
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam modi, expedita quos doloremque autem ipsum itaque
                    incidunt ipsam reprehenderit fuga! Dolores quisquam eius cum
                    accusamus?
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">
                      Read More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-72 md:h-48 w-full object-cover object-center"
                  src="https://picsum.photos/id/1016/720/400"
                  alt="blog"
                ></img>
                <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                  <h2 className="text-base font-medium text-indigo-300 mb-1">
                    October 29, 2021
                  </h2>
                  <h1 className="text-2xl font-semibold mb-3">
                    Mountains are alone
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam modi, expedita quos doloremque autem ipsum itaque
                    incidunt ipsam reprehenderit fuga! Dolores quisquam eius cum
                    accusamus?
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">
                      Read More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 sm:w-1/2 lg:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-72 md:h-48 w-full object-cover object-center"
                  src="https://picsum.photos/id/1011/720/400"
                  alt="blog"
                ></img>
                <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                  <h2 className="text-base font-medium text-indigo-300 mb-1">
                    October 29, 2021
                  </h2>
                  <h1 className="text-2xl font-semibold mb-3">
                    Lakes are silent
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam modi, expedita quos doloremque autem ipsum itaque
                    incidunt ipsam reprehenderit fuga! Dolores quisquam eius cum
                    accusamus?
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">
                      Read More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
