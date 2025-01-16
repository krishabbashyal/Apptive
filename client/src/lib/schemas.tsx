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
  jobTitle: z.string().min(1, "Job title is required"),
  companyName: z.string().min(1, "Company name is required"),
  location: z.object({
    id: z.string(),
    city: z.string(),
    state_code: z.string(),
  }, {
    invalid_type_error: "Select a location from dropdown",
  }),
  salary: z.number().optional().or(z.nan()),
  applicationStatus: z.string().min(1, "Select application status"),
  workArrangement: z.string().min(1, "Select work arrangement"),
  applicationDate: z.string()
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
