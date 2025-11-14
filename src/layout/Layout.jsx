import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import "./sidebar/sidebar.scss";

const { Content, Sider } = Layout;

const AppLayout = () => {
  return (
    <Layout
      style={{
        // minHeight: "100vh",
       height:"100vh"

      }}
    >
      <Sider
        width={"270px"}
        className="sider-style  custom-scrollbar overflow-y-auto"
        style={{ height: "100%", top: 0, left: 0, overflowY:"auto" }}
      >
        <Sidebar />
      </Sider>
      <Layout>
        <Content className="bg-lightBgColor h-screen overflow-y-auto">
          <div id="detail">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;


