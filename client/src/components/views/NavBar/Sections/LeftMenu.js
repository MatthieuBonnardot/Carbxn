import React from "react";
import { Menu } from "antd";

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="Home">
        <a href="/">Home</a>
      </Menu.Item>
      <Menu.Item key="Feel">
        <a href="/feel">Feel</a>
      </Menu.Item>
      <Menu.Item key="Finance">
        <a href="/work">Finance</a>
      </Menu.Item>
      <Menu.Item key="Personal">
        <a href="/personal">Personal</a>
      </Menu.Item>
      <Menu.Item key="Work">
        <a href="/work">Work</a>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
