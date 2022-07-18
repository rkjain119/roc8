import Link from 'next/link'
function UnauthenticatedNav() {
  return (
    <div className="flex space-x-4">
      <Link href="/login">
        <a className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700">
          Login
        </a>
      </Link>
    </div>
  )
}

export default UnauthenticatedNav
