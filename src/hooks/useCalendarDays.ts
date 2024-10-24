import { useEffect, useState } from "react";

export const useCalendarDays = () => {
  const daysOfWeek = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
  const [daysInMonth, setDaysInMonth] = useState<number[]>([]);
  const [emptyDays, setEmptyDays] = useState(0);

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();

  useEffect(() => {
    const daysInCurrentMonth = new Date(year, month + 1, 0).getDate();

    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const emptyDaysCount = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    setDaysInMonth(Array.from({ length: daysInCurrentMonth }, (_, i) => i + 1));
    setEmptyDays(emptyDaysCount);
  }, [month, year]);

  return { daysOfWeek, daysInMonth, emptyDays };
};
