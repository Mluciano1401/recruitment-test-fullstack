import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const token = sessionStorage.getItem('token');
    if (token && token != 'undefinend'){
        return children;
    }
    return <Navigate to="/"/>;
}

export default PrivateRoute;