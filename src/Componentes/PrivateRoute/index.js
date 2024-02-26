import { Navigate } from 'react-router-dom';

const Private = (Component) => {
    const auth = localStorage.getItem('isAuthenticated') //your logic

    return auth ? <Component /> : <Navigate to="/login" />
}

export default Private