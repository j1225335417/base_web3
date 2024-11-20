import React, { useEffect, useLayoutEffect, useState, useRef } from 'react';
import Button from '@/components/common/Button';
const PhantaCard = () => {
  const [w, setW] = useState(0);
  const leftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const height = entry.contentRect.height; // 高度
        const angle = 10; // 角度，单位为度

        // 将角度转换为弧度
        const angleInRadians = (angle * Math.PI) / 180;
        // 计算角对面的边 a = h * tan(θ)
        const calculatedLength = height * Math.tan(angleInRadians);
        setW(Math.floor(calculatedLength));
      }
    });

    if (leftRef.current) {
      resizeObserver.observe(leftRef.current); // 开始监听容器
    }

    return () => {
      if (leftRef.current) {
        resizeObserver.unobserve(leftRef.current); // 清理观察器
      }
    };
  }, []);
  const style = {};

  return (
    <div className="px-6 md:px-28 md:mt-10 ">
      <div className="flex flex-wrap border border-red-500 p-5 w-full">
        <div
          ref={leftRef}
          style={{
            backgroundImage:
              'linear-gradient(#d6dbff 1px, transparent 0), linear-gradient(90deg, #d6dbff 1px, transparent 0)',
            backgroundSize: '25px 25px',
            clipPath: 'polygon(0 0,100% 0, 82% 100%,0 100%)',
          }}
          className="relative   overflow-hidden  flex-[2] "
        >
          <div className=" z-10   p-20 ">
            <img
              src="https://ezek.io/static/bear-9221d75dd46f0511b0af9d43548a5da5.png"
              className="w-[full] height-[100px] mr-10"
              object-fit="cover"
            />
          </div>

          <div className="absolute top-0 left-0 h-[1px] w-full bg-red-500 z-5"></div>
          <div className="absolute top-0 left-0 w-[1px] h-full bg-red-500 z-5"></div>
          <div
            style={{ width: `calc(100% - ${w}px)` }}
            className={`absolute bottom-0 left-0 h-[1px] bg-red-500 z-5`}
          ></div>
          <div
            style={{ right: w / 2 + 'px' }}
            className="absolute top-[-10px]  w-[1px] bottom-[-10px] bg-red-500 z-5 transform rotate-[10deg]"
          ></div>
        </div>

        <div
          className="relative  overflow-hidden flex-[3] "
          style={{
            clipPath: 'polygon(12% 0 ,100% 0, 100% 100%,0 100%)',
          }}
        >
          <div className=" z-10  text-center flex flex-col justify-center items-center w-full pt-16">
            <div className="text-center text-6xl">Phanta Bear</div>

            <div
              className="w-[70%] bg-no-repeat bg-cover bg-center p-10 mt-10  border-gray-500"
              style={{
                backgroundImage:
                  "url('https://ezek.io/static/contentBk-6bb669f15a5ff7437537e6481af9b19e.png')",
                backgroundSize: '100% 100%', // Stretch the image to fill the div completely
              }}
            >
              <p>
                Phanta Bear 是10,000 个随机生成的数字收藏品，同时可兼作 Ezek
                Club 的会员卡。每只Phanta
                Bear都是独特的，都会解锁不同的等级和会员权益。Phanta Bear项目由
                PHANTACi 和 Ezek 联合发起。
              </p>
            </div>

            <div className="mt-20">
              <Button
                buttonPadding="px-10 md:px-16 py-4"
                buttonText="登录"
                customerClassName={`  w-[188px] h-[80px]`}
                onClick={() => {}}
              />
            </div>

            <div className="text-start my-10 leading-10">
              <p className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-6 before:h-6 before:bg-no-repeat before:bg-contain before:bg-[url('https://ezek.io/static/bearIcon-c3e1fb9fb014288f467071aea07f9b77.svg')]">
                如何在谷歌浏览器上安装和使用MetaMask钱包?
              </p>
              <p className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-6 before:h-6 before:bg-no-repeat before:bg-contain before:bg-[url('https://ezek.io/static/bearIcon-c3e1fb9fb014288f467071aea07f9b77.svg')]">
                如何购买以太币并转移到Web3钱包（含Coinbase）?
              </p>
            </div>
          </div>

          <div
            style={{ width: `calc(100% - ${w}px)` }}
            className={`absolute top-0 right-0 h-[1px]  bg-red-500 z-5`}
          ></div>
          <div
            style={{ left: w / 2 + 'px' }}
            className="absolute top-[-10px]  w-[1px] bottom-[-10px] bg-red-500 z-5 transform rotate-[10deg]"
          ></div>
          <div className="absolute bottom-0 left-0 h-[1px] w-full bg-red-500 z-5"></div>
          <div className="absolute top-0 right-0 w-[1px] h-full bg-red-500 z-5"></div>
        </div>
      </div>
    </div>
  );
};

export default PhantaCard;
