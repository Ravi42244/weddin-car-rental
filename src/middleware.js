import { NextResponse } from 'next/server'

 
// This function can be marked `async` if using `await` inside
// export  function middleware(request) {
  
//   if((request.url.split("/").at(-1) === "graphql") || (request.url.split("/").at(-1) === "signin")){
//   return NextResponse.next()
    
//   }
//   const token = request.headers.get("authorization")?.split(" ")?.at(-1)
//   if(!token){
//     return NextResponse.json({message:"Not Authorized!"} , { status: 401 })
    
//   }
//   return NextResponse.next()
// }
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: ['/api/:path*'],
// }


export {default} from "next-auth/middleware"

export const config = {
  matcher: ["/dashboard","/revenue"]
}