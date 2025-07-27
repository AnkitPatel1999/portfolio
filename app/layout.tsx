import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'
import { Toaster } from "@/components/ui/sonner"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ankit Patel | Software Engineer',
  description: 'I am a Full-stack web developer with over 2.5 years of experience building fast, reliable, and user-friendly web applications. Proven expertise in full project cycles—from backend logic and APIs to frontend interfaces and SEO. Passionate about clean code, scalable systems, and continual learning through real-world implementation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
        <Toaster />
      </body>
    </html>
  )
}