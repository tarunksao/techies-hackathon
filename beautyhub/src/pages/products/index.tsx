import react from "react"
import getProduct  from "../redux-arch/app/action"
import { useAppDispatch, useAppSelector }  from "../redux-arch/store"
import ProductDetails from "../../../components/product"

const ProductPage=()=>{
  const dispatch=useAppDispatch()
  const product=useAppSelector((store)=>store.appreducer.homePageData)    
  const loading=useAppSelector((store)=>store.appreducer.isLoading)
  
  console.log(product,'product')

  react.useEffect(()=>{
    dispatch(getProduct());    
  },[])
    
  return <>
    <div style={{padding:'120px 0px', backgroundColor:'#ffdb99'}}>
      {
        loading?<h2 style={{textAlign:'center'}}>...loading</h2>:<ProductDetails data={product} />
      }
    </div>
  </>
}

export default ProductPage
