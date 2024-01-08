import { Montserrat } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
// import { Metadata } from 'next'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' })

export const metadata = {
	title: {
		template: '%s | Sohail Chauhan',
		default: 'Sohail Chauhan Portfolio',
	},
	description: 'The official Next.js Course Dashboard, built with App Router.',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={montserrat.className}>{children}</body>
		</html>
	)
}
