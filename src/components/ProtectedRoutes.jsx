import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
    const isLogged = useSelector(state => state.isLogged)
    if (isLogged) {
        console.log("logged out")
        return <Navigate to='/login' />
    } else {
        console.log("logged in") 
        return <Outlet />
    }
};

export default ProtectedRoutes;