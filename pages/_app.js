import Navbar from "../components/Navbar"
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Navbar/>
    <main>
      <Component {...pageProps} />
    </main>
  </>)
}

export default MyApp
