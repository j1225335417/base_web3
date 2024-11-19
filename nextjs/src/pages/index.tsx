import { useRef, useState } from 'react';
import { setShowVideo } from '@/redux/modules/common';
import { useDispatch } from 'react-redux';
import { showNotification } from '@/redux/modules/notificationSlice';
import Video from '@/components/common/Video';
import Image from 'next/image';
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
      <div className="relative">
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
          className={`transition-all duration-200 transform active:scale-95 relative ${
            videoLoaded ? 'bottom-20 opacity-100 ' : 'bottom-0 opacity-0 '
          }`}
        >
          <div
            onClick={clickOpensea}
            className=" font-bold bottom-[20%] absolute left-1/2 -translate-x-[calc(50%-10px)]  bg-btnbg px-16 py-4 box-border cursor-pointer"
          >
            <span className="text-3xl">去OPENSEA查看</span>
          </div>
          <div
            onClick={clickOpensea}
            className=" focus:outline-none  font-bold bottom-[calc(20%+10px)] absolute left-1/2 transform  -translate-x-1/2 bg-[#ffffff]  px-16 py-4 border-[1px] border-solid border-btnbg cursor-pointer"
          >
            <span className="text-3xl">去OPENSEA查看</span>
          </div>
        </div>
      </div>
      <div className="px-28 w-full overflow-hidden">
        <div className="flex py-10">
          <div className="flex-1 text-[100px]  xl:text-[144px] font-bold font-[Amatic SC]">
            INTRODUCTION
          </div>
          <img
            className="hidden"
            src="https://ezek.io/static/headerPicture-0a8747b91a51ad35b937d41b5fc4ab64.png"
            alt="Header"
          />
        </div>
        <div className="flex py-10">
          <div className="flex-1 text-[100px]  xl:text-[144px] font-bold font-[Amatic SC]">
            INTRODUCTION
          </div>
          <img
            className="hidden"
            src="https://ezek.io/static/headerPicture-0a8747b91a51ad35b937d41b5fc4ab64.png"
            alt="Header"
          />
        </div>
        <div className="flex py-10">
          <div className="flex-1 text-[100px]  xl:text-[144px] font-bold font-[Amatic SC]">
            INTRODUCTION
          </div>
          <img
            className="hidden"
            src="https://ezek.io/static/headerPicture-0a8747b91a51ad35b937d41b5fc4ab64.png"
            alt="Header"
          />
        </div>
        <div className="flex py-10">
          <div className="flex-1 text-[100px]  xl:text-[144px] font-bold font-[Amatic SC]">
            INTRODUCTION
          </div>
          <img
            className="hidden"
            src="https://ezek.io/static/headerPicture-0a8747b91a51ad35b937d41b5fc4ab64.png"
            alt="Header"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
