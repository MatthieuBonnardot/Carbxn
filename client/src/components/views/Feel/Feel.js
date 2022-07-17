import React from "react";
import { Drawer } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createFeel } from "../../../_actions/feel_actions";
import NewFeelForm from "./DrawerForm/NewFeelForm";
import FeelLayout from "./Layout/FeelLayout";

const Feel = () => {
  const dispatch = useDispatch();

  const [OpenDrawer, setOpenDrawer] = useState(false);

  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const onClose = () => {
    setOpenDrawer(false);
  };

  const HandleNewFeelReport = (report) => {
    dispatch(createFeel(report));
    onClose();
  };

  return (
    <>
      <FeelLayout showDrawer={showDrawer} />
      <Drawer
        title="New feel report"
        placement={"right"}
        closable={false}
        onClose={onClose}
        visible={OpenDrawer}
        width={500}
      >
        <NewFeelForm onSubmit={HandleNewFeelReport}></NewFeelForm>
      </Drawer>
    </>
  );
};

export default Feel;
