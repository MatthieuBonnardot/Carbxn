import React from "react";
import { Line } from "@antv/g2plot";
import { useEffect } from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

const TrendAnalysis = (props) => {
  const dispatch = useDispatch()
  const fetchTrendAnalysis = useCallback(()=> {
    dispatch(feel)
  })

  useEffect(() => {}, []);

  return (
    <>
      <div id="container"></div>
    </>
  );
};

export default TrendAnalysis;
