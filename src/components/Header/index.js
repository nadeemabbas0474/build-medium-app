import React, { useContext, useState } from "react";
import { MediumContext } from "@/context/MediumContexxt";
import Image from "next/image";
import Logo from "../../static/logo1.png";
import Modal from "react-modal";
import { useRouter } from "next/router";
import PostModal from "../PostModal";

Modal.setAppElement("#__next");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: 0,
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(10, 11, 13, 0.75)",
  },
};

const style = {
  wrapper: "flex justify-center gap-10 p-5 bg-[#FCC017]",
  content: "max-w-7xl flex-1 flex justify-between",
  logoContainer: "flext items-center flex-start",
  bannerNav: "flex space-x-5 items-center cursor-pointer",
  logo: "cursor-pointer object-contain",
  accentedButton: "bg-black text-white rounded-full py-2 px-4",
};
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, handleUserAuth } = useContext(MediumContext);
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.logoContainer}>
          <Image
            className={style.logo}
            src={Logo}
            width={200}
            height={20}
            alt="logo"
          />
        </div>
        <div className={style.bannerNav}>
          <div>Our Story</div>
          <div>MemberShip</div>
          {user ? (
            <>
              <div
                className={style.accentedButton}
                onClick={() => setIsOpen(true)}
              >
                Write
              </div>
              <div className={style.accentedButton}>
                <div>Get unlimited access</div>
              </div>
            </>
          ) : (
            <>
              <div onClick={handleUserAuth}>Sign In</div>
              <div onClick={handleUserAuth} className={style.accentedButton}>
                <div>Get Started</div>
              </div>
            </>
          )}
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <div>
          <PostModal onRequestClose={() => setIsOpen(false)} />
        </div>
      </Modal>
    </div>
  );
};
