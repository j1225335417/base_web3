// src/pages/nft/index.tsx
import React, { useEffect, useState } from 'react';
import Image from '@/components/common/Image';
// import Pagination from '@/components/common/Pagination';
const defaultImage =
  'https://ezek.io/static/holder-60ea5c8bba0127cf538af73c05b1acf3.png';

import Pagination from '@/components/common/Pagination';
import { useRouter } from 'next/router';
const App = () => {
  const [nfts, setNfts] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const itemsPerPage = 10; // 每页显示的项目数量
  const router = useRouter();
  const fetchNfts = async (page: number) => {
    try {
      const response = await fetch(
        `/api/nftData?page=${page}&pageSize=${itemsPerPage}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setNfts(data.data);
      setTotalPages(data.totalPages); // 假设 API 返回总页数
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNfts(currentPage);
  }, [currentPage]);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const maxButtons = 5; // 显示的最大页数按钮数
    const halfMaxButtons = Math.floor(maxButtons / 2);

    let startPage = Math.max(1, currentPage - halfMaxButtons);
    let endPage = Math.min(totalPages, startPage + maxButtons - 1);

    if (endPage - startPage < maxButtons - 1) {
      startPage = Math.max(1, endPage - maxButtons + 1);
    }

    const pages = [];
    for (let page = startPage; page <= endPage; page++) {
      pages.push(
        <button
          key={page}
          onClick={() => paginate(page)}
          className={`px-4 py-2 ${
            currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200'
          } rounded-md mx-1`}
        >
          {page}
        </button>
      );
    }

    if (startPage > 1) {
      pages.unshift(
        <button
          key="prev-dots"
          onClick={() => paginate(startPage - 1)}
          className="px-4 py-2 bg-gray-200 rounded-md mx-1"
        >
          ...
        </button>
      );
    }

    if (endPage < totalPages) {
      pages.push(
        <button
          key="next-dots"
          onClick={() => paginate(endPage + 1)}
          className="px-4 py-2 bg-gray-200 rounded-md mx-1"
        >
          ...
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="px-6 md:px-28 w-full overflow-hidden">
      <div className="flex pt-10 justify-center items-center">
        <span className="flex-1 text-4xl md:text-6xl font-[Amatic SC] text-center md:text-start">
          Phanta Bear
        </span>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {!loading && !error && (
        <>
          <div className="p-1 md:p-2 border-[1px] border-solid border-btnbg mt-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4   gap-0 sm:gap-1 md:gap-4  border-[1px] border-solid border-btnbg">
              {nfts.map((nft) => (
                <div
                  key={nft.id}
                  className="p-2 md:p-4 aspect-square"
                  onClick={() => {
                    router.push('/nft/' + nft.collectionId + '/' + nft.tokenId);
                  }}
                >
                  <Image
                    src={nft.image}
                    alt={nft.name}
                    placeholderSrc={defaultImage}
                    className="aspect-square"
                    loadingText="加载中，请稍等..."
                    errorText="加载失败，请重试"
                  />

                  <h2 className="text-base md:text-xl mt-2 text-center">
                    {nft.name}
                  </h2>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center md:justify-end mt-8">
            <Pagination
              total={1000}
              onChange={(page: number) => setCurrentPage(page)}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
