import React from "react";

function ApplicationForm() {

  const inputFieldClass = "h-10 w-full rounded border border-cadetGray bg-background pl-3 shadow placeholder:text-cadetGrayLight focus:outline-none focus:ring-1 focus:ring-accent";
  // const inputFieldErrorClass = "h-10 w-full rounded border border-bittersweetDark bg-background pl-3 shadow placeholder:text-cadetGrayLight focus:outline-none focus:ring-1 focus:ring-accent animate-shake";
  // const errorMessageClass = "text-bittersweetDark text-sm mt-1";

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
                className={inputFieldClass}
                placeholder="Job title"
              />
            </div>
            <div>
              <input
                className={inputFieldClass}
                placeholder="Company name"
              />
            </div>
            <div>
              <input
                className={inputFieldClass}
                placeholder="Location"
              />
            </div>
            <div>
              <input
                className={inputFieldClass}
                placeholder="Salary"
              />
            </div>
            <div>
              <input
                className={inputFieldClass}
                placeholder="Email"
              />
            </div>
            <div>
              <input
                className={inputFieldClass}
                placeholder="Job listing URL"
              />
            </div>            <div>
              <input
                className={inputFieldClass + " h-28"}
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
