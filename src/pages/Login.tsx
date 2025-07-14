import React, { useState } from 'react';
import { loginSchema } from '../utils/validation';
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/authService';
import { toast } from 'sonner';
import {
  IconBrandGithub,
  IconBrandGoogle
} from "@tabler/icons-react";
import { cn } from '../lib/utils';
import WorldMap from '@/components/ui/world-map';
import { demoDots } from '@/constants/worldMapdots';

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = loginSchema.safeParse({ email, password });
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors(fieldErrors);
      return;
    }

    try {
      await loginUser(email, password);
      toast.success('Login Successful');
      navigate('/dashboard');
    } catch (err) {
      toast.error('Invalid Credentials!!!');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === 'email') {
      setEmail(value);
    } else if (id === 'password') {
      setPassword(value);
    }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black">
      
      <div className="absolute inset-0 z-0">
        <WorldMap dots={demoDots}/>
      </div>

      <div className="relative z-10 w-full max-w-md p-4 md:p-8 bg-white/80 dark:bg-zinc-900/80 rounded-2xl shadow-xl backdrop-blur">
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
          Welcome back
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-2">
          Login to your account
        </p>

        <form onSubmit={handleLogin} className="my-8 space-y-4">
          <LabelInputContainer>
            <Label htmlFor="email">Email</Label>
            <Input id="email" value={email} onChange={handleChange} type="email" placeholder="you@example.com" />
            {errors.email && <p className="text-sm text-red-500">{errors.email[0]}</p>}
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="password">Password</Label>
            <Input id="password" value={password} onChange={handleChange} type="password" placeholder="••••••••" />
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

        <div className="my-6 h-px bg-neutral-300 dark:bg-neutral-700" />

        <div className="space-y-4">
          <OAuthButton icon={<IconBrandGithub />} label="Continue with GitHub" />
          <OAuthButton icon={<IconBrandGoogle />} label="Continue with Google" />
        </div>
      </div>
    </div>
  );
}

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>
);

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm opacity-0 transition duration-500 group-hover:opacity-100" />
  </>
);

const OAuthButton = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <button
    type="button"
    className="group relative flex h-10 w-full items-center space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-800 dark:text-neutral-300"
  >
    {icon}
    <span className="text-sm">{label}</span>
    <BottomGradient />
  </button>
);
