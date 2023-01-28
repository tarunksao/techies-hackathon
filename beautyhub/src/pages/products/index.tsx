

//https://youtube.googleapis.com/youtube/v3/search?q=beauty&part=snippet&maxResults=20&key=AIzaSyBoSLMZ1EA-pYQ4sQRszn-TZZeAjG0F2Wg
import react from "react"
import { useDispatch, useSelector } from "react-redux"
import  getProduct  from "../redux-arch/app/action"
import * as types from "../redux-arch/app/actionType"
import  getProductapi  from "../redux-arch/app/product.api"
import  RootState  from "../redux-arch/store"
const ProductPage=()=>{
const dispatch=useDispatch()
const product=useSelector((store:RootState)=>store.appreducer.homePageData)    

console.log(product,'product')
react.useEffect(()=>{
        
        
      
        
    },[])
    

    return <>
    <h1>all vidios</h1>
    
    </>
}

export default ProductPage