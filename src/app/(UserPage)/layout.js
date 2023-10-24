'use client'
import Navbar from '@/components/Navbar'
import '@/app/(Landing Page)/globals.css'
import Sidebar from '@/components/Sidebar'

import { SessionProvider } from 'next-auth/react'


export default function RootLayout({ children }) {
    return (

      <html lang="en" suppressHydrationWarning={true} >
       
      <body >
        <div className="h-full relative font-ubuntu">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <div className='text-white '>
          <Sidebar/>
        </div>
       
      </div>
      <main className='md:pl-72'>
          <Navbar/>
          <SessionProvider>

          {children}
          </SessionProvider>
          </main>
    </div></body>
    
   
    </html>

    
    )
  }
  