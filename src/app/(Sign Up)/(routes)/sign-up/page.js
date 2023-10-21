"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"


import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import  {signInFormValidationSchema}  from "@/utils/form validations/signInFormValidation";




export function Sign_Up() {
  const form = useForm({
    resolver: zodResolver(signInFormValidationSchema)
   
  })
  const onSubmit = (data) => {
    console.log("running");
    console.log(data);
  };

  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="">
      <FormField
        control={form.control}
        name="mobileOremail"
        render={({ field }) => (
          <FormItem>
            <FormLabel>mobileOremail</FormLabel>
            <FormControl>
              <Input placeholder="shadcn" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Enter Password</FormLabel>
            <FormControl>
              <Input placeholder="shadcn" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit">Submit</Button>
    </form>
  </Form>
  )
}
export default Sign_Up;