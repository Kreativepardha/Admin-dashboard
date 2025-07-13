import { useState } from 'react';
import { loginSchema } from '../utils/validation';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/authService';
import { toast } from 'sonner';

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

    const handleLogin = async () => {
        const result = loginSchema.safeParse({ email,  password})
        if(!result.success) {
                const fieldErrors = result.error.flatten().fieldErrors;
                setErrors(fieldErrors)
                return;
        }
        try {
            await loginUser(email, password)
            toast.success('Login Successfull')
        } catch (err) {
            toast.error('Invalid Credentials!!!')
        }
    }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input
        className="block border p-2 w-full mb-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <p className="text-red-500">{errors.email[0]}</p>}

      <input
        type="password"
        className="block border p-2 w-full mb-2"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errors.password && <p className="text-red-500">{errors.password[0]}</p>}

      <button onClick={handleLogin} className="bg-black text-white px-4 py-2 rounded">
        Login
      </button>
    </div>
  );
}
