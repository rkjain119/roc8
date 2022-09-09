// pages/_app.js
import '../styles/globals.css'
import Layout from '../components/layout'
import { UserProvider } from '../context/users'
import NextNProgress from 'nextjs-progressbar'

export default function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <NextNProgress color="#fb7185" />
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  )
}
