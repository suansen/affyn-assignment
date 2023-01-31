import Image from "next/image"
import React from "react"
import NFT from "/assets/NFT.svg"
import NFTControl from "/assets/NFTControl.svg"
import NFTControlMobile from "/assets/NFTControlMobile.svg"

export default function NFTSection() {
  return (
    <section className="min-w-screen pt-32 flex flex-col items-center space-y-4">
      <div className="text-center flex flex-col items-center">
        <h2 className="uppercase text-white text-header-m lg:text-header pb-2 font-bold">
          Dynamic NFT
        </h2>
        <p className="text-white text-p-m lg:text-p lg:max-w-2xl max-w-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus
          magna erat, eget scelerisque enim rutrum aliquet. Mauris lobortis
          malesuada bibendum.
        </p>
      </div>
      <figure className="relative">
        <Image src={NFT} alt="Image of NFT Strategy" width={1316} />
        <Image
          src={NFTControlMobile}
          alt="Image of NFT image controls"
          className="absolute -bottom-6 cursor-pointer lg:hidden right-0 left-0 mx-auto"
        />

        <Image
          src={NFTControl}
          alt="Image of NFT image controls"
          className="absolute right-0 top-2 cursor-pointer hidden lg:block"
        />
      </figure>
    </section>
  )
}
