import React from 'react';
import { icon1 } from '@/assets/team';
const personList = [
  {
    name: 'WILL L',
    role: 'FOUNDER',
    desc: 'Will L 是一个肌肉男，他为中国流行天王写了许多著名的歌词。现在他将把传统的娱乐世界带到新的区块链世界！',
    image:
      'https://phanta-bear-nft.matrixlabs.org/website/images/team/Will.jpg',
  },
  {
    name: 'Mark G',
    role: 'FOUNDER',
    desc: '他在巴黎学习电影制作多年，并曾与一位好莱坞传奇明星一起周游世界，将中国文化带给了中东和西方的各路名流。现在他想把他所有的娱乐体验带到这个新的区块链世界。',
    image:
      'https://phanta-bear-nft.matrixlabs.org/website/images/team/Mark.jpg',
  },
];
const About: React.FC = () => {
  return (
    <div className="px-6 md:px-28  w-full overflow-hidden">
      <div className="flex pt-10 justify-center items-center ">
        <span className="flex-1 text-4xl  md:text-4xl lg:text-5xl xl:text-6xl font-bold font-[Amatic SC] text-center md:text-start">
          INTRODUCTION
        </span>
        <img
          className="hidden md:block w-[30%]"
          src="https://ezek.io/static/headerPicture-0a8747b91a51ad35b937d41b5fc4ab64.png"
          alt="Header"
        />
      </div>
      <div className=" md:border-solid md:border-[1px] md:border-btnbg mt-10 md:mt-0 md:p-[10px]">
        <div className="grid grid-cols-1  lg:grid-cols-2  gap-[5%]  lg:gap-[25%]   border-[1px] border-solid border-btnbg md:pl-[15%] pl-[10%] md:pr-[15%] pr-[5%] md:pb-[10%] pb-[20%] pt-[8%]">
          {personList.map((item) => (
            <div className="bg-btnbg p-5 relative">
              <img
                src={item.image}
                className="aspect-square border-[1px] border-solid border-white"
              />
              <div className="h-1 mt-2 w-full bg-white"></div>
              <div className="mt-2 text-1xl md:text-3xl text-white text-center">
                {item.role}
              </div>
              <div className="text-2xl md:text-5xl font-bold mt-2 text-white text-center">
                {item.name}
              </div>

              <div
                style={{ background: 'rgba(36, 39, 67, .8)' }}
                className=" absolute left-0 top-0 w-full h-full z-10 text-white p-5 md:p-10 opacity-0 hover:opacity-100 text-sm md:text-xl"
              >
                <p> {item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 bg-btnbg pt-10">
        <div className="flex justify-center mx-5 md:mx-20 ">
          <img src={icon1} className="w-full object-fill" />
        </div>
        <div className="flex px-5 mt-10 md:mt-0 pb-10 md:p-20 w-full flex-col md:flex-row">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <img
              className="w-[232px] h-[250px] object-cover border-[1px] border-solid border-white p-5"
              src="https://ezek.io/static/matrixLogo-35838b2ab2f4dae4d24ce604a4c3b019.svg"
            />
            <div className="hidden md:block ml-10 h-[250px] w-[1px] border-r-2 border-dashed border-white "></div>
            <div className=" md:hidden mt-10 w-full h-[1px] border-b-2 border-dashed border-white "></div>
          </div>

          <div className="flex-1 text-white pt-10 md:pl-20 text-xl leading-8 space-y-5">
            <p className="text-3xl">Matrix Labs 是 Ezek 的技术合作伙伴</p>
            <p>
              Matrix Labs 由一群经验丰富的区块链开发人员组成。他们与 Ezek
              合作，将 Phanta Bear NFT Collection 带到区块链的世界中。
            </p>
            <p>
              Matrix Labs 同时也是 Matrix World
              背后的创造者，这是一个振奋人心的新时代元宇宙项目。在 Matrix World
              中，用户可以用一个全新的方式创建、连接、探索和游戏。他们甚至可以通过出售他们的作品来收益！
            </p>
            <p>
              点击
              <span className="text-redbg">这里</span>
              查看更多。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
