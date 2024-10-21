import { productsApi } from '@/features/products/api-products/apiProducts';
import productSlice from '@/features/products/components/productSlice';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
	reducer: {
		[productsApi.reducerPath]: productsApi.reducer,
		product: productSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([productsApi.middleware]),
});
setupListeners(store.dispatch);
