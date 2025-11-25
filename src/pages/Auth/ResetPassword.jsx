import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Typography, Modal, message } from "antd";
import { FiArrowLeft, FiLock } from "react-icons/fi";
import {
  EyeTwoTone,
  EyeInvisibleOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { FeaturedIcon } from "../../assets/image";
import { forgotPassword } from "../../api/endpoints/auth";
import { useMutation } from "@tanstack/react-query";

const { Title } = Typography;

const ResetPassword = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);

  // ✅ TanStack Mutation Hook
  const { mutate: resetPasswordMutation, isPending: loading } = useMutation({
    mutationFn: async (values) => {
      const email = localStorage.getItem("email");
      const data = { email, password: values.newPassword, step: 3 };
      console.log("Reset Password Request Data:", data);

      const response = await forgotPassword(data);
      return response;
    },
    onSuccess: (response) => {
      if (response?.success) {
        message.success(response?.message || "Password reset successfully!");
        setIsModalVisible(true);
        localStorage.removeItem("email");
        localStorage.removeItem("otpPurpose");
      } else {
        message.error(
          response?.message || "Something went wrong while resetting password."
        );
      }
    },
    onError: (error) => {
      message.error(
        error?.response?.data?.message || "Server error. Please try again."
      );
    },
  });

  const onFinish = (values) => {
    resetPasswordMutation(values);
  };

  return (
    <>
      <div className="relative flex-1 flex items-center justify-center h-screen w-full">
        <div className="w-[80%] h-[50%]  p-6  rounded-2xl">
          {/* 🔙 Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-4  rounded-full hover:bg-bgColor mt-4"
          >
            <FiArrowLeft className="text-[28px] text-mainColor" />
          </button>

          <Title className=" text-blackColor text-[28px] font-body font-b6 ">
            Reset Password
          </Title>
          <Title className="text-h3 font-body text-blackColor !mb-8 font-b5">
            You can now reset your password.
          </Title>

          <Form
            layout="vertical"
            onFinish={onFinish}
            validateTrigger="onChange"
          >
            {/* New Password */}
            <Form.Item
              label={<span className="font-b5  text-blackColor">Password</span>}
              name="newPassword"
              required={false}
              rules={[
                { required: true, message: "Please enter your password" },
                {
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])(?!.*\s).{6,128}$/,
                  message: "Password must include uppercase, lowercase, number",
                },
              ]}
            >
              <Input.Password
                size="large"
                placeholder="***********"
                className="rounded-custom h-12 p-2 text-sm font-body border-custom"
                prefix={<FiLock className="text-mainColor text-[20px]" />}
                iconRender={(visible) =>
                  visible ? (
                    <EyeTwoTone
                      twoToneColor="#FF5A5F"
                      style={{ color: "#FF5A5F", fontSize: "24px" }}
                    />
                  ) : (
                    <EyeInvisibleOutlined
                      style={{ color: "#FF5A5F", fontSize: "24px" }}
                    />
                  )
                }
              />
            </Form.Item>

            {/* Confirm Password */}
            <Form.Item
              label={
                <span className="font-b5  text-blackColor">
                  Confirm Password
                </span>
              }
              name="confirmPassword"
              required={false}
              dependencies={["newPassword"]}
              rules={[
                { required: true, message: "Please confirm your new password" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("newPassword") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject("Passwords do not match!");
                  },
                }),
              ]}
            >
              <Input.Password
                size="large"
                placeholder="***********"
                className="rounded-custom h-12 p-2 text-sm font-body border-custom"
                prefix={<FiLock className="text-mainColor text-[20px]" />}
                iconRender={(visible) =>
                  visible ? (
                    <EyeTwoTone
                      twoToneColor="#FF5A5F"
                      style={{ color: "#FF5A5F", fontSize: "24px" }}
                    />
                  ) : (
                    <EyeInvisibleOutlined
                      style={{ color: "#FF5A5F", fontSize: "24px" }}
                    />
                  )
                }
                onCopy={(e) => e.preventDefault()}
                onPaste={(e) => e.preventDefault()}
              />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              // onClick={() => setIsModalVisible(true)}
              className="w-full h-14 rounded-2xl font-bold bg-mainColor border-none"
            >
              Save
            </Button>
          </Form>
        </div>

        {/* ✅ Success Popup */}
        <Modal
          centered
          open={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
          width={"450px"}
          height={"250px"}
          closable={false}
          className="rounded-[28px]"
        >
          <div className="font-custom flex flex-col items-left p-6 text-left">
            {/* Custom Close Button in the top-right corner */}
            <button
              onClick={() => setIsModalVisible(false)}
              className="absolute top-6 right-6 text-mainColor transition hover:opacity-75"
            >
              <CloseOutlined style={{ fontSize: "20px" }} />
            </button>

            {/* Custom Checkmark Icon with double ring */}
            <div className="relative flex h-16 w-16 items-left justify-left rounded-full bg-redColor/10 mb-5">
              <div>
                <img src={FeaturedIcon} alt="Featured Icon" />
              </div>
            </div>

            {/* Text Content */}
            <Typography.Title
              level={4}
              className="!font-b6 !text-h1 !text-blackColor"
            >
              Password Updated
            </Typography.Title>

            <p className="mt-2 mb-8 font-b5 text-h4 text-blackColor">
              Your password has been updated successfully.
            </p>

            {/* Login Button */}
            <Button
              type="primary"
              className="!h-12 w-full !rounded-custom !bg-mainColor !font-b6 !text-h4 !text-whiteColor"
              onClick={() => {
                setIsModalVisible(false);
                navigate("/auth");
              }}
            >
              Login
            </Button>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default ResetPassword;
