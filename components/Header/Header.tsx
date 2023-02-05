import React, { useState } from "react"
import HamburgerButton from "./HamburgerButton"
import Navbar from "./Navbar"
import NavLogo from "./NavLogo"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="absolute top-9 w-full flex justify-between px-8 lg:px-16 xl:px-32 font-andale">
      {/* Logo */}
      <NavLogo />
      {/* Navbar */}
      {/* Large screen */}
      <div className="hidden lg:inline-block">
        <Navbar />
      </div>
      {/* Small Screen with Hamburger */}

      <nav className="lg:hidden relative">
        <aside
          className={`absolute w-96 min-h-[calc(100vh-86px)] top-16 bg-tw-navy-blue -right-8 z-40 transition flex justify-center  ${
            isOpen ? "" : "opacity-0 pointer-events-none"
          }`}
        >
          <Navbar />
        </aside>
        <div className="relative">
          <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
          <div
            className={`absolute h-20 w-28 rounded-tl-3xl bg-tw-navy-blue z-40 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition ${
              isOpen ? "" : "opacity-0 pointer-events-none"
            }`}
          ></div>
        </div>
      </nav>
    </header>
  )
}
