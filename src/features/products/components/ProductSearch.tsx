'use client';
import { setSearchTerm } from '@/features/products/components/productSlice';
import React, { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { debounce } from 'rxjs-compat/operator/debounce';

export const ProductSearch = () => {
	const { control, setValue } = useForm({
		defaultValues: {
			search: '',
		},
	});
	const searchValue = useWatch({
		control,
		name: 'search',
	});
	const dispatchSearch = useDispatch();
	const [debouncedValue, setDebouncedValue] = useState('');
	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(searchValue);
		}, 300);
		return () => {
			clearTimeout(handler);
		};
	}, [searchValue]);
	useEffect(() => {
		dispatchSearch(setSearchTerm(debouncedValue));
		console.log('dispatched to store debounce', debouncedValue);
	}, [debouncedValue, dispatchSearch]);
	return (
		<form>
			<input
				type='text'
				placeholder='Search'
				className='bg-gray-50 my-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
				{...control.register('search')}
			/>
		</form>
	);
};
