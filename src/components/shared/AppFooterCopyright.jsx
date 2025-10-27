function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()} All Rights Reserved.
				<br />
				<span className="text-sm text-gray-600 dark:text-gray-400">
					Built with ❤️ by{" "}
					<a
						href="https://github.com/odafe32"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 font-medium"
					>
						Godfrey Joseph Sule
					</a>{" "}
					using{" "}
					<a
						href="https://react.dev/"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300"
					>
						React
					</a>{" "}
					and{" "}
					<a
						href="https://tailwindcss.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300"
					>
						Tailwind CSS
					</a>
					.
				</span>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
