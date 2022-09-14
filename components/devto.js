import { FaDev } from 'react-icons/fa'
import useSWRImmutable from 'swr'
import React, { useState, useEffect } from 'react'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export const useDevtoData = ({ devtoUsername }) => {
  const [blogData, setBlogData] = useState([])
  console.log(devtoUsername, 'devto username')

  const { data, error } = useSWRImmutable(
    `https://dev.to/api/articles?username=${devtoUsername}`,
    fetcher
  )
  useEffect(() => {
    if (data) {
      setBlogData(data)
    }
  }, [data])

  if (error) return console.log(error)
  return blogData
}

export default function DevtoBlogList(devtoUsername) {
  const blogData = useDevtoData(devtoUsername)
  if (blogData) {
    return (
      <>
        <div className="mr-2 flex h-auto items-center lg:mr-4 ">
          <FaDev className="h-12 w-10" />
        </div>

        <ul role="list" className="mt-5 mb-6 grid gap-4 lg:grid-cols-2">
          {blogData?.map((blog) => (
            <li
              className="block divide-y divide-gray-200 overflow-hidden rounded-lg border  bg-white shadow outline-none focus-within:ring-2"
              key={blog.id}
            >
              {/* <pre>{JSON.stringify(blog, null, 2)}</pre> */}
              <a
                target="_blank"
                rel="noreferrer"
                href={blog.url}
                className="outline-none"
              >
                <div className="flex items-start justify-between p-4">
                  <div className="flex-1">
                    <div className="flex flex-col justify-between">
                      <h4 className=" mr-2 text-sm font-semibold">
                        {blog.title}
                      </h4>
                      <p className=" mt-2 mr-2 text-ellipsis text-xs line-clamp-2">
                        {blog.description}
                      </p>
                    </div>
                  </div>
                  <div
                    className="h-20 max-w-[150px] flex-1 overflow-hidden rounded-md border bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url(${blog.cover_image})`,
                    }}
                  />
                </div>
              </a>
              <div className="mx-4">
                <div className="flex h-10 w-full items-center justify-between border-t py-2">
                  <div>
                    <p className="text-xs text-gray-500">
                      {blog.readable_publish_date}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </>
    )
  }
}
