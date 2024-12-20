import { z } from "zod";

// Schema for signing up
export const signUpSchema = z.object({
  firstName: z.string().min(2, "Must be at least 2 characters"),
  lastName: z.string().min(2, "Must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type SignUpSchemaType = z.infer<typeof signUpSchema>;
// end schema for signing up

// Schema for logging in
export const logInSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type LogInSchemaType = z.infer<typeof logInSchema>;
// end schema for logging in

// Schema for creating a new application
export const applicationSchema = z.object({
  title: z.string().min(1, "Job title is required"),
  company: z.string().min(1, "Company name is required"),
  location: z.string().min(1, "Location is required").regex(/^[A-Za-z\s]+, [A-Z]{2}$/, 'Please select a valid location'),
  salary: z.number().optional().or(z.nan()),
  status: z.string().min(1, "Select application status"),
  arrangement: z.string().min(1, "Select work arrangement"),
  date: z.string()
  .refine((val) => {
    const enteredDate = new Date(val);
    const today = new Date();
    today.setHours(0, 0, 0, 0); 
    return enteredDate <= today;
  }, {
    message: "Please enter a valid non-future date",
  }),

  listingURL: z
    .string()
    .url("Must be a valid URL")
    .optional()
    .or(z.literal("")),
  notes: z.string().optional().or(z.literal("")),
});

export type ApplicationSchemaType = z.infer<typeof applicationSchema>;
