import { FC } from "react";
import { StyledButton } from "./button.styles";
import { ButtonProps } from "./button.types";

export const Button: FC<ButtonProps> = ({
  children,
  variant,
  sx,
  id,
  onClick,
}) => {
  return (
    <StyledButton id={id} variant={variant} sx={sx} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
