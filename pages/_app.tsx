import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ColorModeScript } from '@chakra-ui/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ColorModeScript />
      <Component {...pageProps} />
    </>
  );
}
