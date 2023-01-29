import { UserType } from 'model/Schema';
import { AppDispatch } from '../store';
import * as types from './users.type';
import axios from 'axios';
import { LoginUser } from '@/Utils/types';

export const addUser = (creeds:UserType):any => async (dispatch : AppDispatch) => {
    try{
        let res = await axios.post('/api/users/register', creeds);
        let data = await res.data;
        // console.log('register', data);
        dispatch({type:types.REGISTER_SUCCESS, payload:data});
    } catch (e) {
        console.log(e);
    }
}

export const loginUser = (creeds:LoginUser) : any => async (dispatch : AppDispatch) => {
    try{
        let res = await axios.post('/api/users/login', creeds);
        let data = await res.data;
        console.log('login',data);
        dispatch({type:types.LOGIN_SUCCESS, payload:data});
    } catch (e) {
        console.log(e);
    }
}

export const logoutUser = ({type:types.LOGOUT, payload:null})
