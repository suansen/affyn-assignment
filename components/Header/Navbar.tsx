import LoginIcon from "@/assets/LoginIcon"
import SupportIcon from "@/assets/SupportIcon"
import Link from "next/link"
import React from "react"
import HeaderButton from "./HeaderButton"

const style = {
  link: "group flex gap-x-4 items-center",
  icon: "text-tw-light-blue group-hover:animate-pulse",
  text: "uppercase text-nav-item text-white group-hover:text-tw-light-blue transition"
}

export default function Navbar() {
  return (
    <nav className=" gap-x-12 flex flex-col gap-y-8 pt-16 lg:pt-0 lg:flex-row lg:items-center lg:justify-end">
      {/* Button */}
      <HeaderButton />
      {/* Support */}
      <Link href="/" className={style.link}>
        <div className={style.icon}>
          <SupportIcon width="32" height="32" />
        </div>
        <div className={style.text}>Support</div>
      </Link>
      {/* Border */}
      <div className="border-b-2 border-white/30 h-0 w-full  lg:border-r-2 lg:border-white lg:h-16 lg:w-0" />
      {/* Login */}
      <Link href="/" className={style.link}>
        <div className={style.icon}>
          <LoginIcon width="39.116" height="39.116" />
        </div>
        <div className={style.text}>Login</div>
      </Link>
    </nav>
  )
}
