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

import { createCalendar } from "@/actions/calendar.action";
import { useToast } from "@/hooks/use-toast";
import { useFormHandler } from "@/hooks/useFormHandler";
import { CalendarSchema } from "@/schemas/calendar.schema";
import { CalendarType } from "@/types/calendar.type";
import { useForm } from "react-hook-form";
import SelectCategory from "./SelectCategory";
import Spinner from "./ui/spinner";

type FormCreateCalendarType = {
  handleDialog: () => void;
};

const FormCreateCalendar = ({ handleDialog }: FormCreateCalendarType) => {
  const { toast } = useToast();
  const { isLoading, setIsLoading, error, setError } = useFormHandler();
  const form = useForm<CalendarType>({
    resolver: zodResolver(CalendarSchema),
    defaultValues: {
      title: "",
      categoryId: "",
    },
  });

  const onSubmit = async (values: CalendarType) => {
    setIsLoading(true);
    setError(null);
    let isError = false;

    try {
      const calendar = await createCalendar(values);
    } catch (e) {
      setError("Une erreur est survenu lors de la création du calendrier");
      isError = true;
    } finally {
      setIsLoading(false);
    }

    if (!isError) {
      handleDialog();
      toast({
        title: "Succès",
        description: "Votre calendrier a été créer avec succès",
      });
    }
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

            {error && (
              <p className="mb-4 text-[0.8rem] font-medium text-destructive">
                {error}
              </p>
            )}

            <Button
              disabled={isLoading}
              type="submit"
              className="mt-4 flex w-full items-center justify-center bg-primary py-2 text-background">
              {isLoading ? <Spinner variant="primary" /> : "valider"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default FormCreateCalendar;
