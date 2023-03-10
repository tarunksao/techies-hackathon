import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import Header from 'components/Header'
import { Provider } from 'react-redux'
import {store} from "./redux-arch/store"
import Footer from 'components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store} >
    <ChakraProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
    </Provider>
  )
}
