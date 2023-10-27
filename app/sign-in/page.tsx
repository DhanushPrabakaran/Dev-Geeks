import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { OPTIONS } from "../api/auth/[...nextauth]/options";

import SignInButton from "@/components/SignInButton";

const SignInPage = async () => {
  const session = await getServerSession(OPTIONS);

  if (session) {
    redirect("/");
  } else {
    return (
      <div>
        <h1>SignInPage</h1>

        <SignInButton />
      </div>
    );
  }
};

export default SignInPage;