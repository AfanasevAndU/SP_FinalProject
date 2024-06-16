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
      <NavLink to="/">
        {
          <Button
            sx={{
              border: 0,
              width: "140px",
              height: 75,
              borderRadius: 0,
              backgroundColor: "#444c55",
            }}
            variant="contained"
          >
            AUTOSMART
          </Button>
        }
      </NavLink>
    </MainButtonGroup>
    <AuthButtonGroup>
      <NavLink to="/auth">{<Button>Вход</Button>}</NavLink>
      <NavLink to="/registration">{<Button>Регистрация</Button>}</NavLink>
    </AuthButtonGroup>
  </HeaderContainer>
);
