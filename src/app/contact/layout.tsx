import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../_components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Reach out to us about your next match',
	description: 'Contact us to get started with your next match',
}

export default function Layout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				{children}
			</body>
		</html>
	)
}
