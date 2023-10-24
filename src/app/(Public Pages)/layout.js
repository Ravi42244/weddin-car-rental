'use client';

import '@/app/(Landing Page)/globals.css'
import { SessionProvider } from 'next-auth/react'
import CarsPageNavBar from '@/components/CarsPageNavBar';

export const metadata = {
  title: 'Cars Page',
  description: 'Cars for wedding',
}

export default function RootLayout({
  children
}) {
  return (

    
    <html lang="en" className='no-scrollbar !scroll-smooth focus:scroll-auto' >
       
      <body suppressHydrationWarning={true} >
        <SessionProvider>

          <div className=' sticky top-0 z-50'>
        <CarsPageNavBar className=""/>
        
          </div>
<div className="w-full h-screen flex -mt-[59px] pt-[59px] z-0 ">

          {children}
</div>

     
        </SessionProvider>
          </body>
    
   
    </html>

   
  )
}
