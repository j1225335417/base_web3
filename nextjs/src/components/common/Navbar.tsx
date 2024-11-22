import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { useEffect, useState, forwardRef, useImperativeHandle } from 'react';

interface Nav {
  path: string;
  name: string;
}
interface Props {
  routerOnChange?: (path: string) => void;
}
const Navbar = forwardRef<NavMethods, Props>(({ routerOnChange }, ref) => {
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

    if (routerOnChange) {
      routerOnChange(item.path);
    }
  };
  return (
    <nav>
      <div className=" h-full bg-white max-md:text-primary-light md:bg-transparent  lg:pr-16 xl:pr-24 ">
        <div className=" flex flex-col space-y-10   md:flex-row md:space-x-10 md:space-y-0   xl:space-x-24  ">
          <a
            onClick={() => navClick({ path: '/', name: '主页' })}
            className={`md:hidden cursor-pointer text-sm md:text-xl  hover:text-highlight-light ${
              path === '/' ? 'text-highlight-light' : ''
            }`}
          >
            主页
          </a>

          {navs.map((item) => (
            <a
              key={item.path}
              onClick={() => navClick(item)}
              className={`cursor-pointer text-sm md:text-xl  hover:text-highlight-light ${
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
