import React from 'react';

const App = () => {
  return (
    <div className="flex flex-wrap border border-red-500 p-5 w-full">
      {/* 从下到上的斜线 */}
      <div className="relative w-[200px] h-[200px] bg-white overflow-hidden  flex-[2]">
        <p className="relative z-10 text-red-500 text-center leading-[200px] text-lg"></p>

        {/* 红线 */}
        <div className="absolute top-0 left-0 h-[1px] w-full bg-red-500 z-5"></div>
        <div className="absolute top-0 left-0 w-[1px] h-full bg-red-500 z-5"></div>
        <div className="absolute bottom-0 left-0 h-[1px] w-[165px] bg-red-500 z-5"></div>
        <div className="absolute top-[-1px] right-[17px] w-[1px] h-full bg-red-500 z-5 transform rotate-[10deg]"></div>
        {/* 斜线背景 */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent to-white z-0"></div>
      </div>

      {/* 从上到下的斜线 */}
      <div className="relative w-[200px] h-[200px] bg-white overflow-hidden flex-[3]">
        <p className="relative z-10 text-red-500 text-center leading-[200px] text-lg">
          从上到下
        </p>
        {/* 红线 */}
        <div className="absolute top-0 right-0 h-[1px] w-[165px] bg-red-500 z-5"></div>
        <div className="absolute top-[-1px] left-[17px] w-[1px] h-full bg-red-500 z-5 transform rotate-[10deg]"></div>
        <div className="absolute bottom-0 left-0 h-[1px] w-full bg-red-500 z-5"></div>
        <div className="absolute top-0 right-0 w-[1px] h-full bg-red-500 z-5"></div>
        {/* 斜线背景 */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tl from-transparent to-white z-0"></div>
      </div>
    </div>
  );
};

export default App;
