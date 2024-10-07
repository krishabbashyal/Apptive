import { z} from "zod";

// Schema for signing up
export const signUpSchema = z.object({
  firstName: z.string().min(2, "Must be at least 2 characters"),
  lastName: z.string().min(2, "Must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  termsAndConditions: z
    .boolean()
    .refine((val) => val === true, {
      message: "You must agree to the terms and conditions",
    }),
});

export type SignUpSchemaType = z.infer<typeof signUpSchema>;
// end schema for signing up


// Schema for logging in
export const logInSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type LogInSchemaType = z.infer<typeof logInSchema>
// end schema for logging in

