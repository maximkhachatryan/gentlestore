import React from "react";
import SearchBar from "./SearchBar";
import { Avatar } from "antd";
import { UserOutlined, EnvironmentOutlined } from "@ant-design/icons";
import Navbar from './navBar'

export default function App() {
  let styles = {
    backgroundColor: "gray",
    height: "70px",
    display: "flex",
  };
  let styles2 = {
    margin: "20px 10px",
    marginLeft: "400px",
    marginRight: "10px",
    display: "flex",
  };

  return (
    <div>
      <div style={styles}>
        <SearchBar />
        <div style={styles2}>
          <Avatar icon={<UserOutlined />} style={{ marginRight: "10px" }} />
          <Avatar icon={<EnvironmentOutlined />} />
        </div>
      </div>
      <Navbar />
    </div>
  );
}
