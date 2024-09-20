import { useState } from "react";

export const useFormHandler = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingGoogle, setIsLoadingGoogle] = useState(false);

  return {
    error,
    setError,
    isLoading,
    setIsLoading,
    isLoadingGoogle,
    setIsLoadingGoogle,
  };
};
