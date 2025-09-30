import axiosClient from "./axiosClient";


//Login
export const userLogin = async (formData) => {
  
  const response = await axiosClient.post("/login", {
    ...formData,
  });

   console.log("Login", response.data);
  return response.data;
};

//Verify otp
export const userVerify = async (formData) => {
  
  const response = await axiosClient.post("/VerifyEmail", {
    ...formData,
  });

   console.log("OtpVerify", response.data);
  return response.data;
};

// Resend Otp
export const resendOtp = async (formData) => {
  
  const response = await axiosClient.post("/resendOtp", {
    ...formData,
  });

   console.log("resend otp", response.data);
  return response.data;
};


//Forget Password
export const  forgrotPassword= async (formData) => {
  
  const response = await axiosClient.post("/forgrotPassword", {
    ...formData,
  });

   console.log("resend otp", response.data);
  return response.data;
};




