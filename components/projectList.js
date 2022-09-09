import { GoMarkGithub } from 'react-icons/go'
import { FaGlobe } from 'react-icons/fa'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { deleteProject } from './userData'

export default function ProjectList({ projectsData, userName }) {
  const router = useRouter()
  const [path, setpath] = useState('')

  useEffect(() => {
    setpath(router.pathname)
  }, [router.pathname])

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      // className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {projectsData?.map((project) => (
        <li
          key={project.id}
          // className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
          className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
        >
          {/* <pre>{JSON.stringify(project, null, 2)}</pre> */}
          <div className="flex w-full items-center justify-between space-x-6 p-6">
            <div className="flex-1 truncate">
              <div className="flex items-center justify-between space-x-3">
                <h3 className="text-ellipsis font-medium  capitalize text-gray-900">
                  {project.project_name}
                </h3>
                {project.code_hosted_on && (
                  <span className="inline-block flex-shrink-0  rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                    {project.code_hosted_on}
                  </span>
                )}
              </div>
              <div className="mt-1 truncate text-sm text-gray-500">
                {project.description}
              </div>
              {/*  */}
              {path === '/' ? null : (
                <div className="flex justify-around gap-3 p-2 pt-4">
                  <div className="flex items-center">
                    <Link
                      href={`https://github.com/${userName}/${project.repo_name}`}
                    >
                      <div className="">
                        <GoMarkGithub
                          title="Code"
                          className="h-5 w-5 cursor-pointer text-gray-600"
                        />
                      </div>
                    </Link>
                  </div>
                  <Link className="justify-end" href={project.demo_url}>
                    <div className="">
                      <FaGlobe
                        title="deployed demo"
                        className="h-5 w-5 cursor-pointer text-gray-600"
                      />
                    </div>
                  </Link>
                </div>
              )}
              {/*  */}
            </div>
          </div>

          {path === '/' ? (
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
                  href={`https://github.com/${userName}/${project.repo_name}`}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                >
                  <GoMarkGithub
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">Code</span>
                </a>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href={project.demo_url}
                  className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                >
                  <FaGlobe
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">Demo</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <div className="-ml-px flex w-0 flex-1">
                  <button
                    type="button"
                    onClick={() => router.reload()}
                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                  >
                    <PencilIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">Edit</span>
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    deleteProject(project.id).then(() => router.reload())
                  }
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                >
                  <TrashIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">Delete</span>
                </button>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}
