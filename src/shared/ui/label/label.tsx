import { FC } from "react";
import { LabelProps } from "./label.types";
import { LabelText } from "./label.styles";

export const Label: FC<LabelProps> = ({ children, ...rest }) => {
  return <LabelText {...rest}>{children}</LabelText>;
};
