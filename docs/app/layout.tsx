import { Plus_Jakarta_Sans } from "next/font/google"
import Provider from "./provider"

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <head />
      <body className={jakartaSans.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
