import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../../App.css";
import {
  UserOutlined,
  PlusOutlined,
  HomeOutlined,
  LogoutOutlined // Import the logout icon
} from "@ant-design/icons";
import { Breadcrumb, Layout, Button, message, Avatar, theme, Dropdown, Menu } from "antd";
import logo from "../../assets/logo.png";
import Dashboard from "../../pages/dashboard";
import Try from "../../pages/Try";
import Post from "../../pages/Post";
import Customer from "../../pages/customer";
import CustomerCreate from "../../pages/customer/create";
import CustomerEdit from "../../pages/customer/edit";
import ProfileCustomer from "../../pages/customer/profile";
import WorkCreate from "../../pages/Post/create";
import WorkEdit from "../../pages/Post/edit";
import Work from "../../pages/Post";
import Postwork from "../../pages/postwork";

const { Header, Content } = Layout;

const FullLayout: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const setCurrentPage = (val: string) => {
    localStorage.setItem("page", val);
    if (val === "dashboard") {
      window.location.reload(); // Refresh the page when clicking "Home"
    }
  };

  const Logout = () => {
    localStorage.clear();
    messageApi.success("Logout successful");
    setTimeout(() => {
      location.href = "/";
    }, 2000);
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/customer/profile/:id">โปรไฟล์</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/customer/profile/history">ประวัติการทำงาน</Link>
      </Menu.Item>
      <Menu.Item key="3" onClick={Logout}>
        <LogoutOutlined style={{ marginRight: '8px' }} />
        ออกจากระบบ
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {contextHolder}
      <Layout>
        <Header style={{ background: '#06579b', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Logo" style={{ width: 50, margin: '0 10px' }} />
            <h1 style={{ color: 'white' }}>Capylance</h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
            <Button
              type="text"
              style={{ color: 'white', margin: '0 10px' }}
              onClick={() => setCurrentPage("dashboard")}
            >
              <Link to="/">
                <HomeOutlined style={{ color: 'white' }} />
                <span style={{ color: 'white' }}> หน้าหลัก</span>
              </Link>
            </Button>
            <Button
              type="text"
              style={{ color: 'white', margin: '0 10px' }}
              onClick={() => setCurrentPage("Try")}
            >
              <Link to="/t">
                <PlusOutlined style={{ color: 'white' }} />
                <span style={{ color: 'white' }}> โพสงาน</span>
              </Link>
            </Button>
            <Dropdown overlay={menu} placement="bottomRight">
              <Avatar
                style={{
                  backgroundColor: '#1890ff',
                  marginLeft: '20px',
                  cursor: 'pointer'
                }}
                icon={<UserOutlined />}
              />
            </Dropdown>
          </div>
        </Header>

        <Content style={{ margin: "16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }} />
          <div style={{ padding: 24, minHeight: "100%", background: '#f0f2f5' }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/t" element={<Try />} />
              <Route path="/customer" element={<Customer />} />
              <Route path="/customer/create" element={<CustomerCreate />} />
              <Route path="/customer/edit/:id" element={<CustomerEdit />} />
              <Route path="/customer/profile/:id" element={<ProfileCustomer />} />
              <Route path="/work" element={<Work />} />
              <Route path="/work/create" element={<WorkCreate />} />
              <Route path="/work/edit/:id" element={<WorkEdit />} />
              <Route path="/go" element={<Postwork />} />
            </Routes>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default FullLayout;
