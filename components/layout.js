// components/layout.js

import Nav from "./nav/nav";
// import Footer from "./footer";

export default function Layout({ children }) {
	return (
		<>
			<Nav />
			<main>{children}</main>
			{/* <Footer /> */}
		</>
	);
}
