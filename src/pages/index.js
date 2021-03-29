import Head from 'next/head';
import Link from 'next/link'
// npm i --save-dev autoprefixer postcss-cli tailwindcss
// "watch:css": "postcss --watch tailwindcss/style.css -o src/assets/css/style.css" 
export default function Home() {
  return (
    <div className="container mx-auto mt-4">
      <Head>
        <title>App Micro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>saya halaman tama</h1>
        <Link href="/random">
        <a> Bring me to</a>
        </Link>
      </main>
      
    </div>
  );
}
