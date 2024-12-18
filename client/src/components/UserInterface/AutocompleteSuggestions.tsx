import React from 'react'
import { prisma } from '@/lib/prisma'

interface AutocompleteSuggestionsProps {
  query?: string
}

const AutocompleteSuggestions =  async ({ query }: AutocompleteSuggestionsProps) => {

  const results = await prisma.location.findMany({
    take: 10,
    where: {
      city: {
        contains: ""
      }
    }
  })

  console.log(results)

  return (
    <div className="w-64 left-[1020px] top-[570px] absolute z-20 mt-1 rounded border border-spacer bg-background">
      <div className="max-h-64 overflow-y-scroll">
        {results.map((location) => (
          <div
            key={location.id}
            className="flex flex-row items-center px-4 py-2 hover:bg-accentHighlight cursor-pointer transition-colors duration-150 border-b border-spacer last:border-0 group"
          >
            <div className="">
              <div className="font-medium text-accent">
                {location.city}, {location.stateCode}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AutocompleteSuggestions