import React from "react"
import Head from 'next/head'
import '../styles/index.css'
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Gabriel Morgado Portfolio</title>
      </Head>    
      <main>
        <Component {...pageProps} />
        <Analytics />
      </main>
    </>)
}

export default MyApp
