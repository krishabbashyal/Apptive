'use server'

import { signUpSchema, SignUpSchemaType } from "@/lib/schemas"

export const logFormData = (data: SignUpSchemaType) => {
  const validatedData = signUpSchema.safeParse(data)
  if (validatedData.success) {
    console.log("Valid data", data)
  } else {
    console.log("Invalid data", data)
  }
}