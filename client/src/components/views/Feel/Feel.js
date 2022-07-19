import React from "react";
import { Drawer } from "antd";
import { useState } from "react";
import { createFeel } from "../../../api/feel";
import { useMutation, useQueryClient } from "react-query";
import NewFeelForm from "./DrawerForm/NewFeelForm";
import FeelLayout from "./Layout/FeelLayout";

const Feel = (props) => {
  const queryClient = useQueryClient();
  const { mutateAsync: createNewFeel } = useMutation(createFeel, {
    onSuccess: () => {
      queryClient.invalidateQueries(["report"]);
    },
  });

  const [OpenDrawer, setOpenDrawer] = useState(false);

  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const onClose = () => {
    setOpenDrawer(false);
  };

  const HandleNewFeelReport = async (report) => {
    await createNewFeel({ dataToSubmit: report });
    props.history.push("/feel")
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
        <NewFeelForm
          user={props.user}
          onSubmit={HandleNewFeelReport}
        ></NewFeelForm>
      </Drawer>
    </>
  );
};

export default Feel;
