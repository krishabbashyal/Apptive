"use server";

import { applicationSchema, ApplicationSchemaType } from "@/lib/schemas";
import { prisma } from "@/lib/prisma";
import { getUser } from "@/app/(auth)/actions";
import { Application } from "@prisma/client";
import { revalidatePath } from "next/cache";

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
        application_date: toLocalISODateTime(data.applicationDate),
        listing_url: data.listingURL,
        notes: data.notes,
        userId: userId,
      },
    });
  } else {
    console.log("Invalid data", data);
  }
  revalidatePath('/dashboard', 'layout');
};

export const updateApplication = async (
  application: Application,
  data: ApplicationSchemaType,
) => {
  const validatedData = applicationSchema.safeParse(data);
  if (validatedData.success) {
    console.log("Valid data", data);
    

    const hadResponse = data.applicationStatus === "Interviewing" || data.applicationStatus === "Accepted" 
      ? true 
      : data.applicationStatus === "Applied" || data.applicationStatus === "Bookmarked"
        ? false 
        : application.had_response;
   
    await prisma.application.update({
      where: {
        id: application.id,
      },
      data: {
        job_title: data.jobTitle,
        company_name: data.companyName,
        locationId: data.location.id,
        location_city: data.location.city,
        location_state: data.location.state_code,
        salary: data.salary,
        application_status: data.applicationStatus,
        work_arrangement: data.workArrangement,
        application_date: toLocalISODateTime(data.applicationDate),
        listing_url: data.listingURL,
        notes: data.notes,
        had_response: hadResponse,
      },
    });
  } else {
    console.log("Invalid data", validatedData.error);
  }
  revalidatePath('/dashboard', 'layout');
};

export const fetchAllActiveApplications = async () => {
  const res = await getUser();
  const userId = res?.id;

  if (!userId) {
    throw new Error("User ID is undefined. Cannot fetch applications.");
  }

  const applications = await prisma.application.findMany({
    where: {
      userId: userId,
      is_archived: false,
    },
    orderBy: {
      application_date: "desc",
    },
  });
  return applications;
};

export const archiveApplication = async (id: string) => {
  try {
    await prisma.application.update({
      where: {
        id: id,
      },
      data: {
        is_archived: true,
      },
    });
  } catch (error) {
    console.error("Error archiving application:", error);
  }
  console.log("Archived application with ID:", id);
  revalidatePath('/dashboard', 'layout');
};

export const fetchAllArchivedApplications = async () => {
  const res = await getUser();
  const userId = res?.id;

  if (!userId) {
    throw new Error("User ID is undefined. Cannot fetch applications.");
  }

  const applications = await prisma.application.findMany({
    where: {
      userId: userId,
      is_archived: true,
    },
  });
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
