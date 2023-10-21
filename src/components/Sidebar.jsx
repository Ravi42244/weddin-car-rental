'use client';

import { BookIcon, DollarSignIcon, HomeIcon, LayoutDashboard, ListOrderedIcon, LogOutIcon, LucideListOrdered, SettingsIcon, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'



const routes = [
  {
    label: "Home",
    icon: HomeIcon,
    href: "/dashboard",
    color: "text-sky-500"
  },
  {
    label: "Revenue",
    icon: DollarSignIcon,
    href: "/revenue",
    color: "text-green-700"
  },
  {
    label: "Order History",
    icon: ShoppingBag,
    href: "/order-history",
    color: "text-pink-700"
  }
]

const accountRoutes = [
  {
    label: "Account Setting",
    icon: SettingsIcon,
    href: "/account-setting",
    color: "text-grey-500"
  }


]

const display= ()=>{
  console.log("tets function")
}

function Sidebar() {
  const pathName = usePathname()


  return (
    <div className='space-y-4 py-4 flex flex-col h-screen bg-[#111827] text-white'>

      <div className='px-3 py-2 flex-1'>
        <Link href='/dashboard' className='flex items-center pl-3 mb-14 '>
          <div className='relative w-8 h-8 mr-4'>
            <Image sizes='fill' fill alt="logo" src="/logo.png" />
          </div>
          <h1 className='text-xl font-'>Wedding rental cars</h1>
        </Link>
        <div className='space-y-1'>
          {routes.map((route) => (
            <Link
              href={route.href} key={route.href}
              className={cn('text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition', pathName === route.href ? 'bg-white/10 text-white' : 'text-zinc-400')}>
              <div className='flex items-center flex-1'>
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>

          ))}
        </div>

      </div>


      {/* Logout and Account Setting */}
      <div className='px-3 py-2 items-end'>
        <div className='space-y-1'>
          {accountRoutes.map((accountRoute) => (
            <Link
              href={accountRoute.href} key={accountRoute.href}
              className={cn('text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition', pathName === accountRoute.href ? "text-white bg-white/10" : "text-zinc-400")}>
              <div className='flex items-center flex-1'>
                <accountRoute.icon className={cn("h-5 w-5 mr-3", accountRoute.color)} />
                {accountRoute.label}
              </div>
            </Link>

          ))}
        </div>
        <div className='space-y-1' >
     

          <div
            className='text-sm group flex p-3 w-full justify-start font-medium cursor-pointer text-zinc-400 hover:text-white hover:bg-red-900 rounded-lg transition'

          >
            <div className='flex items-center flex-1' onClick={()=>{
             
            }}>
              <LogOutIcon className={cn("h-5 w-5 mr-3", "text-red-700 group-hover:text-white")} />
              Logout
            </div>
          </div>


        </div>

      </div>






    </div>
  )
}

export default Sidebar
