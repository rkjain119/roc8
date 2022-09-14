import React, { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useForm, useWatch } from 'react-hook-form'
import useSWR from 'swr'
import uuid from 'react-uuid'
import { getProjects, setProjects } from '../../components/userData'
import { useUser } from '../../context/users'
import ProjectList from '../../components/projectList'

import { FolderPlusIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { LinkIcon, PlusIcon } from '@heroicons/react/24/solid'
// QuestionMarkCircleIcon,
// import { Switch } from '@headlessui/react'
import { ErrorMessage } from '@hookform/error-message'

const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function Projects() {
  const {
    reset,
    watch,
    control,
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const isGithub = useWatch({
    control,
    name: 'code_hosted_on',
    defaultValue: 'github',
  })

  const isRepoName = watch('repo_name') || false
  const isRepoNamegt = isRepoName.length > 3
  const repoName = getValues('repo_name')
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [repoData, setRepoData] = useState({})
  const [projectsData, setProjectsData] = useState([])
  const [userName, setUserName] = useState('loading...')

  const { user } = useUser()

  useEffect(() => {
    setLoading(true)
    setUserName(user.github_username)
    async function fetchProjectsJson() {
      const fetchProjectsData = await getProjects()
      fetchProjectsData
        ? setProjectsData(fetchProjectsData[0].project_json_array)
        : setProjectsData([])
      console.log(fetchProjectsData, 'projects fetch')
      setLoading(false)
    }
    fetchProjectsJson()
  }, [])

  const onError = (errors, e) => console.log(errors, e)

  const onSubmit = async (data, e) => {
    setLoading(true)
    const fetchProjectsData = await getProjects()
    const projects = fetchProjectsData[0].project_json_array
    projects === null || undefined
      ? (projects = [{ ...data, id: uuid() }])
      : (projects = [...projects, { ...data, id: uuid() }])
    const testProjectsData = await setProjects(projects)
    reset()
    setProjectsData(projects)
    setLoading(false)
    setOpen(false)
  }

  function FetchRepoData({ repoName, isGithub, isRepoNamegt }) {
    const [shouldFetch, setShouldFetch] = useState(false)

    const { data, error, isValidating } = useSWR(
      shouldFetch
        ? 'https://api.github.com/repos' + '/' + userName + '/' + repoName
        : null,
      fetcher
    )
    error ? console.error(error, 'error') : null
    if (data) {
      setRepoData(data)
      setValue('demo_url', data.homepage)
      setValue('description', data.description)
    }

    function handleClick() {
      setShouldFetch(true)
    }

    if (isGithub && isRepoNamegt) {
      return (
        <>
          {!isValidating ? (
            <button
              className="inline-flex items-center rounded border border-transparent bg-rose-200 px-2 py-2.5 text-sm font-medium text-rose-700 hover:bg-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
              type="button"
              disabled={shouldFetch}
              onClick={handleClick}
            >
              Fetch
              <PlusIcon className="ml-2 -mr-0.5 h-4 w-4" aria-hidden="true" />
            </button>
          ) : (
            <button
              type="button"
              className="inline-flex cursor-not-allowed items-center rounded bg-rose-100 px-2 py-2.5 text-sm font-medium  text-rose-400 transition duration-150 ease-in-out hover:bg-rose-400"
            >
              <svg
                className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Loading...
            </button>
          )}

          {data ? (
            <div className="text-sm text-red-600">{data.message}</div>
          ) : (
            <div>{error}</div>
          )}
        </>
      )
    }
  }

  return (
    <>
      {projectsData && projectsData.length !== 0 ? (
        <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
          <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
            <div className="ml-4 mt-4">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Projects
              </h3>
              <p className="mt-1 text-sm text-gray-500">add more</p>
            </div>
            <div className="ml-4 mt-4 flex-shrink-0">
              <button
                onClick={() => setOpen(true)}
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
              >
                <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                New Project
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className=" my-20 text-center ">
          <FolderPlusIcon
            className="mx-auto h-12 w-12 text-gray-400"
            aria-hidden="true"
          />
          <h3 className="mt-2 text-sm font-medium text-gray-900">
            No projects
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Get started by creating a new project.
          </p>
          <div className="mt-6">
            <button
              onClick={() => setOpen(true)}
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
            >
              <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              New Project
            </button>
          </div>
        </div>
      )}

      {/* cards ? */}
      {projectsData ? (
        <ProjectList projectsData={projectsData} userName={userName} />
      ) : (
        <div>loading....</div>
      )}
      {/* cards end */}

      {/* modal */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed  inset-0 overflow-hidden"
          onClose={setOpen}
        >
          <div className="fixed inset-0 backdrop-blur-sm" aria-hidden="true" />
          <div className="absolute inset-0  overflow-hidden">
            <Dialog.Overlay className="absolute inset-0" />

            <div className="fixed inset-y-0 right-0 mt-16 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="w-screen max-w-2xl">
                  <form
                    onSubmit={handleSubmit(onSubmit, onError)}
                    className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
                  >
                    <div className="flex-1">
                      {/* Header */}
                      <div className="bg-gray-50 px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between space-x-3">
                          <div className="space-y-1">
                            <Dialog.Title className="text-lg font-medium text-gray-900">
                              New project
                            </Dialog.Title>
                            <p className="text-sm text-gray-500">
                              Get started by filling in the information below to
                              create your new project.
                            </p>
                          </div>
                          <div className="flex h-7 items-center">
                            <button
                              type="button"
                              className="text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Divider container */}
                      <div className="space-y-6 py-6 sm:space-y-0 sm:divide-y sm:divide-gray-200 sm:py-0">
                        {/* Project name */}
                        <div className="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                          <div>
                            <label
                              htmlFor="project-name"
                              className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                            >
                              Project name
                            </label>
                          </div>
                          <div className="sm:col-span-2">
                            <input
                              type="text"
                              name="project-name"
                              id="project-name"
                              placeholder='"Project Name"'
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
                              {...register('project_name', { required: true })}
                            />
                            <ErrorMessage
                              errors={errors}
                              name="project_name"
                              message="Project name is required"
                            />
                          </div>
                        </div>
                        {/* Code Hosted on */}
                        <div className=" space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                          <label className="text-base font-medium text-gray-900">
                            Code Hosted On
                          </label>
                          <p className="text-sm leading-5 text-gray-500">
                            Where did you host your code?
                          </p>
                          <fieldset className="mt-4">
                            <legend className="sr-only">Code Hosted On </legend>
                            <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                              <div className="flex items-center">
                                <input
                                  id="github"
                                  type="radio"
                                  value="github"
                                  defaultChecked={true}
                                  className="h-4 w-4 border-gray-300 text-rose-600 focus:ring-rose-500"
                                  {...register('code_hosted_on', {})}
                                />

                                <label
                                  htmlFor="github"
                                  className="ml-3 block text-sm font-medium text-gray-700"
                                >
                                  Github
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  id="other"
                                  type="radio"
                                  value="other"
                                  className="h-4 w-4 border-gray-300 text-rose-600 focus:ring-rose-500"
                                  {...register('code_hosted_on', {})}
                                />

                                <label
                                  htmlFor="other"
                                  className="ml-3 block text-sm font-medium text-gray-700"
                                >
                                  Other
                                </label>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                        {/* repo Name */}
                        {isGithub === 'github' ? (
                          <>
                            <div className=" space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                              <label
                                htmlFor="repoName"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Github Repo Name
                              </label>
                              <div className="col-span-2 mt-1 flex rounded-md shadow-sm">
                                <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                                  http://github.com/{userName}/
                                </span>
                                <input
                                  type="text"
                                  id="repoName"
                                  className=" block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 px-3 py-2 focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
                                  placeholder="CasCare"
                                  {...register('repo_name', {
                                    required: true,
                                  })}
                                />
                                <div className="px-1">
                                  <FetchRepoData
                                    repoName={repoName}
                                    isGithub={isGithub}
                                    isRepoNamegt={isRepoNamegt}
                                  />
                                </div>
                              </div>
                              {repoData && isRepoNamegt ? (
                                <span className="col-span-2 col-start-2 flex items-end text-xs text-gray-500">{`Last Updated At: ${repoData.updated_at}`}</span>
                              ) : null}
                            </div>
                          </>
                        ) : (
                          <div className=" space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                            <label
                              htmlFor="repoName"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Repo Url
                            </label>
                            <div className="col-span-2 mt-1 flex rounded-md shadow-sm">
                              <input
                                type="text"
                                id="repoName"
                                className=" block w-full min-w-0 flex-1  rounded-md border-gray-300 px-3 py-2 focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
                                placeholder="https://gitlab.com/{userName}/CasCare"
                                {...register('repo_name', {
                                  required: true,
                                })}
                              />
                            </div>
                          </div>
                        )}

                        {/* Project Demo Url */}
                        <div className="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                          <label
                            htmlFor="demoUrl"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Project Demo URL
                          </label>
                          <div className="relative col-span-2 mt-1 rounded-md shadow-sm">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                              <LinkIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                            </div>

                            <input
                              type="text"
                              id="demoUrl"
                              className="block w-full rounded-md border-gray-300 pl-10 focus:border-rose-500 focus:ring-rose-500 sm:pl-10 sm:text-sm"
                              placeholder="www.example.com"
                              {...register('demo_url', { required: true })}
                            />
                          </div>
                        </div>
                        {/* Tech Stack */}
                        <div className="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                          <label
                            htmlFor="techStack"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Tech Stack
                          </label>
                          <div className="relative col-span-2 mt-1 rounded-md shadow-sm">
                            <input
                              type="text"
                              id="techStack"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
                              placeholder="React,Tailwind,Supabase"
                              {...register('tech_stack', {
                                required: true,
                                pattern:
                                  /^(?: *[\w!@#$%?=*&.-]+(?: [\w!@#$%?=*&.-]+)*(?: *, *[\w!@#$%?=*&.-]+(?: [\w!@#$%?=*&.-]+)*)* *)?$/i,
                              })}
                            />

                            <p
                              className=" mt-2 text-sm text-gray-500"
                              id="techStack-description"
                            >
                              please add the technologies used in your project
                              as a comma-separated list.
                            </p>
                          </div>
                        </div>
                        {/* Project description */}
                        <div className="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                          <div>
                            <label
                              htmlFor="project-description"
                              className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                            >
                              Description
                            </label>
                          </div>
                          <div className="sm:col-span-2">
                            <textarea
                              id="project-description"
                              rows={3}
                              className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
                              {...register('description', { required: true })}
                            />
                          </div>
                        </div>

                        {/* Checkbox */}

                        <fieldset>
                          <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                            <div className=" text-sm">
                              <label
                                htmlFor="comments"
                                className="text-sm font-medium text-gray-900"
                              >
                                Self Declatation
                              </label>
                            </div>
                            <div className="col-span-2 flex h-5 items-center">
                              <input
                                id="self_declaration"
                                aria-describedby="comments-description"
                                type="checkbox"
                                className="mr-5 h-4 w-4 rounded border-gray-300 text-rose-600 focus:ring-rose-500"
                                {...register('self_declaration', {
                                  required: true,
                                })}
                              />

                              <div
                                id="self_declaration-description"
                                className=" mt-3 items-center text-sm text-gray-500"
                              >
                                This project meets the criteria mentioned at{' '}
                                <a
                                  href="
                                https://bit.ly/roc8-project"
                                  className="text-rose-600 hover:text-rose-900"
                                >
                                  https://bit.ly/roc8-project &nbsp;
                                </a>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex-shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6">
                      <div className="flex justify-end space-x-3">
                        <button
                          type="button"
                          className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                          onClick={() => setOpen(false)}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-rose-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                        >
                          Create
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
