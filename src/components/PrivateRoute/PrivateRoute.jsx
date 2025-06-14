import { Navigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

const PrivateRoute = ({ component: Component, restrictedTo = "/" }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? Component : <Navigate to={restrictedTo} />;
};

export default PrivateRoute;
