import './globals.css'

import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'

const sans = Noto_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'PS5 Inspired Landing Page with Next.js and React Three Fiber',
  description:
    'Mini project inspired by the PS5 loading screen. Built with Next.js, Three.js (R3F), GSAP, React Transition Group, Floating UI, Zustand and TailwindCSS. The shader/GPU logic for the particles is written entirely in Typescript using Three.js Shading Language. It makes use of the WebGPU API for GPU compute shaders.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} antialiased`}>{children}</body>
    </html>
  )
}
