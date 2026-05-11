"use client";
import Image from "next/image";
import AnimatedContent from "./gsap/AnimatedContent";
import FadeContent from "./gsap/FadeContent";

const items = [
	"már sok mindent kipróbáltál",
	"nem kaptál egyértelmű válaszokat",
	"visszatérő problémáid vannak",
	"szeretnéd megérteni, mi történik a testedben",
];

const KinekValo = () => {
	return (
		<section className="w-full py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 md:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
					{/* Left: text + list */}
					<div className="order-2 lg:order-1">
						<AnimatedContent
							distance={40}
							duration={0.7}
							threshold={0.3}
							className="w-full">
							<p className="text-sm font-medium uppercase tracking-widest text-(--primary-color) mb-3">
								Kinek való
							</p>
							<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
								Neked való, ha:
							</h2>
						</AnimatedContent>

						<FadeContent
							duration={800}
							delay={200}
							threshold={0.2}
							className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
							{items.map((item, i) => (
								<div
									key={i}
									className="flex items-start gap-4 bg-primary-light rounded-2xl p-5 lg:p-6">
									<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
										<svg
											className="w-7 h-7 text-(--primary-color)"
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
									</div>
									<p className="text-base md:text-lg text-gray-800 font-semibold leading-snug pt-2">
										{item}
									</p>
								</div>
							))}
						</FadeContent>

						<FadeContent
							duration={800}
							delay={400}
							threshold={0.2}
							className="mt-8 flex justify-center sm:justify-start">
							<a
								href="#contact"
								className="primary-button inline-block text-center w-full sm:w-auto">
								Időpontot kérek
							</a>
						</FadeContent>
					</div>

					{/* Right: image */}
					<AnimatedContent
						distance={50}
						direction="horizontal"
						duration={0.8}
						delay={0.1}
						threshold={0.2}
						className="order-1 lg:order-2 w-full">
						<div className="relative h-90 sm:h-110 lg:h-125 w-full rounded-3xl overflow-hidden shadow-md">
							<Image
								src="/images/refo/36.webp"
								alt="Neuropress kezelés"
								fill
								sizes="(max-width: 1024px) 100vw, 50vw"
								className="object-cover"
							/>
						</div>
					</AnimatedContent>
				</div>
			</div>
		</section>
	);
};

export default KinekValo;
