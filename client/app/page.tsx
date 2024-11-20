"use client"

import { useState } from "react"

export default function Home() {
  const [selectedSpirit, setSelectedSpirit] = useState<string>("")
  const [selectedFlavor, setSelectedFlavor] = useState<string>("")
  const [selectedDietaryRestrictions, setSelectedDietaryRestrictions] = useState<string>("")

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-4">Cocktail Recommender</h1>
      <h2 className="text-xl text-muted-foreground text-center mb-8">Tell us your preferences, and we&apos;ll recommend the perfect cocktail for you!</h2>
      
      <button 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => {
          console.log('Spirit:', selectedSpirit || 'Not selected');
          console.log('Flavor:', selectedFlavor || 'Not selected');
          console.log('Dietary Restrictions:', selectedDietaryRestrictions || 'Not selected');
        }}
      >
        Show Selected Preferences
      </button>
    </div>
  )
}