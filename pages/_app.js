import React, { Component } from "react";
import Slider from "react-slick";

import '../styles/globals.css'
import Layout from '../components/layout'
import './in.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return (

    <Layout>
      <Component {...pageProps} />
    </Layout>
    
    )
}

export default MyApp
