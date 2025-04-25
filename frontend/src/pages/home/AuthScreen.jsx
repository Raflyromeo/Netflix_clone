import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const AuthScreen = () => {
	const [email, setEmail] = useState("");
	const navigate = useNavigate();

	const handleFormSubmit = (e) => {
		e.preventDefault();
		navigate("/signup?email=" + email);
	};

	return (
		<div className='hero-bg relative'>
			{/* Navbar */}
			<header className='max-w-6xl mx-auto flex items-center justify-between p-4 pb-10'>
				<img src='/netflix-logo.png' alt='Logo Netflix' className='w-32 md:w-52' />
				<Link to={"/login"} className='text-white bg-red-600 py-1 px-2 rounded'>
					Sign in
				</Link>
			</header>

			{/* Hero section */}
			<div className='flex flex-col items-center justify-center text-center py-40 text-white max-w-6xl mx-auto'>
				<h1 className='text-4xl md:text-6xl font-bold mb-4'>
					Film, acara TV tak terbatas, dan lebih banyak lagi
				</h1>
				<p className='text-lg mb-4'>Tonton di mana saja. Batalkan kapan saja.</p>
				<p className='mb-4'>Siap menonton? Masukkan email untuk membuat atau memulai ulang keanggotaanmu.</p>

				<form className='flex flex-col md:flex-row gap-4 w-1/2' onSubmit={handleFormSubmit}>
					<input
						type='email'
						placeholder='Alamat email'
						className='p-2 rounded flex-1 bg-black/80 border border-gray-700'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<button className='bg-red-600 text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center'>
						Mulai
						<ChevronRight className='size-8 md:size-10' />
					</button>
				</form>
			</div>

			{/* separator */}
			<svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full">
				<defs>
					<linearGradient id="blueToBlackGradient" x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" stopColor="#081029" />
						<stop offset="100%" stopColor="#000000" />
					</linearGradient>
					<linearGradient id="pinkGradientStroke" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" stopColor="#e91e63" stopOpacity="0.2" />
						<stop offset="50%" stopColor="#e91e63" />
						<stop offset="100%" stopColor="#e91e63" stopOpacity="0.2" />
					</linearGradient>
				</defs>
				<path
					d="M0,20 Q500,-10 1000,20"
					stroke="url(#pinkGradientStroke)"
					strokeWidth="6"
					fill="none"
					strokeLinecap="round"
				/>
				<path
					d="M0,100 L0,20 Q500,-10 1000,20 L1000,100 Z"
					fill="url(#blueToBlackGradient)"
				/>
			</svg>

			{/* Bagian 1 */}
			<div className='py-10 bg-black text-white'>
				<div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'>
					<div className='flex-1 text-center md:text-left'>
						<h2 className='text-4xl md:text-5xl font-extrabold mb-4'>Nikmati di TV-mu</h2>
						<p className='text-lg md:text-xl'>
							Tonton di Smart TV, PlayStation, Xbox, Chromecast, Apple TV, pemutar Blu-ray, dan lainnya.
						</p>
					</div>
					<div className='flex-1 relative'>
						<img src='/tv.png' alt='Gambar TV' className='mt-4 z-20 relative' />
						<video
							className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 z-10'
							playsInline
							autoPlay
							muted
							loop
						>
							<source src='/hero-vid.m4v' type='video/mp4' />
						</video>
					</div>
				</div>
			</div>

			<div className='h-2 w-full bg-[#232323]' aria-hidden='true' />

			{/* Bagian 2 */}
			<div className='py-10 bg-black text-white'>
				<div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col-reverse px-4 md:px-2'>
					<div className='flex-1 relative'>
						<div className='relative'>
							<img src='/stranger-things-lg.png' alt='Stranger Things' className='mt-4' />
							<div
								className='flex items-center gap-2 absolute bottom-5 left-1/2 -translate-x-1/2 bg-black
              w-3/4 lg:w-1/2 h-24 border border-slate-500 rounded-md px-2'
							>
								<img src='/stranger-things-sm.png' alt='gambar kecil' className='h-full' />
								<div className='flex justify-between items-center w-full'>
									<div className='flex flex-col gap-0'>
										<span className='text-md lg:text-lg font-bold'>Stranger Things</span>
										<span className='text-sm text-blue-500'>Mengunduh...</span>
									</div>
									<img src='/download-icon.gif' alt='' className='h-12' />
								</div>
							</div>
						</div>
					</div>
					<div className='flex-1 md:text-left text-center'>
						<h2 className='text-4xl md:text-5xl font-extrabold mb-4 text-balance'>
							Unduh acara favoritmu untuk ditonton offline
						</h2>
						<p className='text-lg md:text-xl'>
							Simpan favoritmu dengan mudah dan selalu punya tontonan.
						</p>
					</div>
				</div>
			</div>

			<div className='h-2 w-full bg-[#232323]' aria-hidden='true' />

			{/* Bagian 3 */}
			<div className='py-10 bg-black text-white'>
				<div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'>
					<div className='flex-1 text-center md:text-left'>
						<h2 className='text-4xl md:text-5xl font-extrabold mb-4'>Tonton di mana saja</h2>
						<p className='text-lg md:text-xl'>
							Streaming film dan acara TV tanpa batas di ponsel, tablet, laptop, dan TV-mu.
						</p>
					</div>
					<div className='flex-1 relative overflow-hidden'>
						<img src='/device-pile.png' alt='Gambar Perangkat' className='mt-4 z-20 relative' />
						<video
							className='absolute top-2 left-1/2 -translate-x-1/2 h-4/6 z-10 max-w-[63%]'
							playsInline
							autoPlay
							muted
							loop
						>
							<source src='/video-devices.m4v' type='video/mp4' />
						</video>
					</div>
				</div>
			</div>

			<div className='h-2 w-full bg-[#232323]' aria-hidden='true' />

			{/* Bagian 4 */}
			<div className='py-10 bg-black text-white'>
				<div className='flex max-w-6xl mx-auto items-center justify-center flex-col-reverse md:flex-row px-4 md:px-2'>
					<div className='flex-1 relative'>
						<img src='/kids.png' alt='Profil Anak-anak' className='mt-4' />
					</div>
					<div className='flex-1 text-center md:text-left'>
						<h2 className='text-4xl md:text-5xl font-extrabold mb-4'>Buat profil untuk anak-anak</h2>
						<p className='text-lg md:text-xl'>
							Ajak anak berpetualang bersama karakter favorit mereka di ruang yang dibuat khusus—gratis dengan keanggotaanmu.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default AuthScreen;
