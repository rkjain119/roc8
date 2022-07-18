import { createContext, useState, useEffect, useContext } from "react";
import { supabase } from "../utils/initSupabase";
import { useRouter } from "next/router";
// import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(supabase.auth.user());
	const [isLoading, setIsLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		const getUserProfile = async () => {
			const sessionUser = supabase.auth.user();
			if (sessionUser) {
				const { data: profile, error } = await supabase
					.from("user_profile")
					.select("*")
					.eq("id", sessionUser.id)
					.single();
				if (error) {
					console.error(error);
				} else {
					setUser({
						...sessionUser,
						...profile,
					});
					setIsLoading(false);
				}
			}
		};
		getUserProfile();
		supabase.auth.onAuthStateChange(() => {
			getUserProfile();
		});
	}, []);

	// useEffect(() => {
	// 	axios.post("/api/set-supabase-cookie", {
	// 		event: user ? "SIGNED_IN" : "SIGNED_OUT",
	// 		session: supabase.auth.session(),
	// 	});
	// }, [user]);

	useEffect(() => {
		if (user) {
			const subscription = supabase
				.from(`user_profile:id=eq.${user.id}`)
				.on("UPDATE", (payload) => {
					setUser({ ...user, ...payload.new });
				})
				.subscribe();

			return () => {
				supabase.removeSubscription(subscription);
			};
		}
	}, [user]);

	const login = async () => {
		const { error } = await supabase.auth.signIn({ provider: "github" });
		if (error) {
			console.error("Error at login:", error);
		} else {
			console.log("Login Successful");
		}
	};

	const logout = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.error("Error at logout:", error);
		} else {
			setUser(null);
			router.push("/");
			console.log("Logged out");
		}
	};

	const exposed = {
		user,
		login,
		logout,
		isLoading,
	};

	return (
		<UserContext.Provider value={exposed}>{children}</UserContext.Provider>
	);
};

export const useUser = () => {
	const context = useContext(UserContext);
	if (context === undefined) {
		throw new Error(`useUser must be used within a UserContextProvider.`);
	}
	return context;
};

export default useUser;

export function UserState() {
	const { user } = useUser();
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
	useEffect(() => {
		setIsUserLoggedIn(!!user);
	}, [user]);
	return isUserLoggedIn;
}
