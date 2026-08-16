import { useEffect, type ReactNode } from 'react';
import { useAuth } from '../contexts/FakeAuthContext';
import { useNavigate } from 'react-router-dom';

export default function ProtectedRoutes({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate('/');
    },
    [isAuthenticated, navigate],
  );

  return isAuthenticated ? children : null;
}
