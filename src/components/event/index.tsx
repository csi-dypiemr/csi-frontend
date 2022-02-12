import React from 'react'

import { Button, Header, Logo } from '@components'
import { Title } from '@components/title'

import Image from 'next/image'
const card = (key: React.Key | null | undefined) => {
  return(<div
    key={key}
    className="max-w-sm rounded-md overflow-hidden shadow-lg bg-white mx-auto"
  >
    <Image src="/img/home.jpeg" width={400} height={300} />
    <div className="px-6 py-4">
      <p className="text-black font-medium text-center">
        Linux Fundamentals bootcamp
      </p>
      <p>
        <p className="text-blue text-blue-600 text-center">Learn More</p>
      </p>
    </div>
  </div>)
}

export const Event: React.FC = () => {
  return (
    <div>
      <Title>Our Events</Title>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5 ">
        {[0, 1, 2].map((key, value) => card(key))}
      </div>
      <div className="text-center">
        <Button>View All Events</Button>
      </div>
    </div>
  )
}
