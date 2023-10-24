import * as z from "zod";

 export const signInFormValidationSchema = z.object({
    mobileOremail: z.string().min(1, {
        message: "Enter Register Mobile or Email Id!",
    }),
    password: z.string().min(1, {
      message: "Enter Password!",
    }),

  })
 export const signUpFormValidationSchema = z.object({
    name: z.string().min(1, {
        message: "Full Name is Required!",
    }),
    password: z.string().min(1, {
      message: "Enter Password!",
    }),
    email: z.string().min(1, {
        message: "Enter Register Email Id!",
    }),
    mobile: z.string().min(1, {
      message: "Enter Mobile Number!",
    }),

  })

 