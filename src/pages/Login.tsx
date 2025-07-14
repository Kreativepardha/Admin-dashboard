import WorldMap from "@/components/ui/world-map";
import { demoDots } from "@/constants/worldMapdots";
import { AuthButtons } from "@/components/AuthButtons";
import { LoginForm } from "@/components/LoginForm";

export default function Login() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black">
      <div className="absolute inset-0 z-0">
        <WorldMap dots={demoDots} />
      </div>

      <div className="relative z-10 w-full max-w-md p-4 md:p-8 bg-white/80 dark:bg-zinc-900/80 rounded-2xl shadow-xl backdrop-blur">
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">Welcome back</h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-2">Login to your account</p>
        
        <LoginForm />
        <div className="my-6 h-px bg-neutral-300 dark:bg-neutral-700" />
        <AuthButtons />
      </div>
    </div>
  );
}
