import '@/styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { AppProps } from 'next/app';
import { WagmiProvider } from 'wagmi';
import config from '@/config/wagmiConfig';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { Provider as ReduxProvider } from 'react-redux';
import store from '@/redux/store';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import React from 'react';
import '@/config/i18nConfig';
const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <ReduxProvider store={store}>
              <div className="flex flex-col">
                <Header />

                <div style={{ minHeight: 'calc(100vh - 79px - 224px)' }}>
                  <Component {...pageProps} />
                </div>

                <Footer />
              </div>
            </ReduxProvider>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </React.StrictMode>
  );
}
