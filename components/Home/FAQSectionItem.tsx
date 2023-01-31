import React, { useState } from "react"

type Props = {
  num: string
  text: string
  subText: string
  textMobile: string
  subTextMobile: string
}

export default function FAQSectionItem({
  num,
  text,
  subText,
  textMobile,
  subTextMobile
}: Props) {
  const [isOpen, setIsOpen] = useState(false)

  function handleClick() {
    setIsOpen(!isOpen)
  }

  return (
    <div className=" first:border-t-2 border-b-2 border-tw-gray transition py-4 ">
      <div className="flex justify-between items-center px-4 gap-x-8">
        <div className="font-poppins font-bold text-faq-item-m lg:text-faq-item min-w-[30px] lg:min-w-[48px]">
          {num}
        </div>
        <p className="text-p font-bold space-y-8 hidden lg:block">{text}</p>
        <p className="text-p-m font-bold space-y-8 lg:hidden">{textMobile}</p>
        <div
          onClick={handleClick}
          className="font-poppins font-bold text-faq-item cursor-pointer w-12 hover:text-tw-light-blue/70"
        >
          {isOpen ? "-" : "+"}
        </div>
      </div>
      {isOpen && (
        <div className="flex justify-between px-4 gap-x-8 pb-4 lg:pb-8">
          <div className="font-poppins font-bold text-[1.5rem] lg:text-[2.375rem] min-w-[30px] lg:min-w-[48px] invisible">
            {num}
          </div>
          <p className="text-p-sub space-y-8 hidden lg:block ">{subText}</p>
          <p className="text-p-sub-m space-y-8 lg:hidden grow w-full">
            {subTextMobile}
          </p>
          <div className="font-poppins font-bold text-[2.375rem] cursor-pointer w-12 invisible item">
            -
          </div>
        </div>
      )}
    </div>
  )
}
