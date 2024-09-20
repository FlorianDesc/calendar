"use client";

import { getCategoryFromUser } from "@/actions/category.action";
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

type SelectCategoryProps<T extends FieldValues> = {
  field: ControllerRenderProps<T, any>;
};

const SelectCategory = <T extends FieldValues>({
  field,
}: SelectCategoryProps<T>) => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories", userId],
    queryFn: () => {
      if (!userId) {
        return [];
      }
      return getCategoryFromUser(userId);
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
              ? categories?.find((category) => category.id === field.value)
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
          categories?.map((category) => (
            <SelectItem key={category.id} value={category.id}>
              {category.title}
            </SelectItem>
          ))
        )}
      </SelectContent>
    </Select>
  );
};

export default SelectCategory;
