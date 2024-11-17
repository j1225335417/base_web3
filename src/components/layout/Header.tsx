import React, { useEffect, useState, useRef } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useChainId, useAccountEffect } from 'wagmi';
import { useSignMessage } from 'wagmi';
import { authenticate, nonce as getNonce } from '@/services';
import { AUTH_TOKEN } from '@/constants/storage';
import Image from 'next/image';
import Navbar, { NavMethods } from '../common/Navbar';
import Theme from '@/components/common/Theme';
import Language from '@/components/common/Language';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { state } from '@/redux/modules/common';
import { useSelector } from 'react-redux';
const whiteBase64 =
  'data:image/png;base64,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';
const base64 =
  'data:image/png;base64,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';
const Header: React.FC = () => {
  const { address } = useAccount();
  const [nonce, setNonce] = useState(null);
  const { signMessage, data: signedMessage } = useSignMessage();
  const [isClent, setIsClent] = useState(false);
  const [chain, setChain] = useState({});
  const chainId = useChainId();
  const router = useRouter();
  const navRef = useRef<NavMethods>(null);

  const showVideo = useSelector((state: any) => state.common.showVideo);

  const { pathname } = router;

  useEffect(() => {
    setIsClent(true);
    // console.log('dark', document.documentElement.classList.contains('dark'));
  }, []);

  useEffect(() => {
    if (signedMessage) {
      authenticate({
        address,
        signature: signedMessage,
        nonce,
        ...chain,
      })
        .then((res) => {
          localStorage.setItem(AUTH_TOKEN, res.data);
        })
        .catch((_) => {});
    }
  }, [signedMessage, address, chainId]);

  useAccountEffect({
    onConnect(data) {
      const { address, chain } = data;
      setChain({ chainId: chain?.id, chainName: chain?.name });
      getNonce({ address }).then((res) => {
        setNonce(res.data.nonce);
        signMessage({ message: res.data.message });
      });
    },
    onDisconnect() {
      localStorage.clear();
    },
  });

  if (!isClent) {
    return null;
  }
  let isIndexHeader = pathname === '/';

  if (!showVideo) {
    isIndexHeader = false;
  }
  const handleClick = () => {
    navRef.current?.updatePath('/');
    router.push('/');
  };
  return (
    <header
      style={{
        background: isIndexHeader
          ? 'linear-gradient(180deg, #191919 -48.13%, rgba(25, 25, 25, 0) 127.5%)'
          : '',
      }}
      className={`${
        isIndexHeader ? 'text-white ' : 'bg-[#ffffff]'
      } flex w-full flex-wrap items-center justify-between p-4  shadow-md sm:flex-nowrap  z-10 ${
        isIndexHeader ? 'fixed' : 'sticky'
      } top-0`}
    >
      <div className="flex items-center relative  cursor-pointer">
        <Image
          src={isIndexHeader ? whiteBase64 : base64}
          alt="Web3"
          height={50}
          width={150}
          objectFit="contain"
          className="cursor-pointer"
          onClick={handleClick}
        />
        {/* <Image src="/favicon.ico" alt="Web3" width={50} height={50} /> */}
        {/* <span className={`ml-2 text-lg sm:text-xl `}>Logo</span> */}
      </div>
      <div className="flex flex-1 justify-end items-center flex-wrap">
        <Navbar ref={navRef} />

        <Theme />
        <div className="ml-3 mr-3 hidden xl:block">
          <ConnectButton
            chainStatus={'none'}
            showBalance={false}
            accountStatus={'address'}
          />
        </div>
        <Language />
      </div>
    </header>
  );
};

export default Header;
