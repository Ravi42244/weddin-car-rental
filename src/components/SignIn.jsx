"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

import { FcGoogle } from "react-icons/Fc";
import { FaFacebook } from "react-icons/Fa";
import { signInFormValidationSchema } from "@/utils/form validations/signInFormValidation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

function SignIn() {
  const form = useForm({
    resolver: zodResolver(signInFormValidationSchema),
    defaultValues: {
      mobileOremail: "",
      password: ""
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="relative drop-shadow-2xl container   h-[700px] flex">
        <div className="rounded rounded-r-none border-none">
          <Image
            src="/sign-in-bg.jpg"
            fill={true}
            className="rounded object-cover pl-10"
          />
        </div>
        <Card className="absolute  top-0 right-0 w-1/3 h-[700px] drop-shadow-2xl  flex flex-col border-none rounded rounded-l-none bg-white ">
          <CardHeader className=" flex justify-center items-center">
            <CardTitle className="mt-5">
              <span className="text-2xl ">Wedding Car Rental</span>
            </CardTitle>
            <CardContent className="w-full border-b-[0.5px]">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="mt-5 grid w-full items-center gap-4">
                    <div className=" flex flex-col space-y-10">
                      <FormField
                        control={form.control}
                        name="mobileOremail"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div>
                                <Label htmlFor="name">Mobile or Email</Label>
                                <Input
                                  name="mobileOremail"
                                  {...field}
                                  placeholder="Enter Mobile or Email ID"
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
                              <div className=" flex flex-col pb-10">
                                <Label htmlFor="name">Password</Label>
                                <Input
                                  name="password"
                                  type="text"
                                  {...field}
                                  placeholder="Enter Password"
                                  className="border-none bg-slate-50 rounded focus-visible:ring-transparent focus:bg-white"
                                />
<FormMessage />
                                <div className="flex justify-between items-center mt-5">
                                  <Button
                                    type="submit"
                                    className=" px-10 flex justify-between items-center bg-yellow-400 hover:bg-yellow-500"
                                  >
                                    Sign In
                                  </Button>
                                  <Label
                                    htmlFor="name"
                                    className="font-thin text-xs mt-2 text-gray-400 cursor-pointer hover:text-gray-700"
                                  >
                                    <Link href="/password-reset">
                                      Forgot password?
                                    </Link>
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
            <div className="-mt-9 mx-52 flex justify-center rounded-full bg-white">
           
              or
            </div>
          </div>
          <CardContent className="absolute mt-[350px] w-full h-[350px] flex flex-col justify-center items-center space-y-5 font-ubuntu">
            <div className="w-full h-full flex justify-center items-center">
              <button>
                <FcGoogle
                  size={50}
                  className="m-5 scale-100 hover:scale-150 hover:shadow-2xl"
                />
              </button>

              <button className="">
                <FaFacebook
                  size={45}
                  className="scale-100 hover:scale-150 hover:shadow-2xl"
                />
              </button>
            </div>
            <div className=" w-full flex items-end justify-center">
              New here?
              <Link
                href="/sign-up"
                className="pl-1 text-indigo-500 hover:text-indigo-700"
              >
                Sign Up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default SignIn;
