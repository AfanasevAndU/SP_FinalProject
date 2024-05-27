import styled from "styled-components";

export const HeaderContainer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "black",
  color: "white",
  fontSize: "25px",
  fontWeight: "bold",
  width: "100%",
  height: "75px",
  position: "fixed",
  top: "0",
  left: "0",
});

export const AuthButtonGroup = styled.div({
  display: "flex",
  paddingRight: "20px",
});

export const MainButtonGroup = styled.div({
  display: "flex",
  paddingLeft: "50px",
});
