import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState, forwardRef, useImperativeHandle } from 'react';

interface Nav {
  path: string;
  name: string;
}
const Navbar = forwardRef<NavMethods>((props, ref) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [path, setPath] = useState('/');
  useEffect(() => {
    setPath(router.pathname);
  }, []);
  const navs: Nav[] = [
    {
      name: t('nav.nft'),
      path: '/nft',
    },
    {
      name: t('nav.buy'),
      path: '/buy',
    },
    {
      name: t('nav.roadmap'),
      path: '/roadmap',
    },
    {
      name: t('nav.team'),
      path: '/team',
    },
    {
      name: t('nav.about'),
      path: '/about',
    },
  ];
  useImperativeHandle(ref, () => ({
    updatePath: (p: string) => {
      setPath(p);
    },
  }));

  const navClick = (item: Nav) => {
    router.push(item.path);
    setPath(item.path);
  };
  return (
    <nav>
      <div className="  lg:pr-16 xl:pr-24 ">
        <div className="hidden  md:flex md:space-x-10   xl:space-x-24  ">
          {navs.map((item, index) => (
            // <Link href={item.path} legacyBehavior key={item.path}>
            <a
              onClick={() => navClick(item)}
              className={`cursor-pointer text-xl  hover:text-highlight-light ${
                path === item.path ? 'text-highlight-light' : ''
              }`}
            >
              {item.name}
            </a>
            // </Link>
          ))}
        </div>
      </div>
    </nav>
  );
});

// 定义子组件的方法接口
export interface NavMethods {
  updatePath: (path: string) => void;
}

export default Navbar;
