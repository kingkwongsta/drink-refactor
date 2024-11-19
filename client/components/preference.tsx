"use client"

import * as React from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const spirits = [
    { value: "vodka", label: "Vodka" },
    { value: "gin", label: "Gin" },
    { value: "rum", label: "Rum" },
    { value: "tequila", label: "Tequila" },
    { value: "whiskey", label: "Whiskey" },
  ]
  
  export const flavors = [
    { value: "sweet", label: "Sweet" },
    { value: "sour", label: "Sour" },
    { value: "bitter", label: "Bitter" },
    { value: "fruity", label: "Fruity" },
    { value: "spicy", label: "Spicy" },
  ]
  
  export const dietaryRestrictions = [
    { value: "vegan", label: "Vegan" },
    { value: "gluten-free", label: "Gluten-free" },
    { value: "low-calorie", label: "Low-calorie" },
    { value: "none", label: "None" },
  ]

interface PreferenceDropdownProps {
  description: string
  options: { value: string; label: string }[]
  selectType: "single"
  stateSetter: (value: string) => void
}

export function PreferenceDropdown({
  description,
  options,
  selectType,
  stateSetter,
}: PreferenceDropdownProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {description}
      </label>
      <Select onValueChange={stateSetter}>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

