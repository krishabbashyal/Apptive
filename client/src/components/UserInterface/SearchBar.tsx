'use client'

import React from 'react'
import { MagnifyingGlass } from "@phosphor-icons/react";
import { X } from '@phosphor-icons/react';
import { useState, useEffect } from 'react';

interface SearchBarProps {
  placeholder?: string
}

const SearchBar = ({placeholder}: SearchBarProps) => {

  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    console.log(searchTerm)
  }, [searchTerm])

  return (
    <div>
      {searchTerm.length > 0 && (
        <X onClick={() => setSearchTerm('')} className='hover:bg-foreground p-0.5 rounded hover:bg-opacity-25 absolute ml-64 mt-2  hover:cursor-pointer' size={22} />
      )}
      <MagnifyingGlass className='absolute ml-2 mt-2' size={24} />
      <input placeholder={placeholder || 'Search'} onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} className='h-10 w-72 rounded-lg bg-spacer border focus:border-accent border-spacer pl-10 focus:outline-none' type="text" />

    </div>
  )
}

export default SearchBar