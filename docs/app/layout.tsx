import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import Script from "next/script"
import config from "../configs/site-config.json"
import Provider from "./provider"

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  ...config.seo.openGraph,
  icons: { icon: "/favicon.png" },
  twitter: config.seo.twitter,
}

export const viewport = {
  themeColor: "#319795",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        {process.env.NODE_ENV === "production" && (
          <Script
            async
            defer
            data-domain="chakra-ui.com"
            src="https://plausible.io/js/plausible.js"
          />
        )}
      </head>
      <body className={jakartaSans.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
