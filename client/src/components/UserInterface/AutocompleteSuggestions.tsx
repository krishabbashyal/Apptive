'use client'
import React from 'react'
import { Location } from '@prisma/client'

interface AutocompleteSuggestionsProps {
  results: Location[]
  onSelect: (location: Location) => void
  visible: boolean
}

const AutocompleteSuggestions = ({ results, onSelect, visible }: AutocompleteSuggestionsProps) => {
  if (!visible || results.length === 0) return null

  return (
    <div className="absolute z-30 w-full mt-1 rounded border border-spacer bg-background">
      <div className="max-h-64 overflow-y-auto">
        {results.map((location) => (
          <div
            key={location.id}
            className="flex flex-row items-center px-4 py-2 hover:bg-accentHighlight cursor-pointer transition-colors duration-150 border-b border-spacer last:border-0 group"
            onClick={() => onSelect(location)}
          >
            <div className="font-medium text-accent">
              {location.city}, {location.stateCode}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AutocompleteSuggestions