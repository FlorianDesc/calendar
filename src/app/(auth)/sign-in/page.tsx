import { getSession } from "@/actions/auth.action";
import { redirect } from "next/navigation";
import SignInForm from "../../../components/authForm/SignInForm";

const page = async () => {
  const session = await getSession();

  if (session?.user) {
    redirect("/");
  }

  return (
    <div className="mt-10">
      <SignInForm />
    </div>
  );
};

export default page;
