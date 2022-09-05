import Navbar from "../components/Navbar"
import React, {useState} from "react"
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  const [currentPage, changePage] = useState('home')
  return (
  <>
    <Navbar currentPage={currentPage} changePage={changePage}/>
    <main>
      <Component changePage={changePage} {...pageProps} />
    </main>
  </>)
}

export default MyApp
