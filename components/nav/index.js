// component/nav/index.js
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
// import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

import UnauthenticatedNav from "./unauthenticatedNav";
import AuthenticatedNav from "./authenticatedNav";
import classNames from "../../lib/classNames";

import { useUser, isLoading } from "../../context/users";
function NavItems() {
	const { user } = useUser();
	let navigation;
	user
		? (navigation = [
				{ name: "Dashboard", href: "/" },
				{ name: "Profile", href: "/about" },
				{ name: "Projects", href: "/projects" },
				{ name: "Applications", href: "/applications" },
				{ name: "FAQ", href: "/faq" },
		  ])
		: (navigation = [
				{ name: "Get Hired", href: "/login" },
				{ name: "Mentor", href: "/mentor" },
				{ name: "Hire", href: "/hire" },
				{ name: "Job board", href: "/jobs" },
		  ]);
	return navigation;
}

export default function Nav() {
	const { user, isLoading } = useUser();

	const router = useRouter();
	return (
		<Disclosure
			as='nav'
			className='shadow backdrop-filter backdrop-blur bg-gray-900 bg-opacity-70 sticky top-0 w-full px-5 z-50'>
			{({ open }) => (
				<>
					<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
						<div className='relative flex items-center justify-between h-16'>
							<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
								{/* Mobile menu button*/}
								<Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
									<span className='sr-only'>Open main menu</span>
									{open ? (
										<XIcon className='block h-6 w-6' aria-hidden='true' />
									) : (
										<MenuIcon className='block h-6 w-6' aria-hidden='true' />
									)}
								</Disclosure.Button>
							</div>
							<div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-between'>
								<div className='flex-shrink-0 flex items-center'>
									<Image
										width={90}
										height={40}
										layout='intrinsic'
										className='block h-8 w-auto'
										src='/roc8.svg'
										alt='Workflow'
									/>
								</div>
								<div className='hidden sm:block sm:mr-10 '>
									<div className='flex space-x-4'>
										{NavItems().map((item) => (
											<Link key={item.name} href={item.href}>
												<a
													className={classNames(
														router.pathname === item.href
															? "bg-gray-900 text-white"
															: "text-gray-300 hover:bg-gray-700 hover:text-white",
														"px-3 py-2 rounded-md text-sm font-medium"
													)}
													aria-current={
														router.pathname === item.href ? "page" : undefined
													}>
													{item.name}
												</a>
											</Link>
										))}
									</div>
								</div>
							</div>
							<div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
								{/* bell-button */}
								{/* <button
									type='button'
									className='bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
									<span className='sr-only'>View notifications</span>
									<BellIcon className='h-6 w-6' aria-hidden='true' />
								</button> */}

								{/* Profile dropdown */}
								{user ? <AuthenticatedNav /> : <UnauthenticatedNav />}
							</div>
						</div>
					</div>
					{/* mobile Nav */}
					<Disclosure.Panel className='sm:hidden'>
						<div className='px-2 pt-2 pb-3 space-y-1'>
							{NavItems().map((item) => (
								<Disclosure.Button
									key={item.name}
									as='a'
									href={item.href}
									className={classNames(
										item.current
											? "bg-gray-900 text-white"
											: "text-gray-300 hover:bg-gray-700 hover:text-white",
										"block px-3 py-2 rounded-md text-base font-medium"
									)}
									aria-current={item.current ? "page" : undefined}>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
