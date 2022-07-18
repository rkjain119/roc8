import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

import Image from 'next/image'

import { useUser } from '../../context/users'
import classNames from '../../utils/classNames'

function AuthenticatedNav() {
  const { user, logout, isLoading } = useUser()
  const avatarUrl =
    user?.user_metadata?.avatar_url ||
    'https://avatars.githubusercontent.com/u/13982751?v=4'

  console.log(user, isLoading)
  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <Image
            width={32}
            height={32}
            className="h-8 w-8 rounded-full"
            src={avatarUrl}
            alt="User Avatar"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {/* <Menu.Item>
						{({ active }) => (
							<a
								href='#'
								className={classNames(
									active ? "bg-gray-100" : "",
									"block px-4 py-2 text-sm text-gray-700"
								)}>
								Your Profile
							</a>
						)}
					</Menu.Item>
					<Menu.Item>
						{({ active }) => (
							<a
								href='#'
								className={classNames(
									active ? "bg-gray-100" : "",
									"block px-4 py-2 text-sm text-gray-700"
								)}>
								Settings
							</a>
						)}
					</Menu.Item> */}
          <Menu.Item>
            {({ active }) => (
              <a
                onClick={() => logout()}
                className={classNames(
                  active ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700'
                )}
              >
                Sign out
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default AuthenticatedNav
