import Image from "next/image";
const navigation = {
	links: [
		{ name: "Get Hired", href: "#" },
		{ name: "Hire Developers", href: "#" },
		{ name: "Become a mentor", href: "#" },
	],
	informed: [
		{ name: "Discord server", href: "#" },
		{ name: "Blog", href: "#" },
		{ name: "Newsletter", href: "#" },
		{ name: "Job Board", href: "#" },
	],
	contact: [
		{ name: "Email", href: "#" },
		{ name: "Telegram", href: "#" },
	],
	social: [
		{
			name: "Instagram",
			href: "https://www.instagram.com/roc8hq/",
			icon: (props) => (
				<svg fill='currentColor' viewBox='0 0 24 24' {...props}>
					<path
						fillRule='evenodd'
						d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
						clipRule='evenodd'
					/>
				</svg>
			),
		},
		{
			name: "Twitter",
			href: "https://twitter.com/roc8HQ",
			icon: (props) => (
				<svg fill='currentColor' viewBox='0 0 24 24' {...props}>
					<path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
				</svg>
			),
		},
		{
			name: "GitHub",
			href: "https://www.linkedin.com/company/elevate-labs-tech",
			icon: (props) => (
				<svg fill='currentColor' viewBox='0 0 24 24' {...props}>
					<path
						fillRule='evenodd'
						d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
						clipRule='evenodd'
					/>
				</svg>
			),
		},
		{
			name: "LinkedIn",
			href: "https://www.linkedin.com/company/elevate-labs-tech",
			icon: (props) => (
				<svg fill='currentColor' viewBox='0 0 24 24' {...props}>
					<path
						fillRule='evenodd'
						d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
						clipRule='evenodd'
					/>
				</svg>
			),
		},
		{
			name: "Reddit",
			href: "https://www.reddit.com/r/roc8/",
			icon: (props) => (
				<svg fill='currentColor' viewBox='0 0 24 24' {...props}>
					<path
						fillRule='evenodd'
						d='M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z'
						clipRule='evenodd'
					/>
				</svg>
			),
		},
	],
};

export default function footer() {
	return (
		<footer className='bg-slate-900' aria-labelledby='footer-heading'>
			<h2 id='footer-heading' className='sr-only'>
				Footer
			</h2>
			<div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
				<div className='xl:grid xl:grid-cols-2 xl:gap-8'>
					<div className='space-y-8 xl:col-span-1'>
						<Image
							width={150}
							height={60}
							layout='intrinsic'
							className='h-10'
							src='/roc8.svg'
							alt='Workflow'
						/>
						<p className='text-gray-500 text-base'>
							We are a team of developers who understand the challenges in the
							current hiring system and are working towards improving it.
						</p>
						<div className='flex space-x-6'>
							{navigation.social.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className='text-gray-400 hover:text-gray-500'>
									<span className='sr-only'>{item.name}</span>
									<item.icon className='h-6 w-6' aria-hidden='true' />
								</a>
							))}
						</div>
					</div>
					<div className='mt-12 grid grid-cols-3 gap-8 xl:mt-0 '>
						<div className='md:grid md:grid-cols-1 md:gap-8'>
							<div className='mt-12 md:mt-0'>
								<h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
									Quick links
								</h3>
								<ul role='list' className='mt-4 space-y-4'>
									{navigation.links.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className='text-base text-gray-500 hover:text-gray-900'>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className='md:grid md:grid-cols-1 md:gap-8'>
							<div className='mt-12 md:mt-0'>
								<h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
									Stay Informed
								</h3>
								<ul role='list' className='mt-4 space-y-4'>
									{navigation.informed.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className='text-base text-gray-500 hover:text-gray-900'>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className='md:grid md:grid-cols-1 md:gap-8'>
							<div className='mt-12 md:mt-0'>
								<h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
									Contact Us
								</h3>
								<ul role='list' className='mt-4 space-y-4'>
									{navigation.contact.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className='text-base text-gray-500 hover:text-gray-900'>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className='mt-12 border-t border-gray-200 pt-8'>
					<p className='text-base text-gray-400 xl:text-center'>
						&copy; 2022 roc8, Inc. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
