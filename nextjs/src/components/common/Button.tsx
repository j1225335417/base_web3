import React from 'react';

const OpenseaButton = ({
  onClick = () => {}, // 默认点击事件为空函数
  buttonText = '去OPENSEA查看', // 默认按钮文本
  innerBgColor = 'bg-white', // 内层按钮背景颜色
  outerTextColor = 'text-white', // 外层按钮文字颜色
  innerTextColor = 'text-black', // 内层按钮文字颜色
  customerClassName = '',
  border = false,
}) => {
  return (
    <div
      className={`transition-all  transform active:scale-95 relative  ${
        customerClassName ? customerClassName : 'opacity-100'
      }`}
    >
      {/* 第一层按钮（外层按钮，背景色和文字颜色） */}
      <div
        onClick={onClick}
        className={`font-bold bottom-[0%] absolute left-1/2 -translate-x-[calc(50%-4px)] md:-translate-x-[calc(50%-10px)]  px-7 md:px-16 py-4  cursor-pointer    ${
          border
            ? 'border-solid border-[1px] border-btnbg bg-white'
            : 'bg-btnbg'
        }`}
      >
        <span className={`text-1xl md:text-3xl ${outerTextColor}`}>
          {buttonText}
        </span>
      </div>

      {/* 第二层按钮（内层按钮，背景色和文字颜色） */}
      <div
        onClick={onClick}
        className={`focus:outline-none font-bold  bottom-[calc(0%+4px)] md:bottom-[calc(0%+10px)] absolute left-1/2 transform -translate-x-1/2 ${innerBgColor} px-7 md:px-16 py-4 border-[1px] border-solid border-btnbg cursor-pointer`}
      >
        <span className={`text-1xl md:text-3xl ${innerTextColor}`}>
          {buttonText}
        </span>
      </div>
    </div>
  );
};

export default OpenseaButton;
