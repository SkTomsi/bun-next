import { ModeToggle } from "@/components/providers/mode-toggle";
import { GithubIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
	return (
		<div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
			<main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
				<div className="flex gap-2">
					<Image
						className="object-contain "
						src="/logo-centered.svg"
						alt="Next.js logo"
						width={100}
						height={24}
						priority
					/>
					<Image
						className="dark:invert"
						src="/next.svg"
						alt="Next.js logo"
						width={180}
						height={38}
						priority
					/>
				</div>

				<ul className="max-w-sm list-outside list-disc text-left font-[family-name:var(--font-geist-mono)] text-sm">
					<li className="mb-2">NextJS with the flavour of Bun and BiomeJS.</li>
					<li className="">
						Yoink prettier and eslint 4evaaa! choose better formatting and
						linting with BiomeJS
					</li>
				</ul>

				<div className="grid w-full max-w-sm grid-cols-3 gap-4 ">
					{["/tailwind.svg", "/vercel.png", "/biome-white.svg"].map((i) => (
						<Image
							src={i}
							alt="Tailwind"
							width={100}
							height={100}
							priority
							key={i}
							className="h-20 w-full rounded-2xl bg-white/5 object-contain px-4"
						/>
					))}
				</div>
			</main>
			<footer className="row-start-3 flex w-full max-w-sm flex-wrap items-center justify-between gap-6 rounded-2xl p-4 shadow-2xl shadow-black/20 dark:bg-white/5">
				<div className="flex w-fit items-center gap-2 ">
					<Image
						src={"/cat.jpg"}
						alt="cat"
						width={40}
						height={40}
						className="h-10 rounded-lg object-contain shadow-xl"
					/>
					<p className="font-bold text-lg tracking-tight">sktomsi</p>
				</div>
				<a href="https://x.com/SkTomsi" className="flex items-center gap-1">
					<TwitterIcon />
				</a>
				<a
					href="https://github.com/SkTomsi"
					className="flex items-center gap-1"
				>
					<GithubIcon />
				</a>

				<ModeToggle />
			</footer>
		</div>
	);
}
