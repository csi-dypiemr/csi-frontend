import React from 'react'

import { Button, Header, Logo } from '@components'
import { Title } from '@components/title'

import Image from 'next/image'
import Link from 'next/link';
const card = (index: React.Key | null | undefined, data: DataType) => {
  console.log(data, index);
  return (
    <div
      key={index}
      className="max-w-sm rounded-md overflow-hidden shadow-lg bg-white mx-auto"
    >
      <Image src={data.image} width={400} height={300} />
      <div className="px-6 py-4">
        <p className="text-black font-medium text-center">{data.name}</p>
        <p>
          <p className="text-blue text-blue-600 text-center">
            <Link href={`/events/${data.id}`}>Learn More</Link>
          </p>
        </p>
      </div>
    </div>
  );
};
interface DataType {
  id: number;
  name: string;
  date: string;
  description: string;
  image: string;
  form: string;
  type_choice: string;
}
export const Event = (props: { events: DataType[] }) => {
  return (
    <div>
      <Title>Our Events</Title>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5 ">
        {props.events
          .filter((month, idx) => idx < 3)
          .map((data, index) => card(index, data))}
      </div>
      <div className="text-center">
        <Link href={`/events`}>
          <Button>View All Events</Button>
        </Link>
      </div>
    </div>
  );
};
