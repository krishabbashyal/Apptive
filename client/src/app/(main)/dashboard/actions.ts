"use server";

import { applicationSchema, ApplicationSchemaType } from "@/lib/schemas";
import { prisma } from "@/lib/prisma";
import { getUser } from "@/app/(auth)/actions";


const toLocalISODateTime = (dateStr: string): Date => {
  // This preserves local timezone
  return new Date(`${dateStr}T00:00:00`);
};

export const createApplication = async (data: ApplicationSchemaType) => {
  const validatedData = applicationSchema.safeParse(data);
  if (validatedData.success) {
    console.log("Valid data", data);

    const res = await getUser();
    const userId = res?.id;

    if (!userId) {
      throw new Error("User ID is undefined. Cannot create application.");
    }

    await prisma.application.create({
      data: {
        job_title: data.jobTitle,
        company_name: data.companyName,
        locationId: data.location.id,
        location_city: data.location.city,
        location_state: data.location.state_code,
        salary: data.salary,
        application_status: data.applicationStatus,
        work_arrangement: data.workArrangement,
        application_date: toLocalISODateTime(data.applictionDate),
        listing_url: data.listingURL,
        notes: data.notes,
        userId: userId,
      },
    });

  } else {
    console.log("Invalid data", data);
  }
};

export const fetchApplications = async () => {
  const res = await getUser();
  const userId = res?.id;

  if (!userId) {
    throw new Error("User ID is undefined. Cannot fetch applications.");
  }

  const applications = await prisma.application.findMany({
    where: {
      userId: userId,
    },
  });
  console.log("Applications", applications);
  return applications;
};

export const searchLocations = async (query: string) => {
  if (!query || query.length < 2) return [];
  const results = await prisma.location.findMany({
    take: 10,
    where: {
      city: {
        contains: query,
        mode: "insensitive",
      },
    },
  });
  return results;
};
