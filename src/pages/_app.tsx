import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { QueryClientProvider, QueryClient } from 'react-query';
import { GlobalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';

export const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <GlobalStyles />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
