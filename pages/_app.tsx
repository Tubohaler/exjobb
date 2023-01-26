// import '../styles/globals.css';
import type { AppProps } from 'next/app';
import mainTheme from '@lib/theme/main';
import { MantineProvider } from '@mantine/core';
import '@styles/globals.css';
import emotionCache from '@lib/theme/emotionCache';
import ExtendedThemeProvider from 'context/ExtendedTheme.provider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={mainTheme}
      emotionCache={emotionCache}
    >
      <ExtendedThemeProvider>
        <Component {...pageProps} />
      </ExtendedThemeProvider>
    </MantineProvider>
  );
}
