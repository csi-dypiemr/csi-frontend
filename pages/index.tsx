import React, { useState } from 'react'
import Script from 'next/script'
import { Container, Header, Main, Footer, Cards } from '@components'
import { Hero } from '@components/hero'
import { Event } from '@components/event'
import { About } from '@components/about'
import { Contact } from '@components/contact'
import HomeHero from '@components/hero/HomeHero'
import { GetServerSideProps } from 'next'
import axios from 'axios'
interface DataType {
  id: number;
  name: string;
  date: string;
  description: string;
  image: string;
  form: string;
  type_choice: string;
}
const Home = (props: { events: DataType[] }) => {
    const [stripe, setStripe] = useState(null)
  return (
    <Container>
      <div className="hero-image h-screen bg-cover bg-center">
        <Header />
        <HomeHero />
      </div>

      <Event events={props.events} />

      <About />

      <Contact />

      <Footer />
    </Container>
  );
}

export default Home
export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/events`);
  

  return {
    props: { events: res.data },
  };
};