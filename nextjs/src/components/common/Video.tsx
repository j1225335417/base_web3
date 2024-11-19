import { useRef, useEffect, useState } from 'react';

interface VideoComponentProps {
  threshold?: number;
  url: string;
  size?: { width: number; height: number };
  intersectingCallBack?: (isIntersecting: boolean) => void;
  loadedCallBack?: Function;
}

const Video: React.FC<VideoComponentProps> = ({
  threshold = 0.5,
  url,
  size,
  intersectingCallBack,
  loadedCallBack,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [videoHeight, setVideoHeight] = useState<number>();
  // 动态更新高度
  useEffect(() => {
    setVideoHeight(window.innerHeight);
    const handleResize = () => {
      setVideoHeight(window.innerHeight); // 更新高度为当前视口高度
    };

    // 监听窗口大小变化
    window.addEventListener('resize', handleResize);

    // 清理事件监听器
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 监听视频是否进入视口
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // 对每个观察到的条目进行处理
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 视频进入视口，开始播放
            videoRef.current?.play();
          } else {
            // 视频离开视口，暂停播放
            videoRef.current?.pause();
          }
          console.log('isIntersecting', entry.isIntersecting);
          intersectingCallBack!(entry.isIntersecting);
        });
      },
      {
        threshold: [0.1, 0.2], // 当视频有50%进入视口时触发
      }
    );

    // 观察视频元素
    if (videoRef.current) {
      if (intersectingCallBack) {
        observer.observe(videoRef.current);
      }
    }

    // 清理 observer
    return () => {
      if (videoRef.current && intersectingCallBack) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (loadedCallBack) {
      loadedCallBack();
    }
  }, [videoRef.current?.videoWidth]);

  return (
    <div className="relative w-full bg-black">
      {/* 占位容器，用于保持宽高比 */}
      <div
        className="relative w-full"
        style={{
          paddingTop: `${size ? (size.height / size.width) * 100 : 0}%`,
          height: size ? 'auto' : videoHeight + 'px',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-2">
          <div className="animate-spin h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
        </div>

        {/* 视频 */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-3"
          autoPlay
          muted
          loop
        >
          <source src={url + '?v=a'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};
export default Video;
