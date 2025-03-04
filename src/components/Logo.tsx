import type { JSX } from "preact/jsx-runtime";

export default function Logo(props: JSX.SVGAttributes<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="512"
			height="512"
			viewBox="0 0 512 512"
			fill="none"
			{...props}
		>
			<title>Kalkki logo</title>
			<path
				d="M88 386.667A37.33 37.33 0 0 0 125.333 424c37.334 0 37.334-74.667 56-168C200 162.667 200 88 237.333 88a37.33 37.33 0 0 1 37.334 37.333M125.333 256h112M312 256l112 112m-112 0 112-112"
				stroke="currentColor"
				stroke-width="37.333"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
}
