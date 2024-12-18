'use client'
import React, { useState, useEffect } from 'react'
import { Location } from '@prisma/client'
import { FieldError, UseFormRegisterReturn } from 'react-hook-form'
import { searchLocations } from '../../app/(main)/dashboard/actions'
import AutocompleteSuggestions from '../UserInterface/AutocompleteSuggestions'

interface LocationInputProps {
  register: UseFormRegisterReturn
  error?: FieldError
  label: string
  id: string
}

const LocationInput = ({ register, error, label, id }: LocationInputProps) => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Location[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (query.length >= 2) {
        const searchResults = await searchLocations(query)
        setResults(searchResults)
        setShowSuggestions(true)
      } else {
        setResults([])
        setShowSuggestions(false)
      }
    }, 200)

    console.log(query)  

    return () => clearTimeout(timer)
  }, [query])

  const handleSelect = (location: Location) => {
    setSelectedLocation(location)
    setQuery(`${location.city}, ${location.stateCode}`)
    
    setShowSuggestions(false)
  }


  return (
    <div className="relative">
         <label
          htmlFor={id}
          className={
            error
              ? "absolute -top-2.5 animate-shake text-danger"
              : "absolute -top-2.5"
          }
        >
          {label}
        </label>
      <input
        {...register}
        autoComplete='off'
        type="text"
        id={id}
        className={`mt-4 h-10 w-full rounded border bg-background pl-3 shadow placeholder:text-spacer focus:outline-none focus:ring-1 focus:ring-accent ${
          error ? "border-danger" : "border-spacer"
        }`}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => {
          setTimeout(() => setShowSuggestions(false), 200)
        }}
      />
      <AutocompleteSuggestions
        results={results}
        onSelect={handleSelect}
        visible={showSuggestions}
      />
      {error && (
        <p className="mt-1 animate-shake text-sm text-danger">
          {error.message}
        </p>
      )}
    </div>
  )
}

export default LocationInput