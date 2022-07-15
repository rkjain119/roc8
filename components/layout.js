// components/layout.js
import Nav from './nav/index'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}
