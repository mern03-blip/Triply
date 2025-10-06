import axiosClient from "../axios/axiosInstance";


//Login
export const userLogin = async (formData) => {

  const response = await axiosClient.post("/auth/login", {
    ...formData,
  });

  console.log("Login", response.data);
  return response.data;
};

//Verify otp
export const userVerify = async (formData) => {

  const response = await axiosClient.post("/auth/VerifyEmail", {
    ...formData,
  });

  console.log("OtpVerify", response.data);
  return response.data;
};

// Resend Otp
export const resendOtp = async (formData) => {

  const response = await axiosClient.post("/auth/resendOtp", {
    ...formData,
  });

  console.log("resend otp", response.data);
  return response.data;
};


//Forget Password
export const forgotPassword = async (formData) => {

  const response = await axiosClient.post("/auth/forgrotPassword", {
    ...formData,
  });

  console.log("forgrt password", response.data);
  return response.data;
};




