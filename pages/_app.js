import React from "react"
import Head from 'next/head'
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Gabriel Morgado Portfolio</title>
      </Head>    
      <main>
        <Component {...pageProps} />
      </main>
    </>)
}

export default MyApp
