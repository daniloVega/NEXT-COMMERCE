'use client';
import { useGetProductsQuery } from '@/features/products/api-products/apiProducts';
import { Products } from '@/features/products/components/Products';
import { useSelector } from 'react-redux';

const ProductsPage = () => {
	const searchTerm = useSelector((state: any) => state.product.searchTerm);
	const { data, isLoading, error } = useGetProductsQuery({ searchTerm });
	const products = data?.products;
	if (isLoading) {
		<p>LOADING...</p>;
	}
	if (error) {
		console.log('errorrcinaaaa');
	}
	return <Products products={products} />;
};

export default ProductsPage;
