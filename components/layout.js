// components/layout.js
import Nav from './nav/index'
import Footer from './footer'
import ProfileLayout from './profile/profileLayout'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
  const router = useRouter()
  if (router.pathname.startsWith('/profile')) {
    return (
      <>
        <Nav />
        <ProfileLayout>
          <main> {children}</main>
        </ProfileLayout>
        <Footer />
      </>
    )
  }
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}
