import { getSession } from "@/actions/auth.action";
import Link from "next/link";
import SelectTheme from "../navbar/SelectTheme";
import { buttonVariants } from "../ui/button";
import SessionBtn from "./SessionMenu";

const RightPartHeader = async () => {
  const user = await getSession();

  console.log(user);

  return (
    <div className="flex gap-4 pr-4">
      <SelectTheme />
      {user ? (
        <SessionBtn />
      ) : (
        <Link href="/sign-in" className={buttonVariants()}>
          Sign in
        </Link>
      )}
    </div>
  );
};

export default RightPartHeader;
