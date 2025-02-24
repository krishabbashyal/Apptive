"use client";

import React, { useState } from "react";
import { MagnifyingGlass, X } from "@phosphor-icons/react";

interface SearchBarProps {
  onSearchChange: (searchTerm: string) => void;
}

const SearchBar = ({ onSearchChange }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <div>
      {searchTerm.length > 0 && (
        <X
          onClick={() => {
            setSearchTerm("");
            onSearchChange("");
          }}
          className="absolute ml-64 mt-2 rounded p-0.5 hover:cursor-pointer hover:bg-foreground hover:bg-opacity-25"
          size={22}
        />
      )}
      <MagnifyingGlass className="absolute ml-2 mt-2" size={24} />
      <input
        placeholder={"Search"}
        onChange={handleSearchTermChange}
        value={searchTerm}
        className="h-10 w-72 rounded-lg border border-spacer bg-spacer pl-10 focus:border-accent focus:outline-none"
        type="text"
      />
    </div>
  );
};

export default SearchBar;
