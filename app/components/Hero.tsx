"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
	return (
		<div className="min-h-screen flex flex-col bg-primary-light justify-center items-start relative overflow-hidden">
			<div className="max-w-7xl mx-auto flex flex-col text-left px-8 md:px-0 z-10 w-full md:w-2/5 md:ml-8 lg:ml-20 xl:ml-32 mt-20 md:mt-0">
				<h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
					Amikor már mindent kipróbáltál és még sincs eredmény
				</h1>
				<p className="text-lg md:text-xl text-primary font-semibold mb-2">
					Segítünk megtalálni a tüneteid valódi okát!
				</p>
				<ul className="mb-8 space-y-1">
					<li className="flex items-center gap-2 text-base md:text-lg text-gray-800">
						<svg
							className="w-5 h-5 text-primary flex-shrink-0"
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
						20+ év tapasztalat
					</li>
					<li className="flex items-center gap-2 text-base md:text-lg text-gray-800">
						<svg
							className="w-5 h-5 text-primary flex-shrink-0"
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
						több ezer kezelt páciens
					</li>
					<li className="flex items-center gap-2 text-base md:text-lg text-gray-800">
						<svg
							className="w-5 h-5 text-primary flex-shrink-0"
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
						egyéni állapotfelmérés
					</li>
				</ul>
				<div>
					<a href="#contact" className="primary-button inline-block">
						Jelentkezem állapotfelmérésre!
					</a>
				</div>
			</div>
			{/* Mobile decorative blob */}
			<div
				className="sm:hidden absolute bg-primary rounded-full w-140 h-140 -right-110 -top-0 blur-3xl opacity-40"
				aria-hidden="true"
			/>
			<div
				className="hidden sm:block absolute rounded-[100px] w-125 h-125 md:w-175 md:h-175 lg:w-200 lg:h-200 xl:w-225 xl:h-225 2xl:w-275 2xl:h-275 -right-15 md:-right-20 lg:-right-25 xl:-right-50 2xl:-right-40 -top-30 md:-top-40 lg:-top-50 xl:-top-60 2xl:-top-70 -rotate-12 overflow-hidden"
				aria-hidden="true">
				<Image
					src="/images/refo/1.webp"
					alt="Vargha Attila, a Neuropress Terápia alapítója"
					className="w-[130%] h-[130%] object-cover object-bottom-right rotate-[12deg] left-[-15%] top-[20%] absolute"
					draggable="false"
					style={{ pointerEvents: "none", userSelect: "none" }}
					width={2000}
					height={2000}
					priority
				/>
			</div>
			{/* Floating name badge */}
			<div className="hidden sm:block absolute bottom-[12%] right-88 md:right-120 lg:right-144 xl:right-152 2xl:right-184 z-10">
				<div className="bg-white/80 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg border border-white/60">
					<p className="text-xs text-gray-400 font-light tracking-wide">
						Intézményvezető
					</p>
					<p className="text-sm font-semibold text-gray-900">Vargha Zsolt</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
