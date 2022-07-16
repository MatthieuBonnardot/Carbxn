import { FrownOutlined, SmileOutlined } from "@ant-design/icons";
import { Slider } from "antd";
import React, { useState } from "react";
import "./iconSliderStyles.css";

const IconSlider = (props) => {
  const { max, min, name, handler } = props;
  const [value, setValue] = useState(0);
  const mid = Number(((max - min) / 2).toFixed(5));
  const preColorCls = value >= mid ? "" : "icon-wrapper-active";
  const nextColorCls = value >= mid ? "icon-wrapper-active" : "";
  return (
    <div className="icon-wrapper">
      <FrownOutlined className={preColorCls} />
      <Slider
        {...props}
        onChange={(value) => {
          handler(name, value);
          setValue(value);
        }}
        value={value}
      />
      <SmileOutlined className={nextColorCls} />
    </div>
  );
};

export default IconSlider;
