import React from 'react';

interface ButtonProps {
  onClick?: () => void; // 默认点击事件为空函数
  buttonText?: string; // 默认按钮文本
  innerBgColor?: string; // 内层按钮背景颜色
  outerBgColor?: string; // 外层按钮背景颜色
  textColor?: string; // 外层按钮文字颜色
  customerClassName?: string;
  buttonPadding?: string;
  offset?: number;
  children?: React.ReactNode; // 明确 children 类型
  outerClassName?: string;
  innerClassName?: string;
}
const Button: React.FC<ButtonProps> = ({
  onClick = () => {}, // 默认点击事件为空函数
  buttonText = '去OPENSEA查看', // 默认按钮文本
  innerBgColor = 'bg-btnbg', // 内层按钮背景颜色
  outerBgColor = 'bg-white', // 内层按钮背景颜色
  textColor = 'color-btnbg', // 外层按钮文字颜色
  customerClassName = '',
  buttonPadding,
  offset = 10,
  children,
  outerClassName = '',
  innerClassName = 'bg-btnbg',
}) => {
  return (
    <div className={`relative ${customerClassName}`}>
      {/* <div className="transition-all  active:scale-95 relative w-full h-full"> */}
      <div
        onClick={onClick}
        className={`${outerClassName} overflow-hidden z-10 absolute font-bold left-0  top-0 w-[calc(100%-10px)] h-[calc(100%-10px)]   cursor-pointer ${buttonPadding} ${outerBgColor} `}
      >
        {children}
      </div>

      <div
        onClick={onClick}
        // left-[10px]  top-[10px]
        // style={{ left: `${offset}px`, top: `${offset}px` }}
        style={{ left: `2%`, top: `2%` }}
        className={`absolute font-bold   w-[calc(100%-10px)] h-[calc(100%-10px)]   cursor-pointer ${buttonPadding} ${innerClassName}`}
      >
        <div className="opacity-0">{children}</div>
      </div>
    </div>
    // </div>
  );
};

export default Button;
