import React from 'react'
import { useRouter } from 'next/router'
import { useUser } from '../../context/users'

import Link from 'next/link'
import classNames from '../../utils/classNames'

import {
  CodeBracketIcon,
  InboxIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'
import { HiOutlineTemplate } from 'react-icons/hi'

const navigation = [
  { name: 'Profile', href: '/profile', icon: InboxIcon },
  {
    name: 'Blog Posts',
    href: '/profile/blogs',
    icon: HiOutlineTemplate,
  },
  {
    name: 'Projects',
    href: '/profile/projects',
    icon: CodeBracketIcon,
  },
  {
    name: 'Applications',
    href: '/profile/applications',
    icon: SquaresPlusIcon,
  },
]

export default function ProfileLayout({ children }) {
  const { user, isLoading } = useUser()
  const router = useRouter()
  console.log(router.asPath)
  if (!isLoading && user) {
    return (
      <div className="min-h-96 mt-4  p-6 lg:grid lg:grid-cols-12  lg:gap-x-5">
        <aside className="py-6 px-2 sm:px-6 lg:col-span-2 lg:py-0 lg:px-0">
          <nav className="space-y-1">
            {navigation.map((tab) => (
              <Link key={tab.name} href={tab.href}>
                <a
                  key={tab.name}
                  href={tab.href}
                  className={classNames(
                    router.pathname === tab.href
                      ? 'bg-gray-50 text-rose-700 hover:bg-white hover:text-rose-700'
                      : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                    'group flex items-center rounded-md px-3 py-2 text-sm font-medium'
                  )}
                  aria-current={router.asPath === tab.href ? 'tab' : undefined}
                >
                  <tab.icon
                    className={classNames(
                      router.pathname === tab.href
                        ? 'text-rose-500 group-hover:text-rose-500'
                        : 'text-gray-400 group-hover:text-gray-500',
                      '-ml-1 mr-3 h-6 w-6 flex-shrink-0'
                    )}
                    aria-hidden="true"
                  />
                  <span className=" text-base">{tab.name}</span>
                </a>
              </Link>
            ))}
          </nav>
        </aside>
        <div className="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
          {children}
        </div>
      </div>
    )
  }
}
