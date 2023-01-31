import DiscordIcon from "@/assets/DiscordIcon"
import DiscordIconMobile from "@/assets/DiscordIconMobile"

import OpenSeaIcon from "@/assets/OpenSeaIcon"
import TelegramIcon from "@/assets/TelegramIcon"
import TelegramIconMobile from "/assets/TelegramIconMobile.svg"
import TwitterIcon from "@/assets/TwitterIcon"
import YouTubeIcon from "@/assets/YouTubeIcon"
import YouTubeIconMobile from "@/assets/YouTubeIconMobile"

import Image from "next/image"
import Link from "next/link"
import React from "react"
import TwitterIconMobile from "@/assets/TwitterIconMobile"
import OpenSeaIconMobile from "@/assets/OpenSeaIconMobile"

const style = {
  footerContainer: "flex gap-x-4 items-center group",
  footerText:
    "uppercase font-bold text-white text-footer font-secondary hidden lg:flex group-hover:text-white/70 transition",
  icon: "hidden lg:block group-hover:animate-bounce",
  iconMobile: "lg:hidden"
}

export default function Footer() {
  return (
    <footer className="mt-8 min-w-screen min-h-[15.125rem] py-12 bg-tw-footer-background flex flex-col justify-center items-center gap-y-6">
      <div>
        <Image src="/images/Affyn-logo-2x.png" alt="" width={143} height={46} />
      </div>
      <div className="flex gap-x-12">
        {/* Discord */}
        <Link
          href="https://discord.com/"
          className={`${style.footerContainer} tracking-normal`}
        >
          <div className={style.icon}>
            <DiscordIcon />
          </div>
          <div className={style.iconMobile}>
            <DiscordIconMobile />
          </div>
          <div className={style.footerText}>Discord</div>
        </Link>

        {/* YouTube */}
        <Link
          href="https://youtube.com/"
          className={`${style.footerContainer} tracking-normal`}
        >
          <div className={style.icon}>
            <YouTubeIcon />
          </div>
          <div className={style.iconMobile}>
            <YouTubeIconMobile />
          </div>
          <div className={style.footerText}>YouTube</div>
        </Link>

        {/* Telegram */}
        <Link
          href="https://telegram.com/"
          className={`${style.footerContainer} tracking-normal`}
        >
          <div className={style.icon}>
            <TelegramIcon />
          </div>
          <div className={style.iconMobile}>
            <Image src={TelegramIconMobile} alt="Telegram Icon" />
          </div>
          <div className={style.footerText}>Telegram</div>
        </Link>

        {/* Twitter */}
        <Link
          href="https://twitter.com/"
          className={`${style.footerContainer} tracking-normal`}
        >
          <div className={style.icon}>
            <TwitterIcon />
          </div>
          <div className={style.iconMobile}>
            <TwitterIconMobile />
          </div>
          <div className={style.footerText}>Twitter</div>
        </Link>

        {/* OpenSea */}
        <Link href="https://opensea.io/" className={style.footerContainer}>
          <div className={style.icon}>
            <OpenSeaIcon />
          </div>
          <div className={style.iconMobile}>
            <OpenSeaIconMobile />
          </div>
          <div className={style.footerText}>OpenSea</div>
        </Link>
      </div>
    </footer>
  )
}
