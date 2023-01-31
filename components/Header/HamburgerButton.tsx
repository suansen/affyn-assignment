import React from "react"
type Props = { isOpen: boolean; setIsOpen: any }

export default function HamburgerButton({ isOpen, setIsOpen }: Props) {
  const genericHamburgerLine = `h-[4px] w-8 my-1 bg-tw-light-blue transition ease transform duration-300`

  return (
    <button
      className={`relative flex flex-col h-12 w-12 rounded justify-center items-center group z-50`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "rotate-45 translate-y-2" : " "
        }`}
      />
      <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : ""}`} />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "-rotate-45 -translate-y-4" : " "
        }`}
      />
    </button>
  )
}
