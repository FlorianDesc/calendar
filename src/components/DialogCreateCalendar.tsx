"use client";

import { useDialog } from "@/hooks/useDialog";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const DialogCreateCalendar = () => {
  const { isOpen, setIsOpen } = useDialog();

  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <DialogTrigger className={cn(buttonVariants(), "w-fit")}>
        Ajoutez un calendrier
      </DialogTrigger>
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
  );
};

export default DialogCreateCalendar;
