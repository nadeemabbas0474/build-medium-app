import React from "react";
import Image from "next/image";
import Logo from "../../static/banner.png";
const style = {
  content: "max-w-8xl flex-1 flex justify-between",
  accentedButton: "bg-black text-white rounded-full py-2 px-4",
  wrapper: 'h-max-[10rem] bg-[#FCC017] border-y border-black flex items-center justify-center'
};
function Banner() {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className="space-y-5 px-10 flex-[3]">
          <h1 className="max-w-xl text-[6rem] font-mediumSerif">
            Stay Curious.
          </h1>
          <h3 className="text-2xl">
            {" "}
            Discover stories, thinking and expertise from writers on any topic.
          </h3>
          <button className={style.accentedButton}>Start Reading</button>
        </div>
        <div className="hidden h-80 md:inline-flex object-contain p-5">
          <Image src={Logo.src} width={500} height={400} />
        </div>
      </div>
    </div>
  );
}

export default Banner;
