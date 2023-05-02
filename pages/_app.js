import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.scss'
import {NavContextProvider} from '../context/NavContext';

function MyApp({ Component, pageProps }) {
  return (
    <NavContextProvider>
      <Component {...pageProps} />
      <Analytics />
    </NavContextProvider>
  )
}

export default MyApp
