import { atom } from 'jotai'

export const selectedSpiritAtom = atom<string>('')
export const selectedFlavorAtom = atom<string>('')
export const selectedDietaryRestrictionsAtom = atom<string[]>([]) 