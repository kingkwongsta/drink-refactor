"use client"

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
  stateSetter: (value: string) => void
}

export function PreferenceDropdown({
  description, 
  options,
  selectType,
  stateSetter
}: PreferenceDropdownProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="preference">{description}</Label>
      <Select onValueChange={(value) => stateSetter(value)}>
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
  )
}
