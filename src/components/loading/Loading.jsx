import { Spin, ConfigProvider } from "antd";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <ConfigProvider
        theme={{
          components: {
            Spin: {
              colorPrimary: "#FF5A5F",
            },
          },
        }}
      >
        <Spin size="large" />
      </ConfigProvider>
      {/* <p className="mt-4 text-mainColor font-semibold text-lg">Loading...</p> */}
    </div>
  );
};

export default Loading;


