import React from "react"
import FAQSectionItem from "./FAQSectionItem"

const DATA = {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus magna erat, eget scelerisque enim rutrum aliquet. Mauris lobortis malesuada bibendum.",
  subtext:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus magna erat, eget scelerisque enim rutrum aliquet. Mauris lobortis malesuada bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus magna erat, eget scelerisque enim rutrum aliquet. Mauris lobortis malesuada bibendum.",
  textMobile:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus magna erat?",
  subtextMobile:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus magna erat?"
}

export default function FAQSection() {
  return (
    <section className="text-white flex flex-col items-center min-h-screen ">
      {/* Header */}
      <div className="py-16 text-center">
        <h2 className="text-header-m lg:text-header font-bold pb-4">FAQ</h2>
        <p className="text-white text-p-m lg:text-p max-w-sm lg:max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus
          magna erat, eget scelerisque enim rutrum aliquet. Mauris lobortis
          malesuada bibendum.
        </p>
      </div>
      {/* Details */}
      <div className=" max-w-5xl px-4 lg:px-8">
        <FAQSectionItem
          num="01"
          text={DATA.text}
          textMobile={DATA.textMobile}
          subText={DATA.subtext}
          subTextMobile={DATA.subtextMobile}
        />
        <FAQSectionItem
          num="02"
          text={DATA.text}
          textMobile={DATA.textMobile}
          subText={DATA.subtext}
          subTextMobile={DATA.subtextMobile}
        />
        <FAQSectionItem
          num="03"
          text={DATA.text}
          textMobile={DATA.textMobile}
          subText={DATA.subtext}
          subTextMobile={DATA.subtextMobile}
        />
      </div>
    </section>
  )
}
