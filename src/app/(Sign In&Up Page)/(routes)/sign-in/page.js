import SignInPage from "@/components/SignIn"
import Image from "next/image"

function Sign_In() {
  return (
    <div className=" h-screen flex justify-center items-center">
        <Image src="/sign-in-bg.jpg"  fill={true} className="z-0 md:object-cover  blur-lg"/>
        


<SignInPage/>

        
    </div>
  )
}

export default Sign_In
