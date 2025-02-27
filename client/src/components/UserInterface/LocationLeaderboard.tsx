'use client'

import React from "react";
import { Trophy } from "@phosphor-icons/react/dist/ssr";

interface LocationEntryProps {
  city: string;
  state: string;
  applications: number;
  rank: number;
}

const LocationEntry = ({
  city,
  state,
  applications,
  rank,
}: LocationEntryProps) => {
  // Define styling based on rank
  const isTopThree = rank <= 3;
  const getBgColor = () => {
    if (rank === 1)
      return "bg-gradient-to-r from-yellow-500/10 to-yellow-300/0";
    if (rank === 2) return "bg-gradient-to-r from-gray-400/10 to-gray-300/0";
    if (rank === 3) return "bg-gradient-to-r from-amber-700/10 to-amber-600/0";
    return "";
  };

  const getTrophyColor = () => {
    if (rank === 1) return "text-yellow-500";
    if (rank === 2) return "text-gray-400";
    if (rank === 3) return "text-amber-700";
    return "text-accent";
  };

  const getTrophySize = () => {
    if (rank === 1) return 30;
    if (rank === 2) return 25;
    if (rank === 3) return 20;
    return 16;
  };

  return (
    <div
      className={`flex items-center justify-between rounded-lg px-4 py-3.5 transition-all duration-200 ${isTopThree ? `${getBgColor()} shadow-md` : "hover:bg-accentHighlight hover:bg-opacity-50"} `}
    >
      <div className="flex items-center gap-x-4">
        <div className="flex flex-col">
          <p
            className={`font-semibold ${isTopThree ? "text-lg text-white" : "text-gray-200"}`}
          >
            {city}, {state}
          </p>
          <p className="text-sm text-gray-400">
            {applications} application{applications !== 1 ? "s" : ""} sent
          </p>
        </div>
      </div>
      {rank <= 3 && (
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full`}
        >
          <Trophy
            size={getTrophySize()}
            weight="fill"
            className={getTrophyColor()}
          />
        </div>
      )}
    </div>
  );
};

const LocationLeaderboard = () => {
  // Example data - in a real app, you'd pass this as props or fetch it
  const locations = [
    { city: "Austin", state: "TX", applications: 8, rank: 1 },
    { city: "New York", state: "NY", applications: 7, rank: 2 },
    { city: "San Francisco", state: "CA", applications: 6, rank: 3 },
    { city: "Dallas", state: "TX", applications: 5, rank: 4 },
    { city: "Los Angeles", state: "CA", applications: 4, rank: 5 },
    { city: "Palo Alto", state: "CA", applications: 2, rank: 6 },
    { city: "Chicago", state: "IL", applications: 1, rank: 7 },
  ];

  return (
    <div className="w-full rounded-xl bg-background p-6 shadow-lg md:w-3/12">
      <h2 className="mb-4 text-xl font-medium text-white">Leaderboard</h2>
      <div className="flex flex-col space-y-3">
        {locations.map((location, index) => (
          <LocationEntry
            key={index}
            city={location.city}
            state={location.state}
            applications={location.applications}
            rank={location.rank}
          />
        ))}
      </div>
    </div>
  );
};

export default LocationLeaderboard;
