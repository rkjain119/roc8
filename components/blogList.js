import { useEffect, useState } from 'react'
import Link from 'next/link'
import classNames from '../utils/classNames'

import { LinkIcon } from '@heroicons/react/24/outline'

import { getBlog } from './userData'

export default function BlogList() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    async function fetchBlogs() {
      let blogs = await getBlog()
      setBlogs([blogs])
    }

    fetchBlogs()
  }, [])
  const tabs = [
    { name: 'Open', href: '#', current: true },
    { name: 'Closed', href: '#', current: false },
  ]

  return blogs && blogs !== [] ? (
    <ul
      role="list"
      className="flex divide-y divide-gray-200"
      // className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {blogs?.map((blog) => (
        <li
          key={blog}
          // className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
          className="flex divide-y divide-gray-200 rounded-lg bg-white shadow"
        >
          <div className="flex w-full flex-col justify-start text-ellipsis p-6">
            {blog?.blog1 && (
              <Link href={blog?.blog1}>
                <div className="flex items-center">
                  <LinkIcon
                    title="Code"
                    className="mr-2 h-5 w-5 cursor-pointer text-gray-600"
                  />
                  <div className="h-5 w-5/6 cursor-pointer truncate text-sm">
                    {blog?.blog1}
                  </div>
                </div>
              </Link>
            )}
            {blog?.blog2 && (
              <Link href={blog?.blog2}>
                <div className="flex items-center">
                  <LinkIcon
                    title="Code"
                    className="mr-2 h-5 w-5 cursor-pointer text-gray-600"
                  />
                  <div className="h-5 w-5/6 cursor-pointer truncate text-sm">
                    {blog?.blog2}
                  </div>
                </div>
              </Link>
            )}
            {blog?.blog3 && (
              <Link href={blog?.blog3}>
                <div className="flex items-center">
                  <LinkIcon
                    title="Code"
                    className="mr-2 h-5 w-5 cursor-pointer text-gray-600"
                  />
                  <div className="h-5 w-5/6 cursor-pointer truncate text-sm">
                    {blog?.blog3}
                  </div>
                </div>
              </Link>
            )}
          </div>
        </li>
      ))}
    </ul>
  ) : (
    <Link href="/profile/blogs">
      <button
        type="button"
        className="relative m-4 block w-full rounded-lg border-2 border-dashed border-gray-300 p-3 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
      >
        <LinkIcon className="mx-auto h-10 w-10 text-gray-400" />
        <span className="mt-2 block text-sm font-medium text-gray-600">
          Add New Blog
        </span>
      </button>
    </Link>
  )
}
