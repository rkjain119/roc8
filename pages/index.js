import { useEffect, useState } from "react";
import Landing from "../components/landing";
import Dashboard from "../components/dashboard";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ChevronRightIcon } from "@heroicons/react/solid";

import { isLoading, UserState } from "../context/users";

function Home() {
	return UserState() ? <Dashboard /> : <Landing />;
}
export default Home;
