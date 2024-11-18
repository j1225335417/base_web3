import React from 'react';
const About: React.FC = () => {
  return (
    <div>
      {/* <Button type="primary" onClick={useNotification}>
        显示通知1
      </Button> */}
      <div className="px-28 w-full overflow-hidden">
        {/* 以下是你的视频下方内容 */}
        {[...Array(10)].map((_, index) => (
          <div key={index} className="flex">
            <div className="flex-1 text-[144px] font-bold font-[Amatic SC]">
              INTRODUCTION
            </div>
            <img
              src="https://ezek.io/static/headerPicture-0a8747b91a51ad35b937d41b5fc4ab64.png"
              alt="Header"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
