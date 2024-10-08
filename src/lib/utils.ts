import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFirstLetter(word: string) {
  return word[0];
}

export function firstLetterUppercase(word: string) {
  return word[0].toUpperCase() + word.slice(1);
}
