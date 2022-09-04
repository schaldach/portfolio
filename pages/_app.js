import Navbar from "../components/Navbar"
import React, {useState} from "react"
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  const [currentPage, changePage] = useState('portfolio')
  return (
  <>
    <Navbar currentPage={currentPage} changePage={changePage}/>
    <main>
      <Component {...pageProps} />
    </main>
  </>)
}

export default MyApp
