import axios from "axios";

const axiosClient = axios.create({

  baseURL: "https://triply-8777f.uc.r.appspot.com/admin/auth"

});
export default axiosClient;