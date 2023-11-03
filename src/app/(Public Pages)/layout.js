'use client';
import { Ubuntu } from 'next/font/google'
import '@/app/(Landing Page)/globals.css'
import { SessionProvider } from 'next-auth/react'
import CarsPageNavBar from '@/components/CarsPageNavBar';

export const metadata = {
  title: 'Cars Page',
  description: 'Cars for wedding',
}
const ubuntu = Ubuntu({
  variable: '--font-ubuntu',
  subsets:['latin'],
  weight:['300','400','500','700']
})

export default function RootLayout({
  children
}) {
  return (

    
    <html lang="en" className={`${ubuntu.variable} no-scrollbar !scroll-smooth focus:scroll-auto font-ubuntu`} >
       
      <body suppressHydrationWarning={true} className='' >
        <SessionProvider>

          <div className=' lg:fixed w-full lg:top-0 lg:left-0 lg:right-0" lg:z-50 lg:bg-white'>
        <CarsPageNavBar className=""/>
        
          </div>
<div className=" flex -mt-[59px] pt-[59px] z-0 ">

          {children}
</div>

     
        </SessionProvider>
          </body>
    
   
    </html>

   
  )
}
