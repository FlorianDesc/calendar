"use client";

import { getUsersByName } from "@/actions/user.action";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { Input } from "./ui/input";
import UserListSearchUser from "./UserListSearchUser";

type SearchUserInputProps<T extends FieldValues> = {
  field: ControllerRenderProps<T, any>;
};

const SearchUserInput = <T extends FieldValues>({
  field,
}: SearchUserInputProps<T>) => {
  const [query, setQuery] = useState("");
  const [showSecondInput, setShowSecondInput] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const secondInputRef = useRef<HTMLInputElement>(null);

  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users", { query }],
    queryFn: () => getUsersByName(query),
    enabled: !!query,
  });

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };

  const handleInputFocus = () => {
    setShowSecondInput(true);
    setTimeout(() => {
      secondInputRef.current?.focus();
    }, 0);
  };

  const handleDocumentClick = (e: MouseEvent) => {
    if (
      !firstInputRef.current?.contains(e.target as Node) &&
      !secondInputRef.current?.contains(e.target as Node)
    ) {
      setShowSecondInput(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

  return (
    <div className="relative">
      <Input
        {...field}
        ref={firstInputRef}
        onFocus={handleInputFocus}
        placeholder={!showSecondInput ? "Cherchez un utilisateur" : ""}
      />

      {showSecondInput && (
        <div className="absolute mt-1 w-full rounded-md border">
          <div className="relative">
            <Input
              value={query}
              onChange={handleQueryChange}
              placeholder="Entrez votre recherche"
              ref={secondInputRef}
              className="w-full rounded-b-none rounded-t-md border-none bg-background focus-visible:ring-0"
            />
            <Search
              size={18}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-primary/50"
            />
          </div>
          {users !== null && (
            <UserListSearchUser isLoading={isLoading} users={users} />
          )}
        </div>
      )}
    </div>
  );
};

export default SearchUserInput;
