import { mainnet, sepolia, arbitrum, arbitrumSepolia } from 'wagmi/chains';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';

const WALLET_CONNECT = process.env.NEXT_PUBLIC_WALLET_CONNECT || '';

const config = getDefaultConfig({
  appName: 'Base_web3',
  projectId: WALLET_CONNECT,
  chains: [mainnet, sepolia, arbitrum, arbitrumSepolia],
  ssr: true,
});

export default config;
