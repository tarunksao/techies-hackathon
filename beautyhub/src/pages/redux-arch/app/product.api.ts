

import HomePagearrType from "@/pages/constants/constant"
import axios ,{AxiosResponse} from "axios"

//return <AxiosResponse:HomePagearrType[]> axios.get('https://youtube.googleapis.com/youtube/v3/search?q=beauty&part=snippet&maxResults=20&key=AIzaSyBoSLMZ1EA-pYQ4sQRszn-TZZeAjG0F2Wg').then((res)=>res.data)

 const getProductapi=async()=>{
//     let response:AxiosResponse<HomePagearrType[]>=await axios.get('https://youtube.googleapis.com/youtube/v3/search?q=beauty&part=snippet&maxResults=20&key=AIzaSyBoSLMZ1EA-pYQ4sQRszn-TZZeAjG0F2Wg')
// return response.data
return  axios.get('/api/products/').then((res)=>res.data)
}

export const getSingleProd=(id:string)=>{
    console.log(id)
    return axios.get(`https://www.youtube.com/embed/${id}`).then((res)=>res.data)
}

export default getProductapi
