import Head from 'next/head';
import Link from 'next/link'

import axios from "src/configs/axios";

import Circle from "public/images/circle-accent-1.svg";
// npm i --save-dev autoprefixer postcss-cli tailwindcss
// "watch:css": "postcss --watch tailwindcss/style.css -o src/assets/css/style.css" 

function Home( {data} ) {
  // console.log(props)
  return (
    <div className="container mx-auto mt-4">
      <Head>
        <title>App Micro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="pt-10">
        <Circle className="absolute left-0 bottom-0"></Circle>
        </section>
      </main>
      
    </div>
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
