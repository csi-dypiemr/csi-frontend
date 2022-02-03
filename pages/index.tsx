import React from 'react'

import { Container, Header, Main, Footer, Cards } from '@components'
import { Hero } from '@components/hero'
import { Event } from '@components/event'
import { About } from '@components/about'
import { Contact } from '@components/contact'
import HomeHero from '@components/hero/HomeHero'
const Home: React.FC = () => {
  return (
    <>
      <Container>
        <div className="hero-image h-screen bg-cover bg-center">
          <Header />
          <HomeHero />
        </div>
        <Event />
        <About />
        <Contact />
        <Footer />
        {/* <Main />
      <Cards />
      <Footer /> */}
      </Container>
    </>
  )
}

export default Home
