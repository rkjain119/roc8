import {
  LightningBoltIcon,
  SupportIcon,
  UserIcon,
  CreditCardIcon,
} from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'

import Image from 'next/image'
import React from 'react'
import Faq from './faq/faq'

const features = [
  {
    name: 'Access Curated Candidates',
    description:
      'A high quality, ready-to-interview candidate pool, handpicked by us.',
    icon: UserIcon,
  },
  {
    name: 'Pay Only If You Hire',
    description:
      "We don't charge you until you hire from us. You get access to our hiring portal charge-free.",
    icon: CreditCardIcon,
  },
  {
    name: 'Hire Within 2 Weeks',
    description:
      'Candidates respond in under 72 hours. Set up interviews in days, hire within 2 weeks.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Dedicated support throughout the process',
    description: 'We help you with any roadblocks that come your way.',
    icon: SupportIcon,
  },
]

export default function Landing() {
  return (
    <div className="relative overflow-hidden bg-slate-800">
      <div
        className="hidden sm:absolute sm:inset-0 sm:block"
        aria-hidden="true"
      >
        <svg
          className="absolute bottom-0 right-0 mb-48 translate-x-1/2 transform text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:translate-x-0 xl:transform-none"
          width={364}
          height={384}
          viewBox="0 0 364 384"
          fill="none"
        >
          <defs>
            <pattern
              id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} fill="currentColor" />
            </pattern>
          </defs>
          <rect
            width={364}
            height={384}
            fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)"
          />
        </svg>
      </div>

      <main className="relative mt-16 pt-6 pb-16 sm:mt-24 sm:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="px-4 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
              <div>
                <a
                  href="#"
                  className="inline-flex items-center rounded-full bg-gray-900 p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
                >
                  <span className="rounded-full bg-indigo-500 px-3 py-0.5 text-xs font-semibold uppercase leading-5 tracking-wide text-white">
                    Get hired
                  </span>
                  <span className="ml-4 text-sm">
                    Click here if you&apos;re a Candidate
                  </span>
                  <ChevronRightIcon
                    className="ml-2 h-5 w-5 text-gray-500"
                    aria-hidden="true"
                  />
                </a>
                <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                  <span className="md:block">Hire Practitioner Level</span>{' '}
                  <span className="text-indigo-400 md:block">React Devs</span>
                </h1>
                <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  We only choose the top 5% of developers that have been
                  thoroughly vetted and are strong in the fundamentals.
                </p>
                <p className="mt-8 text-sm tracking-wide  text-white  sm:mt-10">
                  Companies that have hired from us
                </p>
                <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                  <div className="flex flex-wrap items-center justify-between">
                    <div className="flex justify-center px-1">
                      <Image
                        height={50}
                        width={150}
                        className="h-20 sm:h-10"
                        src="https://softr-prod.imgix.net/applications/9d5e7a64-e0eb-4200-887e-f642ba902626/assets/b32d6aea-db89-4d13-b882-aa9a210c3712.svg"
                        alt="Tuple"
                      />
                    </div>
                    <div className="flex justify-center px-1">
                      <Image
                        height={30}
                        width={100}
                        className="h-9 sm:h-10"
                        src="https://softr-prod.imgix.net/applications/9d5e7a64-e0eb-4200-887e-f642ba902626/assets/714e4fc1-f1a4-400b-b88f-2bc64d6b13f3.png"
                        alt="Workcation"
                      />
                    </div>
                    <div className="flex justify-center px-1">
                      <Image
                        height={50}
                        width={150}
                        className="h-9 sm:h-10"
                        src="https://softr-prod.imgix.net/applications/9d5e7a64-e0eb-4200-887e-f642ba902626/assets/e20e61ce-d4ea-44dc-9eee-2ceac17bfbe2.svg"
                        alt="StaticKit"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
              <div className="bg-white sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden sm:rounded-lg">
                <div className="px-4 py-8 sm:px-10">
                  <div className="mt-6">
                    <form action="#" method="POST" className="space-y-6">
                      <div>
                        <label htmlFor="name" className="sr-only">
                          Full name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          autoComplete="name"
                          placeholder="Full name"
                          required
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="sr-only">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          autoComplete="email"
                          placeholder="Email address"
                          required
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div>
                        <label htmlFor="mobile" className="sr-only">
                          Mobile
                        </label>
                        <input
                          type="tel"
                          name="mobile"
                          id="mobile"
                          autoComplete="tel"
                          placeholder="Mobile number"
                          required
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div>
                        <label htmlFor="organization" className="sr-only">
                          Company name
                        </label>
                        <input
                          type="text"
                          name="organization"
                          id="organization"
                          autoComplete="organization"
                          placeholder="Company name"
                          required
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div>
                        <label htmlFor="organization-title" className="sr-only">
                          Your role
                        </label>
                        <input
                          type="text"
                          name="organization-title"
                          id="organization-title"
                          autoComplete="organization-title"
                          placeholder="your position"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Start Hiring
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* features */}
      <div className="overflow-hidden bg-gray-50">
        <div className="relative mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
          <svg
            className="absolute top-0 left-full -translate-x-1/2 -translate-y-3/4 transform lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
            />
          </svg>

          <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                A better way to hire.
              </h2>
            </div>
            <dl className="mt-10 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:space-y-0 lg:col-span-2 lg:mt-0">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt>
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="mt-5 text-lg font-medium leading-6 text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      {/* logos with cta */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Used by the world&aposs best companies
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                egestas tempus tellus etiam sed. Quam a scelerisque amet
                ullamcorper eu enim et fermentum, augue.
              </p>
              <div className="mt-8 sm:flex">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                  >
                    Book a call
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-100 px-5 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img
                  className="max-h-12"
                  src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                  alt="Workcation"
                />
              </div>
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img
                  className="max-h-12"
                  src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                  alt="Mirage"
                />
              </div>
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img
                  className="max-h-12"
                  src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                  alt="Tuple"
                />
              </div>
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img
                  className="max-h-12"
                  src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg"
                  alt="Laravel"
                />
              </div>
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img
                  className="max-h-12"
                  src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                  alt="StaticKit"
                />
              </div>
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img
                  className="max-h-12"
                  src="https://tailwindui.com/img/logos/statamic-logo-gray-400.svg"
                  alt="Statamic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* faq */}
      <Faq />
      {/* simple cta */}
      <div className="bg-indigo-50">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-indigo-600">
              Start your free trial today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
