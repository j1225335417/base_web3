import { useEffect, useRef } from 'react';
import { setShowVideo } from '@/redux/modules/common';
import { useDispatch } from 'react-redux';
import { showNotification } from '@/redux/modules/notificationSlice';
const Index = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const dispatch = useDispatch();
  // 监听视频是否进入视口
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // 对每个观察到的条目进行处理
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 视频进入视口，开始播放
            videoRef.current?.play();
            console.log('play');
            dispatch(setShowVideo(true));
          } else {
            // 视频离开视口，暂停播放
            videoRef.current?.pause();
            console.log('pause');
          }
          dispatch(setShowVideo(entry.isIntersecting));
        });
      },
      {
        threshold: 0.1, // 当视频有50%进入视口时触发
      }
    );

    // 观察视频元素
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    // 清理 observer
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

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
        {/* <Button type="primary" onClick={clickOpensea}>
          显示通知
        </Button> */}
        <video
          ref={videoRef}
          loop
          autoPlay
          muted
          src="https://phanta-bear-nft.matrixlabs.org/website/videos/homepage_video.mp4"
        ></video>
        <div
          onClick={clickOpensea}
          className=" font-bold bottom-[20%] absolute left-1/2 -translate-x-[calc(50%-10px)]  bg-btnbg px-16 py-4 box-border cursor-pointer"
        >
          <span className="text-3xl">去OPENSEA查看</span>
        </div>
        <div
          onClick={clickOpensea}
          className="font-bold bottom-[calc(20%+10px)] absolute left-1/2 transform  -translate-x-1/2 bg-[#ffffff]  px-16 py-4 border-[1px] border-solid border-btnbg cursor-pointer"
        >
          <span className="text-3xl">去OPENSEA查看</span>
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
      </div>
    </div>
  );
};

export default Index;
