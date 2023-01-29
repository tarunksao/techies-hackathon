

//https://youtube.googleapis.com/youtube/v3/search?q=beauty&part=snippet&maxResults=20&key=AIzaSyBoSLMZ1EA-pYQ4sQRszn-TZZeAjG0F2Wg
import { Center } from "@chakra-ui/react"
import react from "react"
import { useDispatch, useSelector } from "react-redux"
import  getProduct  from "../redux-arch/app/action"
import * as types from "../redux-arch/app/actionType"
import  getProductapi  from "../redux-arch/app/product.api"
import  RootState, { useAppDispatch, useAppSelector }  from "../redux-arch/store"
import ProductDetails from "../../../components/product"
const ProductPage=()=>{
const dispatch=useAppDispatch()
const product=useAppSelector((store)=>store.appreducer.homePageData)    
const loading=useAppSelector((store)=>store.appreducer.isLoading)
console.log(product,'product')



react.useEffect(()=>{
        
  dispatch(getProduct())
      
        
    },[])
    
   

    return <>
    <h1>all vidios</h1>
  
    {
     loading?<h2>...loading</h2>:<ProductDetails  data={product} />
    }
    
    </>
}

export default ProductPage