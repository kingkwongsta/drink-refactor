"use client"
import { PreferenceDropdown } from "@/components/dropdown"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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

export default function Preference(){
  return (
    <Card className="w-full max-w-2xl mx-auto">
        <CardContent>
          <div className="space-y-4">
            <PreferenceDropdown 
              description="What's your preferred spirit?" 
              options={spirits} 
              selectType="single" 
              stateSetter={setSelectedSpirit}
            />
            <PreferenceDropdown 
              description="What flavors do you enjoy?" 
              options={flavors} 
              selectType="single" 
              stateSetter={setSelectedFlavor}
            />
            <PreferenceDropdown 
              description="Any dietary restrictions?" 
              options={dietaryRestrictions} 
              selectType="single" 
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

