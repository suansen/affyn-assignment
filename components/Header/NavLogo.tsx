import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function NavLogo() {
  return (
    <Link href="/" className="flex items-center min-w-[143px]">
      <Image
        className="hidden lg:block"
        src="/images/Affyn-logo-2x.png"
        alt=""
        width={143}
        height={46}
      />
      <Image
        className="lg:hidden"
        src="/images/Affyn-logo-2x.png"
        alt=""
        width={110}
        height={35}
      />
    </Link>
  )
}
