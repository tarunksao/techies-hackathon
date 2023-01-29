import { Grid, GridItem, Box, Image, Text } from "@chakra-ui/react"
import { Product } from "model/product.model"
import Link from "next/link"

type ProductType = {
  data:Product[],
}

export default function ProductDetails({data}:ProductType){

  //  console.log(data[0].id.videoId,"datfdgfgaa")

  return(<>
    <h3>product pages</h3>
    <Grid templateColumns={'repeat(4,1fr)'} gap={6} p={"50px"} m='auto' >
    {
     data.map((elm:Product)=>(
      <Box key={elm._id}>
          <Link href={`products/${elm.videoId}`} >
            <Box _hover={{"cursor":"pointer","padding":"10px"}}>
              <Image src={elm.image_src} alt={elm.title} />
              <Text fontWeight={'semibold'} noOfLines={1} overflow={'hidden'}>{elm.title}</Text>
              <Text noOfLines={1} overflow={'hidden'}>{elm.desc}</Text>        
            </Box>
          </Link>
       </Box>
     ))
    }
    </Grid>
  </>)
}
