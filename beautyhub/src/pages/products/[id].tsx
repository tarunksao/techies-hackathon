import { GetStaticPaths, GetStaticProps } from "next"
import HomePagearrType from "../constants/constant";
import { getSingleProd } from "../redux-arch/app/product.api"

type productDetailProps={
    product:HomePagearrType;
}

export default function VidioPlay({product}:productDetailProps){
 

    return <h2>vidioId</h2>
    
}



export const getStaticPath:GetStaticPaths=async(context)=>{
  console.log(context,"context")
    const data=await getSingleProd();
    return {
      paths:data.map((product)=>{params:{id:String(product.id)}}),
      fallback:false
    }
}


export const getStaticProps:GetStaticProps=async(context)=>{
  
    const id:string=context.params?.id
console.log(id,"id")
    const data=await getSingleProd(id)

    return {
        props:{
            product:data
        }
    }
}