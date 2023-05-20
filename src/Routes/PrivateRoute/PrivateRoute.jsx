import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location =useLocation();

    if(loading){
       return <div className="radial-progress text-purple-600 mx-20 my-10" style={{ "--value": "100", "--size": "12rem", "--thickness": ".5rem" }}>70%</div>
    }

    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to="/login"></Navigate>
        
};

export default PrivateRoute;