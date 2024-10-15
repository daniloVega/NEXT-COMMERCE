import React from 'react';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

export const RenderStarsUI = ({ rating }: any) => {
	const renderStars = (rating: number) => {
		const fullStars = Math.floor(rating); // Full stars count
		const hasHalfStar = rating - fullStars >= 0.5; // Check if half star is needed
		const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Calculate remaining empty stars

		return (
			<div className='flex items-center'>
				{/* Full stars */}
				{[...Array(fullStars)].map((_, i) => (
					<FaStar key={i} className='text-yellow-500' />
				))}

				{/* Half star */}
				{hasHalfStar && <FaStarHalfAlt className='text-yellow-500' />}

				{/* Empty stars */}
				{[...Array(emptyStars)].map((_, i) => (
					<FaRegStar key={i} className='text-yellow-500' />
				))}
			</div>
		);
	};
	return <div>{renderStars(rating)}</div>;
};
