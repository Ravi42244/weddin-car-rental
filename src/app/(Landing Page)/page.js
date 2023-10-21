'use client';
import { Button } from "@/components/ui/button";
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";



export default function Home() {
  const { data: session } = useSession()
  return (<>
  {session ? <><div> Signed In {session.user.name} </div>
  <Image  width={100}
        height={100}src={session.user.image} className="rounded-full shadow-xl cursor-pointer" />
        <Button className=" m-5 p-5" onClick={()=>{signOut()
        }}>Sign Out</Button>
        
         </>
        : <>
   Not signed in <br />
   <Button className="m-5 p-5" onClick={()=>{signIn()
        }}>Sign In</Button>
  </>} 
        </> 
)
}