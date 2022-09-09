// import { Dialog, Transition } from '@headlessui/react'
// import { Fragment, useEffect, useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { getProjects, setProjects } from '../../components/userData'

// import {
//   LinkIcon,
//   PlusIcon,
//   QuestionMarkCircleIcon,
//   XIcon,
// } from '@heroicons/react/24/solid'

// export default function NewProject(open, setOpen ,onClose, onSubmit, o) {)  {
//   return (
//     <Transition.Root show={open} as={Fragment}>
//       <Dialog
//         as="div"
//         className="fixed  inset-0 overflow-hidden"
//         onClose={setOpen}
//       >
//         <div className="absolute inset-0  overflow-hidden">
//           <Dialog.Overlay className="absolute inset-0" />

//           <div className="fixed inset-y-0 right-0 mt-16 flex max-w-full pl-10 sm:pl-16">
//             <Transition.Child
//               as={Fragment}
//               enter="transform transition ease-in-out duration-500 sm:duration-700"
//               enterFrom="translate-x-full"
//               enterTo="translate-x-0"
//               leave="transform transition ease-in-out duration-500 sm:duration-700"
//               leaveFrom="translate-x-0"
//               leaveTo="translate-x-full"
//             >
//               <div className="w-screen max-w-2xl">
//                 <form
//                   onSubmit={handleSubmit(onSubmit, onError)}
//                   className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
//                 >
//                   <div className="flex-1">
//                     {/* Header */}
//                     <div className="bg-gray-50 px-4 py-6 sm:px-6">
//                       <div className="flex items-start justify-between space-x-3">
//                         <div className="space-y-1">
//                           <Dialog.Title className="text-lg font-medium text-gray-900">
//                             New project
//                           </Dialog.Title>
//                           <p className="text-sm text-gray-500">
//                             Get started by filling in the information below to
//                             create your new project.
//                           </p>
//                         </div>
//                         <div className="flex h-7 items-center">
//                           <button
//                             type="button"
//                             className="text-gray-400 hover:text-gray-500"
//                             onClick={() => setOpen(false)}
//                           >
//                             <span className="sr-only">Close panel</span>
//                             <XIcon className="h-6 w-6" aria-hidden="true" />
//                           </button>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Divider container */}
//                     <div className="space-y-6 py-6 sm:space-y-0 sm:divide-y sm:divide-gray-200 sm:py-0">
//                       {/* Project name */}
//                       <div className="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
//                         <div>
//                           <label
//                             htmlFor="project-name"
//                             className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
//                           >
//                             Project name
//                           </label>
//                         </div>
//                         <div className="sm:col-span-2">
//                           <input
//                             type="text"
//                             name="project-name"
//                             id="project-name"
//                             className="block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
//                           />
//                         </div>
//                       </div>
//                       {/* Code Hosted on */}
//                       <div className=" space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
//                         <label className="text-base font-medium text-gray-900">
//                           Code Hosted On
//                         </label>
//                         <p className="text-sm leading-5 text-gray-500">
//                           Where did you host your code?
//                         </p>
//                         <fieldset className="mt-4">
//                           <legend className="sr-only">
//                             Notification method
//                           </legend>
//                           <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
//                             {codeHostedOn.map((codeHostedOn) => (
//                               <div
//                                 key={codeHostedOn.id}
//                                 className="flex items-center"
//                               >
//                                 <input
//                                   id={codeHostedOn.id}
//                                   name="notification-method"
//                                   type="radio"
//                                   defaultChecked={codeHostedOn.id === 'github'}
//                                   className="h-4 w-4 border-gray-300 text-rose-600 focus:ring-rose-500"
//                                 />
//                                 <label
//                                   htmlFor={codeHostedOn.id}
//                                   className="ml-3 block text-sm font-medium text-gray-700"
//                                 >
//                                   {codeHostedOn.code}
//                                 </label>
//                               </div>
//                             ))}
//                           </div>
//                         </fieldset>
//                       </div>
//                       {/* repo Name */}
//                       <div className=" space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
//                         <label
//                           htmlFor="repoName"
//                           className="block text-sm font-medium text-gray-700"
//                         >
//                           Github Repo Name
//                         </label>
//                         <div className="col-span-2 mt-1 flex rounded-md shadow-sm">
//                           <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
//                             http://github.com/rkjain119/
//                           </span>
//                           <input
//                             type="text"
//                             name="repoName"
//                             id="repoName"
//                             className=" block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 px-3 py-2 focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
//                             placeholder="CasCare"
//                           />
//                         </div>
//                       </div>
//                       {/* Project Demo Url */}
//                       <div className="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
//                         <label
//                           htmlFor="demoUrl"
//                           className="block text-sm font-medium text-gray-700"
//                         >
//                           Project Demo URL
//                         </label>
//                         <div className="relative mt-1 rounded-md shadow-sm">
//                           <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//                             <LinkIcon
//                               className="h-5 w-5 text-gray-400"
//                               aria-hidden="true"
//                             />
//                           </div>
//                           {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//                       <span className="text-gray-500 sm:text-sm">
//                         http://
//                       </span>
//                     </div> */}
//                           <input
//                             type="url"
//                             name="demoUrl"
//                             id="demoUrl"
//                             className="block w-full rounded-md border-gray-300 pl-10 focus:border-rose-500 focus:ring-rose-500 sm:pl-10 sm:text-sm"
//                             placeholder="www.example.com"
//                           />
//                         </div>
//                       </div>
//                       {/* Tech Stack */}
//                       <div className="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
//                         <label
//                           htmlFor="techStack"
//                           className="block text-sm font-medium text-gray-700"
//                         >
//                           Tech Stack
//                         </label>
//                         <div className="relative col-span-2 mt-1 rounded-md shadow-sm">
//                           <input
//                             type="text"
//                             name="techStack"
//                             id="techStack"
//                             className="block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
//                             placeholder="React,Tailwind,Supabase"
//                             {...register('techStack', {
//                               required: true,
//                               pattern:
//                                 /^(?: *[\w!@#$%?=*&.-]+(?: [\w!@#$%?=*&.-]+)*(?: *, *[\w!@#$%?=*&.-]+(?: [\w!@#$%?=*&.-]+)*)* *)?$/i,
//                             })}
//                           />
//                           <p
//                             className=" mt-2 text-sm text-gray-500"
//                             id="techStack-description"
//                           >
//                             please add the technologies used in your project as
//                             a comma-separated list.
//                           </p>
//                         </div>
//                       </div>
//                       {/* Project description */}
//                       <div className="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
//                         <div>
//                           <label
//                             htmlFor="project-description"
//                             className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
//                           >
//                             Description
//                           </label>
//                         </div>
//                         <div className="sm:col-span-2">
//                           <textarea
//                             id="project-description"
//                             name="project-description"
//                             rows={3}
//                             className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
//                             defaultValue={''}
//                           />
//                         </div>
//                       </div>

//                       {/* Team members */}
//                       {/* <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
//                   <div>
//                     <h3 className="text-sm font-medium text-gray-900">
//                       Team Members
//                     </h3>
//                   </div>
//                   <div className="sm:col-span-2">
//                     <div className="flex space-x-2">
//                       {team.map((project) => (
//                         <a
//                           key={project.email}
//                           href={project.href}
//                           className="flex-shrink-0 rounded-full hover:opacity-75"
//                         >
//                           <img
//                             className="inline-block h-8 w-8 rounded-full"
//                             src={project.imageUrl}
//                             alt={project.name}
//                           />
//                         </a>
//                       ))}

//                       <button
//                         type="button"
//                         className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-dashed border-gray-200 bg-white text-gray-400 hover:border-gray-300 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
//                       >
//                         <span className="sr-only">Add team member</span>
//                         <PlusIcon
//                           className="h-5 w-5"
//                           aria-hidden="true"
//                         />
//                       </button>
//                     </div>
//                   </div>
//                 </div> */}

//                       {/* Privacy */}
//                       <fieldset>
//                         <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
//                           <div>
//                             <legend className="text-sm font-medium text-gray-900">
//                               Privacy
//                             </legend>
//                           </div>
//                           <div className="space-y-5 sm:col-span-2">
//                             <div className="space-y-5 sm:mt-0">
//                               <div className="relative flex items-start">
//                                 <div className="absolute flex h-5 items-center">
//                                   <input
//                                     id="public-access"
//                                     name="privacy"
//                                     aria-describedby="public-access-description"
//                                     type="radio"
//                                     className="h-4 w-4 border-gray-300 text-rose-600 focus:ring-rose-500"
//                                     defaultChecked
//                                   />
//                                 </div>
//                                 <div className="pl-7 text-sm">
//                                   <label
//                                     htmlFor="public-access"
//                                     className="font-medium text-gray-900"
//                                   >
//                                     Public access
//                                   </label>
//                                   <p
//                                     id="public-access-description"
//                                     className="text-gray-500"
//                                   >
//                                     Everyone with the link will see this project
//                                   </p>
//                                 </div>
//                               </div>
//                             </div>
//                             <hr className="border-gray-200" />
//                             <div className="space-between sm:space-between flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0">
//                               <div className="flex-1">
//                                 <a
//                                   href="#"
//                                   className="group flex items-center space-x-2.5 text-sm font-medium text-rose-600 hover:text-rose-900"
//                                 >
//                                   <LinkIcon
//                                     className="h-5 w-5 text-rose-500 group-hover:text-rose-900"
//                                     aria-hidden="true"
//                                   />
//                                   <span>Copy link</span>
//                                 </a>
//                               </div>
//                               <div>
//                                 <a
//                                   href="#"
//                                   className="group flex items-center space-x-2.5 text-sm text-gray-500 hover:text-gray-900"
//                                 >
//                                   <QuestionMarkCircleIcon
//                                     className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
//                                     aria-hidden="true"
//                                   />
//                                   <span>Learn more about sharing</span>
//                                 </a>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </fieldset>
//                       {/* Checkbox */}

//                       <fieldset className="">
//                         <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
//                           <div className=" text-sm">
//                             <label
//                               htmlFor="comments"
//                               className="text-sm font-medium text-gray-900"
//                             >
//                               Self Declatation
//                             </label>
//                           </div>
//                           <div className="col-span-2 flex h-5 items-center">
//                             <input
//                               id="comments"
//                               aria-describedby="comments-description"
//                               name="comments"
//                               type="checkbox"
//                               className="mr-5 h-4 w-4 rounded border-gray-300 text-rose-600 focus:ring-rose-500"
//                             />
//                             <div
//                               id="comments-description"
//                               className=" mt-3 items-center text-sm text-gray-500"
//                             >
//                               This project meets the criteria mentioned at{' '}
//                               <a
//                                 href="
//                         https://bit.ly/roc8-project"
//                                 className="text-rose-600 hover:text-rose-900"
//                               >
//                                 https://bit.ly/roc8-project &nbsp;
//                               </a>
//                             </div>
//                           </div>
//                         </div>
//                       </fieldset>
//                     </div>
//                   </div>

//                   {/* Action buttons */}
//                   <div className="flex-shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6">
//                     <div className="flex justify-end space-x-3">
//                       <button
//                         type="button"
//                         className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
//                         onClick={() => setOpen(false)}
//                       >
//                         Cancel
//                       </button>
//                       <button
//                         type="submit"
//                         className="inline-flex justify-center rounded-md border border-transparent bg-rose-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
//                       >
//                         Create
//                       </button>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </Transition.Child>
//           </div>
//         </div>
//       </Dialog>
//     </Transition.Root>
//   )
// }
