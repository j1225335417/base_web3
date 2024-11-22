import React from 'react';
import DoubleBox from '@/components/common/DoubleBox';
import Image from 'next/image';

const list = [
  'https://phanta-bear-nft.matrixlabs.org/website/images/about_phantabear/phantabear1.png',
  'https://phanta-bear-nft.matrixlabs.org/website/images/about_phantabear/phantabear2.png',
  'https://phanta-bear-nft.matrixlabs.org/website/images/about_phantabear/phantabear3.png',
  'https://phanta-bear-nft.matrixlabs.org/website/images/about_phantabear/phantabear4.png',
  'https://phanta-bear-nft.matrixlabs.org/website/images/about_phantaci/phantaci1.jpeg',
  'https://phanta-bear-nft.matrixlabs.org/website/images/about_phantaci/phantaci2.jpeg',
  'https://phanta-bear-nft.matrixlabs.org/website/images/about_phantaci/phantaci3.jpeg',
  'https://phanta-bear-nft.matrixlabs.org/website/images/about_phantaci/phantaci4.jpeg',
];
const About: React.FC = () => {
  return (
    <div className="px-6 md:px-28 md:mt-10 ">
      <div className="border-[1px] border-solid border-btnbg p-1 md:p-2">
        <div className="border-[1px] border-solid border-btnbg p-2 md:p-10">
          <div className="text-4xl text-center md:text-left">
            PHANTA BEAR vs. PHANTACi
          </div>
          <div className="grid grid-cols-4 mt-5 ">
            {list.map((item) => (
              <div className="items-center justify-center flex" key={item}>
                <DoubleBox
                  offset={5}
                  customerClassName=" w-[100px] md:w-[150px] lg:w-[200px] xl:w-[250px] 2xl:w-[300px] aspect-square "
                >
                  <Image
                    src={item}
                    width={1}
                    height={1}
                    alt="xx"
                    layout="responsive"
                  />
                </DoubleBox>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-[1px] border-solid border-btnbg p-1 md:p-2 mt-10">
        <div className="border-[1px] border-solid border-btnbg  p-3 md:p-10">
          <div className="text-4xl text-center md:text-left font-bold mt-5">
            关于
          </div>
          <div className="px-0 md:px-6 ">
            <img
              className="mt-5 w-full"
              object-fit="cover"
              src="https://phanta-bear-nft.matrixlabs.org/website/images/about-shadow.png"
            />
            <div className="text-sm md:text-xl">
              <p className="mt-5 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-[1px] before:w-6 before:h-6 before:bg-no-repeat before:bg-contain before:bg-[url('https://ezek.io/static/bearIcon-c3e1fb9fb014288f467071aea07f9b77.svg')]">
                2013年我们在拍摄制作周杰伦自编自导电影《天台》时就在想，是否可以有一个虚拟的空间，使观众不仅可以观赏电影，而且可以进入电影美学的浪漫场景里沉浸式享受呢？
              </p>
              <p className="mt-5 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0[1px] before:w-6 before:h-6 before:bg-no-repeat before:bg-contain before:bg-[url('https://ezek.io/static/bearIcon-c3e1fb9fb014288f467071aea07f9b77.svg')]">
                PHANTACi 是由拥有源源不绝创意灵感的 Jay (周杰伦)
                以及对于流行产业有着独到见解的 Ric
                共同打造的服饰品牌，于2006年创立。将源自于奇幻壮丽的设计与想法融入日常生活当中。
              </p>
              <p className="mt-5 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-[1px] before:w-6 before:h-6 before:bg-no-repeat before:bg-contain before:bg-[url('https://ezek.io/static/bearIcon-c3e1fb9fb014288f467071aea07f9b77.svg')]">
                现在我们想通过建立 Phanta Bear NFT
                将我们的时尚愿景与崭新的区块链时代结合起来。 Phanta
                Bear拥有两只明亮、星光熠熠的眼睛，它们充分表达了中国流行天王的艺术才华。
                10000个以 PHANTACi 的标志性时尚为特色组成的Phanta
                Bear，不仅可以让拥有者享受丰富的线上线下权益，还可以尽享元宇宙生活之道。
              </p>
              <p className="mt-5 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-[1px] before:w-6 before:h-6 before:bg-no-repeat before:bg-contain before:bg-[url('https://ezek.io/static/bearIcon-c3e1fb9fb014288f467071aea07f9b77.svg')]">
                更多周杰伦同款: https://www.phantacico.com/pages/jay-snap
              </p>
              <p className="mt-5 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-[1px] before:w-6 before:h-6 before:bg-no-repeat before:bg-contain before:bg-[url('https://ezek.io/static/bearIcon-c3e1fb9fb014288f467071aea07f9b77.svg')]">
                如何在谷歌浏览器上安装和使用MetaMask钱包?
              </p>
              <p className="mt-5 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-[1px] before:w-6 before:h-6 before:bg-no-repeat before:bg-contain before:bg-[url('https://ezek.io/static/bearIcon-c3e1fb9fb014288f467071aea07f9b77.svg')]">
                如何购买以太币并转移到Web3钱包（含Coinbase）?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
