import axios from "axios";

const getData = () => {
  return axios.get(
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=beauty+tips&key=AIzaSyBoSLMZ1EA-pYQ4sQRszn-TZZeAjG0F2Wg"
  );
};

export default getData;
