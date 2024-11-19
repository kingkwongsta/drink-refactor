"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // TODO: Implement the API call to generate cocktail recommendation
    console.log("Submitting preferences:", {
      spirit: selectedSpirit,
      flavor: selectedFlavor,
      dietaryRestrictions: selectedDietaryRestrictions,
    })
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Cocktail Preferences</CardTitle>
        <CardDescription>Tell us your preferences, and we&apos;ll recommend the perfect cocktail for you!</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          {/* Spirits Dropdown - Select your preferred base alcohol */}
          <div className="space-y-2">
            <Label htmlFor="spirit">Preferred Spirit</Label>
            <Select value={selectedSpirit} onValueChange={setSelectedSpirit}>
              <SelectTrigger id="spirit">
                <SelectValue placeholder="Select your preferred spirit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Spirits</SelectLabel>
                  {spirits.map((spirit) => (
                    <SelectItem key={spirit.value} value={spirit.value}>
                      {spirit.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {/* Flavors Dropdown - Choose your preferred taste profile */}
          <div className="space-y-2">
            <Label htmlFor="flavor">Preferred Flavor</Label>
            <Select value={selectedFlavor} onValueChange={setSelectedFlavor}>
              <SelectTrigger id="flavor">
                <SelectValue placeholder="Select your preferred flavor" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Flavors</SelectLabel>
                  {flavors.map((flavor) => (
                    <SelectItem key={flavor.value} value={flavor.value}>
                      {flavor.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {/* Dietary Restrictions Dropdown - Specify any dietary requirements */}
          <div className="space-y-2">
            <Label htmlFor="dietary">Dietary Restrictions</Label>
            <Select value={selectedDietaryRestrictions} onValueChange={setSelectedDietaryRestrictions}>
              <SelectTrigger id="dietary">
                <SelectValue placeholder="Select your dietary restrictions" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Dietary Restrictions</SelectLabel>
                  {dietaryRestrictions.map((restriction) => (
                    <SelectItem key={restriction.value} value={restriction.value}>
                      {restriction.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Get Cocktail Recommendation
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}