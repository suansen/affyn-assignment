import Layout from "@/components/Layout/Layout"
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Poppins } from "@next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"]
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --poppins-font: ${poppins.style.fontFamily};
          }
        `}
      </style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
