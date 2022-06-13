// import { useEffect, useState, createContext, useContext } from "react";
// import { supabase } from "../utils/initSupabase";
// import { useRouter } from "next/router";

// export const logout = async () => {
// 	const { error } = await supabase.auth.signOut();
// 	if (error) {
// 		console.error("Error at logout:", error);
// 	} else {
// 		console.log("Logged out");
// 	}
// };

// export const login = async () => {
// 	const { error } = await supabase.auth.signIn({ provider: "github" });
// 	if (error) {
// 		console.error("Error at login:", error);
// 	} else {
// 		console.log("Login Successful");
// 	}
// };

// // TODO: update later
// // useEffect(() => {
// // 	const initUserProfile = async () => {
// // 		const userProfile = await getUserProfile()
// // 	}
// // 	initUserProfile()
// // }, [])

// export const RequireAuth = () => {
// 	const { user } = useUser();
// 	const router = useRouter();

// 	useEffect(() => {
// 		if (!user) {
// 			router.push("/login");
// 		}
// 	}, [user, router]);
// };

// export const AuthRedirect = () => {
// 	const { user } = useUser();
// 	const router = useRouter();

// 	useEffect(() => {
// 		if (user) {
// 			router.push("/");
// 		}
// 	}, [user, router]);
// };

// export const getUserProfile = async () => {
// 	const userProfile = supabase.auth.user();
// 	if (userProfile) {
// 		const { data, error } = await supabase
// 			.from("user_profile")
// 			.select("*")
// 			.eq("id", userProfile.id);
// 		if (error) {
// 			console.error(error);
// 		} else {
// 			return {
// 				id: userProfile.id,
// 				name: userProfile.user_metadata.full_name,
// 				email: userProfile.email,
// 				avatarUrl: userProfile.user_metadata.avatar_url,
// 				accessToken: data[0].access_token,
// 			};
// 		}
// 	}

// 	return userProfile;
// };

// export const UserContext = createContext();

// export const UserContextProvider = (props) => {
// 	const [session, setSession] = useState(false);
// 	const [user, setUser] = useState(false);

// 	useEffect(() => {
// 		const session = supabase.auth.session();
// 		setSession(session);
// 		setUser(session?.user ?? false);
// 		const { data: authListener } = supabase.auth.onAuthStateChange(
// 			async (event, session) => {
// 				setSession(session);
// 				setUser(session?.user ?? false);
// 			}
// 		);

// 		return () => {
// 			authListener.unsubscribe();
// 		};
// 	}, []);

// 	const value = {
// 		session,
// 		user,
// 	};
// 	return <UserContext.Provider value={value} {...props} />;
// };

// export const useUser = () => {
// 	const context = useContext(UserContext);
// 	if (context === undefined) {
// 		throw new Error(`useUser must be used within a UserContextProvider.`);
// 	}
// 	return context;
// };

// export const AuthUser = () => {
// 	const { user } = useUser();
// 	return user;
// };

// export default AuthUser;
