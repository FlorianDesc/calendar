"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";

const SelectTheme = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = (value: string) => {
    setTheme(value);
  };

  if (!mounted) return null;

  return (
    <Select onValueChange={handleThemeChange}>
      <SelectTrigger
        className="h-full w-fit leading-3"
        withBorder={false}
        withFocusBorder={false}
        withArrow={false}
        withShadow={false}>
        {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectTheme;
