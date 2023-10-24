"use client";
import Image from "next/image";
import Link from "next/link";
import {signIn} from "next-auth/react"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";



import { FcGoogle } from "react-icons/Fc";
import { FaFacebook } from "react-icons/Fa";


import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { signUpFormValidationSchema } from "@/utils/form validations/Validation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Google from "next-auth/providers/google";
import { redirect } from "next/navigation";



function SignUpPage() {
  const form = useForm({
    resolver: zodResolver(signUpFormValidationSchema),
    defaultValues: {
      name: "",
      mobile:"",
      email:"",
      password: ""
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };


  return (
    <>
      <div className="flex justify-center  md:relative drop-shadow-2xl container   md:h-[700px]">
        <div className="hidden md:flex md:rounded md:rounded-r-none md:border-none">
          <Image
            src="/sign-in-bg.jpg"
            fill={true}
            className="rounded object-cover pl-10"
          />
        </div>
        <Card className="w-80 md:absolute  md:top-0 md:right-0 md:w-1/3 md:h-[700px] md:drop-shadow-2xl  md:flex md:flex-col md:border-none md:rounded md:rounded-l-none bg-white">
          <CardHeader className=" flex justify-center items-center">
            <CardTitle className="mt-5">
              <span className="text-lg sm:text-xl lg:text-2xl">Wedding Car Rental</span>
            </CardTitle>
            <CardContent className="w-full">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="mt-5 grid w-full items-center gap-4">
                    <div className=" flex flex-col space-y-10">

                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div>
                                <Input
                                  name="mobileOremail"
                                  {...field}
                                  placeholder="Full Name"
                                  className="border-none bg-slate-50 rounded focus:bg-white focus-visible:ring-transparent"
                                ></Input>
                                <FormMessage />
                              </div>
                            </FormControl>
                            
                            
                          </FormItem>
                        )}
                      />







                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div>
                                <Input
                                  name="mobileOremail"
                                  {...field}
                                  placeholder="Email ID"
                                  className="border-none bg-slate-50 rounded focus:bg-white focus-visible:ring-transparent"
                                ></Input>
                                <FormMessage />
                              </div>
                            </FormControl>
                            
                            
                          </FormItem>
                        )}
                      />

<FormField
                        control={form.control}
                        name="mobile"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div>
                                <Input
                                  name="mobileOremail"
                                  {...field}
                                  placeholder="Mobile"
                                  className="border-none bg-slate-50 rounded focus:bg-white focus-visible:ring-transparent"
                                ></Input>
                                <FormMessage />
                              </div>
                            </FormControl>
                            
                            
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className=" flex flex-col pb-2">
                                <Input
                                  name="password"
                                  type="password"
                                  {...field}
                                  placeholder="Password"
                                  className="border-none bg-slate-50 rounded focus-visible:ring-transparent focus:bg-white z-10"
                                />
<FormMessage />
                                <div className="flex justify-between items-center mt-5 z-10" >
                                  <Button
                                    type="submit"
                                    className=" px-10 flex justify-center items-center w-full bg-yellow-400 hover:bg-yellow-500"
                                  >
                                    Register
                                  </Button>
                                  <Label
                                    htmlFor="name"
                                    className="font-thin text-xs mt-2 text-gray-400 cursor-pointer hover:text-gray-700"
                                  >
                                
                                  </Label>
                                </div>
                              </div>
                            </FormControl>

                            
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
               
                </form>
              </Form>
            </CardContent>
          </CardHeader>
          <div>
          
          </div>
          <CardContent className="md:absolute md:mt-[350px] w-full md:h-[350px] flex flex-col justify-center items-center space-y-5 font-ubuntu">
            <div className="w-full h-full flex justify-center items-center">
           
            </div>
            <div className="  w-full flex flex-col text-sm items-center justify-center lg:flex-row md:text-base "  >
             <div>

             Already have an account?
             </div>
              <Link
                href="/sign-in"
                className=" pl-1 text-indigo-500 hover:text-indigo-700"
              >
                Sign In
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default SignUpPage;
