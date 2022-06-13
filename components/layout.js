// components/layout.js

import Nav from "./nav/index";
import ClientOnly from "../lib/clientOnly";
// import Footer from "./footer";

export default function Layout({ children }) {
	return (
		<>
			{/* double rendering -https://www.joshwcomeau.com/react/the-perils-of-rehydration/ */}
			<ClientOnly>
				<Nav />
			</ClientOnly>
			<main>{children}</main>
			{/* <Footer /> */}
		</>
	);
}
