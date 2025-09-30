import axios from 'axios';

// API endpoint base URL
const API_URL = "https://us-central1-employaapp.cloudfunctions.net";

// 1. API call to send OTP to the email
export const sendOtpToEmail = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/sendOtpToEmail`, { email });
    return response.data;
  } catch (error) {
    throw new Error("Error sending OTP: " + error.message);
  }
};

// 2. API call to verify the OTP
export const verifyOtp = async (email, otp) => {
  try {
    const response = await axios.post(`${API_URL}/verifyOtp`, { email, otp });
    return response.data;
  } catch (error) {
    throw new Error("Error verifying OTP: " + error.message);
  }
};

// 3. API call to update the password
export const updatePassword = async (email, newPassword) => {
  try {
    const response = await axios.post(`${API_URL}/updatePassword`, { email, newPassword });
    return response.data;
  } catch (error) {
    throw new Error("Error updating password: " + error.message);
  }
};
