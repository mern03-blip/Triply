import { useMutation } from '@tanstack/react-query';
import { sendOtpToEmail, verifyOtp, updatePassword } from './auth';

// Hook for sending OTP
export const useSendOtp = () => {
  return useMutation({
    mutationFn: (email) => sendOtpToEmail(email),
      onSuccess: (data) => {
        console.log('OTP sent successfully:', data);
        // Handle success logic (e.g., navigate to the verification page)
      },
      onError: (error) => {
        console.error('Error sending OTP:', error);
        // Handle error logic (e.g., show an error message)
      }
    }
  );
};
//  export const useVerifyOtp = () => {
//   return useMutation({
//     mutationFn: verifyOtp,
//     onSuccess: (response) => {
//       const { _id ,role} = response?.data?.admin;
// console.log(response?.data?.token,"token");
// localStorage.setItem("token", response?.data?.token);
// localStorage.setItem("role", role);
// Hook for verifying OTP
export const useVerifyOtp = () => {
  return useMutation({
    mutationFn: ({email, otp }) => verifyOtp(email, otp),
    onSuccess: (data) => {
      console.log("OTP verified successfully", data);
    },
    onError: (error) => {
      console.error("Error verifying OTP:", error);
    }
  });
};

// Hook for updating password
export const useUpdatePassword = () => {
  return useMutation(
    {
        mutationFn: ({ email, newPassword }) => updatePassword(email, newPassword),
    onSuccess: (data) => {
      // Handle success
      console.log("Password updated successfully", data);
    },
    onError: (error) => {
      // Handle error
      console.error("Error updating password:", error);
    }
  });
};
