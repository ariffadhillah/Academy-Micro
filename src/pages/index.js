import Head from 'next/head';
import Link from 'next/link'

import axios from "src/configs/axios";

import Header from 'src/parts/Header';
import Hero from 'src/parts/Hero';


import Circle from "public/images/circle-accent-1.svg";
// npm i --save-dev autoprefixer postcss-cli tailwindcss
// "watch:css": "postcss --watch tailwindcss/style.css -o src/assets/css/style.css" 

function Home( {data} ) {
  // console.log(props)
  return (
    <>
      <Head>
        <title>App Micro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="header-clipping pt-10">
        <Circle className="absolute left-0 bottom-0"></Circle>
        <div className="sunshine"></div>
        <div className="container mx-auto">
          <Header></Header>
          <Hero></Hero>
        </div>
        </section>
      </main>
      
    </>
  );
}

Home.getInitialProps = async () => {
  try {
    const data = await axios.get(`/courses`)
    return { data: data.data.data };
  }catch(error) {
    return error
  }
}

export default Home;
