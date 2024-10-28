"use client";

import { getCalendarFromUser } from "@/actions/calendar.action";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

type SelectCalendarProps<T extends FieldValues> = {
  field: ControllerRenderProps<T, any>;
};

const SelectCalendar = <T extends FieldValues>({
  field,
}: SelectCalendarProps<T>) => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const { data: calendars, isLoading } = useQuery({
    queryKey: ["calendars", userId],
    queryFn: () => {
      if (!userId) {
        return [];
      }
      return getCalendarFromUser();
    },
    enabled: !!userId,
  });

  return (
    <Select onValueChange={field.onChange} value={field.value}>
      <SelectTrigger ref={field.ref} className="w-full">
        <SelectValue
          className="flex items-center justify-center"
          placeholder={
            field.value
              ? calendars?.find((calendar) => calendar.id === field.value)
                  ?.title
              : "Sélectionnez une catégorie"
          }
        />
      </SelectTrigger>
      <SelectContent>
        {isLoading ? (
          <SelectItem key="loading" value="loading" disabled>
            Loading ...
          </SelectItem>
        ) : (
          calendars?.map((calendar) => (
            <SelectItem key={calendar.id} value={calendar.id}>
              {calendar.title}
            </SelectItem>
          ))
        )}
      </SelectContent>
    </Select>
  );
};

export default SelectCalendar;
