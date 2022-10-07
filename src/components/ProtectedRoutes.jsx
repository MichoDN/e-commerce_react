import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
    const tokenExists = () => {
        const token = localStorage.getItem("token");
        return token !== ""
    }

    if (tokenExists()) {
        console.log("logged out")
        return <Navigate to='/login' />
    } else {
        console.log("logged in") 
        return <Outlet />
    }
};

export default ProtectedRoutes;