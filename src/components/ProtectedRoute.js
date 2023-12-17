import { useContext } from 'react';
import {
  Routes,
  Route,
  NavLink,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import { UserContext } from '../App';

function ProtectedRoute({ children }){
  const userInfo = useContext(UserContext)

  if (!userInfo.user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;