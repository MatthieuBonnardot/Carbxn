import React from "react";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import { Button, Card, Statistic } from "antd";
import TrendAnalysis from "./TrendAnalysis";

import { useQuery } from "react-query";
import { fetchReport } from "../../../../api/feel";

const scoresMapper = {
  personal: "Personal life score",
  work: "Career score",
  sleep: "Quality of sleep",
  workload: "Current workload",
};

const FeelLayout = ({ showDrawer }) => {
  const { data, isLoading } = useQuery(["report"], () => fetchReport(), {
    keepPreviousData: true,
  });

  console.log(data);

  return (
    <>
      {data && !isLoading && (
        <div
          style={{
            padding: " 30px",
            background: "#ececec",
            height: "90vh",
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
            >
              <TrendAnalysis data={data.report}></TrendAnalysis>
            </Card>
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
              {Object.keys(data.scores).map((score) => (
                <Card bordered={false} style={{ width: 300 }}>
                  <Statistic
                    title={scoresMapper[score]}
                    value={data.scores[score]}
                    precision={2}
                    valueStyle={{
                      color:
                        data.scores[score] > 3.5
                          ? "#3f8600"
                          : data.scores[score] > 1.5
                          ? "orange"
                          : "red",
                    }}
                    prefix={
                      data.scores[score] > 3.5 ? (
                        <SmileOutlined />
                      ) : data.scores[score] > 1.5 ? (
                        <MehOutlined />
                      ) : (
                        <FrownOutlined />
                      )
                    }
                    suffix="/5"
                  />
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeelLayout;
