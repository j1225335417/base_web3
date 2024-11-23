import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { Nft } from '@/pages/api/nftData';
import Button from '@/components/common/Button';
const NFTDetails = () => {
  const router = useRouter();
  const { collectionId, tokenId } = router.query;

  const [nft, setNft] = useState<Nft | null>(null); // NFT 数据
  const [loading, setLoading] = useState<boolean>(true); // 加载状态
  const [error, setError] = useState<string | null>(null); // 错误状态

  const fetchNft = async () => {
    setLoading(true);
    setError(null); // 重置错误状态
    try {
      const response = await fetch(
        `/api/nftDetail?tokenId=${tokenId}&collectionId=${collectionId}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch NFT details. Please try again later.');
      }
      const data = await response.json();
      setNft(data);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!collectionId || !tokenId) {
      return;
    }
    fetchNft();
  }, [collectionId, tokenId]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-xl text-blue-600">正在加载 NFT 数据...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen px-4 text-center">
        <p className="text-xl text-red-600">加载失败: {error}</p>
        <button
          className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg"
          onClick={fetchNft}
        >
          重试
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#f5f7ff] flex flex-col items-center p-4 sm:px-6 lg:px-28">
      {/* 返回按钮 */}
      <div
        className="self-start mb-4 flex items-center cursor-pointer text-2xl sm:text-3xl font-bold"
        onClick={() => router.back()}
      >
        <img
          src="https://ezek.io/static/left-a3373f6f07397f7db8e3732d1a5dc3ab.svg"
          alt="返回"
          className="h-6 w-6 sm:h-8 sm:w-8 mr-2"
        />
        返回
      </div>

      {/* 主内容 */}
      <div className="rounded-lg md:p-6 flex flex-col lg:flex-row w-full">
        {/* 左侧图片 */}
        <div className=" flex justify-center items-center mb-4 lg:mb-0 flex-col  self-start w-full md:w-[350px]">
          <div className="w-[260px] h-[260px] md:w-[330px] sm:h-[330px] border-[1px] border-solid border-btnbg shadow-[7px_7px_0_0_theme(colors.btnbg)] p-2">
            <img
              src={nft?.image || 'https://via.placeholder.com/330'}
              alt={nft?.name || 'NFT'}
              className=" w-full "
            />
          </div>

          <Button customClassName="mt-10 bg-[#edefff]" onClick={() => {}}>
            去OPENSEA查看
          </Button>
        </div>

        {/* 右侧信息 */}
        <div className="w-full lg:pl-6 flex-1">
          <p className="text-lg sm:text-2xl mb-4">
            <span className="text-xl sm:text-3xl font-bold">名称:&nbsp;</span>
            {nft?.name}
          </p>

          <p className="text-lg sm:text-2xl mb-4">
            <span className="text-xl sm:text-3xl font-bold">拥有者:</span>
            <p className="wrap-text break-all text-lg md:text-2xl">
              {nft?.owner || '未知'}
            </p>
          </p>
          <p className="text-lg sm:text-2xl mb-4">
            <span className="text-xl sm:text-3xl font-bold">描述:</span>
            <p>{nft?.description || '暂无描述'}</p>
          </p>

          {/* 特性 */}
          <h2 className="text-xl sm:text-3xl font-bold mb-4">特性:</h2>
          <div className="flex flex-col">
            {nft?.attributes ? (
              Object.entries(nft.attributes).map(([key, value]) => (
                <div
                  key={key}
                  className="border-blue-500 rounded-md  flex mb-2"
                >
                  <div className="text-base sm:text-lg font-bold py-1 border-solid border-[1px] border-btnbg w-[120px] sm:w-[150px] flex pl-5 justify-start bg-[#edefff]">
                    {key}
                  </div>
                  <div className="ml-5 text-base sm:text-lg py-1 flex items-center justify-center rounded-sm">
                    {typeof value === 'string' ? value : JSON.stringify(value)}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">暂无特性</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDetails;
