import React, { useState } from "react";
import { Line } from "@antv/g2plot";
import { useQuery } from "react-query";
import { fetchReport } from "../../../../api/feel";
import { useEffect } from "react";
import { Skeleton } from "antd";

const TrendAnalysis = ({ data }) => {
  console.log(data);
  useEffect(() => {
    if (data && data.length > 0) {
      const line = new Line("container", {
        data: data || [],
        xField: "Date",
        yField: "value",
        seriesField: "series",

        yAxis: {
          label: {
            formatter: (v) =>
              `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
          },
        },
        smooth: true,
        animation: {
          appear: {
            animation: "path-in",
            duration: 5000,
          },
        },
      });
      line.render();
    }
  }, [data]);

  return (
    <>
      <div id="container"></div>
    </>
  );
};

export default TrendAnalysis;
