import Navbar from "../components/Navbar"
import React, {useState} from "react"
import Head from 'next/head'
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  const [currentPage, changePage] = useState('home')
  return (
  <>
    <Head>
      <title>Gabriel Schaldach Morgado</title>
    </Head>
    <Navbar currentPage={currentPage} changePage={changePage}/>
    <main>
      <Component changePage={changePage} {...pageProps} />
    </main>
  </>)
}

export default MyApp
