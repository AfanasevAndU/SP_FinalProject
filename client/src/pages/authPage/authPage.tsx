import { Input } from "../../shared/ui/input";
import {
  AuthContainer,
  ButtonContainer,
  ErrorText,
  InputContainer,
  Title,
} from "./authPage.styles";
import { Button } from "../../shared/ui/button";
import { Label } from "../../shared/ui/label";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import React from "react";
import { PageContent } from "../../shared/ui/page-content";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  return (
    <PageContent>
      <AuthContainer>
        <Title>Авторизация</Title>
        <InputContainer>
          <Label>Введите Эл.почту</Label>
          <Input
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
          ></Input>
          <ErrorText>{emailError}</ErrorText>
        </InputContainer>
        <InputContainer>
          <Label>Введите пароль</Label>
          <Input
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          ></Input>
          <ErrorText>{passwordError}</ErrorText>
        </InputContainer>
        <ButtonContainer>
          <Button
            onClick={() => {
              if (email.length > 0 && password.length > 0) {
                console.log({ email }, { password });
                setEmailError("");
                setPasswordError("");
                return;
              }

              if (email.length == 0) {
                setEmailError("Пожалуйста, введите email");
              }
              if (password.length == 0) {
                setPasswordError("Пожалуйста, введите пароль");
              }
            }}
          >
            Войти
          </Button>
          <div>Или</div>
          <NavLink to="/registration">
            {<Button>Зарегистрироваться</Button>}
          </NavLink>
        </ButtonContainer>
      </AuthContainer>
    </PageContent>
  );
};

export default AuthPage;
