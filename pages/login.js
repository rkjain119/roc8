import { useEffect } from 'react'
import { useUser } from '../context/users'
import Image from 'next/image'

const Login = () => {
  const { login } = useUser()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(login, [])

  return (
    <div className="@apply vibrate h-screen overflow-hidden">
      <Image layout="fill" src="/rocket.svg" alt="Loader" />
    </div>
  )
}
export default Login
