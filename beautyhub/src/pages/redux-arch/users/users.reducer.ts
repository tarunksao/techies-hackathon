import { UserReducer } from "@/Utils/types"
import { reducerAction } from "@/pages/constants/constant"
import { LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS } from "./users.type";

const initState:UserReducer = {
    isAuth:false,
    login:{},
    registerSuccess:false,
    resisterError:false,
    registerWaiting:false,
    loginSuccess:false,
    loginError:false,
    loginWaiting:false,
}

export const userReducer = (state :UserReducer = initState, {type, payload}:reducerAction) => {
    switch(type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                registerSuccess:true
            }
        case LOGIN_SUCCESS:
            // const {user} = payload;
            return {
                ...state,
                isAuth:true,
                loginSuccess:true,
                login:{...state.login, payload}
            }
        case LOGOUT:
            return {
                ...state,
                isAuth:false,
                login:{}
            }
        default:
            return state;
    }
}
