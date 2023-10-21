

import { options } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth"
import Image from "next/image"

// import { useSession, signIn, signOut } from "next-auth/react"
export default async function Dashboard() {
  // const { data: session } = useSession()
  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session.user.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   )
  // }

  const session = await getServerSession(options)
  return (
    <>
{
session ? <><div className="text-2xl"> Signed In {session.user.name} </div>
<Image  width={100}
      height={100}src={session.user.image} className="rounded-full shadow-xl cursor-pointer" /> </>
: <>
 Not signed in <br />
      <button >Sign in</button>
</>
}
    
      
    </>
  )
}