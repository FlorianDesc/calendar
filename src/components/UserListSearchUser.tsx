import { cn } from "@/lib/utils";
import UserCardSearchUser from "./UserCardSearchUser";

type UserListSearchUserProps = {
  isLoading: boolean;
  users: {
    id: string;
    image: string | null;
    username: string | null;
    name: string | null;
  }[];
};

const UserListSearchUser = ({ isLoading, users }: UserListSearchUserProps) => {
  return (
    <div className={cn(isLoading ? "" : "")}>
      <ul>
        {isLoading ? (
          <li className="flex justify-center rounded-b bg-background px-3 py-2 text-sm text-muted-foreground">
            Chargement...
          </li>
        ) : users.length === 0 ? (
          <li className="flex justify-center rounded-b bg-background px-3 py-2 text-sm text-muted-foreground">
            Aucun utilisateur trouvé
          </li>
        ) : (
          users.map((user, i) => (
            <UserCardSearchUser
              key={user.id}
              user={user}
              isLast={i === users.length - 1}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default UserListSearchUser;
