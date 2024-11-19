"use client"

import { useState } from "react"
import { PreferenceDropdown } from "@/components/dropdown"

const spirits = [
  { value: "vodka", label: "Vodka" },
  { value: "gin", label: "Gin" },
  { value: "rum", label: "Rum" },
  { value: "tequila", label: "Tequila" },
  { value: "whiskey", label: "Whiskey" },
]

const flavors = [
  { value: "sweet", label: "Sweet" },
  { value: "sour", label: "Sour" },
  { value: "bitter", label: "Bitter" },
  { value: "fruity", label: "Fruity" },
  { value: "spicy", label: "Spicy" },
]

const dietaryRestrictions = [
  { value: "vegan", label: "Vegan" },
  { value: "gluten-free", label: "Gluten-free" },
  { value: "low-calorie", label: "Low-calorie" },
  { value: "none", label: "None" },
]

export default function Home() {
  const [selectedSpirit, setSelectedSpirit] = useState<string>("")
  const [selectedFlavor, setSelectedFlavor] = useState<string>("")
  const [selectedDietaryRestrictions, setSelectedDietaryRestrictions] = useState<string>("")

  const handleSpiritSelect = (selected: string | string[]) => {
    setSelectedSpirit(selected as string)
    console.log("Selected spirit:", selected)
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-4">Cocktail Recommender</h1>
      <h2 className="text-xl text-muted-foreground text-center mb-8">Tell us your preferences, and we&apos;ll recommend the perfect cocktail for you!</h2>
      <PreferenceDropdown description="What's your preferred spirit?" options={spirits} selectType="single" onSubmit={handleSpiritSelect}/>
    </div>
  )
}