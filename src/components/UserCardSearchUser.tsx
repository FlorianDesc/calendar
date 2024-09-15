import { cn } from "@/lib/utils";
import UserAvatar from "./UserAvatar";

type UserCardSearchUserProps = {
  user: {
    id: string;
    image?: string | null;
    username?: string | null;
    name?: string | null;
  };
  isLast?: boolean;
};

const UserCardSearchUser = ({ user, isLast }: UserCardSearchUserProps) => {
  const { image, username, name } = user;

  const avatarSrc = image ?? username;

  return (
    <li
      key={user.id}
      className={cn(
        "flex items-center bg-background p-2 hover:cursor-pointer hover:bg-hover-nav text-sm text-primary/80",
        isLast && "rounded-b-md"
      )}>
      <UserAvatar classname="size-6" src={avatarSrc!} hasImage={!!image} />
      <div className="ml-3">
        <p>{name || username || "Utilisateur inconnu"}</p>
      </div>
    </li>
  );
};

export default UserCardSearchUser;
