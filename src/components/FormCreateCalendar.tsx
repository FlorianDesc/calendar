"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";

import { CalendarSchema } from "@/schemas/calendar.schema";
import { CalendarType } from "@/types/calendar.type";
import { useForm } from "react-hook-form";
import SearchUserInput from "./SearchUserInput";
import SelectCategory from "./SelectCategory";

const FormCreateCalendar = () => {
  const form = useForm<CalendarType>({
    resolver: zodResolver(CalendarSchema),
    defaultValues: {
      title: "",
      categoryId: "",
      users: [],
    },
  });

  const onSubmit = async (values: CalendarType) => {
    console.log(values);
  };

  return (
    <div className="flex h-full flex-col items-center justify-start">
      <div className="w-full max-w-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Titre</FormLabel>
                  <FormControl>
                    <Input placeholder="Titre du calendrier" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Catégorie</FormLabel>
                  <FormControl>
                    <SelectCategory field={field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="users"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Utilisateurs</FormLabel>
                  <FormControl>
                    <SearchUserInput field={field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="mt-4 flex w-full items-center justify-center bg-primary py-2 text-background">
              valider
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default FormCreateCalendar;
