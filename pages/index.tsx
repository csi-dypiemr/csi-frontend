import React from "react";

import { Container, Header, Main, Footer, Cards } from "@components";
import { Hero } from "@components/hero";

const Home: React.FC = () => {
  return (
    <>
    
      <Container>
        <Header />
        <Hero/>
      
      {/* <Main />
      <Cards />
      <Footer /> */}
    </Container>
    </>
  );
};

export default Home;
