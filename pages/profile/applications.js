import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FolderPlusIcon } from '@heroicons/react/24/outline'
import { PlusIcon, PaperClipIcon } from '@heroicons/react/24/solid'

function ApplicationList({ setOpen, open }) {
  return (
    <div className=" my-20 text-center ">
      {/* <div className="flex flex-col items-center justify-center">
        Your applications would be valid only once you graduate from the cohort.
      </div> */}
      <FolderPlusIcon
        className="mx-auto h-12 w-12 text-gray-400"
        aria-hidden="true"
      />
      <h3 className="mt-2 text-sm font-medium text-gray-900">
        No Applications
      </h3>
      <hr className="my-4" />
      <p className="mt-1 text-sm text-gray-500">
        Get started by creating a new Application. <br /> Your applications
        would be valid only once you graduate from the cohort.
      </p>
      <div className="mt-6">
        <button
          onClick={() => setOpen(true)}
          type="button"
          className="inline-flex items-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
        >
          <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          New Application
        </button>
      </div>
    </div>
  )
}

export default function Applications() {
  const [open, setOpen] = useState(false)

  const textRef = useRef(null)

  return (
    <>
      <ApplicationList setOpen={setOpen} open={open} />
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          initialFocus={textRef}
          onClose={setOpen}
        >
          <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:h-screen sm:align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="relative inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle">
                <form className="relative">
                  <div className="pb-2 text-sm text-gray-600">
                    We suggest you research the company and mention what excites
                    you about this particular role. Think of it as a small cover
                    letter.
                  </div>
                  <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm ">
                    <label htmlFor="subject" className="sr-only">
                      subject
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="subject"
                      className="block w-full border-0 pt-2.5 text-lg font-medium placeholder-gray-500 focus:ring-0"
                      placeholder="Subject"
                      defaultValue={''}
                      ref={textRef}
                    />
                    <label htmlFor="description" className="sr-only">
                      Description
                    </label>
                    <textarea
                      rows={2}
                      name="description"
                      id="description"
                      className="block w-full resize-none border-0 py-0 placeholder-gray-500 focus:ring-0 sm:text-sm"
                      placeholder="Why do you wish to join our company?"
                      defaultValue={''}
                    />

                    {/* Spacer element to match the height of the toolbar */}
                    <div aria-hidden="true">
                      <div className="py-2">
                        <div className="h-9" />
                      </div>
                      <div className="h-px" />
                      <div className="py-2">
                        <div className="py-px">
                          <div className="h-9" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-x-px bottom-0">
                    <div className="flex items-center justify-between space-x-3 border-t border-gray-200 px-2 py-2 focus:outline-none sm:px-3">
                      {/* <div className="flex">
                        <button
                          type="button"
                          className="group -my-2 -ml-2 inline-flex items-center rounded-full px-3 py-2 text-left text-gray-400"
                        >
                          <PaperClipIcon
                            className="-ml-1 mr-2 h-5 w-5 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          <span className="text-sm italic text-gray-500 group-hover:text-gray-600">
                            Attach a file
                          </span>
                        </button>
                      </div> */}
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
                          className="inline-flex items-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                        >
                          Create
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              {/*  */}
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
