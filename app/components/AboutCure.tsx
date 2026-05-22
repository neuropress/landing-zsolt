"use client";
import Image from "next/image";
import AnimatedContent from "./gsap/AnimatedContent";

type Block = {
	borderColor: string;
	tagColor: string;
	tag: string;
	title: string;
	body: string;
	extraIntro?: string;
	extraTitle?: string;
	extraList?: string[];
	extraListVariant?: "negative" | "positive";
	image: string;
	imageAlt: string;
	imageRight: boolean;
};

const blocks: Block[] = [
	{
		borderColor: "border-l-[var(--accent-color)]",
		tagColor: "text-(--accent-color)",
		tag: "Terápia",
		title: "Személyre szabott kezelési terv",
		body: "Nincs két egyforma páciens – ezért nincs két egyforma terápia sem. A Neuropress rendszerszinten közelíti meg a test működését, és kifejezetten a fájdalom hatásmechanizmusára épül.",
		extraIntro:
			"Míg a reflexológia zónákon keresztül, finom stimulációval hat, addig a Neuropressnél a pontosan adagolt inger tudatos idegrendszeri válaszreakciót vált ki: a fájdalom révén az agy figyelme az érintett területre irányul, és aktiválódnak a szervezet belső szabályozó folyamatai.",
		image: "/images/refo/14.webp",
		imageAlt: "Személyre szabott kezelés",
		imageRight: false,
	},
	{
		borderColor: "border-l-[var(--primary-color)]",
		tagColor: "text-(--primary-color)",
		tag: "Tünetek",
		title: "Feltárjuk a tünetek valódi okát",
		body: "A legtöbb kezelés csak a tüneteket kezeli – mi az okokat keressük. A Neuropress állapotfelmérés során részletesen feltérképezzük tested és idegrendszered állapotát.",
		extraTitle: "A Neuropress nem:",
		extraList: ["nem masszázs", "nem tüneti kezelés", "nem gyors „csodaszer”"],
		extraListVariant: "negative",
		image: "/images/refo/21.webp",
		imageAlt: "Tünetek feltárása",
		imageRight: true,
	},
	{
		borderColor: "border-l-[var(--secondary-color)]",
		tagColor: "text-(--secondary-color)",
		tag: "Életmód",
		title: "Komplex életmódbeli támogatás",
		body: "A kezelések mellett étkezési és életmódbeli tanácsokkal is segítünk, hogy a változások hosszú távon is fennmaradjanak – önállóan, tudatosan.",
		extraTitle: "A Neuropress",
		extraList: [
			"egy idegrendszeri alapú feltáró módszer",
			"amely az okokat keresi, nem csak a tüneteket",
		],
		extraListVariant: "positive",
		image: "/images/refo/4.webp",
		imageAlt: "Életmódbeli támogatás",
		imageRight: true,
	},
];

const AboutCure = () => {
	return (
		<section className="w-full bg-white pt-20">
			<div className="max-w-7xl mx-auto px-4 md:px-8">
				<AnimatedContent
					distance={40}
					duration={0.7}
					threshold={0.3}
					className="w-full">
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center w-full lg:w-3/4 mx-auto">
						Mitől más a Neuropress mint a Reflexológia?
					</h2>
					<p className="text-lg md:text-xl text-gray-700 font-light text-center w-full lg:w-3/4 mx-auto">
						Idegrendszeri alapú feltáró módszer, amely az okokat keresi – nem
						csak a tüneteket.
					</p>
				</AnimatedContent>
			</div>

			<div className="flex flex-col gap-8 max-w-7xl mx-auto px-4 md:px-8 mt-8 pb-20">
				{blocks.map((block, index) => (
					<AnimatedContent
						key={index}
						distance={40}
						duration={0.6}
						threshold={0.2}
						delay={index * 0.1}>
						<div
							className={`flex flex-col ${block.imageRight ? "lg:flex-row" : "lg:flex-row-reverse"} bg-primary-light border-l-4 ${block.borderColor} overflow-hidden rounded-lg shadow-md`}>
							{/* Image — top on mobile, side panel on desktop */}
							<div className="relative w-full h-52 lg:w-2/5 lg:h-auto lg:min-h-72 shrink-0">
								<Image
									src={block.image}
									alt={block.imageAlt}
									fill
									className="object-cover"
								/>
							</div>

							{/* Text */}
							<div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
								<span
									className={`text-xs font-medium uppercase tracking-widest mb-3 ${block.tagColor}`}>
									{block.tag}
								</span>
								<h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-snug">
									{block.title}
								</h3>
								<p className="text-gray-600 font-light leading-relaxed text-sm md:text-base mb-3">
									{block.body}
								</p>
								{block.extraIntro && (
									<p className="text-gray-600 font-light leading-relaxed text-sm md:text-base">
										{block.extraIntro}
									</p>
								)}
								{block.extraTitle && (
									<p className="text-sm md:text-base font-semibold text-gray-800 mt-2 mb-2">
										{block.extraTitle}
									</p>
								)}
								{block.extraList && block.extraListVariant === "negative" && (
									<ul className="space-y-1.5">
										{block.extraList.map((item, i) => (
											<li
												key={i}
												className="flex items-center gap-2 text-sm md:text-base text-gray-700 font-light leading-relaxed">
												<svg
													className="w-4 h-4 text-(--primary-color) shrink-0"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2.5}
														d="M6 18L18 6M6 6l12 12"
													/>
												</svg>
												{item}
											</li>
										))}
									</ul>
								)}
								{block.extraList && block.extraListVariant === "positive" && (
									<ul className="space-y-1.5">
										{block.extraList.map((item, i) => (
											<li
												key={i}
												className="flex items-center gap-2 text-sm md:text-base text-gray-700 font-light leading-relaxed">
												<svg
													className="w-4 h-4 text-(--secondary-color) shrink-0"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2.5}
														d="M5 13l4 4L19 7"
													/>
												</svg>
												{item}
											</li>
										))}
									</ul>
								)}
							</div>
						</div>
					</AnimatedContent>
				))}
			</div>
		</section>
	);
};

export default AboutCure;
