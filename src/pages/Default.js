import React from 'react';
// import { Container } from '@chakra-ui/react';
import Header from '../components/common/header'
import Footer from '../components/common/footer'

const Default = (props) => {
    return <>
        <Header />
        {props.children}
        <Footer />
    </>
}

export default Default;