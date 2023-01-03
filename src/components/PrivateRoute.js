import {  Navigate } from "react-router-dom";
import Authcontext from "../Contexts/Authcontext";
import { useContext } from "react";

const PrivateRoute = ({children}) => {

    let {user} = useContext(Authcontext);

    
    return(
        !user? <Navigate to='/login' /> : children
    )
}
export default PrivateRoute;
