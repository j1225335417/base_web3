import React, { FC, ReactNode } from 'react';

interface ButtonProps {
  onClick?: () => void; // 点击事件支持泛型参数
  children: ReactNode; // 子节点
  textCustomClassName?: string; // 自定义文字样式
  customClassName?: string; // 自定义按钮样式
  border?: string; // 边框样式
  buttonPadding?: string; // 按钮的内边距样式
}
const Button = ({
  onClick,
  children,
  textCustomClassName,
  customClassName,
  border = 'border-solid border-[1px] border-btnbg',
  buttonPadding = 'px-7 md:px-10 py-4',
}: ButtonProps) => {
  return (
    <div className="transition-all active:scale-95 relative">
      <div
        onClick={() => onClick?.()} // 点击时调用事件
        className={`shadow-[3px_3px_0_0_theme(colors.btnbg)] font-bold bg-white cursor-pointer ${buttonPadding} ${border} ${customClassName}`}
      >
        <div
          className={`select-none text-1xl md:text-3xl color-btnbg ${textCustomClassName}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Button;
