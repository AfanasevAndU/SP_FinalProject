import styled from "styled-components";
import { ButtonProps } from "./button.types";

export const StyledButton = styled.button<ButtonProps>`
  min-width: ${(props) => (props.type === "box" ? "140px" : "90px")};
  height: ${(props) => (props.type === "box" ? "75px" : "40px")};
  font-size: 16px;
  background: ${(props) => (props.type === "light" ? "#f0f0fd" : "#444c55")};
  color: ${(props) => (props.type === "light" ? "black" : "white")};
  border: 0;
  border-style: solid;
  border-radius: ${(props) => (props.type === "box" ? "0px" : "5px")};
  padding-top: 5px;
  padding-bottom: 5px;
  align-items: center;
  margin-right: 5px;
  margin-left: 5px;

  &:hover {
    background: ${(props) => (props.type === "light" ? "black" : "#262a2f")};
    border: 1px;
    color: white;
    cursor: pointer;
  }

  &:active {
    transform: ${(props) =>
      props.type === "box" ? "translateY(0px)" : "translateY(2px)"};
  }
`;
