"use client"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dropdown } from "@/components/dropdown"

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
  ]

  interface PreferenceProps {
    setSelectedSpirit: (value: string) => void;
    setSelectedFlavor: (value: string) => void;
    setSelectedDietaryRestrictions: (value: string[]) => void;
  }

  export default function Preference({ setSelectedSpirit, setSelectedFlavor, setSelectedDietaryRestrictions }: PreferenceProps) {
    return (
    <Card className="w-full max-w-2xl mx-auto">
        <CardContent>
          <div className="space-y-4">
            <Dropdown 
              description="What's your preferred spirit?" 
              options={spirits} 
              selectType="single" 
              stateSetter={setSelectedSpirit}
            />
            <Dropdown 
              description="What flavors do you enjoy?" 
              options={flavors} 
              selectType="single" 
              stateSetter={setSelectedFlavor}
            />
            <Dropdown 
              description="Any dietary restrictions?" 
              options={dietaryRestrictions} 
              selectType="multi" 
              stateSetter={setSelectedDietaryRestrictions}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Get Cocktail Recommendation
          </Button>
        </CardFooter>
      </Card>
  )
}

