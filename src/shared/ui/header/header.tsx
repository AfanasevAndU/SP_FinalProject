import {
  HeaderContainer,
  AuthButtonGroup,
  MainButtonGroup,
} from "./header.styles";
import { Button } from "../button";
import { NavLink } from "react-router-dom";

export const Header = () => (
  <HeaderContainer>
    <MainButtonGroup>
      <NavLink to="/">{<Button type="box">AUTOSMART</Button>}</NavLink>
    </MainButtonGroup>
    <AuthButtonGroup>
      <Button onClick={() => {}}>Войти</Button>
      <Button onClick={() => {}}>Зарегистрироваться</Button>
    </AuthButtonGroup>
  </HeaderContainer>
);
