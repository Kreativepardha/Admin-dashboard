import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../utils/validation";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { toast } from "sonner";
import { cn } from "../lib/utils";

export function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("demo@demo.com");
  const [password, setPassword] = useState("passwordaaaa");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = loginSchema.safeParse({ email, password });

    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors);
      return;
    }

    if (email === "demo@demo.com" && password === "passwordaaaa") {
      toast.success("Logged in as demo user");
      navigate("/dashboard");
      return;
    }

    toast.error("Invalid demo credentials");
  };

  return (
    <form onSubmit={handleSubmit} className="my-8 space-y-4">
      <LabelInputContainer>
        <Label htmlFor="email">Email</Label>
        <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <p className="text-sm text-red-500">{errors.email[0]}</p>}
      </LabelInputContainer>

      <LabelInputContainer>
        <Label htmlFor="password">Password</Label>
        <Input id="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
        {errors.password && <p className="text-sm text-red-500">{errors.password[0]}</p>}
      </LabelInputContainer>

      <button
        type="submit"
        className="group relative block w-full h-10 rounded-md bg-black text-white font-medium hover:opacity-90"
      >
        Login &rarr;
        <BottomGradient />
      </button>
    </form>
  );
}

function LabelInputContainer({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>;
}

function BottomGradient() {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm opacity-0 transition duration-500 group-hover:opacity-100" />
    </>
  );
}
