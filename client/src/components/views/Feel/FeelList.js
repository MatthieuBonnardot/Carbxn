import React from "react";
import { Card, Table, Rate } from "antd";
import moment from "moment";

const FeelList = (props) => {
  const dataSource = [
    {
      key: "1",
      date: moment().format("l"),
      case: "Pepsico",
      personal: 3,
      work: 4,
      sleep: 2,
      workload: 4,
      comment:
        "Today, was quite nice mainly focused on development, react query is a pain tho",
    },
    {
      key: "2",
      date: moment().format("l"),
      case: "Pepsico",
      personal: 3,
      work: 4,
      sleep: 2,
      workload: 1,
      comment:
        "Today, was quite nice mainly focused on development, react query is a pain tho",
    },
    {
      key: "3",
      date: moment().format("l"),
      case: "Pepsico",
      personal: 3,
      work: 4,
      sleep: 5,
      workload: 1,
      comment:
        "Today, was quite nice mainly focused on development, react query is a pain tho",
    },
    {
      key: "4",
      date: moment().format("l"),
      case: "Pepsico",
      personal: 3,
      work: 4,
      sleep: 4,
      workload: 2,
      comment:
        "Today, was quite nice mainly focused on development, react query is a pain tho",
    },
    {
      key: "5",
      date: moment().format("l"),
      case: "Pepsico",
      personal: 5,
      work: 4,
      sleep: 3,
      workload: 1,
      comment:
        "Today, was quite nice mainly focused on development, react query is a pain tho",
    },
    {
      key: "6",
      date: moment().format("l"),
      case: "Pepsico",
      personal: 4,
      work: 5,
      sleep: 2,
      workload: 3,
      comment:
        "Today, was quite nice mainly focused on development, react query is a pain tho",
    },
  ];

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
          <Table dataSource={dataSource} columns={columns} />;
        </Card>
      </div>
    </>
  );
};

export default FeelList;
