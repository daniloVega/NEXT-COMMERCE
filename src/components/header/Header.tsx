'use client';
import Link from 'next/link';
import React from 'react';

export const Header = () => {
	return (
		<header className='flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
			<div className='flex flex-wrap items-center justify-between gap-5 w-full'>
				<div
					id='collapseMenu'
					className='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
					<ul className='lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
						<li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
							<Link
								href={'/products'}
								className='hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]'>
								Home
							</Link>
						</li>
					</ul>
				</div>

				<div className='flex max-lg:ml-auto space-x-3'>
					<button className='px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]'>
						Login
					</button>

					{/* <button id='toggleOpen' className='lg:hidden'>
						<svg
							className='w-7 h-7'
							fill='#000'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fill-rule='evenodd'
								d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
								clip-rule='evenodd'></path>
						</svg>
					</button> */}
				</div>
			</div>
		</header>
	);
};
