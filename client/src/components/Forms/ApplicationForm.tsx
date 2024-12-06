"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { applicationSchema, ApplicationSchemaType } from "@/lib/schemas";
import { X } from "@phosphor-icons/react";
import { createApplication } from "@/app/(main)/dashboard/actions";
import CustomInput from "../Inputs/CustomInput";
import CustomDropdown from "../Inputs/CustomDropdown";
import CustomDateInput from "../Inputs/CustomDateInput";
import { useState } from "react";

function ApplicationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ApplicationSchemaType>({
    resolver: zodResolver(applicationSchema),
  });

  const [isHovered, setIsHovered] = useState(false);

  const onSubmit = async (data: ApplicationSchemaType) => {
    createApplication(data);
  };

  const inputFieldClass =
    "h-10 w-full rounded border border-spacer bg-background pl-3 shadow placeholder:text-spacer focus:outline-none focus:ring-1 focus:ring-accent mt-0.5";
  const inputFieldErrorClass =
    "h-10 w-full rounded border border-danger bg-background pl-3 shadow placeholder:text-spacer focus:outline-none focus:ring-1 focus:ring-accent animate-shake";
  const errorMessageClass = "text-danger text-sm mt-1";

  return (
    <div className="flex h-full w-full items-center justify-center bg-black bg-opacity-25">
      <div className="w-[38rem] bg-foreground">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex flex-col p-10"
        >
          <div className="flex justify-end">
            <X className="cursor-pointer"  onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)} color={isHovered ? "#f25757" : "#FFFFFF"}  size={26} />
          </div>
          <h1 className="text-left text-2xl font-medium sm:text-3xl">
            Log a new application
          </h1>
          <p className="mt-0.5">Enter details about your application</p>
          <div className="mt-6 flex flex-col gap-4 gap-y-5 sm:grid sm:grid-cols-2">
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
                { value: "Applied", default: true },
                { value: "Bookmarked" },
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

            <CustomDateInput
              label="Application date"
              id="applicationDate"
              register={register("date")}
              error={errors.date}
            />

            <div className="col-span-2 flex flex-col">
              <CustomInput
                label="Job listing URL"
                id="jobListingUrl"
                type="url"
                register={register("listingURL")}
                error={errors.listingURL}
              />
            </div>
            <div className="col-span-2 flex flex-col">
              <label className="-mt-2" htmlFor="additionalNotes">Additional notes</label>
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
