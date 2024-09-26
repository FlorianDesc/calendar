import { getSession } from "@/actions/auth.action";
import { getFirstLetter } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import UserAvatar from "../UserAvatar";
import DisconnectBtn from "./DisconnectBtn";

const SessionBtn = async () => {
  const user = await getSession();

  if (!user) {
    return;
  }

  console.log(user.image ?? false);

  const src = user.image ?? getFirstLetter(user.username);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {<UserAvatar src={src} hasImage={user.image ? true : false} />}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
        <DropdownMenuItem>
          <DisconnectBtn />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SessionBtn;
