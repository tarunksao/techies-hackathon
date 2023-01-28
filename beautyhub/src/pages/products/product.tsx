import { Grid, GridItem,Box, Image, Text } from "@chakra-ui/react"


export default function ProductDetails({data}){

   console.log(data,"dfsaft")

    return<>
    <h3>product pages</h3>
  
   
   <Grid templateColumns={'repeat(4,1fr)'} gap={6} p={"50px"} >
 
 {
     data.map((elm)=>{
        return <Box key={elm.etag}>
        
        <Box _hover={{"cursor":"pointer","padding":"10px"}} ><Image  src={elm.snippet.thumbnails.high.url}   /></Box>
        <Text as={'b'} noOfLines={1} >{elm.snippet.title}</Text>
        <Text>{elm.snippet.channelTitle}</Text>
        
       </Box>
        })
 }
   </Grid>

   
    </>
}