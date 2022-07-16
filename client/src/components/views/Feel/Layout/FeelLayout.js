import React from "react";
import { Card, Button } from "antd";

const FeelLayout = ({ showDrawer }) => {
  return (
    <>
      <div
        style={{
          padding: " 30px",
          background: "#ececec",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            maxWidth: "80%",
            margin: "0 auto ",
            padding: "1em",
          }}
        >
          <Button
            type="primary"
            style={{ marginRight: "1em" }}
            onClick={showDrawer}
          >
            Add Daily input
          </Button>
          <Button href="/feel/list">List of logs</Button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            maxWidth: "80%",
            margin: "0 auto ",
          }}
        >
          <Card
            title="Trend Analysis"
            bordered={false}
            style={{ width: "100%", height: "50vh" }}
          ></Card>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "1em",
              width: "100%",
            }}
          >
            <Card
              title="Personal Feel"
              bordered={false}
              style={{ width: 300, marginRight: "1em" }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            <Card title="Career Feel" bordered={false} style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            <Card title="Sleep meter" bordered={false} style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            <Card title="Complexity" bordered={false} style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeelLayout;
