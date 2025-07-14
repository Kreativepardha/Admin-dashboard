import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useAuth();

  if (loading) return <div className="p-4">Checking authentication...</div>; // wait
  if (!user) return <Navigate to="/" replace />;

  return children;
};
