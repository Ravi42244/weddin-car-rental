'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {  Home , LogInIcon,  LogOutIcon,  Menu, Search, TrendingUp , User, User2, UserPlus, Settings } from 'lucide-react'
import { useSession, signOut } from "next-auth/react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Link from "next/link";



import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Input } from "./ui/input"
import MobileNavBarOptions from "./MobileNavBarOptions"
import { FaHeart, FaRegistered } from "react-icons/Fa"
import { Button } from "./ui/button"
import { BsFire } from "react-icons/Bs"

 








function CarsPageNavBar() {
  const {data: session} = useSession()

  const nav_option_list=[
    {label:"Kia",
  href:"/cars-page"},
    {label:"Hyundai",
  href:"/cars-page/top-picks"},
    {label:"Maruti Suzuki",
  href:"/cars-page/favourite-cars"},
  ]


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
     <nav className="px-5 py-1 flex justify-between items-center  text-white sticky ">
     


<div className="flex items-center">
<NavigationMenu className="text-black hidden lg:flex">
      
      <NavigationMenuList>

      <NavigationMenuItem className="hidden lg:flex  rounded-lg ">
          <Link href="/docs" legacyBehavior passHref  >
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(),"hover:bg-yellow-400  focus:bg-yellow-400 hover:text-white") } >
              <div className="flex items-center justify-between ">
<Home className="mr-2 text-yellow-700 "/>
              Home
              </div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="">
          
        
          <NavigationMenuTrigger className="hover:data-[state=open]:text-white hover:data-[state=open]:bg-yellow-400 data-[state=open]:bg-yellow-400 data-[state=open]:text-white  "><div className="flex items-center  justify-between  ">
          <BsFire size={25} className="mr-2 text-red-600  " />
             
              Top Picks
              
            </div>
             </NavigationMenuTrigger >
          <NavigationMenuContent >
            <ul className="mx-20 flex flex-col justify-center items-center w-48 gap-3 p-4 ">
            {nav_option_list.map((option)=>(

  
<li className="px-2 w-72 flex justify-center items-center rounded hover:bg-yellow-400 hover:text-white transition " key={option.href}>
 <Link href={option.href} >
  {option.label}
 </Link>
</li>

))}

            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(),"hover:bg-yellow-400 group focus:bg-yellow-400 hover:text-white")}>
              <FaHeart className="text-red-500 mr-2 text-lg" />
              
                Favourite
                
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>


<MobileNavBarOptions className=" lg:hidden"  />

  







    </div>








      <div className=" lg:-ml-[155px] w-full flex justify-center z-0 relative ">
      

   


      <Search className=" text-black my-2 mr-10 z-10"/>
      
        <Input className= {cn("w-36 lg:-mr-16 px-14 text-lg text-black -ml-20 md:w-1/2 border-none rounded focus-visible:ring-yellow-50 shadow-lg shadow-yellow-400/30", session?.user?.email && `${'lg:mr-40'}`)}/>
        
      </div>


{session?.user?.email ? <div className="pt-1">
      <Popover >
  <PopoverTrigger>    <Avatar>
<AvatarImage src={session?.user?.image}/>
<AvatarFallback>{(session?.user?.name)?.split('')[0]}</AvatarFallback>
</Avatar></PopoverTrigger>
  <PopoverContent className="w-80 flex flex-col items-center space-y-5 mr-5 ">
  <div className="w-full flex justify-center items-center cursor-pointer rounded">
  <div className="flex justify-center items-center">

  <div >

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

<div className='flex items-center flex-1 group w-full  justify-center  cursor-pointer hover:bg-red-700 rounded' onClick={()=>{
             signOut()
            }}>
              <LogOutIcon className={cn("h-5 w-5 mr-3", "text-red-700 group-hover:text-white")} />
            <span className='text-black group-hover:text-white'>
                Logout
              </span>
            </div>

  </PopoverContent>
</Popover>
      </div> : 
      <div className="lg:flex lg:justify-end lg:mr-14">
        <div className="hidden lg:flex items-center justify-center w-1/12 px-5"><Link  href="/sign-up"><Button className="bg-white shadow text-yellow-700 mr-2 hover:bg-yellow-700 hover:text-white transation">Join Us</Button></Link>
         <Link  href="/sign-in"><Button className="bg-yellow-700 shadow text-white mr-2 hover:bg-white hover:text-yellow-700 transation">Sign In</Button></Link></div>
         <div className="lg:hidden">

         <Popover  >
        
  <PopoverTrigger>    <User2/>
</PopoverTrigger>
  <PopoverContent className="w-80 flex flex-col items-center space-y-5 mr-5 ">
  <div className=" w-full flex justify-center items-center cursor-pointer rounded hover:bg-yellow-400 hover:text-white transition  shadow">
  <div className="flex justify-center items-center">
    <UserPlus className="mr-2"/>
Join Us

    </div>

  </div>
  <div className="w-full flex justify-center items-center cursor-pointer rounded hover:bg-yellow-400 hover:text-white transition  shadow">
  <div className="flex justify-center items-center">
    <LogInIcon className="mr-4" />
Sign In

    </div>

  </div>



  </PopoverContent>
</Popover>
</div>
         </div>
         
         
         }

      
     </nav>
     
    </>
  );
}








export default CarsPageNavBar;
