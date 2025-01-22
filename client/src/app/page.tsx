"use server";

import React from "react";
import LandingPage from "@/components/UserInterface/LandingPage";
import { getUser } from "./(auth)/actions";
import { redirect } from "next/navigation";


const App = async () => {

  const user = await getUser();

  if (user) {
    redirect("/dashboard");
  }

  return (
    <div>
      <LandingPage />
    </div>
  );
};

export default App;
