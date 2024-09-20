import { useState } from "react";

export const useDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDialog = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, handleDialog };
};
