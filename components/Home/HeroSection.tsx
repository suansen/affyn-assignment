import ScrollIcon from "@/assets/ScrollIcon"
import React from "react"

export default function HeroSection() {
  return (
    <section
      className="overflow-hidden min-w-screen min-h-screen bg-cover flex justify-center items-center bg-center"
      style={{ backgroundImage: `url("images/Background.png")` }}
    >
      <div className="w-fit mx-8 text-center lg:text-left flex flex-col items-center lg:items-start">
        <h2 className="text-tw-light-blue font-copperplate text-subheader-m lg:text-subheader uppercase min-w-[200px]">
          Nexus Land
        </h2>
        <h3 className="text-white text-header-m lg:text-header max-w-5xl pb-5 drop-shadow-sm font-bold uppercase">
          Your Nexus Land Journey Debut (tbc)
        </h3>
        <p className="text-white text-p-m lg:text-p max-w-sm lg:max-w-5xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus
          magna erat, eget scelerisque enim rutrum aliquet. Mauris lobortis
          malesuada bibendum.
        </p>
        <div className="lg:hidden pt-8 animate-bounce">
          <ScrollIcon />
        </div>
      </div>
    </section>
  )
}
