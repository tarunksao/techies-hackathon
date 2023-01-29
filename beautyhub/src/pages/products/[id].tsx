import axios from "axios";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next"
import { Product } from "model/product.model";

type productDetailProps={
    product:Product;
}

export default function VidioPlay({product}:{product:Product}){
 
    // console.log(product,"product")
    
    return <div style={{"margin":"120px 100px"}} >
      <div style={{margin:'auto'}}>
        <iframe
         width="1300" 
         height="500" 
         src={`https://www.youtube.com/embed/${product}`} 
         title="4 SATISFYING VIDEO MAKEUP TUTORIAL | Best Makeup Transformation | Makeup Inspiration" 
         frameBorder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         allowFullScreen
         ></iframe>
      </div>
      <p>Powered by Youtube</p>
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
