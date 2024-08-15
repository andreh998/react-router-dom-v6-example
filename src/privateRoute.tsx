import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from './userContext';

const PrivateRoute = () => {
  const { verifyUser } = useAuth();

  return verifyUser() ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;