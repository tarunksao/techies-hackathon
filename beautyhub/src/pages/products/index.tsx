

//https://youtube.googleapis.com/youtube/v3/search?q=beauty&part=snippet&maxResults=20&key=AIzaSyBoSLMZ1EA-pYQ4sQRszn-TZZeAjG0F2Wg
import react from "react"
import getData from "../../../src/check"
const ProductPage=()=>{
 
react.useEffect(()=>{
getData().then((res)=>{
    console.log(res.data.items)
})
},[])
    

    return <>
    <h1>all vidios</h1>
    
    </>
}

export default ProductPage