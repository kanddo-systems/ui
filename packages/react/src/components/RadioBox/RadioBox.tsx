import React from "react";
import { Component } from "./RadioBox.styles";
import { Typography } from "../Typography/Typography";

export interface RadioBoxProps {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  hint?: string;
}

export const RadioBox: React.FC<RadioBoxProps> = ({
  label,
  value,
  options,
  onChange,
  hint,
}) => (
  <Component.Wrapper>
    <Typography variant="small">{label}</Typography>
    <Component.Options>
      {options.map((option) => (
        <Component.Label key={option.value}>
          <Component.Radio
            type="radio"
            name={label}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
          />
          {option.label}
        </Component.Label>
      ))}
    </Component.Options>
    {hint && <Typography variant="xxsmall">{hint}</Typography>}
  </Component.Wrapper>
);
