'use server'

import { applicationSchema, ApplicationSchemaType } from "@/lib/schemas"

export const createApplication = async (data: ApplicationSchemaType) => {
  const validatedData = applicationSchema.safeParse(data)
  if (validatedData.success) {
    console.log("Valid data", data)
  } else {
    console.log("Invalid data", data)
  }
}