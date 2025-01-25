"use server";

import React from "react";
import { fetchAllActiveApplications } from "../dashboard/actions";


const Archive = async () => {
  const data = await fetchAllActiveApplications();

  return <div>{JSON.stringify(data)}</div>;
};

export default Archive;
