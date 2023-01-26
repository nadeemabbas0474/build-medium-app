import React from "react";
import Image from "next/image";
import Qazi from "../../static/myImg.jpg";
import { AiFillPlayCircle } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { FiFacebook, FiMoreHorizontal } from "react-icons/fi";
import { HiOutlineLink } from "react-icons/hi";
import { BiBookmarks } from "react-icons/bi";
import { GrLinkedin } from "react-icons/gr";
import Banner from "../../static/banner.png";

const style = {
    wrapper: `flex items-center justify-center flex-[3] border-l border-r `,
    content: `h-screen overflow-scroll p-[2rem]`,
    referencesContainer: `flex justify-between items-center mt-[2.2rem] mb-[1.2rem]`,
    authorContainer: `flex gap-[1rem]`,
    authorProfileImageContainer: `h-[3rem] w-[3rem] grid center rounded-full overflow-hidden`,
    image: `object-cover`,
    column: `flex-1 flex flex-col justify-center`,
    postDetails: `flex gap-[.2rem] text-[#787878]`,
    listenButton: `flex items-center gap-[.2rem] text-[#1A8917]`,
    socials: `flex gap-[1rem] text-[#787878] cursor-pointer`,
    space: `w-[.5rem]`,
    articleMainContainer: `flex flex-col gap-[1rem]`,
    bannerContainer: `h-[18rem] w-full grid center overflow-hidden mb-[2rem]`,
    title: `font-bold text-3xl`,
    subtitle: `font-mediumSerifItalic text-[1.4rem] text-[#292929]`,
    articleText: `font-mediumSerif text-[1.4rem] text-[#292929]`,
};
export default function MainArticle() {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.referencesContainer}>
          <div className={style.authorContainer}>
            <div className={style.authorProfileImageContainer}>
              <Image className={style.image} src={Qazi} alt="author" width={100} height={100} />
            </div>
            <div className={style.column}>
              <div>Nadeem Abbas</div>
              <div className={style.postDetails}>
                <span>June 15 • 7 min read •</span>
                <span className={style.listenButton}>
                  <AiFillPlayCircle /> Listen
                </span>
              </div>
            </div>
          </div>
          <div className={style.socials}>
            <IoLogoTwitter />
            <FiFacebook />
            <GrLinkedin />
            <HiOutlineLink />
            <div className={style.space} />
            <BiBookmarks />
            <FiMoreHorizontal />
          </div>
        </div>
        <div className={style.articleMainContainer}>
          <div className={style.bannerContainer}>
            <Image
              className={style.image}
              src={Banner}
              alt="banner"
              height='100%'
              width='100%'
            />
          </div>
          <h1 className={style.title}>
            {" "}
            7 Free Tools That Will Make You More Productive In 2022{" "}
          </h1>
          <h4 className={style.subtitle}>
            <div>Nadeem Abbas,</div>
            <div>Brief: Productivity is a skill that can be learned.</div>
          </h4>
          <div className={style.articleText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            accusamus tenetur hic vero repellendus praesentium corrupti commodi
            expedita deserunt? Similique harum ad numquam ea voluptatum nam
            molestiae et illum. Consequatur rem reprehenderit quibusdam id autem
            commodi doloremque doloribus. Neque nam perspiciatis animi
            reprehenderit ipsa molestiae sunt ab minus consectetur, error
            exercitationem architecto numquam modi facere odio, dolore at cum
            totam.
          </div>
        </div>
      </div>
    </div>
  );
}
