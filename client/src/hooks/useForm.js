import React from "react";

export const useForm = (initialState = {}, onSubmit) => {
  const [formData, setFormData] = React.useState(initialState);

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleDateInput = (e) =>
    setFormData({ ...formData, date: e.format("l") });
  const handleSliderInput = (name, value) =>
    setFormData({ ...formData, [name]: value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return {
    formData,
    handleInputChange,
    handleDateInput,
    handleSliderInput,
    handleSubmit,
  };
};
