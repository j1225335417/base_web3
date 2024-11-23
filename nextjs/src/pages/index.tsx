import { useRef, useState } from 'react';
import { setShowVideo } from '@/redux/modules/common';
import { useDispatch } from 'react-redux';
import { showNotification } from '@/redux/modules/notificationSlice';
import Video from '@/components/common/Video';
import Image from 'next/image';
import Button from '@/components/common/Button';
const introductions = [
  {
    title: 'Phanta Bear',
    desc: '每只Phanta Bear都是独一无二的，都会解锁不同的访问和特权级别。',
    url: 'https://phanta-bear-nft.matrixlabs.org/website/images/home_introduction/intro1.jpg',
  },
  {
    title: 'Metaverse',
    desc: 'Phanta Bear NFT拥有者将提前体验Ezek Metaverse新娱乐世界。',
    url: 'https://phanta-bear-nft.matrixlabs.org/website/images/home_introduction/intro2.jpg',
  },
  {
    title: 'Jay同款',
    desc: '每只Phanta Bear的服装和配饰都是由周杰伦和Ric的时尚品牌PHANTACi设计。',
    url: 'https://phanta-bear-nft.matrixlabs.org/website/images/home_introduction/intro3.jpg',
  },
  {
    title: '会员权益',
    desc: '您的 Phanta Bear 兼作您的 Ezek 会员卡，并享受会员专享权益。',
    url: 'https://phanta-bear-nft.matrixlabs.org/website/images/home_introduction/intro4.jpg',
  },
];

const Index = () => {
  const dispatch = useDispatch();
  const [videoLoaded, setVideoLoaded] = useState(false);

  const clickOpensea = () => {
    dispatch(
      showNotification({
        type: 'error',
        message: 'Success!',
        description: '功能未开发',
      })
    );
  };

  return (
    <div>
      <div className="relative ">
        <Video
          // size={{ width: 1920, height: 1080 }}
          url={
            'https://phanta-bear-nft.matrixlabs.org/website/videos/homepage_video.mp4'
          }
          intersectingCallBack={(isIntersecting) => {
            dispatch(setShowVideo(isIntersecting));
          }}
          loadedCallBack={() => setVideoLoaded(true)}
        />
        <Image
          alt="xx"
          className="absolute bottom-[calc(50%)] transform translate-y-1/2  left-[calc(5%)] scale-[0.8]"
          height={320}
          width={550}
          src="https://ezek.io/static/phanta-5c2ead1b2f692f62608121e219ccdf95.png"
        ></Image>

        <div
          className={`${
            videoLoaded
              ? 'bottom-36 opacity-100 duration-300'
              : 'bottom-0 opacity-0'
          } absolute left-1/2 -translate-x-1/2  bottom-36 opacity-100 duration-300`}
        >
          <Button
            customClassName="md:shadow-[7px_7px_0_0_theme(colors.btnbg)]"
            onClick={() => clickOpensea()}
          >
            去OPENSEA查看
          </Button>
        </div>

        {/* </div> */}

        {/* <div
          className={`transition-all duration-200 transform active:scale-95 relative ${
            videoLoaded ? 'bottom-20 opacity-100 ' : 'bottom-0 opacity-0 '
          }`}
        >
          <div
            onClick={clickOpensea}
            className=" font-bold bottom-[20%] absolute left-1/2 -translate-x-[calc(50%-4px)]  md:-translate-x-[calc(50%-10px)]  bg-btnbg px-7 md:px-16 py-4 box-border cursor-pointer"
          >
            <span className="text-1xl md:text-3xl">去OPENSEA查看</span>
          </div>
          <div
            onClick={clickOpensea}
            className=" focus:outline-none  font-bold bottom-[calc(20%+4px)] md:bottom-[calc(20%+10px)] absolute left-1/2 transform  -translate-x-1/2 bg-[#ffffff]  px-7 md:px-16 py-4 border-[1px] border-solid border-btnbg cursor-pointer"
          >
            <span className="text-1xl md:text-3xl">去OPENSEA查看</span>
          </div>
        </div> */}
      </div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6  md:border-solid md:border-[1px] md:border-btnbg p-4">
          {introductions.map((item) => (
            <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4">
              <img
                src={item.url}
                alt="PHANTA BEAR"
                className="w-full aspect-square object-cover mb-4"
              />
              <h3 className="text-lg font-bold text-blue-500">{item.title}</h3>
              <p className="text-gray-500 text-center mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
