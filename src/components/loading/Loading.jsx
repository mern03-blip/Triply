import { Spin, ConfigProvider } from "antd";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ConfigProvider
        theme={{
          components: {
            Spin: {
              colorPrimary: "#FF5A5F", // aapka custom color
            },
          },
        }}
      >
        <Spin tip="Loading..." size="large" />
      </ConfigProvider>
    </div>
  );
};

export default Loading;
