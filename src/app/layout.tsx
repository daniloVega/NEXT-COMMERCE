'use client';

import { Header } from '@/components/header/Header';
import './globals.css';
import { store } from '@/store/store';
import { Provider } from 'react-redux';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<div className='container mx-auto'>
					{' '}
					<Provider store={store}>
						<Header />
						<div>{children}</div>
					</Provider>
				</div>
			</body>
		</html>
	);
}
