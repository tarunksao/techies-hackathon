import { Grid, GridItem,Box, Image, Text } from "@chakra-ui/react"
import Link from "next/link"

export default function ProductDetails({data}){

   console.log(data,"datfdgfgaa")

    return<>
    <h3>product pages</h3>
  
   
   <Grid templateColumns={'repeat(4,1fr)'} gap={6} p={"50px"} >
 
 {
     data.map((elm)=>{
      
        return <Box key={elm.etag}>
        <Link href={`/products/${elm.id?.vidioId}`} > <Box _hover={{"cursor":"pointer","padding":"10px"}} ><Image  src={elm.snippet.thumbnails.high.url}   /></Box></Link>
        <Text as={'b'} noOfLines={1} >{elm.snippet.title}</Text>
        <Text>{elm.snippet.channelTitle}</Text>
        
       </Box>
        })
 }
   </Grid>

   
    </>
}