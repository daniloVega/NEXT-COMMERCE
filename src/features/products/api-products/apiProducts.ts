import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'; // from 'react' version

// Define the shape of the data returned by your API
interface Product {
	id: number;
	name: string;
	// Add other fields as necessary
}

// Define the query argument
interface GetProductsQueryArg {
	searchTerm?: string;
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
	endpoints: (builder) => ({
		getProducts: builder.query({
			query: ({ searchTerm }) => {
				if (searchTerm) {
					return `products/search?q=${searchTerm}`;
				}
				return `products`;
			},
		}),
	}),
});

// Export the hook with proper typing
export const { useGetProductsQuery } = productsApi;

console.log('productsApi', productsApi);
