import React from "react"
import Header from "../Header/Header"
import Footer from "./Footer"

type Props = { children: React.ReactNode }

export default function Layout({ children }: Props) {
  return (
    <div className="scroll-smooth relative overflow-hidden bg-tw-background ">
      <Header />
      <main className="min-h-screen min-w-screen overflow-hidden">
        {children}
      </main>
      <Footer />
    </div>
  )
}
