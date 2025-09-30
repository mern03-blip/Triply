// import React, { useState, useRef, useEffect } from "react";
// import { Button, Form, Typography, message, Input } from "antd";
// import { useNavigate } from "react-router-dom";
// import { FiArrowLeft } from "react-icons/fi";
// import { forgrotPassword, resendOtp, userVerify } from "../../api/auth/auth";

// const { Title, Text } = Typography;

// const VerifyOtp = () => {
//   const [loading, setLoading] = useState(false);
//   const [timer, setTimer] = useState(59);
//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const inputRefs = useRef([]);
//   const navigate = useNavigate();
//   const email = localStorage.getItem("email") || `xyz@gmail.com`;

//   const handleChange = (value, index) => {
//     if (/^\d?$/.test(value)) {
//       const newOtp = [...otp];
//       newOtp[index] = value;
//       setOtp(newOtp);

//       if (value && index < 5) {
//         inputRefs.current[index + 1].focus();
//       }
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     if (e.key === "Backspace" && !otp[index] && index > 0) {
//       inputRefs.current[index - 1].focus();
//     }
//   };

//   const onFinish = async () => {
//     if (otp.some((d) => d === "")) {
//       message.error("Please enter all 6 digits of the OTP");
//       return;
//     }

//     const fullOtp = otp.join("");
//     const email = localStorage.getItem("email");
//     const otpPurpose = localStorage.getItem("otpPurpose"); // 👈 check purpose

//     const data = { email, otp: fullOtp, step: 2 };
//     console.log(data);

//     try {
//       setLoading(true);

//       let response;

//       if (otpPurpose === "reset") {
//         response = await forgrotPassword(data); // 👈 forgot password endpoint
//       } else {
//         response = await userVerify(data); // 👈 login endpoint
//       }

//       if (response?.success) {
//         if (otpPurpose === "reset") {
//           message.success("OTP verified! Please reset your password");
//           navigate("/auth/reset-password"); // 👈 redirect to reset page
//         } else {
//           localStorage.setItem("token", response.admin.token);
//           localStorage.setItem("user", JSON.stringify(response.admin));
//           message.success(response.message || "OTP verified successfully");
//           localStorage.removeItem("email");
//           navigate("/");
//         }

//         localStorage.removeItem("otpPurpose");
//       } else {
//         message.error(response?.message || "OTP verification failed");
//       }
//     } catch (error) {
//       message.error(error?.response?.data?.message || "Error verifying OTP");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (timer === 0) return; // agar 0 ho gaya to aur decrease na ho
//     const interval = setInterval(() => {
//       setTimer((prev) => prev - 1);
//     }, 1000);

//     return () => clearInterval(interval); // cleanup
//   }, [timer]);


//   const TimerDisplay = React.memo(({ timer }) => {
//     return (
//       <span className="text-blackColor font-b5">
//         00:{timer.toString().padStart(2, "0")}
//       </span>
//     );
//   });


//   const handleResendOtp = async () => {
//     const data = { email };
//     console.log("Resend Data:", data);

//     try {
//       const response = await resendOtp(data);
//       console.log("Resend Otp", response);

//       if (response?.success) {
//         message.success(response.message || "OTP resent successfully");
//         setTimer(5);
//       } else {
//         message.error(response?.message || "Resend failed");
//       }
//     } catch (error) {
//       message.error(error?.response?.data?.message || "Error resending OTP");
//     }
//   };

//   console.log("component mount");



//   return (
//     <div className="relative flex-1 flex items-center justify-center h-screen w-full">
//       <div className="w-[80%] h-[50%] p-6 rounded-2xl">
//         {/* 🔙 Back Button */}
//         <button
//           onClick={() => navigate(-1)}
//           className="absolute top-4 rounded-full hover:bg-bgColor mt-4"
//         >
//           <FiArrowLeft className="text-[28px] text-mainColor" />
//         </button>

//         {/* Heading */}
//         <Title
//           level={4}
//           className="!m-0 font-b6 text-blackColor mb-2 font-custom"
//         >
//           Verify OTP
//         </Title>
//         <Text className="block mb-8 text-blackColor font-b5 text-text1 font-custom">
//           We have sent an OTP to{" "}
//           <span className="text-mainColor font-b6">{email}</span>
//         </Text>

//         {/* OTP Inputs */}
//         <Form layout="vertical" onFinish={onFinish}>
//           <Form.Item>
//             <div className="flex gap-5 ml-7">
//               {otp.map((digit, index) => (
//                 <Input
//                   key={index}
//                   type="text"
//                   inputMode="numeric"
//                   maxLength={1}
//                   value={digit}
//                   onChange={(e) => handleChange(e.target.value, index)}
//                   onKeyDown={(e) => handleKeyDown(e, index)}
//                   ref={(el) => (inputRefs.current[index] = el)}
//                   className="w-12 h-12 text-center text-lg rounded-custom border border-custom font-b6 text-blackColor"
//                 />
//               ))}
//             </div>
//           </Form.Item>

//           {/* Resend + Timer */}
//           <div className="flex w-[90%] ml-8 font-b5 text-blackColor gap-20 items-center text-text1 mb-6">
//             <span>
//               Didn’t you receive the OTP?{" "}
//               <button
//                 type="button"
//                 onClick={handleResendOtp}
//                 disabled={timer > 0}
//                 className={`font-b7 ${timer > 0
//                   ? "text-gray-400 cursor-not-allowed"
//                   : "text-mainColor hover:underline"
//                   }`}
//               >
//                 Resend OTP
//               </button>

//             </span>
//             <TimerDisplay timer={timer} />
//           </div>

//           {/* Verify Button */}
//           <Button
//             type="primary"
//             htmlType="submit"
//             loading={loading}
//             className="w-[80%] ml-6 mt-4 h-[60px] rounded-custom bg-mainColor text-whiteColor font-b7 border-none"
//           >
//             Verify
//           </Button>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default VerifyOtp;


import React, { useState, useRef, useEffect } from "react";
import { Button, Form, Typography, message, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { forgrotPassword, resendOtp, userVerify } from "../../api/auth/auth";


const { Title, Text } = Typography;

// --- DEDICATED TIMER COMPONENT ---
// This component now holds the 'timer' state and its 'useEffect' hook.
// It will be the ONLY thing that re-renders every second, solving the performance issue.
const TimerAndResend = ({ initialTime = 59, email, onResendSuccess }) => {
  const [timer, setTimer] = useState(initialTime);
  // 1. Timer logic is isolated here
  useEffect(() => {
    if (timer === 0) return; // Stop at zero

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, [timer]);

  const handleResendOtp = async () => {
    const data = { email };

    try {
      const response = await resendOtp(data);

      if (response?.success) {
        message.success(response.message || "OTP resent successfully");
        // 2. Reset the timer state ONLY in this component
        setTimer(initialTime);
        if (onResendSuccess) {
          onResendSuccess();
        }
      } else {
        message.error(response?.message || "Resend failed");
      }
    } catch (error) {
      message.error(error?.response?.data?.message || "Error resending OTP");
    }
  };
  // console.log("timer componnet mount");

  return (
    <div className="flex w-[90%] ml-8 font-b5 text-blackColor gap-20 items-center text-text1 mb-6">
      <span>
        Didn’t you receive the OTP?{" "}
        <button
          type="button"
          onClick={handleResendOtp}
          disabled={timer > 0}
          className={`font-b7 ${timer > 0
            ? "text-gray-400 cursor-not-allowed"
            : "text-mainColor hover:underline"
            }`}
        >
          Resend OTP
        </button>
      </span>
      {/* Timer Display */}
      <span className="text-blackColor font-b5">
        00:{timer.toString().padStart(2, "0")}
      </span>
    </div>
  );
};


// --- MAIN COMPONENT ---
const VerifyOtp = () => {
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const email = localStorage.getItem("email") || `xyz@gmail.com`;

  const handleChange = (value, index) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const onFinish = async () => {
    if (otp.some((d) => d === "")) {
      message.error("Please enter all 6 digits of the OTP");
      return;
    }

    const fullOtp = otp.join("");
    const email = localStorage.getItem("email");
    const otpPurpose = localStorage.getItem("otpPurpose");

    const data = { email, otp: fullOtp, step: 2 };

    try {
      setLoading(true);

      let response;

      if (otpPurpose === "reset") {
        response = await forgrotPassword(data);
      } else {
        response = await userVerify(data);
      }

      if (response?.success) {
        if (otpPurpose === "reset") {
          message.success("OTP verified! Please reset your password");
          navigate("/auth/reset-password");
        } else {
          localStorage.setItem("token", response.admin.token);
          localStorage.setItem("user", JSON.stringify(response.admin));
          message.success(response.message || "OTP verified successfully");
          localStorage.removeItem("email");
          navigate("/");
        }

        localStorage.removeItem("otpPurpose");
      } else {
        message.error(response?.message || "OTP verification failed");
      }
    } catch (error) {
      message.error(error?.response?.data?.message || "Error verifying OTP");
    } finally {
      setLoading(false);
    }
  };

  // console.log("Component mount");

  return (
    <div className="relative flex-1 flex items-center justify-center h-screen w-full">
      <div className="w-[80%] h-[50%] p-6 rounded-2xl">
        {/* 🔙 Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 rounded-full hover:bg-bgColor mt-4"
        >
          <FiArrowLeft className="text-[28px] text-mainColor" />
        </button>

        {/* Heading */}
        <Title
          level={4}
          className="!m-0 font-b6 text-blackColor mb-2 font-custom"
        >
          Verify OTP
        </Title>
        <Text className="block mb-8 text-blackColor font-b5 text-text1 font-custom">
          We have sent an OTP to{" "}
          <span className="text-mainColor font-b6">{email}</span>
        </Text>

        {/* OTP Inputs */}
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item>
            <div className="flex gap-5 ml-7">
              {otp.map((digit, index) => (
                <Input
                  key={index}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (inputRefs.current[index] = el)}
                  className="w-12 h-12 text-center text-lg rounded-custom border border-custom font-b6 text-blackColor"
                />
              ))}
            </div>
          </Form.Item>

          {/* Resend + Timer (Now the isolated component) */}
          <TimerAndResend initialTime={59} email={email} />

          {/* Verify Button */}
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            className="w-[80%] ml-6 mt-4 h-[60px] rounded-custom bg-mainColor text-whiteColor font-b7 border-none"
          >
            Verify
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default VerifyOtp;



