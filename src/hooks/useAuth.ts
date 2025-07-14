import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/services/firebase';
import type { User } from 'firebase/auth';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); 

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     setUser(user);
  //     setLoading(false); 
  //   });

  //   return () => unsubscribe();
  // }, []);

  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    const isDemo = localStorage.getItem("demo_login") === "true";
    if (user || isDemo) {
      setUser(user || { uid: 'demo', email: 'demo@demo.com' } as User);
    } else {
      setUser(null);
    }
    setLoading(false);
  });

  return () => unsubscribe();
}, []);

  return { user, loading }; 
};
