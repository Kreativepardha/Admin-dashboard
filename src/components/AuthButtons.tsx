import { auth } from "../services/firebase";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "sonner";
import { IconBrandGoogle, IconBrandGithub } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export function AuthButtons() {
    const navigate = useNavigate()

  const login = async (provider: "google" | "github") => {
    const authProvider =
      provider === "google"
        ? new GoogleAuthProvider()
        : new GithubAuthProvider();

    try {
      const res = await signInWithPopup(auth, authProvider);
      toast.success(`Welcome ${res.user.displayName}`);
      // shld store token
         navigate("/dashboard");
    } catch (err: any) {
      toast.error(err.message || "Login failed");
    }
  };

  return (
    <div className="space-y-4">
      <OAuthButton
        icon={<IconBrandGoogle />}
        label="Continue with Google"
        onClick={() => login("google")}
      />
    </div>
  );
}

function OAuthButton({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="group relative flex h-10 w-full items-center space-x-2 rounded-md bg-cyan-200 px-4 font-medium text-black dark:bg-zinc-800 dark:text-neutral-300"
    >
      {icon}
      <span className="text-sm">{label}</span>
    </button>
  );
}
