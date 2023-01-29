
 import { type } from "os"
import { AppDispatch } from "../store"
import * as types from "./actionType"
import  getProductapi  from "./product.api"

//AppDispatch



const getProduct = ():any => async (dispatch:AppDispatch) => {
  dispatch({type:types.GET_USER_DATA_LOADING,payload:null})
    try{
        let data=await getProductapi()
      
        dispatch({type:types.GET_USER_DATA_SUCCESS,payload:data})
    }
    catch(err){
        console.log(err)
        dispatch({type:types.GET_USER_DATA_ERROR,payload:null})
    }


}


export default getProduct
