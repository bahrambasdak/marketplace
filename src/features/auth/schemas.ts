import z from "zod";

export const signInSchema = z.object({email: z.email("Enter a valid email addres").trim().toLowerCase(),
    password: z.string().min(1,"Enter your password").max(128)
})




export type SignInput = z.input<typeof signInSchema>