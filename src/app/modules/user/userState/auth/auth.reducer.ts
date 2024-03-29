import {createReducer, on} from '@ngrx/store';
import { user } from '../../model/userState';
import { autologinSuccess, loginRequested, loginSuccess, logout, signUpRequested, signUpSuccess } from './auth.action';

const initialState:user = {
    token:'',
     user:{
        _id:'',
        firstname: '',
        secondname: '',
        email:'',
        phone: '',
        role: '',
        district: '',
        profilepicture:[]
     },
     isLoading:false,
     isLogin:false,
     error:'',
}

export const authReducer = createReducer(
        initialState,
        on(loginRequested, (state, action) => ({...state, isLoading:true})),

        on(loginSuccess, (state,action)=>{  
           return  ({...state, isLoading:false, token:action.token , user:action.user})
        }),

        on(signUpRequested, (state,action) => ({...state, isLoading:true})),
        on(signUpSuccess, (state,action) => ({...state, isLoading:false, token:action.token, user:action.user})),

        on(logout, (state, action) => ({...state, isLoading:true, token:''})),
        on(autologinSuccess, (state, action) => ({...state, token:action.token, user:action.user}))
        )
