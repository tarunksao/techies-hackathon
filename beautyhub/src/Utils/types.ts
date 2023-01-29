import { UserType } from "model/Schema";

export interface HandleChangeEvent {
    target:HTMLInputElement
}

export interface UserReducer {
    isAuth:boolean,
    login:UserType|{},
    registerSuccess:boolean,
    resisterError:boolean,
    registerWaiting:boolean,
    loginSuccess:boolean,
    loginError:boolean,
    loginWaiting:boolean,
}

export interface LoginUser {
    email:string;
    password:string;
}
