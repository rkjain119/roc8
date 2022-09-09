import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useSWRImmutable from 'swr/immutable'
import ProjectList from '../components/projectList'
import BlogList from '../components/blogList'
import { useUser } from '../context/users'
import { getLinkedinUrl } from './userData'
import { getProjects } from './userData'

import { GoLogoGithub, GoMarkGithub, GoGlobe } from 'react-icons/go'
import { FaTwitter, FaEnvelope, FaLinkedin } from 'react-icons/fa'
import { FcApproval } from 'react-icons/fc'
import { PencilIcon, CodeBracketIcon } from '@heroicons/react/24/solid'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function GetProjectsData({ userName }) {
  const [projectsData, setProjectsData] = useState([])
  useEffect(() => {
    async function fetchProjectsJson() {
      const fetchProjectsData = await getProjects()
      fetchProjectsData
        ? setProjectsData(fetchProjectsData[0].project_json_array)
        : setProjectsData([])
    }
    fetchProjectsJson()
  }, [])

  return projectsData && projectsData.length !== 0 ? (
    <ProjectList projectsData={projectsData} userName={userName} />
  ) : (
    <Link href="/profile/projects">
      <button
        type="button"
        className="relative m-4 block w-full rounded-lg border-2 border-dashed border-gray-300 p-3 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
      >
        <CodeBracketIcon className="mx-auto h-10 w-10 text-gray-400" />
        <span className="mt-2 block text-sm font-medium capitalize text-gray-600">
          There was no project found. Add New Project
        </span>
      </button>
    </Link>
  )
}

function useUserData() {
  const [userLinkedinUrl, setUserLinkedinUrl] = useState('loading')
  const { user } = useUser()

  const userName = user.github_username

  const { data, error, isValidating } = useSWRImmutable(
    () => (userName ? 'https://api.github.com/users/' + userName : null),
    fetcher
  )
  const userGraph = `https://github-contributions-api.deno.dev/${userName}.svg?scheme=random`
  const userGithubUrl = `https://github.com/${userName}`
  const userEmail = user.email
  getLinkedinUrl().then((res) => setUserLinkedinUrl(res))
  return {
    userName,
    userEmail,
    userGithubUrl,
    userLinkedinUrl,
    userGraph,
    userName,
    userData: data,
    isLoadingData: !error && !data && !isValidating,
    isError: error,
  }
}
export default function Dashboard() {
  const {
    userName,
    userEmail,
    userGithubUrl,
    userLinkedinUrl,
    userGraph,
    userData,
    isLoadingData,
    isError,
  } = useUserData()

  {
    return (
      <main className="bg-white pb-8 sm:mt-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="sr-only">Page title</h1>
          {/* Main 3 column grid */}
          <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-4 lg:gap-8">
            {/* Right column */}
            <div className="grid grid-cols-1 gap-4">
              <section aria-labelledby="section-2-title">
                <h2 className="sr-only" id="section-2-title">
                  Section title
                </h2>
                <div className="mx-auto truncate rounded-lg p-6 shadow sm:overflow-hidden">
                  <div className="flex flex-wrap sm:block">
                    <div className="m-1 w-32 sm:w-full">
                      <Image
                        width={200}
                        height={200}
                        layout="responsive"
                        objectFit="contain"
                        className="rounded-full"
                        src={
                          userData?.avatar_url ||
                          'https://avatars.githubusercontent.com/u/110811112?v=4'
                        }
                        alt="User Avatar"
                      />
                    </div>
                    <div className="ml-6 self-center sm:ml-0 ">
                      <div className="ml-6 hidden w-full cursor-pointer justify-end sm:-mb-6 sm:ml-0 sm:flex">
                        <Link href="/profile">
                          <PencilIcon
                            className="h-5 w-5 text-gray-500 hover:text-gray-600"
                            aria-hidden="true"
                          />
                        </Link>
                      </div>
                      <h1 className="lg:text-2rem text-xl font-semibold ">
                        {userData?.name || 'User Name'}
                      </h1>
                      <Link href={userGithubUrl}>
                        <div className="mt-1 cursor-pointer text-base leading-6 text-gray-700">
                          <h3 className="text-base font-extralight text-gray-900">
                            @{userData?.login || 'User Name'}
                          </h3>
                          {userData?.bio || 'User Bio'}
                        </div>
                      </Link>
                    </div>
                    <div className="mt-2 flex w-full flex-col ">
                      <Link href="/profile" type="button">
                        <a className="inline-flex items-center justify-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-center text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:hidden">
                          Edit Profile
                        </a>
                      </Link>
                      <div className="mt-1 flex cursor-pointer items-center text-sm leading-5 text-gray-600">
                        <Link href={`https://${userData?.blog}`}>
                          <div className="flex">
                            <GoGlobe className="mr-2 h-6" />
                            {userData?.blog || 'Portfolio / blog'}
                          </div>
                        </Link>
                      </div>

                      <div className="mt-1 flex cursor-pointer items-center text-sm leading-5 text-gray-600">
                        <Link
                          href={`https://www.linkedin.com/in/${userLinkedinUrl}`}
                        >
                          <div className="flex">
                            <FaLinkedin className="mr-2 h-6" />
                            {userLinkedinUrl || 'Linkedin userName'}
                          </div>
                        </Link>
                      </div>

                      <div className="mt-1 flex cursor-pointer items-center text-sm leading-5 text-gray-600">
                        <Link href={`https://github.com/${userData?.login}`}>
                          <div className="flex">
                            <GoMarkGithub className="mr-2 h-6" />
                            {userData?.login || 'Github User Name'}
                          </div>
                        </Link>
                      </div>

                      <div className="mt-1 flex cursor-pointer items-center text-sm leading-5 text-gray-600">
                        <Link
                          href={`https://twitter.com/${userData?.twitter_username}`}
                        >
                          <div className="flex">
                            <FaTwitter className="mr-2 h-6" />
                            {userData?.twitter_username || 'twitter_username'}
                          </div>
                        </Link>
                      </div>

                      <div className="mt-1 flex cursor-pointer items-center text-sm leading-5 text-gray-600">
                        <Link href={`mailto:${userEmail}`}>
                          <div className="flex">
                            <FaEnvelope className="mr-2 h-6" />
                            <span>{userEmail}</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                    {/*  */}
                  </div>
                </div>
              </section>
            </div>

            {/* Left column */}
            <div className="grid grid-cols-1 gap-4 lg:col-span-3">
              <section aria-labelledby="section-1-title">
                <h2 className="sr-only" id="section-1-title">
                  Section title
                </h2>
                <div className="overflow-hidden rounded-lg bg-white shadow">
                  {/* github */}
                  <div className="relative p-6">
                    <div className="flex items-center gap-3 pb-2 sm:pl-3">
                      <Link href={userGithubUrl}>
                        <div className="">
                          <GoLogoGithub className="h-4 w-20 cursor-pointer sm:h-6 sm:w-20" />
                        </div>
                      </Link>
                      <Link href={userGithubUrl}>
                        <div className="-ml-4 sm:-ml-2">
                          <FcApproval className="h-6 cursor-pointer" />
                        </div>
                      </Link>
                    </div>
                    <img src={userGraph} alt="github graph" />
                    {/* <Image
                      src={userGraph}
                      alt="Avatar"
                      width={712}
                      height={140}
                      layout="responsive"
                    /> */}
                  </div>
                  {/* project List */}
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium leading-6 text-gray-900 sm:pl-3">
                        Projects
                      </h3>
                      <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border bg-white transition-all duration-75 ease-in focus-within:border-transparent focus-within:ring-2">
                        <button type="button" className="outline-none">
                          <Link href="/profile/projects">
                            <PencilIcon
                              className="h-5 w-5 text-gray-500 hover:text-gray-600"
                              aria-hidden="true"
                            />
                          </Link>
                        </button>
                      </div>
                    </div>
                    <GetProjectsData userName={userName} />
                  </div>
                  {/* */}
                  {/* Blogs */}
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium leading-6 text-gray-900 sm:pl-3">
                        Blogs
                      </h3>
                      <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border bg-white transition-all duration-75 ease-in focus-within:border-transparent focus-within:ring-2">
                        <button type="button" className="outline-none">
                          <Link href="/profile/blogs">
                            <PencilIcon
                              className="h-5 w-5 text-gray-500 hover:text-gray-600"
                              aria-hidden="true"
                            />
                          </Link>
                        </button>
                      </div>
                    </div>
                    <BlogList />
                  </div>
                  {/*  */}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
