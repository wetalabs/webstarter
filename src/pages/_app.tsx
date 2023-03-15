import '../styles/globals.css'
import '../styles/fonts.css'
import type { AppProps } from 'next/app'
import NProgress from 'nprogress';
import { useRouter } from 'next/router';
import { useEffect } from 'react';



export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeStart', () =>  NProgress.start());
    router.events.on('routeChangeComplete', () =>  NProgress.done());
    router.events.on('routeChangeError', () =>  NProgress.done());
  }, []);

  return <Component {...pageProps} />
  
}
