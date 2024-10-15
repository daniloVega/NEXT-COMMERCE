import { RenderStarsUI } from '@/features/products/components/product-item/RenderStarsUI';
import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'; // Import icons
const ProductItemUI = ({ product }: any) => {
	console.log('product', product);
	return (
		<div
			key={product.id}
			className='flex items-center gap-10 border border-b-2'>
			<div className='w-48'>
				<img src={product.thumbnail} className='w-auto h-48' alt='' />
			</div>
			<div>
				<h2 className='font-semibold text-2xl'>{product.title}</h2>
				<RenderStarsUI rating={product.rating} />
				<p>{product.description}</p>
				<p>{product.price}</p>
				<p>{product.quantity}</p>
			</div>
		</div>
	);
};

export default ProductItemUI;
