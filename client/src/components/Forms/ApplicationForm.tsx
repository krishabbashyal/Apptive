"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { applicationSchema, ApplicationSchemaType } from "@/lib/schemas";
import { X } from "@phosphor-icons/react";
import { createApplication } from "@/app/(main)/dashboard/actions";

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
    "h-10 w-full rounded border border-cadetGray bg-background pl-3 shadow placeholder:text-cadetGrayLight focus:outline-none focus:ring-1 focus:ring-accent mt-0.5";
  const inputFieldErrorClass =
    "h-10 w-full rounded border border-bittersweetDark bg-background pl-3 shadow placeholder:text-cadetGrayLight focus:outline-none focus:ring-1 focus:ring-accent animate-shake";
  const errorMessageClass = "text-bittersweetDark text-sm mt-1";

  const today = new Date();
  const localDate = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000,
  )
    .toISOString()
    .substring(0, 10);

  return (
    <div className="w-full h-full items-center flex justify-center bg-black bg-opacity-75">
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
            <div className="flex flex-col">
              <label htmlFor="jobTitle">Job title</label>
              <input
                {...register("title")}
                className={errors.title ? inputFieldErrorClass : inputFieldClass}
                id="jobTitle"
              />
              {errors.title && (
                <p className={errorMessageClass}>{errors.title.message}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="companyName">Company Name</label>
              <input
                {...register("company")}
                className={
                  errors.company ? inputFieldErrorClass : inputFieldClass
                }
                id="companyName"
              />
              {errors.company && (
                <p className={errorMessageClass}>{errors.company.message}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="location">Location</label>
              <input
                {...register("location")}
                className={
                  errors.location ? inputFieldErrorClass : inputFieldClass
                }
                id="location"
              />
              {errors.location && (
                <p className={errorMessageClass}>{errors.location.message}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="salary">Salary</label>
              <input
                {...register("salary")}
                type="number"
                className={errors.salary ? inputFieldErrorClass + " remove-arrow" : inputFieldClass + " remove-arrow"}
                id="salary"
              />{" "}
              {errors.salary && (
                <p className={errorMessageClass}>{errors.salary.message}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="applicationStatus">Application status</label>
              <select
                {...register("status")}
                className={errors.status ? inputFieldErrorClass : inputFieldClass}
                defaultValue={"applied"}
                id="applicationStatus"
              >
                <option value="Bookmarked">Bookmarked</option>
                <option value="Applied">Applied</option>
                <option value="Interviewing">Interviewing</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="workArrangement">Work arrangement</label>
              <select {...register("arrangement")} className={inputFieldClass} id="workArrangement">
                <option value="" selected hidden disabled>Select</option>
                <option value="Onsite">Onsite</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Remote">Remote</option>
                <option value="Unspecified">Unspecified </option>
              </select>
              {errors.arrangement && (
                <p className={errorMessageClass}>{errors.arrangement.message}</p>
              )}
            </div>
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
            className="mt-6 h-12 rounded-md from-accent to-accentDark px-4 py-2 font-medium text-white enabled:bg-gradient-to-tr disabled:cursor-not-allowed disabled:bg-cadetGray sm:mt-8"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default ApplicationForm;
