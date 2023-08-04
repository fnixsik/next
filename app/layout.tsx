import './globals.css'
import type { Metadata } from 'next'
import TheHeader  from "@/components/theHeader";
import TheFooter from '@/components/theFooter';

export const metadata: Metadata = {
  title: 'Main Next App',
  description: 'Generated main next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='mainContainer'>
        <TheHeader />
          <main className='body'>{children}</main>
        <TheFooter />
      </body>
    </html>
  )
}
