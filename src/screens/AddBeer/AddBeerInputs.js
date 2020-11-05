import React from "react";
import { Subtitle, Input, Select, Rating } from "../../components";

export const Inputs = ({
  text,
  value,
  onChange,
  isSelect,
  options,
  isRating,
}) => (
  <>
    <Subtitle align="center" text={text} />
    {isSelect ? (
      <Select options={options} onChange={onChange} />
    ) : isRating ? (
      <Rating rating={value} setRating={onChange} />
    ) : (
      <Input value={value} onChange={onChange} />
    )}
  </>
);
