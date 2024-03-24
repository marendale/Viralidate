import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/AuthContext";

export const PrivateRoute = ({component, allowed}) => {
    const {user, userType} = useContext(Context);

    if(user && allowed.includes(userType)){
        return component;
    }else{
        return <Navigate to="/" replace/>
    }
}
