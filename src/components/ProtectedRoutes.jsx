import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
    const isLogged = useSelector(state => state.isLogged)

    if (isLogged) return <Outlet />
    else return <Navigate to='/login' />
};

export default ProtectedRoutes;