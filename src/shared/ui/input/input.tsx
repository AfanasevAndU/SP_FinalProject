import { FC, useState } from "react";
import { InputProps } from "./input.types";
import { StyledInput } from "./input.styles";

export const Input: FC<InputProps> = ({ onChange, placeholder, id }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    onChange(value);
  };

  return (
    <StyledInput
      type="text"
      id={id}
      onChange={handleChange}
      placeholder={placeholder}
      value={searchTerm}
    />
  );
};
