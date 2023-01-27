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
export default function MainArticle({ post, author }) {
  console.log(author, "author");
  console.log(post, "post here");
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.referencesContainer}>
          <div className={style.authorContainer}>
            <div className={style.authorProfileImageContainer}>
              <Image
                className={style.image}
                src={`https://res.cloudinary.com/demo/image/fetch/${author?.data?.imageUrl}`}
                alt="author"
                width={100}
                height={100}
              />
            </div>
            <div className={style.column}>
              <div>{author?.data?.name}</div>
              <div className={style.postDetails}>
                <span>
                  {new Date(post?.data?.postedOn).toLocaleString("en-US", {
                    day: "numeric",
                    month: "short",
                  })}
                </span>
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
              src={`https://res.cloudinary.com/demo/image/fetch/${post?.data?.bannerImage}`}
              alt="banner"
              height={1000}
              width={1000}
            />
          </div>
          <h1 className={style.title}>{post?.data?.title}</h1>
          <h4 className={style.subtitle}>
            <div>
              {author?.data?.name},{" "}
              {new Date(post?.data?.postedOn).toLocaleString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </div>
            <div>{post?.data?.brief}</div>
          </h4>
          <div className={style.articleText}>{post?.data?.body}</div>
        </div>
      </div>
    </div>
  );
}
