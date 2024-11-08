import { cn } from "@/utils/utils";

type SpinnerProps = {
  variant: "primary" | "secondary";
};

const Spinner = ({ variant }: SpinnerProps) => {
  return (
    <div
      className={cn(
        "size-4 animate-spin rounded-full border-[3px] ",
        variant === "primary"
          ? "border-muted border-t-muted/50"
          : "border-primary border-t-primary/50"
      )}
    />
  );
};

export default Spinner;
