import { AvatarFallback } from "@radix-ui/react-avatar";
import { Avatar, AvatarImage } from "./ui/avatar"; // Renommé pour éviter les conflits

type UserAvatarProps = {
  src: string;
  hasImage?: boolean;
  alt?: string;
};

const UserAvatar = ({ src, hasImage = true, alt }: UserAvatarProps) => {
  return (
    <Avatar>
      {hasImage ? (
        <AvatarImage src={src} alt={alt} />
      ) : (
        <AvatarFallback className="flex size-full items-center justify-center bg-muted">
          {src.toUpperCase()}
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
