"use client";

import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import FormCreateCalendar from "./FormCreateCalendar";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";

const DialogCreateCalendar = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Ajoutez un calendrier</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <DialogTitle className="text-lg font-semibold text-primary">
            Créer un nouveau calendrier
          </DialogTitle>
          <DialogDescription className="mb-6 text-sm text-primary">
            Remplissez le formulaire ci-dessous pour créer votre calendrier
          </DialogDescription>
        </DialogHeader>
        <FormCreateCalendar />
      </DialogContent>
    </Dialog>
  );
};

export default DialogCreateCalendar;
