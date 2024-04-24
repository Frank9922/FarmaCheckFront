import { createSlice } from '@reduxjs/toolkit';
import { status } from './status';


export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: status.notAuthenticated,
        token: null,
        uid: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
        errorResponse:null
    },

    reducers: {
        login: (state, { payload }) => {

            state.status= status.authenticated,
            state.uid= payload.id,
            state.displayName= payload.name,
            state.photoURL= payload.photoURL,
            state.token = payload.token
            state.errorMessage= null;
        },

        logout: (state, {payload}) => {
            
            state.status= status.notAuthenticated,
            state.uid= null,
            state.displayName= null,
            state.photoURL= null,
            state.errorMessage= payload?.message;
            state.errorResponse = payload?.responseErrorMessage;

        },

        checkingCredentials: (state) => {
            state.status = status.checking
        }


    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;
