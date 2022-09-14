import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { getBlog, setBlog } from '../../components/userData'

import { LinkIcon } from '@heroicons/react/24/outline'

export default function Blog() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    async function fetchBlogs() {
      let blogs = await getBlog()
      console.log(blogs, 'blogs')
      reset({
        blog1: blogs.blog1,
        blog2: blogs.blog2,
        blog3: blogs.blog3,
      })
    }
    fetchBlogs()
  }, [reset])

  const onError = (errors, e) => console.log(errors, e)
  const onSubmit = async (data) => {
    // e.target.reset()
    const blogs = await setBlog(data)
    console.log(blogs, 'blogs')
    reset({
      blog1: blogs.blog1,
      blog2: blogs.blog2,
      blog3: blogs.blog3,
    })

    console.log(blogs, 'POST 200 ')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <div className="shadow sm:overflow-hidden sm:rounded-md">
        <div className="space-y-6 bg-white py-6 px-4 sm:p-6">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Blog Posts
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              You can use blogging sites like
              <a target="_blank" href="https://dev.to" rel="noreferrer">
                {' '}
                dev.to
              </a>{' '}
              or{' '}
              <a target="_blank" href="https://hashnode.com/" rel="noreferrer">
                hashnode
              </a>{' '}
              or you can use your own website <br /> Blogs form dev.to are
              automatically fetched.
            </p>
          </div>
          <div className="grid grid-cols-6 gap-6">
            {/* blog 1 */}
            <div className="col-span-6 sm:col-span-4">
              <label
                htmlFor="blog1"
                className="block text-sm font-medium text-gray-700"
              >
                Blog post 1
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <LinkIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="url"
                  name="blog1"
                  id="blog1"
                  className="block w-full rounded-md border-gray-300 pl-10 focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
                  placeholder="www.example.com"
                  {...register('blog1', {
                    maxLength: {
                      value: 200,
                      message: 'URL must be less than 200 characters',
                    },
                  })}
                />
              </div>
              {errors.blog1 && (
                <div className="mt-2 text-sm text-red-600">
                  {errors.blog1.message}
                </div>
              )}
            </div>
            {/* blog 2 */}
            <div className="col-span-6 sm:col-span-4">
              <label
                htmlFor="blog2"
                className="block text-sm font-medium text-gray-700"
              >
                Blog post 2
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <LinkIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="url"
                  name="blog2"
                  id="blog2"
                  className="block w-full rounded-md border-gray-300 pl-10 focus:border-rose-500 focus:ring-rose-500  sm:text-sm"
                  placeholder="www.example.com"
                  {...register('blog2', {
                    maxLength: {
                      value: 200,
                      message: 'URL must be less than 200 characters',
                    },
                  })}
                />
              </div>
              {errors.blog2 && (
                <div className="mt-2 text-sm text-red-600">
                  {errors.blog2?.message}
                </div>
              )}
            </div>
            {/* blog 3 */}
            <div className="col-span-6 sm:col-span-4">
              <label
                htmlFor="blog3"
                className="block text-sm font-medium text-gray-700"
              >
                Blog post 3
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <LinkIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="url"
                  name="blog3"
                  id="blog3"
                  className="block w-full rounded-md border-gray-300 pl-10 focus:border-rose-500 focus:ring-rose-500  sm:text-sm"
                  placeholder="www.example.com"
                  {...register('blog3', {
                    maxLength: {
                      value: 200,
                      message: 'URL must be less than 200 characters',
                    },
                  })}
                />
              </div>
              {errors.blog3 && (
                <div className="mt-2 text-sm text-red-600">
                  {errors.blog3?.message}
                </div>
              )}
            </div>
            {/*  */}
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
        <button
          // onClick={notify}
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-rose-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
        >
          Save
        </button>
      </div>
    </form>
  )
}
