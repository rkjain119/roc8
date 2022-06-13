import { useUser } from "../context/users";
import { useEffect } from "react";

function Home() {
	const { user } = useUser();
	// return user ? (
	// 	<LandingPage />
	// ) : (
	<h1 className='text-3xl font-bold underline'>Hello me!</h1>;
	// );
}
export default Home;
