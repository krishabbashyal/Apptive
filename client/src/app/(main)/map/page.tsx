'use server'

import React from "react";
import ApplicationMap from "@/components/UserInterface/ApplicationMap";
import LocationLeaderboard from "@/components/UserInterface/LocationLeaderboard";
import { fetchLocationStats } from "../actions";

const Map = () => {

  const fetchData = async () => {
    const data = await fetchLocationStats();
    console.log("\n\n\nLocation Data:\n\n\n ", data);
  };

  fetchData();




  return (
    <div className="mx-12 h-full pt-8">
      <div className="h-full rounded-tl-xl rounded-tr-xl bg-foreground">
        <div className="mx-10 h-full pt-6">
          <div className="flex flex-row justify-between">
            <h1 className="text-3xl font-semibold text-gray-100">
              Desired Locations
            </h1>
          </div>
          <div className="mt-8">
            <div className="flex w-full flex-row gap-x-8">
              <ApplicationMap />
              <LocationLeaderboard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
