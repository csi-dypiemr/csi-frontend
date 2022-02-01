import React from "react";

import { Container, Header, Main, Footer, Cards } from "@components";
import { Hero } from "@components/hero";
import { Event} from "@components/event"
import { About } from "@components/about";
import { Contact } from "@components/contact";
const Home: React.FC = () => {
  return (
    <>
    
      <Container>
       
        <Hero/>
        <Event />
        <About />
        <Contact />
        <Footer/>
      {/* <Main />
      <Cards />
      <Footer /> */}
    </Container>
    </>
  );
};

export default Home;
