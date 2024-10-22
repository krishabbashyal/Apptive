import React from "react";

function ApplicationForm() {
  return (
    <div className="w-[36rem] bg-foreground">
      <form noValidate className="flex flex-col p-4 sm:p-6 md:p-8 lg:p-10">
        <h1 className="text-left text-2xl font-medium sm:text-3xl">
          Log a new application
        </h1>
        <p className="mt-0.5">Enter details about your application</p>

        <div>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row"></div>
          <div className="mt-4 flex flex-col gap-y-4">
            <div>
              <input
                className="w-full rounded-md border border-gray-300 p-2"
                placeholder="Job title"
              />
            </div>
            <div>
              <input
                className="w-full rounded-md border border-gray-300 p-2"
                placeholder="Company name"
              />
            </div>
            <div>
              <input
                className="w-full rounded-md border border-gray-300 p-2"
                placeholder="Location"
              />
            </div>
            <div>
              <input
                className="w-full rounded-md border border-gray-300 p-2"
                placeholder="Salary"
              />
            </div>
            <div>
              <input
                className="w-full rounded-md border border-gray-300 p-2"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                className="w-full rounded-md border border-gray-300 p-2"
                placeholder="Job listing URL"
              />
            </div>            <div>
              <input
                className="w-full h-24 rounded-md border border-gray-300 p-2"
                placeholder="Addional notes"
              />
            </div>
          </div>
          <div>
            <input type="date" color="black" />
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
