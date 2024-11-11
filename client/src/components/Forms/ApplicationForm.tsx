import React from "react";

function ApplicationForm() {
  const inputFieldClass =
    "h-10 w-full rounded border border-cadetGray bg-background pl-3 shadow placeholder:text-cadetGrayLight focus:outline-none focus:ring-1 focus:ring-accent mt-0.5";
  // const inputFieldErrorClass = "h-10 w-full rounded border border-bittersweetDark bg-background pl-3 shadow placeholder:text-cadetGrayLight focus:outline-none focus:ring-1 focus:ring-accent animate-shake";
  // const errorMessageClass = "text-bittersweetDark text-sm mt-1";

  const today = new Date();
  const localDate = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000,
  )
    .toISOString()
    .substring(0, 10);

  return (

  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[38rem] bg-foreground">
    <form noValidate className="flex flex-col p-4 sm:p-6 md:p-8 lg:p-10">
      <h1 className="text-left text-2xl font-medium sm:text-3xl">
        Log a new application
      </h1>
      <p className="mt-0.5">Enter details about your application</p>
  
      <div className="mt-6 flex flex-col gap-4 sm:grid sm:grid-cols-2">
        <div className="flex flex-col">
          <label htmlFor="jobTitle">Job title</label>
          <input className={inputFieldClass} id="jobTitle" />
        </div>
  
        <div className="flex flex-col">
          <label htmlFor="companyName">Company Name</label>
          <input className={inputFieldClass} id="companyName" />
        </div>
  
        <div className="flex flex-col">
          <label htmlFor="location">Location</label>
          <input className={inputFieldClass} id="location" />
        </div>
  
        <div className="flex flex-col">
          <label htmlFor="salary">Salary</label>
          <input className={inputFieldClass} id="salary" />
        </div>
  
        <div className="flex flex-col">
          <label htmlFor="applicationStatus">Application status</label>
          <select
            className={inputFieldClass}
            defaultValue={"applied"}
            id="applicationStatus"
          >
            <option value="bookmarked">Bookmarked</option>
            <option value="applied">Applied</option>
            <option value="interviewing">Interviewing</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
  
        <div className="flex flex-col">
          <label htmlFor="workArrangement">Work arrangement</label>
          <select className={inputFieldClass} id="workArrangement">
            <option value="onsite">Onsite</option>
            <option value="hybrid">Hybrid</option>
            <option value="remote">Remote</option>
          </select>
        </div>
  
        <div className="flex flex-col">
          <label htmlFor="dateApplied">Date applied</label>
          <input
            defaultValue={localDate}
            className={inputFieldClass}
            type="date"
            id="dateApplied"
          />
        </div>
  
        <div className="flex flex-col col-span-2">
          <label htmlFor="jobListingUrl">Job listing link</label>
          <input className={inputFieldClass} id="jobListingUrl" />
        </div>
  
        <div className="flex flex-col col-span-2">
          <label htmlFor="additionalNotes">Additional notes</label>
          <input
            className={inputFieldClass + " h-28"}
            id="additionalNotes"
          />
        </div>
      </div>
  
      <button
        type="submit"
        className="mt-6 h-12 rounded-md from-accent to-accentDark px-4 py-2 font-medium text-white enabled:bg-gradient-to-tr disabled:cursor-not-allowed disabled:bg-cadetGray sm:mt-8"
      >
        Create
      </button>
    </form>
  </div>
  );
}

export default ApplicationForm;
