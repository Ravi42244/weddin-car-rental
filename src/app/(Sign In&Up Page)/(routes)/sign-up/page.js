import Image from "next/image";

import SignUpPage from "@/components/SignUp";

export function SignUp() {
  return (
    <div className=" h-screen flex justify-center items-center md:p-5">
      <Image
        src="/sign-in-bg.jpg"
        fill={true}
        className="z-0  md:object-cover  blur-lg"
      />
      <SignUpPage />
    </div>
  );
}

export default SignUp;
