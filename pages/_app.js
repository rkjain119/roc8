// pages/_app.js
import '../styles/globals.css'
import Layout from '../components/layout'
import { UserProvider } from '../context/users'
import NextNProgress from 'nextjs-progressbar'
import { Toaster } from 'react-hot-toast'

export default function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <NextNProgress color="#fb7185" />
        <Component {...pageProps} />
        <Toaster />
      </Layout>
    </UserProvider>
  )
}
