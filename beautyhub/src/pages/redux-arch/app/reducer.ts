import { Fascinate } from "@next/font/google"
import { intstateType, reducerAction } from "../../constants/constant"

import * as types from "./actionType"

const intstate:intstateType={
    isLoading:false,
    isError:false,
    homePageData:[]

}

export const Reducer=(state=intstate, {type,payload}:reducerAction):intstateType=>{

      switch(type){
        case types.GET_USER_DATA_LOADING:return {...state,isLoading:true, isError:false }

        case types.GET_USER_DATA_SUCCESS:
         
       // console.log(state.homePageData,"HM")
        
        return {...state,isLoading:false, isError:false ,homePageData:payload}

        case types.GET_USER_DATA_ERROR:return {...state, isLoading:false ,isError:true}
        
        default : return state
      }
}