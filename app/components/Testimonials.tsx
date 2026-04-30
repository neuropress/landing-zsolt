"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import AnimatedContent from "./gsap/AnimatedContent";
import FadeContent from "./gsap/FadeContent";
import { useState, useRef, useEffect } from "react";

const testimonials = [
	{
		name: "Nyári Dia",
		profileImage: "/images/testi/1.webp",
		fullImage: "/images/celebri-webp/2.webp",
		symptom: "színésznő",
		solution:
			"Nyári Dia életét évek óta megnehezítették a migrénes panaszok. Ha jött a fejgörcs, elvonult egy sötét szobába és még a fájdalomcsillapító sem enyhítette fájdalmát. Volt, hogy gyermekét is alig tudta ellátni, annyira szenvedett. Ma pedig, alig fél évvel az első kezelés után, búcsút intett a migrénnek és alig várja az allergiaszezont, ami korábban maga volt a rémálom számára. Vargha Zsolt és a NeuroPress Terápia segítségével szervezete ellanállóbb lett, ő pedig tudatosabb, jobban érti teste jelzéseit.",
		rating: 5,
	},
	{
		name: "Vastag Csaba",
		profileImage: "/images/testi/4.webp",
		fullImage: "/images/celebri-webp/4.webp",
		symptom: "énekes, színész",
		solution:
			"Vastag Csaba aktív sportolóként és előadóként számára mindig is fontos volt szervezete ellenálló képességének tudatos támogatása. A rendszeres koncertek, éjszakai fellépések és utazások miatt prevenciós céllal kereste fel a NeuroPress Terápiát. Tapasztalata szerint ellenállóbbnak érzi magát, és ha megbetegszik, a felépülés rövidebb ideig tart. Története jól mutatja, hogy a NeuroPress Terápia azok számára is értékes, akik hosszú távon szeretnék megőrizni vitalitásukat és teljesítőképességüket.",
		rating: 5,
	},
	{
		name: "Vastagné Domján Evelin",
		profileImage: "/images/testi/3.webp",
		fullImage: "/images/celebri-webp/evelin.webp",
		symptom: "színésznő",
		solution:
			"Evelin hormonális eredetű bőrproblémákkal érkezett hozzánk, sok egyéb lehetőség kipróbálása után. A kezelések során fokozatos változást tapasztalt, bőre látványosan szebb lett, közérzete javult, és a szervezete egyre kiegyensúlyozottabban működött. Számunkra külön öröm, hogy Evelin azóta is bizalommal fordul a NeuroPress csapatához, ha úgy érzi, szervezetének ismét támogatásra van szüksége. Története jól mutatja, hogy a tartós változás sokszor ott kezdődik, amikor nem csupán a külső tünetekre figyelünk, hanem a test működésének mélyebb összefüggéseit is megértjük.",
		rating: 5,
	},
	{
		name: "Vajna Tímea",
		profileImage: "/images/testi/2.webp",
		fullImage: "/images/celebri-webp/3.webp",
		symptom: "üzletasszony, műsorvezető",
		solution:
			"Vajna Tímea is nálunk járt, és örömmel osztotta meg velünk pozitív tapasztalatait. Elmondása alapján már a kezelések elején érezte a változást: javulást tapasztalt a közérzetében, az emésztésében, a hormonális működésében, valamint a hangulatában is. Külön öröm számunkra, hogy a vérképe és a petefészek működése terén is kedvező változásokról számolt be. Tímea bizalommal fordult Zsolthoz és a NeuroPress csapatához, és saját élménye alapján szívből ajánlja a terápiát azoknak, akik természetes támogatást keresnek szervezetük egyensúlyának helyreállításához.",
		rating: 5,
	},
];

type Testimonial = (typeof testimonials)[0];

const SLIDES_PER_VIEW_DESKTOP = 3;
const showArrows = testimonials.length > SLIDES_PER_VIEW_DESKTOP;

const Stars = ({ count }: { count: number }) => (
	<div className="flex gap-0.5 justify-center">
		{Array.from({ length: 5 }).map((_, i) => (
			<svg
				key={i}
				className={`w-4 h-4 ${i < count ? "text-amber-400" : "text-gray-200"}`}
				fill="currentColor"
				viewBox="0 0 20 20">
				<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
			</svg>
		))}
	</div>
);

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
			{ threshold: 0.2, rootMargin: "0px" },
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
			style={{ minHeight: "500px" }}
			className={`relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 my-3${imageMode ? " cursor-pointer" : ""}`}>
			{/* Full-image layer */}
			<div
				className={`absolute inset-0 transition-all duration-700 ease-in-out ${
					imageMode
						? "opacity-100 scale-100"
						: "opacity-0 scale-105 pointer-events-none"
				}`}>
				<Image
					src={testimonial.fullImage}
					alt={testimonial.name}
					fill
					className="object-cover object-top"
				/>
				<div className="absolute inset-0 flex items-end p-5">
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
				{/* Quote mark */}
				<div className="text-4xl leading-none text-primary font-serif mb-3 select-none">
					&ldquo;
				</div>

				{/* Review text */}
				<p className="text-gray-600 font-light text-sm leading-relaxed flex-1 mb-4 line-clamp-8">
					{testimonial.solution}
				</p>

				{/* Stars */}
				<Stars count={testimonial.rating} />

				{/* Divider */}
				<div className="border-t border-gray-100 my-4" />

				{/* Author */}
				<div className="flex items-center gap-3">
					<div
						onClick={handleProfileClick}
						className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100 shrink-0 cursor-pointer ring-2 ring-transparent hover:ring-[var(--primary-color)] hover:ring-offset-1 transition-all duration-200"
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
			</div>
		</div>
	);
};

const Testimonials = () => {
	return (
		<section className="w-full py-20 bg-primary-light">
			<div className="max-w-7xl mx-auto px-4 md:px-8">
				<AnimatedContent
					distance={40}
					duration={0.7}
					threshold={0.3}
					className="w-full">
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center w-full lg:w-3/4 mx-auto">
						Nekik már segítettünk
					</h2>
				</AnimatedContent>
				<AnimatedContent
					distance={30}
					duration={0.7}
					delay={0.15}
					threshold={0.3}
					className="w-full">
					<p className="text-lg md:text-xl text-gray-700 mb-12 font-light text-center w-full lg:w-3/4 mx-auto">
						Olvasd el, hogyan változtatta meg a Neuropress terápia a hozzánk
						fordulók életét, és hogyan szabadultak meg kellemetlen tünetektől.
					</p>
				</AnimatedContent>

				<FadeContent
					duration={800}
					delay={300}
					threshold={0.2}
					className="relative testimonials-swiper -mx-2 px-2 py-3 -my-3">
					<Swiper
						modules={[Autoplay, Navigation]}
						spaceBetween={24}
						slidesPerView={1}
						breakpoints={{
							768: { slidesPerView: 2 },
							1024: { slidesPerView: SLIDES_PER_VIEW_DESKTOP },
						}}
						autoplay={{
							delay: 2000,
							disableOnInteraction: true,
							pauseOnMouseEnter: true,
						}}
						navigation={
							showArrows
								? { nextEl: ".testimonials-next", prevEl: ".testimonials-prev" }
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
								className="testimonials-prev hidden lg:flex absolute -left-12 top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center rounded-full bg-white shadow border border-gray-100 hover:shadow-md transition-shadow disabled:opacity-30"
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
								className="testimonials-next hidden lg:flex absolute -right-12 top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center rounded-full bg-white shadow border border-gray-100 hover:shadow-md transition-shadow disabled:opacity-30"
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
				</FadeContent>
			</div>
		</section>
	);
};

export default Testimonials;
