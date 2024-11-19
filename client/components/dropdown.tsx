"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
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

interface Option {
  value: string
  label: string
}

interface PreferenceDropdownProps {
  description: string
  options: Option[]
  selectType: 'single' | 'multi'
  onSubmit: (selected: string | string[]) => void
}

export function PreferenceDropdown({
  description, 
  options,
  selectType,
  onSubmit 
}: PreferenceDropdownProps) {
  const [selected, setSelected] = useState<string>("")

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    onSubmit(selected)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="preference">{description}</Label>
            <Select value={selected} onValueChange={setSelected}>
              <SelectTrigger id="preference">
                <SelectValue placeholder="Make your selection" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Options</SelectLabel>
                  {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Submit Selection
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
