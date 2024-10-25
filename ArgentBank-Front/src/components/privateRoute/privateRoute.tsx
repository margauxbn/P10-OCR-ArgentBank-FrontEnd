// privateRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface PrivateRouteProps {
  element: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const token = useSelector((state: RootState) => state.user.token);

  return token && token.length > 0 ? element : <Navigate to="/connection" />;
};

export default PrivateRoute;
