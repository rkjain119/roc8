import React, { useEffect, useState } from 'react'

import { useForm } from 'react-hook-form'
import { getUserProfile, setUserProfile } from '../../components/userData'

import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import {
  CalendarIcon,
  EnvelopeIcon,
  PhoneIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/solid'
import { FaDiscord, FaDev } from 'react-icons/fa'
import { SiHashnode } from 'react-icons/si'
import classNames from '../../utils/classNames'

export default function YourProfile() {
  const [user, setUser] = useState(null)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    async function fetchUserProfile() {
      let userProfile = await getUserProfile()
      setUser(userProfile)
      reset({
        about: userProfile.about,
        discord_id: userProfile.discord_id,
        devto_username: userProfile.devto_username,
        hashnode_username: userProfile.hashnode_username,
        email: userProfile.email,
        github_username: userProfile.github_username,
        linkedin_url: userProfile.linkedin_url,
        neograd: userProfile.neograd,
        phone_no: userProfile.phone_no,
        twitter_username: userProfile.twitter_username,
        year_of_graduation: userProfile.year_of_graduation,
        years_of_experience: userProfile.years_of_experience,
        notice_period: userProfile.notice_period,
      })
      return userProfile
    }
    fetchUserProfile()
  }, [reset])

  const onError = (errors, e) => console.log(errors, e)
  const onSubmit = async (data) => {
    console.log(data, 'data')
    const userProfile = await setUserProfile(data)
    console.log(userProfile, 'userProfile')
    reset({
      about: userProfile.about,
      discord_id: userProfile.discord_id,
      devto_username: userProfile.devto_username,
      hashnode_username: userProfile.hashnode_username,
      email: userProfile.email,
      github_username: userProfile.github_username,
      linkedin_url: userProfile.linkedin_url,
      neograd: userProfile.neograd,
      phone_no: userProfile.phone_no,
      twitter_username: userProfile.twitter_username,
      year_of_graduation: userProfile.year_of_graduation,
      years_of_experience: userProfile.years_of_experience,
      notice_period: userProfile.notice_period,
    })
    console.log(userProfile, 'POST 200 ')
  }
  // if (!user) return <Spinner/>

  return (
    <form id="account" onSubmit={handleSubmit(onSubmit, onError)}>
      <div className="shadow sm:overflow-hidden sm:rounded-md">
        <div className="space-y-6 bg-white py-6 px-4 sm:p-6">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Hello,{user?.full_name || user?.github_username}
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              This information will be acessible by recuiters.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {/*  email */}
            <div className="col-span-3 sm:col-span-1">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <EnvelopeIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  readOnly
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-gray-300 pl-10 focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
                  placeholder="you@example.com"
                  {...register('email', {})}
                />
              </div>
            </div>
            {/* phone */}
            <div className="col-span-3 sm:col-span-1">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <PhoneIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="text"
                  autoComplete="tel"
                  id="phone"
                  placeholder="7057407660"
                  className="block w-full rounded-md border-gray-300 pl-10 focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
                  {...register('phone_no', {
                    required: 'Phone number is required',
                    required: 'Please enter your phone number',
                    maxLength: {
                      value: 10,
                      message: 'Phone number must be 10 digits',
                    },
                    pattern: {
                      value: /^[6-9]{1}[0-9]{9}$/i,
                      message:
                        'Please enter a valid 10-digit indian phone no without any prefix & seperators (+91,-,0)',
                    },
                  })}
                />
                {(errors.phone_no?.type === 'required' ||
                  errors.phone_no?.type === 'pattern') && (
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <ExclamationCircleIcon
                      className="h-5 w-5 text-red-500"
                      aria-hidden="true"
                    />
                  </span>
                )}
              </div>
              {errors.phone_no && (
                <div className="mt-2 text-sm text-red-600">
                  {errors.phone_no?.message}
                </div>
              )}
            </div>
            {/*  */}
            <div className="col-span-3 sm:col-span-1"></div>
            {/* <div className="col-span-3 sm:col-span-1"></div> */}
            {/* Devto */}
            <div className="col-span-3 sm:col-span-1">
              <label
                htmlFor="devto_username"
                className="block text-sm font-medium text-gray-700"
              >
                Dev.to Username
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <FaDev className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  id="devto_username"
                  placeholder="rkjain119"
                  className="block w-full min-w-0 rounded-md border-gray-300 pl-10 focus:border-rose-500 focus:ring-rose-500  sm:text-sm"
                  {...register('devto_username', {})}
                />
              </div>
              {errors.devto_username && (
                <div className="mt-2 text-sm text-red-600">
                  {errors.devto_username?.message}
                </div>
              )}
            </div>
            {/* hashnode */}
            <div className="col-span-3 sm:col-span-1">
              <label
                htmlFor="hashnode_username"
                className="block text-sm font-medium text-gray-700"
              >
                Hashnode Username
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <SiHashnode
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="text"
                  id="hashnode_username"
                  placeholder="rkjain119"
                  className="block w-full min-w-0 rounded-md border-gray-300 pl-10 focus:border-rose-500 focus:ring-rose-500  sm:text-sm"
                  {...register('hashnode_username', {})}
                />
              </div>
              {errors.hashnode_username && (
                <div className="mt-2 text-sm text-red-600">
                  {errors.hashnode_username?.message}
                </div>
              )}
            </div>
            {/* Discord ID */}
            <div className="col-span-3 sm:col-span-1">
              <label
                htmlFor="discord_id"
                className="block text-sm font-medium text-gray-700"
              >
                Discord ID
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <FaDiscord
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="text"
                  id="discord_id"
                  placeholder="rk66669#8962"
                  className={classNames(
                    errors.discord_id?.type === 'required' ||
                      errors.discord_id?.type === 'pattern'
                      ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500'
                      : 'border-gray-300 focus:border-rose-500 focus:ring-rose-500',
                    'block w-full min-w-0  rounded-md pl-10  sm:text-sm'
                  )}
                  {...register('discord_id', {
                    required: 'Please enter your Discord ID',
                    pattern: {
                      value: /@?[^#@:]{2,32}#[0-9]{4}/i,
                      message:
                        'Please enter a valid Discord ID (e.g. rk66669#8962)',
                    },
                  })}
                />
                {(errors.discord_id?.type === 'required' ||
                  errors.discord_id?.type === 'pattern') && (
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <ExclamationCircleIcon
                      className="h-5 w-5 text-red-500"
                      aria-hidden="true"
                    />
                  </span>
                )}
              </div>
              {errors.discord_id && (
                <div className="mt-2 text-sm text-red-600">
                  {errors.discord_id?.message}
                </div>
              )}
            </div>
            {/* github */}
            <div className="col-span-3 sm:col-span-1">
              <label
                htmlFor="GithubUrl"
                className="block text-sm font-medium text-gray-700"
              >
                Github Username
              </label>
              <div className="relative mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                  https://github.com/
                </span>
                <input
                  readOnly
                  type="text"
                  id="GithubUrl"
                  placeholder="rkjain119"
                  className="block w-full min-w-0 rounded-none rounded-r-md border-gray-300  focus:outline-none sm:text-sm"
                  {...register('github_username', {})}
                />
              </div>
              {/* className={classNames(
                  errors.GithubUrl?.type === 'required'
                    ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500'
                    : 'border-gray-300 focus:border-rose-500 focus:ring-rose-500',
                  'block w-full min-w-0  rounded-none rounded-r-md pr-8 sm:text-sm'
                )}
                {...register('GithubUrl', {
                  required: 'Github URL is required',
                })} */}
              {/* {errors.GithubUrl?.type === 'required' && (
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <ExclamationCircleIcon
                    className="h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                </span>
              )}
            <div className="mt-2 text-sm text-red-600">
              {errors.GithubUrl?.message}
            </div> */}
            </div>
            {/* twitter */}
            <div className="col-span-3 sm:col-span-1">
              <label
                htmlFor="twitter_username"
                className="block text-sm font-medium text-gray-700"
              >
                Twitter Username
              </label>
              <div className="relative mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                  https://twitter.com/
                </span>
                <input
                  type="text"
                  id="twitter_username"
                  placeholder="rkjain119"
                  className={classNames(
                    errors.twitter_username?.type === 'required'
                      ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500'
                      : 'border-gray-300 focus:border-rose-500 focus:ring-rose-500',
                    'block w-full min-w-0  rounded-none rounded-r-md  sm:text-sm'
                  )}
                  {...register('twitter_username', {
                    required: 'Twitter username is required',
                  })}
                />
                {errors.twitter_username?.type === 'required' && (
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <ExclamationCircleIcon
                      className="h-5 w-5 text-red-500"
                      aria-hidden="true"
                    />
                  </span>
                )}
              </div>
              {errors.twitter_username && (
                <div className="mt-2 text-sm text-red-600">
                  {errors.twitter_username?.message}
                </div>
              )}
            </div>
            {/* linkedin */}
            <div className="col-span-3 sm:col-span-1">
              <label
                htmlFor="linkedin_url"
                className="block text-sm font-medium text-gray-700"
              >
                Linkedin URL
              </label>
              <div className="relative mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                  www.linkedin.com/in/
                </span>
                <input
                  type="text"
                  id="linkedin_url"
                  placeholder="rushab-jain"
                  className={classNames(
                    errors.linkedin_url?.type === 'required'
                      ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500'
                      : 'border-gray-300 focus:border-rose-500 focus:ring-rose-500',
                    'block w-full min-w-0  rounded-none rounded-r-md  sm:text-sm'
                  )}
                  {...register('linkedin_url', {
                    required: 'Linkedin URL is required',
                  })}
                />
                {errors.linkedin_url?.type === 'required' && (
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <ExclamationCircleIcon
                      className="h-5 w-5 text-red-500"
                      aria-hidden="true"
                    />
                  </span>
                )}
              </div>
              {errors.linkedin_url && (
                <div className="mt-2 text-sm text-red-600">
                  {errors.linkedin_url?.message}
                </div>
              )}
            </div>

            {/* about */}
            <div className="col-span-3">
              <label
                htmlFor="about"
                className="block text-sm font-medium text-gray-700"
              >
                About
              </label>
              <div className="relative mt-1">
                <textarea
                  id="about"
                  rows={3}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
                  placeholder="Hi ,I am _name_,  a full stack developer and I love to learn new technologies."
                  type="text"
                  {...register('about', {
                    required: 'Brief description for your profile is required',
                    maxLength: {
                      value: 200,
                      message:
                        'Brief description for your profile is too long max 200 characters only',
                    },
                  })}
                />
              </div>

              {errors.about?.message ? (
                <p className="mt-2 text-sm text-red-600">
                  {errors.about?.message}
                </p>
              ) : (
                <p className="mt-2 text-sm text-gray-500">
                  Brief description for your profile.
                </p>
              )}
            </div>
            {/* Year of graduation */}
            <div className="col-span-3 sm:col-span-1">
              <label
                htmlFor="year_of_graduation"
                className="block text-sm font-medium text-gray-700"
              >
                Year Of Graduation
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <AcademicCapIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="number"
                  id="year_of_graduation"
                  placeholder="2022"
                  className="block w-full rounded-md border-gray-300 pl-10 focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
                  {...register('year_of_graduation', {
                    valueAsNumber: true,
                    required: 'Please enter your year of graduation',
                    min: {
                      value: 2010,
                      message: 'Please enter a valid year',
                    },
                    max: {
                      value: 2030,
                      message: 'Please enter a valid year',
                    },
                  })}
                />

                {(errors.year_of_graduation ||
                  errors.year_of_graduation?.type === 'max') && (
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <ExclamationCircleIcon
                      className="h-5 w-5 text-red-500"
                      aria-hidden="true"
                    />
                  </span>
                )}
              </div>
              {errors.year_of_graduation && (
                <div className="mt-2 text-sm text-red-600">
                  {errors.year_of_graduation?.message}
                </div>
              )}
            </div>
            {/* Year of exp  */}
            <div className="col-span-3 sm:col-span-1">
              <label
                htmlFor="years_of_experience"
                className="block text-sm font-medium text-gray-700"
              >
                Years Of Experience
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <CalendarIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="number"
                  id="years_of_experience"
                  placeholder="1"
                  className="block w-full rounded-md border-gray-300 pl-10 focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
                  {...register('years_of_experience', {
                    required: 'Please enter your years of Experience',
                    max: {
                      value: 9,
                      message: 'enter a valid years of experience',
                      valueAsNumber: true,
                    },
                  })}
                />

                {(errors.years_of_experience?.type === 'required' ||
                  errors?.years_of_experience) && (
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <ExclamationCircleIcon
                      className="h-5 w-5 text-red-500"
                      aria-hidden="true"
                    />
                  </span>
                )}
              </div>
              {errors.years_of_experience && (
                <div className="mt-2 text-sm text-red-600">
                  {errors.years_of_experience?.message}
                </div>
              )}
            </div>
            {/* notice period */}
            <div className="col-span-3 sm:col-span-1">
              <label
                htmlFor="noticeperiod"
                className="block text-sm font-medium text-gray-700"
              >
                Notice Period (in months)
              </label>

              <select
                id="noticeperiod"
                className="relative mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-rose-500 focus:outline-none focus:ring-rose-500 sm:text-sm"
                {...register('notice_period', {
                  required: 'Please select your notice period  0 if none ',
                  valueAsNumber: true,
                })}
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              {errors.notice_period?.type === 'required' && (
                <div className="mt-2 text-sm text-red-600">
                  {errors.notice_period?.message}
                </div>
              )}
            </div>
            {/* neog checkbox */}
            <div className="col-span-3  mt-4 space-y-4 sm:col-span-1">
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="neograd"
                    name="neograd"
                    type="checkbox"
                    placeholder="neograd"
                    className="h-4 w-4 rounded border-gray-300 text-rose-600 focus:ring-rose-500"
                    {...register('neograd', {})}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="neograd"
                    className="font-medium text-gray-700"
                  >
                    NeoGrad
                  </label>
                  <p className="text-gray-500">Are you a neoGrad?</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end  gap-2 bg-gray-50 px-4 py-3 text-right sm:px-6">
          {/* <div>
            <button
              onClick={() => {}}
              className=" rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
            >
              Back
            </button>
          </div> */}
          <button
            onClick={() => reset()}
            // onClick={() => getUserProfile()}
            className="inline-flex justify-center rounded-md border border-transparent bg-rose-100 py-2 px-4 text-sm font-medium text-rose-700 shadow-sm hover:bg-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
          >
            Reset
          </button>
          <button
            type="submit"
            className="rounded-md border border-transparent bg-rose-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
          >
            Save Profile
          </button>
        </div>
      </div>
    </form>
  )
}
