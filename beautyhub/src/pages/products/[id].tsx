import axios from "axios";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next"
import HomePagearrType from "../constants/constant";
import { getSingleProd } from "../redux-arch/app/product.api"

type productDetailProps={
    product:HomePagearrType;
}

export default function VidioPlay({product}:{product:any}){
 
    console.log(product,"product")
    
    return <div style={{"fontSize":"xl", "margin":"100px"}} >vidioIddsafdf
    
    <div>
    <iframe width="1536" height="727" src={`https://www.youtube.com/embed/${product}`} title="4 SATISFYING VIDEO MAKEUP TUTORIAL | Best Makeup Transformation | Makeup Inspiration" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

    </div>
    
}



// export const getStaticPath:GetStaticPaths=async(context)=>{
  
//     const data=await getSingleProd();
//     return {
//       paths:data.map((product)=>{params:{id:String(product.id)}}),
//       fallback:false
//     }
// }


// export const getServerProps:GetServerSideProps=async(context)=>{
  
//     //const id:string=context.params?.id

//     let data=await axios.get(`https://reqres.in/api/users?page=2`)
//        data=await data.data
//        console.log(data,'datafsadfd')
      
//     // const data=await getSingleProd(id)

//     return {
//         props:{
//             product:context.params?.id
//         }
//     }
// }



export const getServerSideProps: GetServerSideProps = async (context) => {
    const url = "https://www.youtube.com/embed/"
    const res = await axios.get(`${url}${context?.params?.id}`)
    const product = await res.data
      return {
        props: {
          product:context.params?.id
        }
      }
    }