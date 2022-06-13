// pages/_app.js
import "../styles/globals.css";
import Layout from "../components/layout";
import UserProvider from "../context/users";
export default function MyApp({ Component, pageProps }) {
	return (
		<UserProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</UserProvider>
	);
}
