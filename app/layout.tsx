import type React from "react"
import type { Metadata } from "next"
import "./globals.css"


export const metadata: Metadata = {
  title: "Booki",
  description: "Landing Booki"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Logo.ico" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}

      </body>
    </html>
  )
}
