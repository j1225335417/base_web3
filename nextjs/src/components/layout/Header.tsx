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
import { useSelector } from 'react-redux';
import { base64, whiteBase64 } from '@/assets/logo';

import { useDispatch } from 'react-redux';
import { loadNotification } from '@/redux/modules/notificationSlice';
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

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadNotification());
  }, []);

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
        .catch(() => {});
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
        isIndexHeader
          ? 'text-white '
          : 'bg-background-light  dark:bg-background-dark'
      } flex w-full flex-wrap items-center justify-between p-4  shadow-md sm:flex-nowrap  z-[999] fixed  top-0`}
    >
      <div className="flex items-center relative  cursor-pointer">
        <Image
          src={isIndexHeader ? whiteBase64 : base64}
          alt="Web3"
          height={50}
          width={150}
          objectFit="contain"
          className="cursor-pointer relative bottom-1"
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
