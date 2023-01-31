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
    <nav className="items-center justify-end gap-x-12 hidden lg:flex">
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
      <div className="border-r-2 h-full" />
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
