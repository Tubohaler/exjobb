// import '../styles/globals.css';
import type { AppProps } from 'next/app';
import mainTheme from '@lib/theme/main';
import { MantineProvider } from '@mantine/core';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={mainTheme}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
