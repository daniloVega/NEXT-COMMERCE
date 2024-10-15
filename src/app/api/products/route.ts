import { getProducts } from '@/features/products/services/products.service';
import { NextResponse } from 'next/server';

export async function GET() {
	try {
		const data = await getProducts();
		return NextResponse.json(data.products);
	} catch (error) {
		console.error('Error fetching products:', error);
		return NextResponse.json(
			{ error: 'Failed to fetch products' },
			{ status: 500 }
		);
	}
}
