import '../styles/globals.css'
import '../styles/fonts.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'


export default function App({ Component, pageProps }: AppProps) {

const LayoutProps = Component

  return <Component {...pageProps} />
}
