import React from 'react'
import Script from 'next/script'
import { Container, Header, Main, Footer, Cards } from '@components'
import { Hero } from '@components/hero'
import { Event } from '@components/event'
import { About } from '@components/about'
import { Contact } from '@components/contact'
import HomeHero from '@components/hero/HomeHero'
const Home: React.FC = () => {
    const [stripe, setStripe] = useState(null)
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
        <Script>
          <Script
        id="stripe-js"
        src="https://unpkg.com/react-motion-ui-pack/dist/react-motion-ui-pack.js"
        onLoad={() => {
          setStripe({ stripe: window.Stripe('pk_test_12345') })
        }}
      />
        </Script>
      </Container>
    </>
  )
}

export default Home
