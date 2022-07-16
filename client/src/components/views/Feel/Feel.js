import React, { useState } from "react";
import FeelLayout from "./Layout/FeelLayout";
import NewFeelForm from "./DrawerForm/NewFeelForm";
import { Drawer } from "antd";
import { useDispatch } from "react-redux";
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
    dispatch({ type: "ADD_FEEL_REPORT", payload: report });
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
