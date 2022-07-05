import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { QueryClientProvider, QueryClient } from 'react-query';
import { GlobalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';
import { AuthProvider } from '../contexts/AuthContext';

export const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <GlobalStyles />
        </QueryClientProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
