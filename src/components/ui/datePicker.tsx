"use client";

import { cn } from "@/lib/utils";
import { EventType } from "@/types/event.type";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { ControllerRenderProps } from "react-hook-form";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

type DatePickerProps = {
  field?: ControllerRenderProps<EventType, "date">;
};

const DatePicker = ({ field }: DatePickerProps) => {
  const handleSelectDate = (selectedDate: Date | undefined) => {
    field?.onChange(selectedDate);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full pl-3 text-left font-normal",
            !field?.value && "text-muted-foreground"
          )}>
          {field?.value ? (
            format(field.value, "PPP", { locale: fr })
          ) : (
            <span>date de l&apos;événement</span>
          )}
          <CalendarIcon className="ml-auto size-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="z-50 w-auto p-0">
        <Calendar
          mode="single"
          selected={field?.value}
          onSelect={handleSelectDate}
          initialFocus
          locale={fr}
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
