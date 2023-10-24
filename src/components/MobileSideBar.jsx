'use client'

import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"
import Sidebar from "./Sidebar"
  

const MobileSideBar = ()=> {
    
  
  
    return (
    <>


            
                
    
        <Sheet>
  <SheetTrigger className=' flex justify-center lg:hidden'>
                <Menu/>
               </SheetTrigger>
  <SheetContent side="left">
    <div className="-m-6">

    <Sidebar/>
    </div>
  </SheetContent>
</Sheet>

</>

    
        )
}

export default MobileSideBar