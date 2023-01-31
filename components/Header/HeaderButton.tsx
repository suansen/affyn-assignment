import PlayIcon from "@/assets/PlayIcon"
import React from "react"

export default function HeaderButton() {
  return (
    <button
      type="button"
      className="group w-60 h-16 border-2 border-tw-light-blue text-white flex items-center justify-between overflow-hidden hover:bg-tw-dark-blue/50 "
    >
      <div className=" font-andale uppercase grow text-nav-button group-hover:translate-x-8 transition">
        Get Started
      </div>
      <div
        className=" bg-tw-dark-blue/50 flex justify-center items-center h-full w-16 group-hover:translate-x-16
       transition"
      >
        <div className="w-4 ">
          <PlayIcon />
        </div>
      </div>
    </button>
  )
}
