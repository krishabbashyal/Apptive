"use server";

import React from "react";
import { fetchAllArchivedApplications } from "../dashboard/actions";


const Archive = async () => {
  const data = await fetchAllArchivedApplications();

  return <div>{JSON.stringify(data)}</div>;
};

export default Archive;
