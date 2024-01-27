import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../_components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Check out our courts to find the next time available you can play',
	description: 'Find the next time available you can play',
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