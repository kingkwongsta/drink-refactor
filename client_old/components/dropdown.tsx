"use client"

import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"

interface Option {
  value: string
  label: string
}

interface BaseDropdownProps {
  description: string
  options: Option[]
}

interface SingleDropdownProps extends BaseDropdownProps {
  selectType: 'single'
  stateSetter: (value: string) => void
}

interface MultiDropdownProps extends BaseDropdownProps {
  selectType: 'multi'
  stateSetter: (values: string[]) => void
}

type PreferenceDropdownProps = SingleDropdownProps | MultiDropdownProps

export function Dropdown({
  description, 
  options,
  selectType,
  stateSetter
}: PreferenceDropdownProps) {
  const [selectedValues, setSelectedValues] = useState<string[]>([])

  return (
    <div className="space-y-2">
      <Label htmlFor="preference">{description}</Label>
      {selectType === 'single' ? (
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
      ) : (
        <div className="space-y-2">
          {options.map((option) => (
            <div key={option.value} className="flex items-center space-x-2">
              <Checkbox 
                id={option.value}
                checked={selectedValues.includes(option.value)}
                onCheckedChange={(checked) => {
                  const newValues = checked 
                    ? [...selectedValues, option.value]
                    : selectedValues.filter(v => v !== option.value);
                  setSelectedValues(newValues);
                  (stateSetter as (values: string[]) => void)(newValues);
                }}
              />
              <Label htmlFor={option.value}>{option.label}</Label>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
