import SignIn from "@/components/SignIn"
import Image from "next/image"

function Sign_In() {
  return (
    <div className=" h-screen flex justify-center items-center">
        <Image src="/sign-in-bg.jpg"  fill={true} className="z-0 object-cover  blur-lg"/>
<SignIn/>
    </div>
  )
}

export default Sign_In
