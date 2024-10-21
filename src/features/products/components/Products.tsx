import { ProductSearch } from '@/features/products/components/ProductSearch';
import ProductItemUI from '@/features/products/components/product-item/ProductItemUI';
import React from 'react';

export const Products = ({ products }: any) => {
	return (
		<div>
			<ProductSearch />
			{products?.length > 0 ? (
				products?.map((product: any) => (
					<ProductItemUI product={product} />
				))
			) : (
				<p>No products available.</p>
			)}
		</div>
	);
};
