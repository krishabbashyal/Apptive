"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { applicationSchema, ApplicationSchemaType } from "@/lib/schemas";
import { X } from "@phosphor-icons/react";
import { updateApplication } from "@/app/(main)/dashboard/actions";
import CustomInput from "../Inputs/CustomInput";
import CustomDropdown from "../Inputs/CustomDropdown";
import CustomDateInput from "../Inputs/CustomDateInput";
import useShowUpdateModal from "@/lib/store/useShowUpdateModal";
import LocationInput from "../Inputs/LocationInput";
import CustomButton from "../UserInterface/CustomButton";

function UpdateApplicationForm() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ApplicationSchemaType>({
    resolver: zodResolver(applicationSchema),
  });
  const { updateModalShown, closeUpdateModal, application } =
    useShowUpdateModal();
  const [isHovered, setIsHovered] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleIsClosing = () => {
    setIsClosing(true);
    setTimeout(() => {
      closeUpdateModal();
      setIsClosing(false);
      reset();
    }, 300)
  };

  useEffect(() => {
    if (application) {
      setValue("jobTitle", application.job_title);
      setValue("companyName", application.company_name);
      setValue("location", {
        id: application.locationId,
        city: application.location_city,
        state_code: application.location_state,
      });
      setValue("applicationStatus", application.application_status);
      setValue("workArrangement", application.work_arrangement);
      setValue(
        "applicationDate",
        new Date(application.application_date).toISOString().split("T")[0],
      );
      setValue("listingURL", application.listing_url || "");
      setValue("notes", application.notes || "");
    }
  }, [application, setValue]);

  const onSubmit = async (data: ApplicationSchemaType) => {
    try {
      await updateApplication(application!, data);
      handleIsClosing();
    } catch (error) {
      console.log(error);
    }
  };

  const inputFieldClass =
    "h-10 w-full rounded border border-spacer bg-background pl-3 shadow placeholder:text-spacer focus:outline-none focus:ring-1 focus:ring-accent mt-0.5";
  const inputFieldErrorClass =
    "h-10 w-full rounded border border-danger bg-background pl-3 shadow placeholder:text-spacer focus:outline-none focus:ring-1 focus:ring-accent animate-shake";
  const errorMessageClass = "text-danger text-sm mt-1";

  return (
    updateModalShown && (
      <div
        onClick={() => {
          handleIsClosing();
        }}
        className={`absolute z-20 flex h-full w-[calc(100%-15rem)] items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm animate-fade-in opacity-0 ${isClosing ? "animate-fade-out" : ""}`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`w-[38rem] rounded-lg border border-spacer/50 bg-foreground animate-fade-in-right ${isClosing ? "animate-fade-out-right" : ""}`}
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
                  handleIsClosing();
                  setIsHovered(false);
                }}
              >
                <X
                  className="cursor-pointer rounded p-1 hover:cursor-pointer hover:bg-spacer hover:bg-opacity-25"
                  onMouseOver={() => setIsHovered(true)}
                  onMouseOut={() => setIsHovered(false)}
                  color={isHovered ? "#f25757" : "#FFFFFF"}
                  size={32}
                />
              </button>
            </div>
            <h1 className="text-left text-2xl font-medium sm:text-3xl">
              Update application
            </h1>
            <p className="mt-0.5">Enter new details about your application</p>
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
                initialQuery={`${application?.location_city}, ${application?.location_state}`}
              />
              <CustomInput
                label="Salary"
                id="salary"
                defaultValue={application?.salary?.toLocaleString()}
                type="text"
                numeric={true}
                register={register("salary", {
                  setValueAs: (num) => parseInt(String(num).replace(/,/g, "")),
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
                  { value: "Interviewing" },
                  { value: "Accepted" },
                  { value: "Rejected" },
                  { value: "Bookmarked" },
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
              label="Update"
              isSubmitting={isSubmitting}
              submittingText="Updating application..."
              customClasses="mt-4 h-12 rounded-md bg-accent px-4 py-2 font-medium text-white transition-all duration-200 disabled:cursor-not-allowed disabled:bg-spacer"
            />
          </form>
        </div>
      </div>
    )
  );
}

export default UpdateApplicationForm;
