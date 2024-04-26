import { Navigate } from "react-router-dom";
import { api } from "../../../api/api";
import { login, logout, checkingCredentials } from "./authSlice";


export const checkingAuthentication = () => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
    }
}

export const startInLogin = ({email, password}) => {

    return async(dispatch) => {
        dispatch(checkingCredentials());
        
        try {
            const { status, data } = await api.post('login', { 
                email, 
                password
            });
            
            if(!data.ok) return dispatch(logout());

            localStorage.setItem('token', data.token);
            
            return dispatch(login(data.user))
            
        } catch (error) {
            console.log(error);

            const message = error.response.data.message;

            const responseErrorMessage =  { responseErrorMessage : message }  

            console.log(responseErrorMessage);

            return dispatch(logout(responseErrorMessage));

        }
    }
}

export const startLogout = () => {
    return async(dispatch) => {
        dispatch(checkingCredentials());

        try {

            const token = localStorage.getItem("token");

            const resp = await api.get('/logout', {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })

            localStorage.removeItem("token");

            return dispatch(logout())


        }
        catch (error) {
            console.log(error);
        }
    }
}

