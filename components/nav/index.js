// component/nav/index.js
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import { HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { UserState } from '../../context/users'
import classNames from '../../utils/classNames'
import AuthenticatedNav from './authenticatedNav'
import NavItems from './navItems'
import UnauthenticatedNav from './unauthenticatedNav'

export default function Nav() {
  const router = useRouter()
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 w-full bg-gray-900  bg-opacity-[0.85] px-5 shadow backdrop-blur backdrop-filter"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <div className="">
                      <Image
                        width={90}
                        height={40}
                        layout="intrinsic"
                        className="block h-8 w-auto"
                        src="/roc8.svg"
                        alt="logo"
                      />
                    </div>
                  </Link>
                </div>
                <div className="hidden sm:mr-10 sm:block ">
                  <div className="flex space-x-4">
                    {NavItems().map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a
                          className={classNames(
                            router.pathname === item.href
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={
                            router.pathname === item.href ? 'page' : undefined
                          }
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* bell-button */}
                {/* <button
									type='button'
									className='bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
									<span className='sr-only'>View notifications</span>
									<BellIcon className='h-6 w-6' aria-hidden='true' />
								</button> */}

                {/* Profile dropdown */}
                {UserState() ? <AuthenticatedNav /> : <UnauthenticatedNav />}
              </div>
            </div>
          </div>
          {/* mobile Nav */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {NavItems().map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
