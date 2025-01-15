'use server'

import { applicationSchema } from "@/lib/schemas"
import { prisma } from "@/lib/prisma"
import { getUser } from "@/app/(auth)/actions"


// eslint-disable-next-line @typescript-eslint/no-explicit-any

const toLocalISODateTime = (dateStr: string): Date => {
  // This preserves local timezone
  return new Date(`${dateStr}T00:00:00`);
}

export const createApplication = async (data: any) => {
  const validatedData = applicationSchema.safeParse(data)
  if (validatedData.success) {
    console.log("Valid data", data)
  
    const res = await getUser()
    const userId = res?.id

    await prisma.application.create({ 
      data: {
        title: data.title,
        company: data.company,
        locationId: data.location,
        salary: data.salary,
        status: data.status,
        workStyle: data.arrangement,
        applicationDate: toLocalISODateTime(data.date),
        applicationUrl: data.listingURL,
        notes: data.notes,
        userID: userId
      }
     })
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
