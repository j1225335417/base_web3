import React from 'react';

const Button = ({
  onClick = () => {}, // 默认点击事件为空函数
  buttonText = '去OPENSEA查看', // 默认按钮文本
  innerBgColor = 'bg-btnbg', // 内层按钮背景颜色
  outerBgColor = 'bg-white', // 内层按钮背景颜色
  textColor = 'text-btnbg', // 外层按钮文字颜色
  customerClassName = '',
  border = false,
  buttonPadding = 'px-7 md:px-10 py-4',
  offset = '10px',
}) => {
  return (
    <div className={`${customerClassName}`}>
      <div className="transition-all  active:scale-95 relative -translate-x-[5px] z-10">
        <div
          onClick={onClick}
          style={{
            width: 'fit-content',
            whiteSpace: 'nowrap', // 强制不换行
            overflow: 'hidden', // 溢出隐藏
            textOverflow: 'ellipsis', // 文字溢出省略
          }}
          className={`z-10 absolute font-bold left-0 right-0   cursor-pointer ${buttonPadding} ${
            border
              ? 'border-solid border-[1px] border-btnbg bg-white'
              : outerBgColor
          }`}
        >
          <span className={`select-none text-1xl md:text-3xl ${textColor}`}>
            {buttonText}
          </span>
        </div>

        <div
          onClick={onClick}
          style={{
            width: 'fit-content',
            whiteSpace: 'nowrap', // 强制不换行
            overflow: 'hidden', // 溢出隐藏
            textOverflow: 'ellipsis', // 文字溢出省略
          }}
          className={`z-1 absolute font-bold left-[10px] right-0 top-[10px]   cursor-pointer ${buttonPadding} ${
            border
              ? 'border-solid border-[1px] border-btnbg bg-white'
              : innerBgColor
          }`}
        >
          <span className={`select-none opacity-0 text-1xl md:text-3xl`}>
            {buttonText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Button;
