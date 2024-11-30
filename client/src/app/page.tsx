import React from "react";

const LandingPage = () => {
  return (
    <div>
      <div className="flex h-[calc(100vh-6rem)] w-full flex-col bg-foreground md:flex-row">
        <div className="md:w-3/5">
          <div className="mx-4 md:mx-32">
            <div className="mt-10 md:mt-16">
              <h1 className="text-5xl font-semibold md:text-6xl lg:text-8xl">
                Applications
              </h1>
              <h1 className="text-5xl font-semibold md:text-6xl lg:text-8xl">
                Managed
              </h1>
              <h1 className="text-5xl font-semibold md:text-6xl lg:text-8xl">
                Easily
              </h1>
            </div>

            <div>
              <p className="mt-4 text-3xl font-medium text-gray-300 md:mt-10 md:text-4xl">
                Stay organized, efficient, and focused on your job search.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-background md:mt-0 md:w-2/5">
          Right Side Content
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
