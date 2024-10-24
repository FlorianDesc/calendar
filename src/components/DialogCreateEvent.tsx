"use client";

import { useDialog } from "@/hooks/useDialog";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import FormCreateCalendar from "./FormCreateCalendar";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";

const DialogCreateEvent = () => {
  const { isOpen, handleDialog } = useDialog();

  return (
    <Dialog open={isOpen} onOpenChange={handleDialog}>
      <DialogTrigger asChild>
        <Button className="text-xs">Ajoutez un évenement</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <DialogTitle className="text-lg font-semibold text-primary">
            Créer un nouvelle évenement
          </DialogTitle>
          <DialogDescription className="mb-6 text-sm text-primary">
            Remplissez le formulaire ci-dessous pour créer votre évenement
          </DialogDescription>
        </DialogHeader>
        <FormCreateCalendar handleDialog={handleDialog} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogCreateEvent;
