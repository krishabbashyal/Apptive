"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { applicationSchema, ApplicationSchemaType } from "@/lib/schemas";
import { X } from "@phosphor-icons/react";
import { createApplication } from "@/app/(main)/dashboard/actions";
import CustomInput from "../Inputs/CustomInput";
import CustomDropdown from "../Inputs/CustomDropdown";

function ApplicationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ApplicationSchemaType>({
    resolver: zodResolver(applicationSchema),
  });

  const onSubmit = async (data: ApplicationSchemaType) => {
    createApplication(data);
  };

  const inputFieldClass =
    "h-10 w-full rounded border border-spacer bg-background pl-3 shadow placeholder:text-spacer focus:outline-none focus:ring-1 focus:ring-accent mt-0.5";
  const inputFieldErrorClass =
    "h-10 w-full rounded border border-danger bg-background pl-3 shadow placeholder:text-spacer focus:outline-none focus:ring-1 focus:ring-accent animate-shake";
  const errorMessageClass = "text-danger text-sm mt-1";

  const today = new Date();
  const localDate = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000,
  )
    .toISOString()
    .substring(0, 10);

  return (
    <div className="flex h-full w-full items-center justify-center bg-black bg-opacity-75">
      <div className="w-[38rem] bg-foreground">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex flex-col p-10"
        >
          <div className="flex justify-end">
            <X className="cursor-pointer" color="white" size={24} />
          </div>
          <h1 className="text-left text-2xl font-medium sm:text-3xl">
            Log a new application
          </h1>
          <p className="mt-0.5">Enter details about your application</p>
          <div className="mt-6 flex flex-col gap-4 sm:grid sm:grid-cols-2">
            <CustomInput
              label="Job title"
              id="jobTitle"
              type="text"
              register={register("title")}
              error={errors.title}
            />
            <CustomInput
              label="Company name"
              id="companyName"
              type="text"
              register={register("company")}
              error={errors.company}
            />

            <CustomInput
              label="Location"
              id="location"
              type="text"
              register={register("location")}
              error={errors.location}
            />
            <CustomInput
              label="Salary"
              id="salary"
              type="number"
              register={register("salary")}
              error={errors.salary}
            />
            <CustomDropdown
              label="Application status"
              id="applicationStatus"
              register={register("status")}
              error={errors.status}
              options={[
                { value: "Bookmarked" },
                { value: "Applied" },
                { value: "Interviewing" },
                { value: "Rejected" },
              ]}
            />

            <CustomDropdown
              label="Work arrangement"
              id="workArrangement"
              register={register("arrangement")}
              error={errors.arrangement}
              options={[
                { value: "Onsite" },
                { value: "Hybrid" },
                { value: "Remote" },
                { value: "Unspecified" },
              ]}
            />
            <div className="flex flex-col">
              <label htmlFor="dateApplied">Date applied</label>
              <input
                {...register("date")}
                defaultValue={localDate}
                className={errors.date ? inputFieldErrorClass : inputFieldClass}
                type="date"
                id="dateApplied"
              />
              {errors.date && (
                <p className={errorMessageClass}>{errors.date.message}</p>
              )}
            </div>
            <div className="col-span-2 flex flex-col">
              <label htmlFor="jobListingUrl">Job listing URL</label>
              <input
                {...register("listingURL")}
                className={
                  errors.listingURL ? inputFieldErrorClass : inputFieldClass
                }
                id="jobListingUrl"
              />
              {errors.listingURL && (
                <p className={errorMessageClass}>{errors.listingURL.message}</p>
              )}
            </div>
            <div className="col-span-2 flex flex-col">
              <label htmlFor="additionalNotes">Additional notes</label>
              <textarea
                {...register("notes")}
                className={
                  errors.notes
                    ? inputFieldErrorClass + " h-24 pt-1"
                    : inputFieldClass + " h-24 pt-1"
                }
                id="additionalNotes"
              />
              {errors.notes && (
                <p className={errorMessageClass}>{errors.notes.message}</p>
              )}
            </div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 h-12 rounded-md from-accent to-accent px-4 py-2 font-medium text-white enabled:bg-gradient-to-tr disabled:cursor-not-allowed disabled:bg-spacer sm:mt-8"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default ApplicationForm;
