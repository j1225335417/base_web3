
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  mainnet, sepolia
} from 'wagmi/chains';

const WALLET_CONNECT = process.env.NEXT_PUBLIC_WALLET_CONNECT || "";

const rainbowkitConfig = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: WALLET_CONNECT,
  chains: [mainnet, sepolia],
  ssr: true,
});
export default rainbowkitConfig;