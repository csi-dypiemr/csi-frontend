import { Title } from '@components/title';
import Image from 'next/image';
import React from 'react';
import { Container } from '..';

export const About: React.FC = () => { 
    return (
      <div className="mx-10">
        <Title>About Us</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mt-4">
          <div className="text-center">
            <Image src="/img/csi1.jpeg" width={500} height={400} />
          </div>

          <div className="flex flex-col my-auto">
            <p className="text-white inline-block align-middle leading-loose font-semibold w-full text-center lg:w-9/12 md:w-9/12 ">
              CSI-DYPIEMR is the Student Chapter of Computer Society of India in
              Dr. D. Y. Patil Pratishthan's Dr. D. Y. Patil Institute of
              Engineering, Management, and Research. Computer Society of India
              is a body of computer professionals in India. It was started on 6
              March 1965 by a few computer professionals and has now grown to be
              the national body representing computer professionals. It has 72
              chapters across India, 511 student branches, and 100,000 members.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mt-4">
          <div className="flex flex-col my-auto">
            <p className="text-white inline-block align-middle leading-loose font-semibold w-full text-center lg:w-9/12 md:w-9/12 ">
              Our aim is to develop a good work culture among students, a
              culture where students from various technical background come
              together to teach, guide and collaborate with each other on
              various projects and grow together.
            </p>
          </div>
          <div className="text-center">
            <Image src="/img/csi2.jpg" width={500} height={400} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mt-4">
          <div className="text-center">
            <Image src="/img/csi2.jpg" width={500} height={400} />
          </div>

          <div className="flex flex-col my-auto">
            <p className="text-white inline-block align-middle leading-loose font-semibold w-full text-center lg:w-9/12 md:w-9/12 ">
              Developing a competitive culture where the students polish
              technical and professional attributes, gain experience and learn
              new skills while upgrading already present skillset. For those
              fledglings who have a zeal to build a strong profile and are
              hunting for their Ikigai, CSI provides ample opportunities for
              those individuals too.
            </p>
          </div>
        </div>
      </div>
    );
}