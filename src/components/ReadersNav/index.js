import React from "react";
import Image from "next/image";
import Link from "next/link";
import SmallLogo from "../../static/smallLogo.png";
import { HiOutlineHome } from "react-icons/hi";
import { FiBell } from "react-icons/fi";
import { BiBookmark } from "react-icons/bi";
import { RiArticleLine } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import Qazi from "../../static/myImg.jpg";

const style = {
  logoCotainer: "cursor-pointer",
  wrapper:
    "w-[5rem] h-screen flex flex-col justify-between items-center p-[1rem]",
  iconsContainer:
    "flex-1 flex flex-col justify-center gap-[1.4rem] text-2xl text-gray-500",
  divider: "border-b",
  profileImage: "object-cover rounded-full",
  profileImageContainer:
    "w-[2.4rem] h-[2.4rem] rounded-full overflow-hidden place-items-center",
};
export default function ReadersNav() {
  return (
    <div className={style.wrapper}>
      <Link href="/">
        <div className={style.logoCotainer}>
          <Image src={SmallLogo} />
        </div>
      </Link>
      <div className={style.iconsContainer}>
        <HiOutlineHome />
        <FiBell />
        <BiBookmark />
        <RiArticleLine />
        <div className={style.divider} />
          <BsPencilSquare />
      </div>
      <div className={style.profileImageContainer}>
        <Image className={style.profileImage} src={Qazi} />
      </div>
    </div>
  );
}
