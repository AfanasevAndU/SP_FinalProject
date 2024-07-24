import { ButtonProps } from "./button.types";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledButton = styled(Button)<ButtonProps>`
  border-radius: 10px;
`;
