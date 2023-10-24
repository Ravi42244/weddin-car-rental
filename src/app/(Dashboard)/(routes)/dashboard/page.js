

import { options } from "@/app/api/auth/[...nextauth]/options"
import Image from "next/image"

import { getServerSession } from "next-auth"
export default async function Dashboard() {

  const session = await getServerSession(options)
  return (
    <>
{
session ? <><div className="text-2xl"> Signed In {session.user.name} </div>
<Image  width={100}
      height={100}src={session.user.image} className="rounded-full shadow-xl cursor-pointer" alt="User Avatar" /> </>
: <>
 Not signed in <br />
      <button >Sign in</button>
</>
}
    
      
    </>
  )
}