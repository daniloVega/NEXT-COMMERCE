'use client';

import ProductItemUI from '@/features/products/components/product-item/ProductItemUI';
import { useEffect, useState } from 'react';

const ProductsPage = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const res = await fetch('api/products');
				if (!res.ok) {
					throw new Error('Failed to fetch products');
				}
				const data = await res.json();
				console.log('data.products', data.products);
				setProducts(data);
			} catch (error) {
				console.error('Error fetching products:', error);
				setError(
					error instanceof Error
						? error.message
						: 'An unexpected error occurred'
				);
			} finally {
				setLoading(false);
			}
		};
		fetchProducts();
	}, []);

	if (loading)
		return (
			<div className='flex h-screen items-center justify-center'>
				<p>Loading products...</p>{' '}
			</div>
		);
	if (error) return <p>Error: {error}</p>;

	return (
		<div>
			{products.length > 0 ? (
				products.map((product: any) => (
					<ProductItemUI product={product} />
				))
			) : (
				<p>No products available.</p>
			)}
		</div>
	);
};

export default ProductsPage;
