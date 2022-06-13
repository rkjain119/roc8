import { useEffect } from "react";
import { useUser } from "../context/users";
import Image from "next/image";
import { Transition } from "@headlessui/react";

const Login = () => {
	const { login } = useUser();

	useEffect(login, []);

	return (
		<Image
			layout='fill'
			className='@apply vibrate '
			src='/rocket.svg'
			alt='Loader'
		/>
	);
};
export default Login;
