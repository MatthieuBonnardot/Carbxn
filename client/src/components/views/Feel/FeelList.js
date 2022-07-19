import React from "react";
import { Card, Rate, Skeleton, Table } from "antd";
import { useQuery } from "react-query";
import { fetchFeels } from "../../../api/feel";

const FeelList = () => {
  const { data: list } = useQuery(["feels"], () => fetchFeels());

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Case",
      dataIndex: "case",
      key: "case",
    },
    {
      title: "Personal",
      dataIndex: "personal",
      key: "personal",
      render: (rating) => <Rate value={rating} />,
      sorter: (a, b) => a.personal - b.personal,
    },
    {
      title: "Work",
      dataIndex: "work",
      key: "work",
      render: (rating) => <Rate value={rating} />,
      sorter: (a, b) => a.work - b.work,
    },
    {
      title: "Workload",
      dataIndex: "workload",
      key: "workload",
      render: (rating) => <Rate value={rating} />,
      sorter: (a, b) => a.workload - b.workload,
    },
    {
      title: "Sleep",
      dataIndex: "sleep",
      key: "sleep",
      render: (rating) => <Rate value={rating} />,
      sorter: (a, b) => a.sleep - b.sleep,
    },
    {
      title: "Comment",
      dataIndex: "comment",
      key: "comment",
    },
  ];

  return (
    <>
      <div
        style={{
          padding: " 30px",
          background: "#ececec",
          height: "100vh",
        }}
      >
        <Card title="Reports" bordered={false} style={{ width: "100%" }}>
          {list ? (
            <Table dataSource={list.feels} columns={columns} />
          ) : (
            <Skeleton active />
          )}
        </Card>
      </div>
    </>
  );
};

export default FeelList;
