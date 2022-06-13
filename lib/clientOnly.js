import { useEffect, useState } from "react";
// https://nextjs.org/docs/messages/react-hydration-error
function ClientOnly({ children, ...delegated }) {
	const [hasMounted, setHasMounted] = useState(false);
	useEffect(() => {
		setHasMounted(true);
	}, []);
	if (!hasMounted) {
		return null;
	}
	return <div {...delegated}>{children}</div>;
}

export default ClientOnly;
