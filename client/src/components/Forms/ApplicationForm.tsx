"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { applicationSchema, ApplicationSchemaType } from "@/lib/schemas";
import { X } from "@phosphor-icons/react";
import { createApplication } from "@/app/(main)/dashboard/actions";
import CustomInput from "../Inputs/CustomInput";
import CustomDropdown from "../Inputs/CustomDropdown";
import CustomDateInput from "../Inputs/CustomDateInput";
import useShowApplicationModal from "@/lib/store/modalStore";
import LocationInput from "../Inputs/LocationInput";
import CustomButton from "../UserInterface/CustomButton";

function ApplicationForm() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ApplicationSchemaType>({
    resolver: zodResolver(applicationSchema),
  });

  const { applicationModalShown, closeApplicationModal } =
    useShowApplicationModal();
  const [isHovered, setIsHovered] = useState(false);

  const onSubmit = async (data: ApplicationSchemaType) => {
    try {
      await createApplication(data);
      closeApplicationModal();
    } catch (error) {
      // Handle specific error cases
      // setError("root", {
      //   message: "Failed to create application. Please try again.",
      // });
    }
  };

  const inputFieldClass =
    "h-10 w-full rounded border border-spacer bg-background pl-3 shadow placeholder:text-spacer focus:outline-none focus:ring-1 focus:ring-accent mt-0.5";
  const inputFieldErrorClass =
    "h-10 w-full rounded border border-danger bg-background pl-3 shadow placeholder:text-spacer focus:outline-none focus:ring-1 focus:ring-accent animate-shake";
  const errorMessageClass = "text-danger text-sm mt-1";

  return (
    applicationModalShown && (
      <div
        onClick={() => {
          closeApplicationModal();
          reset();
        }}
        className="absolute z-10 flex h-full w-[calc(100%-15rem)] items-center justify-center bg-black bg-opacity-85"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[38rem] bg-foreground"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col p-10"
            autoComplete="off"
          >
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => {
                  closeApplicationModal();
                  setIsHovered(false);
                  reset();
                }}
              >
                <X
                  className="cursor-pointer"
                  onMouseOver={() => setIsHovered(true)}
                  onMouseOut={() => setIsHovered(false)}
                  color={isHovered ? "#f25757" : "#FFFFFF"}
                  size={26}
                />
              </button>
            </div>
            <h1 className="text-left text-2xl font-medium sm:text-3xl">
              Log a new application
            </h1>
            <p className="mt-0.5">Enter details about your application</p>
            <div className="mt-6 flex flex-col gap-4 gap-y-6 sm:grid sm:grid-cols-2">
              <CustomInput
                label="Job title"
                id="jobTitle"
                type="text"
                register={register("jobTitle")}
                error={errors.jobTitle}
              />
              <CustomInput
                label="Company name"
                id="companyName"
                type="text"
                register={register("companyName")}
                error={errors.companyName}
              />
              <LocationInput
                label="Location"
                id="location"
                register={register("location")}
                setValue={setValue}
                error={errors.location}
              />
              <CustomInput
                label="Salary"
                id="salary"
                type="text"
                numeric={true}
                register={register("salary", {
                  setValueAs: (num) => parseInt(num.replace(/,/g, "")),
                })}
                error={errors.salary}
              />
              <CustomDropdown
                label="Application status"
                id="applicationStatus"
                register={register("applicationStatus")}
                error={errors.applicationStatus}
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
                register={register("workArrangement")}
                error={errors.workArrangement}
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
                register={register("applicationDate")}
                error={errors.applicationDate}
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
                <label className="-mt-2.5" htmlFor="additionalNotes">
                  Additional notes
                </label>
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

            <CustomButton
              label="Create"
              isSubmitting={isSubmitting}
              submittingText="Creating application..."
              customClasses="mt-4 h-12 rounded-md from-accent to-accent px-4 py-2 font-medium text-white transition-all duration-200 enabled:bg-gradient-to-tr hover:enabled:opacity-90 disabled:cursor-not-allowed disabled:bg-spacer"
            />
          </form>
        </div>
      </div>
    )
  );
}

export default ApplicationForm;
