import Image from 'next/image'
import React from 'react'
import Logo from "../../static/logo1.png"

const style = {
  wrapper: 'flex justify-center gap-10 p-5 bg-[#FCC017]',
  content: 'max-w-7xl flex-1 flex justify-between',
  logoContainer: 'flext items-center flex-start',
  bannerNav: 'flex space-x-5 items-center cursor-pointer',
  logo: 'cursor-pointer object-contain',
  accentedButton: 'bg-black text-white rounded-full py-2 px-4'
}
export const Header = () =>  {
  return (
    <div className={style.wrapper}>
        <div className={style.content}>
            <div className={style.logoContainer}>
                <Image className={style.logo} src={Logo} width={200} height={20}/>
            </div>
            <div className={style.bannerNav}>
              <div>Our Story</div>
              <div>MemberShip</div>
              <div>Sign in</div>
              <button className={style.accentedButton}>Get Started</button>
            </div>
        </div>
    </div>
  )
}
