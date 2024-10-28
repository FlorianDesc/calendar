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

import { createEvent } from "@/actions/event.action";
import { useToast } from "@/hooks/use-toast";
import { useFormHandler } from "@/hooks/useFormHandler";
import { EventSchema } from "@/schemas/event.schema";
import { EventType } from "@/types/event.type";
import { useForm } from "react-hook-form";
import SelectCalendar from "./SelectCalendar";
import DatePicker from "./ui/datePicker";
import Spinner from "./ui/spinner";

type FormCreateEventType = {
  handleDialog: () => void;
};

const FormCreateEvent = ({ handleDialog }: FormCreateEventType) => {
  const { toast } = useToast();
  const { isLoading, setIsLoading, error, setError } = useFormHandler();
  const form = useForm<EventType>({
    resolver: zodResolver(EventSchema),
    defaultValues: {
      title: "",
      date: undefined,
      calendarId: "",
    },
  });

  const onSubmit = async (values: EventType) => {
    setIsLoading(true);
    setError(null);
    let isError = false;

    try {
      const createdEvent = await createEvent(values);
    } catch (e) {
      setError("Une erreur est survenu lors de la création de l'évenement");
      isError = true;
    } finally {
      setIsLoading(false);
    }

    if (!isError) {
      handleDialog();
      toast({
        title: "Succès",
        description: "Votre évenement a été créé avec succès",
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
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <DatePicker field={field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="calendarId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Calendrier</FormLabel>
                  <FormControl>
                    <SelectCalendar field={field} />
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

export default FormCreateEvent;
