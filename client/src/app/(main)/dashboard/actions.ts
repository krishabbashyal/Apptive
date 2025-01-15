'use server'

import { applicationSchema, ApplicationSchemaType } from "@/lib/schemas"
import { prisma } from "@/lib/prisma"

export const createApplication = async (data: ApplicationSchemaType) => {
  const validatedData = applicationSchema.safeParse(data)
  if (validatedData.success) {
    console.log("Valid data", data)
  } else {
    console.log("Invalid data", data)
  }
}

export const searchLocations = async (query: string) => {  
  if (!query || query.length < 2) return []
  const results = await prisma.location.findMany({
    take: 10,
    where: {
      city: {
        contains: query,
        mode: 'insensitive'
      }
    }
  })
  return results
}
