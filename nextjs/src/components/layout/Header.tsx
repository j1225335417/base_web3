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
  const drawerCloseRef = useRef(null);
  const [theme, setTheme] = useState<null | string>(null);

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
  const closeDrawer = () => {
    if (drawerCloseRef.current) {
      const close = drawerCloseRef.current as HTMLInputElement;
      if (close) {
        close.checked = false; // 关闭抽屉
      }
    }
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
          src={isIndexHeader || theme === 'dark' ? whiteBase64 : base64}
          alt="Web3"
          height={50}
          width={150}
          objectFit="contain"
          className="cursor-pointer relative bottom-1"
          onClick={handleClick}
        />
      </div>
      <div className="flex flex-1 justify-end items-center flex-wrap">
        <div className="hidden md:block">
          <Navbar ref={navRef} />
        </div>

        <div className="ml-3 mr-3 hidden xl:block">
          <ConnectButton
            chainStatus={'none'}
            showBalance={false}
            accountStatus={'address'}
          />
        </div>
        <div className="px-5">
          <Theme themeChange={setTheme} />
        </div>
        <Language customerClassName="hidden md:block" />
        <div className="drawer md:hidden" style={{ width: 'auto' }}>
          <input
            id="my-drawer"
            ref={drawerCloseRef}
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="drawer-button flex justify-end"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMi41IiB5PSIyLjY2Njc1IiB3aWR0aD0iMzYuNjY2NyIgaGVpZ2h0PSIzNi42NjY3IiByeD0iMC41IiBmaWxsPSIjMTgyREVGIi8+CjxyZWN0IHg9IjAuNjY2OTkyIiB5PSIwLjgzMzM3NCIgd2lkdGg9IjM2LjY2NjciIGhlaWdodD0iMzYuNjY2NyIgcng9IjAuNSIgZmlsbD0iI0VERUZGRiIvPgo8cGF0aCBkPSJNOCAxMy42NjY3SDMwIiBzdHJva2U9IiMxODJERUYiLz4KPHBhdGggZD0iTTggMTkuMTY2NkgyMi42NjY3IiBzdHJva2U9IiMxODJERUYiLz4KPHBhdGggZD0iTTggMjQuNjY2NkgyMi42NjY3IiBzdHJva2U9IiMxODJERUYiLz4KPC9zdmc+Cg=="
                alt="menu"
              />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div className="flex  w-32  min-h-full md:hidden bg-white  p-[2px]  ">
              <div className="flex  border-solid border-[1px] border-btnbg flex-1 p-[2px]">
                <div className="border-solid border-[1px] border-btnbg flex-1 p-5 relative">
                  <div className="flex items-end justify-end mb-5">
                    <svg
                      onClick={() => {
                        closeDrawer();
                      }}
                      width="33"
                      height="34"
                      viewBox="0 0 33 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.72048 4.02506L29.8098 28.1994L30.1138 29.9619C21.7263 24.3003 2.65684 10.1968 2.35282 8.43436C2.09183 6.92132 3.25667 5.27378 4.50157 4.01097C4.83704 3.67067 5.38318 3.68657 5.72048 4.02506Z"
                        fill="#182DEF"
                      ></path>
                      <path
                        d="M2.22086 25.2077L28.5295 3.46961L30.3126 3.33072C23.896 11.1557 8.08116 28.8318 6.29807 28.9706C4.76731 29.0899 3.23517 27.7769 2.09354 26.4201C1.78589 26.0544 1.85248 25.5121 2.22086 25.2077Z"
                        fill="#182DEF"
                      ></path>
                    </svg>
                  </div>
                  <Navbar
                    ref={navRef}
                    routerOnChange={(path) => {
                      closeDrawer();
                    }}
                  />

                  <Language customerClassName="absolute bottom-0 left-0 right-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
