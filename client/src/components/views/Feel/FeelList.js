import React from "react";
import { Card, Rate, Table, Skeleton } from "antd";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { feelList } from "../../../_actions/feel_actions";

const FeelList = () => {
  const dispatch = useDispatch()
  const { list } = useSelector((state) => state.feel);

  const fetchListOfFeels = useCallback(() => {
    dispatch(feelList());
  }, []);

  useEffect(() => {
    fetchListOfFeels();
  }, [fetchListOfFeels]);

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

  console.log(list);

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
          {list && list.length > 0 ? (
            <Table dataSource={list} columns={columns} />
          ) : (
            <Skeleton active />
          )}
        </Card>
      </div>
    </>
  );
};

export default FeelList;
