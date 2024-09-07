"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

const DisconnectBtn = () => {
  return (
    <div
      className="flex items-center gap-2"
      onClick={() =>
        signOut({
          redirect: true,
          callbackUrl: `${window.location.origin}/sign-in`,
        })
      }>
      <LogOut size={16} />
      Sign out
    </div>
  );
};

export default DisconnectBtn;
