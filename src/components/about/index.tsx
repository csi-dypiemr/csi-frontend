import { Title } from '@components/title';
import Image from 'next/image';
import React from 'react';
import { Container } from '..';

export const About: React.FC = () => { 
    return (
        <div className='mx-10'>
            <Title>About Us</Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
               
                <div className='text-center'>
                    <Image src="/img/1.svg" width={500} height={ 400}/>
                </div>
           
                <div className='flex flex-col my-auto' >
                   <p className='text-white inline-block align-middle leading-loose font-semibold w-9/12 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consectetur sed vel voluptates expedita porro hic odio quis, iste non natus iusto consequatur modi nemo, ducimus mollitia accusantium cumque eaque!</p>
                </div>
               
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
               
               
           
                <div className='flex flex-col my-auto' >
                   <p className='text-white inline-block align-middle leading-loose font-semibold w-9/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consectetur sed vel voluptates expedita porro hic odio quis, iste non natus iusto consequatur modi nemo, ducimus mollitia accusantium cumque eaque!</p>
                </div>
                 <div className='text-center'>
                    <Image src="/img/1.svg" width={500} height={ 400}/>
                </div>
               
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
               
                <div className='text-center'>
                    <Image src="/img/1.svg" width={500} height={ 400}/>
                </div>
           
                <div className='flex flex-col my-auto' >
                   <p className='text-white inline-block align-middle leading-loose font-semibold w-9/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consectetur sed vel voluptates expedita porro hic odio quis, iste non natus iusto consequatur modi nemo, ducimus mollitia accusantium cumque eaque!</p>
                </div>
               
            </div>
           

        </div>
    )
}