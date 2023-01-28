import { Fascinate } from "@next/font/google"
import { intstateType, reducerAction } from "../../constants/constant"



const intstate:intstateType={
    isLoading:false,
    isError:false,
    homePageData:[]

}

export const reducer=(state=intstate, {type,payload}:reducerAction)=>{

      switch(type){
        
        default : return state
      }
}