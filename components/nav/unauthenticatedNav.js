import React from "react";
import Link from "next/link";
import { useUser } from "../../context/users";

function UnauthenticatedNav() {
	// const { login } = useUser();
	return (
		<div className='flex space-x-4'>
			<Link href='/login'>
				<a
					// onClick={() => login}
					className='text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium'>
					Login
				</a>
			</Link>
		</div>
	);
}

export default UnauthenticatedNav;
