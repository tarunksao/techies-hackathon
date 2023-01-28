

import HomePagearrType from "@/pages/constants/constant"
import axios ,{AxiosResponse} from "axios"

//return <AxiosResponse:HomePagearrType[]> axios.get('https://youtube.googleapis.com/youtube/v3/search?q=beauty&part=snippet&maxResults=20&key=AIzaSyBoSLMZ1EA-pYQ4sQRszn-TZZeAjG0F2Wg').then((res)=>res.data)

 const getProductapi=async()=>{
//     let response:AxiosResponse<HomePagearrType[]>=await axios.get('https://youtube.googleapis.com/youtube/v3/search?q=beauty&part=snippet&maxResults=20&key=AIzaSyBoSLMZ1EA-pYQ4sQRszn-TZZeAjG0F2Wg')
// return response.data
return  axios.get('https://youtube.googleapis.com/youtube/v3/search?q=makeup&part=snippet&maxResults=20&key=AIzaSyCxvMP-XKDa3PTEv5eN3EcxEtAmLrDqFs').then((res)=>res.data.items)


}

export default getProductapi