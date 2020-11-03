import React from "react";
import { InputContainer, Option } from "./style";

export const Input = ({ type = "text", placeholder, value, onChange }) => (
  <InputContainer
    onChange={onChange}
    type={type}
    placeholder={placeholder}
    value={value}
  />
);

export const Select = ({ options, selectVal = "from below" }) => (
  <InputContainer as="select">
    <Option selected="selected" disabled="disabled">
      Select {selectVal}
    </Option>
    {options.map((el, id) => (
      <Option value={el} key={id}>
        {el}
      </Option>
    ))}
  </InputContainer>
);
