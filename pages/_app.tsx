// import '../styles/globals.css';
import type { AppProps } from 'next/app';
import mainTheme from '@lib/theme/main';
import { MantineProvider } from '@mantine/core';
import '@styles/globals.css';
import emotionCache from '@lib/theme/emotionCache';
import ExtendedThemeProvider from 'context/ExtendedTheme.provider';
import { StaticPageProps } from '@lib/dato-cms';
import { getThemeOverrides } from '@lib/theme/utils';

type PageProps = StaticPageProps & Record<string, unknown>;

const extractThemeColors = (props: PageProps) => {
  if (!props?.data?.page?.themeColors)
    return { theme: mainTheme, extended: {} };
  const { base, extended } = getThemeOverrides(props?.data?.page?.themeColors);
  return {
    theme: {
      ...mainTheme,
      ...base,
      colors: { ...mainTheme.colors, ...base.colors },
    },
    extended,
  };
};

export default function App({ Component, pageProps }: AppProps<PageProps>) {
  const { theme, extended } = extractThemeColors(pageProps);
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={theme}
      emotionCache={emotionCache}
    >
      <ExtendedThemeProvider extendedThemeOverride={extended}>
        <Component {...pageProps} />
      </ExtendedThemeProvider>
    </MantineProvider>
  );
}
