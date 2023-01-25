import Image from "next/image";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdMarkEmailUnread } from "react-icons/md";

import Qazi from "../../static/myImg.jpg";
import JSLogo from "../../static/jsLogo.png";
const style = {
    wrapper: `h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]`,
    accentedButton: `flex items-center justify-center text-sm bg-black text-white my-[2rem] py-[.6rem] rounded-full`,
    searchBar: `flex items-center gap-[.6rem] h-[2.6rem] border px-[1rem] rounded-full`,
    searchInput: `border-none outline-none bg-none w-full`,
    authorContainer: `my-[2rem]`,
    authorProfileImageContainer: `h-[5rem] w-[5rem] rounded-full overflow-hidden`,
    authorName: `font-semibold mb-[.2rem] mt-[1rem]`,
    authorFollowing: `text-[#787878]`,
    authorActions: `flex gap-[.6rem] my-[1rem]`,
    actionButton: `bg-[#1A8917] text-white rounded-full px-[.6rem] py-[.4rem] text-sm`,
    recommendationContainer: ``,
    title: `my-[1rem]`,
    articlesContainer: ``,
    articleContentWrapper: `flex items-center justify-between cursor-pointer my-[1rem]`,
    articleContent: `flex-[4]`,
    recommendationAuthorContainer: `flex items-center gap-[.6rem]`,
    recommendationAuthorProfileImageContainer: `rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
    recommendationAuthorName: `text-sm`,
    recommendationTitle: `font-bold`,
    recommendationThumbnailContainer: `flex flex-1 items-center justify-center h-[4rem] w-[4rem]`,
    recommendationThumbnail: `object-cover`,
  }
export default function Recommendations() {
  return (

<div className={style.wrapper}>
      <>
        <div className={style.accentedButton}>Get unlimited access</div>
        <div className={style.searchBar}>
          <AiOutlineSearch />
          <input
            className={style.searchInput}
            placeholder='Search'
            type='text'
          />
        </div>

          <div className={style.authorContainer}>
            <div className={style.authorProfileImageContainer}>
              <Image
                src={Qazi}
                alt='author'
                width={100}
                height={100}
              />
            </div>
            <div className={style.authorName}>Nadeem Abbas</div>
            <div className={style.authorFollowing}>1M followers </div>
            <div className={style.authorActions}>
              <button className={style.actionButton}>Follow</button>
              <button className={style.actionButton}>
                <MdMarkEmailUnread />
              </button>
            </div>
          </div>
        

        <div className={style.recommendationContainer}>
          <div className={style.title}>More from Medium</div>
          <div className={style.articlesContainer}>
            {/* {recommendedPosts.map(post => ( */}
              <div className={style.articleContentWrapper}>
                <div className={style.articleContent}>
                  <div className={style.recommendationAuthorContainer}>
                    <div
                      className={
                        style.recommendationAuthorProfileImageContainer
                      }
                    >
                      <Image
                        src={Qazi}
                        alt='author'
                        height={100}
                        width={100}
                      />
                    </div>
                    <div className={style.recommendationAuthorName}>
                      Nadeem Abbas
                    </div>
                  </div>
                  <div className={style.recommendationTitle}>
                  The Ultimate javascript Course for Beginners by Clever Programmer
                  </div>
                </div>
                <div className={style.recommendationThumbnailContainer}>
                  <Image
                    className={style.recommendationThumbnail}
                    src={JSLogo}
                    alt='thumbnail'
                    height={100}
                    width={100}
                  />
                </div>
              </div>
          </div>
        </div>
      </>
    </div>
  );
}
