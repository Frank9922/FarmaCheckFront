import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { api } from "../api/api";
import { checkingCredentials, login, logout } from "../store/slices/auth/authSlice";

export const useCheckAuth = () => {

    const token = localStorage.getItem("token");
    const { status } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkingCredentials());
        api.get('/user', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then((response) => {
            
            dispatch(login(response.data));
        })
        .catch((error) => {
            const message = error.response.data
            dispatch(logout(message));
            
        });

    }, [])


  return {
    status
  }
}
