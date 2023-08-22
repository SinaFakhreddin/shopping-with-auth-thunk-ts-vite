import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { theme} from "./theme/theme";
import DesktopHeader from "./components/header";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store";
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';
import MobileHeader from "./components/header/mobileHeader";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/footer/footer";



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
          <Router>
                <Provider store={store}>
                    <DesktopHeader/>
                    <MobileHeader headerType={'mobile'}/>
                    <App />
                    <Footer/>
                    <ToastContainer/>
                </Provider>
          </Router>
      </ChakraProvider>
   </React.StrictMode>,
)
