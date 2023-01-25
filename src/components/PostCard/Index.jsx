import React from "react";
import Image from "next/image";
import Author from "../../static/nad.jpg";
import {FiBookmark} from "react-icons/fi"
const style = {
  authorContainer: "flex gap-[.4rem]",
  authorImageContainer:
    "grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]",
  authorImage: "object-cover",
  title: "font-bold text-2xl",
  briefing: "text-[#787878]",
  authorName: "font-semibold",
  detailsContainer: "flex items-center justiy-between text-[#787878]",
  articleDetails: "my-2 text-[.8rem]",
  category: "bg-[#F2F3F2] p-1 rounded-full",
  postDetails: "",
  bookmarkContainer: 'cursor-pointer'
};
export default function PostCard() {
  return (
    <div className={style.postDetails}>
      <div className={style.authorContainer}>
        <div className={style.authorImageContainer}>
          <Image
            src={Author}
            width={40}
            height={40}
            className={style.authorImage}
          />
        </div>
        <div className={style.authorName}>Nadeem Abbas</div>
      </div>
      <h1 className={style.title}>
        {" "}
        7 Free Tools That Will Make You More Productive In 2022
      </h1>
      <div className={style.briefing}>
        Productivity is a skill that can be learned.
      </div>
      <div className={style.detailsContainer}>
        <span className={style.articleDetails}>
          Jun 15 . 5 min read .{" "}
          <span className={style.category}>productivity</span>
        </span>
        <span className={style.bookmarkContainer}>
            <FiBookmark className="h-5 w-5" />
        </span>
      </div>
    </div>
  );
}
