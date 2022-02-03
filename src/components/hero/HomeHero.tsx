import { Button } from '@components/button';
import React from 'react';

export default function HomeHero() {
    return <div>
      <section className="">
        <div className="h-screen flex justify-items-center items-center">
          <div className="px-10 sm:text-center xs:text-center lg:px-32 lg:text-left xl:text-left xl:px-40 ">
            <h1 className="text-5xl font-semibold font-serif mb-6">
              <span className="text-white">
                Welcome to <br />
                Computer Society of India
              </span>{' '}
              <br />
            </h1>
            <span className=" text-3xl mb-3 font-semibold text-white">
              Dr. D.Y. Patil Institute of Engineering, Management & Research
            </span>
            <p className="hidden md:block  mt-3 mb-3 text-sm font-normal text-white lg:max-w-lg">
              Keeping in mind the interest of the IT professionals & computer
              users CSI works towards making the profession an area of choice
              amongst all sections of the society. The promotion of Information
              Technology as a profession is the top priority of CSI today. To
              fulfill this objective, the CSI regularly organizes conferences,
              conventions, lectures, projects, awards. And at the same time it
              also ensures that regular training and skill updating are
              organised for the IT professionals.
            </p>
            <br/>
            <Button className="m-3 mx-auto">Contact Us</Button>
          </div>
        </div>
      </section>
  </div>;
}
