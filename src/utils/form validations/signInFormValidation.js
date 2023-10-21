import * as z from "zod";

 export const signInFormValidationSchema = z.object({
    mobileOremail: z.string().min(2, {
      message: "Enter Register Mobile or Email Id!",
    }),
    password: z.string().min(2, {
      message: "Enter Password!",
    }),

  })

 