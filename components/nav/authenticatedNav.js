import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";

import Image from "next/image";
import classNames from "../../lib/classNames";

import { useUser } from "../../context/users";

function AuthenticatedNav() {
	const { user, logout, isLoading } = useUser();
	const avatarUrl = user.user_metadata.avatar_url || "../../public/favicon.ico";

	console.log(user, isLoading);
	return (
		<Menu as='div' className='ml-3 relative'>
			<div>
				<Menu.Button className='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
					<Image
						width={32}
						height={32}
						className='h-8 w-8 rounded-full'
						src={avatarUrl}
						alt='User Avatar'
					/>
				</Menu.Button>
			</div>
			<Transition
				as={Fragment}
				enter='transition ease-out duration-100'
				enterFrom='transform opacity-0 scale-95'
				enterTo='transform opacity-100 scale-100'
				leave='transition ease-in duration-75'
				leaveFrom='transform opacity-100 scale-100'
				leaveTo='transform opacity-0 scale-95'>
				<Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
					{/* <Menu.Item>
						{({ active }) => (
							<a
								href='#'
								className={classNames(
									active ? "bg-gray-100" : "",
									"block px-4 py-2 text-sm text-gray-700"
								)}>
								Your Profile
							</a>
						)}
					</Menu.Item>
					<Menu.Item>
						{({ active }) => (
							<a
								href='#'
								className={classNames(
									active ? "bg-gray-100" : "",
									"block px-4 py-2 text-sm text-gray-700"
								)}>
								Settings
							</a>
						)}
					</Menu.Item> */}
					<Menu.Item>
						{({ active }) => (
							<a
								onClick={() => logout()}
								className={classNames(
									active ? "bg-gray-100" : "",
									"block px-4 py-2 text-sm text-gray-700"
								)}>
								Sign out
							</a>
						)}
					</Menu.Item>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}

export default AuthenticatedNav;
