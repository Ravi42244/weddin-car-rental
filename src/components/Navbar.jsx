'use client';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Menu, Settings, User } from 'lucide-react'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import Link from "next/link";
import MobileSideBar from "./MobileSideBar";
  



function Navbar() {
    const {data: session} = useSession()



const avatar_dropdown_option=[
{
    label:"Profile",
    href:"/user-profile",
    icon:User
},
{
    label:"Account Setting",
    href:"/account-setting",
    icon:Settings
}

]





    return (
        <>
        <div className='flex items-center w-full p-4 '>
        <MobileSideBar/>
                <div className='flex w-full  justify-end'>

                <Popover >
  <PopoverTrigger>    <Avatar>
<AvatarImage src={session?.user?.image}/>
<AvatarFallback>{(session?.user?.name)?.split('')[0]}</AvatarFallback>
</Avatar></PopoverTrigger>
  <PopoverContent className="w-80 flex flex-col items-center space-y-5 mr-5">
  <div className="w-full flex justify-center items-center cursor-pointer rounded">
  <div className="flex justify-center items-center">

  <div>

  <Avatar>
<AvatarImage src={session?.user?.image}/>
<AvatarFallback>{(session?.user?.name)?.split('')[0]}</AvatarFallback>
</Avatar>

  </div>
<div className="px-5 text-zinc-500 text-[12px]">{session?.user?.name}</div>
    </div>
  </div>


{

 avatar_dropdown_option.map((option)=>(

 <div className="w-full flex justify-center items-center cursor-pointer hover:bg-yellow-400 hover:text-white  rounded" key={option.href}>
<option.icon className="pr-2"/>
 <Link href={option.href} >{option.label}</Link>
    </div>


 ))

}



  </PopoverContent>
</Popover>

     


         </div>
           
        </div>
       
         </>
    )
}

export default Navbar
