"use client";

import { useEffect, useState } from "react";
import Navigation from "./navigation";

export default function GlobalNavigation() {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY || window.pageYOffset || 0);
		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const onAuthClick = () => {
		// default behaviour: navigate to /signin
		if (typeof window !== "undefined") {
			window.location.href = "/signin";
		}
	};

	return <Navigation scrollY={scrollY} onAuthClick={onAuthClick} />;
}
