import { Button, Form, Input, Typography, message } from "antd";
import { FiMail, FiLock } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import { userLogin } from "../../api/endpoints/auth";
import { useMutation } from "@tanstack/react-query";


const { Title } = Typography;

const Login = () => {
  const navigate = useNavigate();

  const { mutate: handleLoginUser, isPending: loading } = useMutation({
    mutationFn: userLogin,
    onSuccess: (response, variables) => {
      if (response?.success) {
        localStorage.setItem("email", variables.email);
        localStorage.setItem("otpPurpose", "login");
        navigate("/auth/verify-otp");
        message.success("Login successful. Please verify OTP.");
      }
    },
    onError: (error) => {
      if (error.code === "auth/invalid-credential") {
        message.error("Invalid email or password. Please try again.");
      } else {
        message.error("Error logging in. Please try again.");
      }
    },
  });

  const onFinish = (values) => {
    handleLoginUser(values);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center  font-custom">
      <div className="w-[80%]  p-6">
        {/* Heading */}
        <Title level={3} className="!m-0 !text-text3 !font-b6 text-blackColor">
          Login
        </Title>
        <p className="text-h3 text-blackColor font-b5 mt-1">
          Enter your details to get access.
        </p>

        <Form layout="vertical" onFinish={onFinish} validateTrigger="onChange" className="mt-6" requiredMark={false}>
          {/* Email Field */}
          <Form.Item
            label={<span className="font-b5 text-h4 text-blackColor">Email</span>}
            name="email"
            required={true}
          // rules={[
          //   { required: true, message: "Please enter your email" },
          //   { type: "email", message: "Enter a valid email address" },
          //   { max: 254, message: "Email must not exceed 254 characters" },
          // ]}
          >
            <Input
              size="large"
              placeholder="Enter email"
              className="w-[100%] rounded-custom border border-custom h-12"
              prefix={<FiMail className="text-mainColor text-lg mr-2" />}
            />
          </Form.Item>

          {/* Password Field */}
          <Form.Item
            label={<span className="font-b5 text-h4 text-blackColor">Password</span>}
            name="password"
            required={true}
            rules={[
              { required: true, message: "Please enter your password" },
              {
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])(?!.*\s).{6,128}$/,
                message:
                  "Password must include uppercase, lowercase, number,",
              },
            ]}
          >
            <Input.Password
              size="large"
              placeholder="********"
              className="w-[100%] rounded-custom border border-custom h-12"
              prefix={<FiLock className="text-mainColor text-[20px] mr-2" />}
              iconRender={(visible) =>
                visible ? (
                  <EyeTwoTone twoToneColor="#FF5A5F" style={{ color: "#FF5A5F", fontSize: "24px" }} />
                ) : (
                  <EyeInvisibleOutlined style={{ color: "#FF5A5F", fontSize: "24px" }} />
                )
              }
            />
          </Form.Item>

          <div className="text-end mb-3">
            <Link to="/auth/forget-password" className="text-mainColor text-text1 font-b5">
              Forgot the password?
            </Link>
          </div>

          {/* Submit Button */}
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            // onClick={()=>navigate("/auth/verify-otp")}
            className="w-[100%]  h-[60px] flex justify-center rounded-custom bg-mainColor text-whiteColor font-b7 text-h2 mt-4 border-none"
          >
            Login
          </Button>

        </Form>
      </div>
    </div>
  );
};

export default Login;

