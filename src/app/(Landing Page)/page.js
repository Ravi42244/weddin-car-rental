'use client';
import { Button } from "@/components/ui/button";
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";



export default function LandingPage() {
  const { data: session } = useSession()
  return (<>
Landing Page
  </>
        
)
}