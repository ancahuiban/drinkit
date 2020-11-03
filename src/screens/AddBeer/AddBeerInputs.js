import React from "react";
import { Subtitle, Input, Select } from "../../components";

export const Inputs = ({ text, value, onChange, isSelect, options }) => {
  return (
    <>
      <Subtitle align="center" text={text} />
      {isSelect ? (
        <Select options={options} onChange={onChange} />
      ) : (
        <Input value={value} onChange={onChange} />
      )}
    </>
  );
};
