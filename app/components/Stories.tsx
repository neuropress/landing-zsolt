"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import AnimatedContent from "./gsap/AnimatedContent";
import FadeContent from "./gsap/FadeContent";
import BackgroundLogo from "./BackgroundLogo";
import { useState, useRef, useEffect } from "react";

const testimonials = [
	{
		name: "Galambos Franciska",
		link: "https://www.neuropress.hu/galambos-franciska-albert-baba/",
		profileImage: "/images/stories/1.webp",
		symptom: "Termékenységi zavar",
		solution:
			"Négy és fél év hormonkezelés és inszemináció után Vargha Zsolt terápiája következett. Szigorú életmód- és táplálkozási szabályok, eleinte fájdalmas kezelések, de 5 hónappal később pozitív terhességi teszt. Terhesen is jártam kezelésre. Albert megszületésével kiteljesedett a családunk.",
	},
	{
		name: "Linda",
		link: "https://www.neuropress.hu/linda/",
		profileImage: "/images/stories/5.webp",
		symptom: "Ekcéma, menstruációs panaszok, emésztési problémák",
		solution:
			"Nagy László ajánlására kerestem fel a Neuropresst menstruációs, emésztési problémák, ekcéma és aranyér miatt. Vargha Zsolt biorezonanciás vizsgálat után azonnal kezelésbe vett. Öt hónap alatt heti két kezeléssel tünetmentes lettem, tele energiával.",
	},
	{
		name: "Somodi Áron",
		link: "https://www.neuropress.hu/somodi-aron/",
		profileImage: "/images/stories/9.webp",
		symptom: "Asztma, allergia",
		solution:
			"Több mint tíz éven át kajakoztam, majd visszatért egy asztmás tünet. Szteroiddal kezelték, nem tudtam elhagyni. A NeuroPress terápia 7 hónap után javulást hozott. Új szemléletet tanultam, gyógyszer nélkül gyógyultam. Heti háromszor erősen sportolok.",
	},
	{
		name: "Vargová Andrea",
		link: "https://www.neuropress.hu/andrea-vargova/",
		profileImage: "/images/stories/3.webp",
		symptom: "Termékenységi zavar",
		solution:
			"Kilenc év próbálkozás, négy sikertelen beültetés után 2021 májusában kezdtük a Neuropress terápiát. Másfél év kitartás után az ötödik beültetés pozitív lett. 2023 júniusában megszületett kislányunk, Zoé. Köszönet Vargha Zsoltnak és Viktóriának!",
	},
	{
		name: "Dr. Kálmár Sándor Flóris",
		link: "https://www.neuropress.hu/dr-kalmar-sandor-floris/",
		profileImage: "/images/stories/4.webp",
		symptom: "Reflux, derékfájás",
		solution:
			"Sok éve refluxos tünetekkel küszködtem, napi protonpumpa-gátlókat szedtem. Vargha Zsolt rávilágított a tünetek összefüggéseire. Két hónap után letettem a gyógyszereket. Néhány hónap alatt szinte minden tünet megszűnt, csak életmódot kellett változtatni.",
	},
	{
		name: "Lukovics János",
		link: "https://www.neuropress.hu/lukovics-janos/",
		profileImage: "/images/stories/6.webp",
		symptom: "Szédülés, fejfájás",
		solution:
			"2020-ban szédülés, gyengeség és fejfájás kínzott. Több orvos, gyógyszer, semmi javulás. Depresszió és pánikbetegség társult. 2021-ben a feleségem unszolására Vargha Zsolt személyre szabott terápiát írt elő. Hónapok alatt minden tünet elmúlt. Köszönet Marcsinak is!",
	},
	{
		name: "Ötvösné Melinda",
		link: "https://www.neuropress.hu/otvosne-melinda/",
		profileImage: "/images/stories/8.webp",
		symptom: "Magas vérnyomás, alvászavar",
		solution:
			"Covid után rossz közérzet, magas vérnyomás, kimerültség, alvászavar kínzott. Gyógyszeres kezelés sem segített. Három hónap Neuropress terápia után tünetmentes vagyok. Továbbra is folytatom a jó állapot megőrzése érdekében. Köszönet Vargha Zsoltnak és Rékának!",
	},
	{
		name: "Mondovics Dukai Anett",
		link: "https://www.neuropress.hu/mirko-baba/",
		profileImage: "/images/stories/7.webp",
		symptom: "Termékenységi zavar",
		solution:
			"Barbi mesélt a NeuroPress Terápiáról. Férjemmel babát terveztünk, ellenőrizni akartam a szervezetem. Néhány kezelés után áldott állapotba kerültem! 2022.09.18-án megszületett Mirkó, aki új értelmet adott életünknek. A Neuropressnél születnek a csodák.",
	},
	{
		name: "Andersh Gábor",
		link: "https://www.neuropress.hu/andersh-gabor/",
		profileImage: "/images/stories/2.webp",
		symptom: "Emésztőrendszeri panaszok, reflux",
		solution:
			"2-3 éve refluxos panaszokra gyomornedv-ellenálló tablettát szedtem. Kezelések kezdetekor elhagytam. Étrendem megváltoztatásával a tünetek megszűntek. Gyermekünk születése stresszes volt, de a kezelésekkel jobban kezelhetem. Hálás vagyok Vargha Zsoltnak és a csapatnak.",
	},
];

type Testimonial = (typeof testimonials)[0];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
	const [imageMode, setImageMode] = useState(false);
	const cardRef = useRef<HTMLDivElement>(null);
	const revealingRef = useRef(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				if (entry.isIntersecting && !revealingRef.current) {
					revealingRef.current = true;
					setImageMode(true);
					setTimeout(() => {
						setImageMode(false);
					}, 1400);
					observer.disconnect();
				}
			},
			{ threshold: 0.5, rootMargin: "-15% 0px -15% 0px" },
		);
		if (cardRef.current) observer.observe(cardRef.current);
		return () => observer.disconnect();
	}, []);

	const handleProfileClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		setImageMode(true);
	};

	const handleCardClick = () => {
		if (imageMode) setImageMode(false);
	};

	return (
		<div
			ref={cardRef}
			onClick={handleCardClick}
			style={{ height: "400px" }}
			className={`relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 my-3${imageMode ? " cursor-pointer" : ""}`}>
			{/* Full-image layer */}
			<div
				className={`absolute inset-0 transition-all duration-700 ease-in-out ${
					imageMode
						? "opacity-100 scale-100"
						: "opacity-0 scale-105 pointer-events-none"
				}`}>
				<Image
					src={testimonial.profileImage}
					alt={testimonial.name}
					fill
					className="object-cover object-top"
				/>
				<div className="absolute inset-0  flex items-end p-5">
					<p className="text-white/80 text-xs">
						Kattints a tartalom visszatöltéséhez
					</p>
				</div>
			</div>

			{/* Content layer */}
			<div
				className={`absolute inset-0 bg-white p-6 flex flex-col transition-all duration-700 ease-in-out ${
					imageMode
						? "opacity-0 translate-y-3 pointer-events-none"
						: "opacity-100 translate-y-0"
				}`}>
				{/* Author */}
				<div className="flex items-center gap-3 mb-2">
					<div
						onClick={handleProfileClick}
						className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100 shrink-0 cursor-pointer ring-2 ring-transparent hover:ring-[#199ba9] hover:ring-offset-1 transition-all duration-200"
						title="Kép megtekintése">
						<Image
							src={testimonial.profileImage}
							alt={`${testimonial.name} profilképe`}
							fill
							className="object-cover"
						/>
					</div>
					<div className="text-left min-w-0">
						<p className="text-sm font-medium text-gray-900 truncate">
							{testimonial.name}
						</p>
						<p className="text-xs font-light text-gray-400 truncate">
							{testimonial.symptom}
						</p>
					</div>
				</div>

				<div className="border-t border-gray-100 my-4" />

				<h4 className="text-md font-semibold text-gray-800 mb-2 line-clamp-2">
					{testimonial.symptom}
				</h4>

				<p className="text-gray-600 font-light text-sm leading-relaxed flex-1 mb-4 line-clamp-5">
					{testimonial.solution}
				</p>

				<Link
					href={testimonial.link}
					className="text-sm font-medium text-primary mt-auto"
					onClick={(e) => e.stopPropagation()}>
					Tovább olvasom
				</Link>
			</div>
		</div>
	);
};

const SLIDES_PER_VIEW_DESKTOP = 3;
const showArrows = testimonials.length > SLIDES_PER_VIEW_DESKTOP;

const Stories = () => {
	return (
		<section
			className="w-full py-20 bg-primary-light relative overflow-hidden"
			id="stories">
			<div className="max-w-7xl mx-auto px-4 md:px-8">
				<AnimatedContent
					distance={40}
					duration={0.7}
					threshold={0.3}
					className="w-full">
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center w-full lg:w-3/4 mx-auto">
						Így változik meg az életed a terápia után
					</h2>
				</AnimatedContent>
				<AnimatedContent
					distance={30}
					duration={0.7}
					delay={0.15}
					threshold={0.3}
					className="w-full">
					<p className="text-lg md:text-xl text-gray-700 mb-12 font-light text-center w-full lg:w-3/4 mx-auto">
						A Neuropress terápia komplex szemléletmódja miatt nem áll meg a
						kezeléseknél. Étkezés- és életmódbeli tanácsokkal is ellátjuk a
						hozzánk járókat, hogy mielőbb maguk mögött tudhassák kellemetlen
						tüneteiket.
					</p>
				</AnimatedContent>

				<FadeContent
					duration={800}
					delay={300}
					threshold={0.2}
					className="relative stories-swiper -mx-2 px-2 py-3 -my-3">
					<Swiper
						modules={[Autoplay, Navigation]}
						spaceBetween={24}
						slidesPerView={1}
						breakpoints={{
							768: { slidesPerView: 2 },
							1024: { slidesPerView: SLIDES_PER_VIEW_DESKTOP },
						}}
						autoplay={{
							delay: 4000,
							disableOnInteraction: true,
							pauseOnMouseEnter: true,
						}}
						navigation={
							showArrows
								? { nextEl: ".stories-next", prevEl: ".stories-prev" }
								: false
						}
						loop>
						{testimonials.map((testimonial, index) => (
							<SwiperSlide key={index} className="h-auto">
								<TestimonialCard testimonial={testimonial} />
							</SwiperSlide>
						))}
					</Swiper>

					{/* Desktop-only arrows */}
					{showArrows && (
						<>
							<button
								className="stories-prev hidden lg:flex absolute -left-12 top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center rounded-full bg-white shadow border border-gray-100 hover:shadow-md transition-shadow disabled:opacity-30"
								aria-label="Előző">
								<svg
									width="18"
									height="18"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									viewBox="0 0 24 24">
									<path d="M15 18l-6-6 6-6" />
								</svg>
							</button>
							<button
								className="stories-next hidden lg:flex absolute -right-12 top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center rounded-full bg-white shadow border border-gray-100 hover:shadow-md transition-shadow disabled:opacity-30"
								aria-label="Következő">
								<svg
									width="18"
									height="18"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									viewBox="0 0 24 24">
									<path d="M9 18l6-6-6-6" />
								</svg>
							</button>
						</>
					)}
					<div className="w-full h-16 flex items-center justify-center mt-10">
						<a
							href="#contact"
							className="primary-button inline-block mx-auto py-2">
							Szeretnék én is jól lenni!
						</a>
					</div>
				</FadeContent>
			</div>
			<BackgroundLogo orientation="right" />
		</section>
	);
};

export default Stories;
