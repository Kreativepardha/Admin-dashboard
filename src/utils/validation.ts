import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }).trim(),
  password: z.string().min(6, { message: "Password too short" }).trim()
});

export type LoginInput = z.infer<typeof loginSchema>;
