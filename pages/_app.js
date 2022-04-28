
import Footer from '../components/footer'
import Header from '../components/header'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css'
import '../styles/globals.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function MyApp({ Component, pageProps }) {
  return(
    <>
      <Header/>
      <ToastContainer position='top-center'/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp
