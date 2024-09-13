"use client";

import { useDialog } from "@/hooks/useDialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";

const SearchBar = () => {
  const { isOpen, setIsOpen } = useDialog();

  return (
    <div className="flex items-center">
      <Input
        className="h-8 text-xs"
        placeholder="Recherchez un calendrier ou un événement"
        onClick={() => setIsOpen(true)}
      />
      <Dialog open={isOpen} onOpenChange={() => setIsOpen(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Recherchez dans les calendriers</DialogTitle>
            <DialogDescription>
              Vous pouvez chercher des événements ou des calendriers spécifiques
              ici.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SearchBar;
