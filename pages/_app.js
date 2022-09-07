import Navbar from "../components/Navbar"
import React from "react"
import Head from 'next/head'
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
      <title>Gabriel Schaldach Morgado</title>
    </Head>
    <Navbar/>
    <main>
      <Component {...pageProps} />
    </main>
  </>)
}

export default MyApp
