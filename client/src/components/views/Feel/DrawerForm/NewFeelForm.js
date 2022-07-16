import React from "react";
import { useForm } from "../../../../hooks/useForm";
import { Button, Checkbox, Form, Input, DatePicker } from "antd";
import IconSlider from "./Components/IconSlider";
import moment from "moment";
const { TextArea } = Input;

const DEFAULT_REPORT_STATE = {
  date: moment().format("l"),
  personal_feel: 0,
  work_feel: 0,
  sleep_feel: 0,
  workload_feel: 0,
  comment: "",
};

const NewFeelForm = (props) => {
  const {
    formData,
    handleInputChange,
    handleDateInput,
    handleSliderInput,
    handleSubmit,
  } = useForm(DEFAULT_REPORT_STATE, props.onSubmit);

  return (
    <>
      <Form
        name="New feel"
        initialValues={{ remember: true }}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Form.Item
          label="Date"
          name="date"
          rules={[{ required: true, message: "Please input the date!" }]}
        >
          <DatePicker onChange={handleDateInput} />
        </Form.Item>
        <Form.Item
          label="Case"
          name="date"
          rules={[{ required: false, message: "Please input the date!" }]}
        >
          <Input
            placeholder="Case name"
            name="case"
            onChange={handleInputChange}
          />
        </Form.Item>

        <Form.Item
          label="How do you feel today"
          name="personal_feel"
          rules={[
            { required: true, message: "Please input your personal mood!" },
          ]}
        >
          <IconSlider
            min={0}
            max={5}
            name="personal_feel"
            handler={handleSliderInput}
          ></IconSlider>
        </Form.Item>
        <Form.Item
          label="How is work going today"
          name="work_feel"
          rules={[{ required: true, message: "Please input your work mood!" }]}
        >
          <IconSlider
            min={0}
            max={5}
            name="work_feel"
            handler={handleSliderInput}
          ></IconSlider>
        </Form.Item>
        <Form.Item
          label="How did you wake up today"
          name="sleep_feel"
          rules={[{ required: true, message: "Please input your sleep!" }]}
        >
          <IconSlider
            min={0}
            max={5}
            name="sleep_feel"
            handler={handleSliderInput}
          ></IconSlider>
        </Form.Item>
        <Form.Item
          label="How is todays workload"
          name="workload_feel"
          rules={[{ required: true, message: "Please input your workload!" }]}
        >
          <IconSlider
            min={0}
            max={5}
            name="workload_feel"
            handler={handleSliderInput}
          ></IconSlider>
        </Form.Item>

        <Form.Item label="How is todays work looking" name="comments">
          <TextArea rows={4} name="comment" onChange={handleInputChange} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            disabled={formData === DEFAULT_REPORT_STATE}
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default NewFeelForm;
