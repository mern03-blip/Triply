import axios from "axios";

const axiosInstance = axios.create({

  baseURL: "https://triply-8777f.uc.r.appspot.com"

});
export default axiosInstance;