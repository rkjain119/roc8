import { useEffect } from "react";
import { useUser } from "../context/users";
import Image from "next/image";

const Login = () => {
	const { login } = useUser();

	// eslint-disable-next-line react-hooks/exhaustive-deps
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
