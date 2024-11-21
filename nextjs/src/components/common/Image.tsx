import React, { useState, useEffect } from 'react';

interface ImageWithPlaceholderProps {
  src: string;
  alt: string;
  className?: string;
  placeholderSrc: string;
  onLoad?: () => void; // 图片加载成功后的回调
  onError?: () => void; // 图片加载失败后的回调
  loadingText?: string; // 加载中的提示文本
  errorText?: string; // 错误时的提示文本
}

const ImageWithPlaceholder: React.FC<ImageWithPlaceholderProps> = ({
  src,
  alt,
  className = '',
  placeholderSrc,
  onLoad,
  onError,
  loadingText = '加载中...',
  errorText = '图片加载失败',
}) => {
  const [isLoading, setIsLoading] = useState(true); // 控制加载状态
  const [hasError, setHasError] = useState(false); // 控制加载失败状态

  const handleLoad = () => {
    setIsLoading(false);
    if (onLoad) onLoad(); // 调用加载成功回调
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    if (onError) onError(); // 调用加载失败回调
  };

  // 组件首次渲染时确保占位图显示
  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  return (
    <div className="relative">
      {/* 占位图显示 */}
      <div
        className={`absolute inset-0 bg-cover bg-center ${
          isLoading ? '' : 'hidden'
        }`}
        style={{ backgroundImage: `url(${placeholderSrc})` }}
      />

      {/* 实际图片 */}
      <img
        src={src}
        alt={alt}
        className={`object-cover w-full h-full ${className} transition-opacity duration-300 z-10 relative`}
        onLoad={handleLoad}
        onError={handleError}
      />

      {/* 加载中的提示 */}
      {/* {isLoading && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500">
          {loadingText}
        </div>
      )} */}

      {/* 错误提示 */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-red-500">
          {errorText}
        </div>
      )}
    </div>
  );
};

export default ImageWithPlaceholder;
