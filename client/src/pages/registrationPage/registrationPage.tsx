import { Input } from "../../shared/ui/input";
import {
  RegistrationContainer,
  ButtonContainer,
  ErrorText,
  InputContainer,
  Title,
} from "./registrationPage.styles";
import { Button } from "../../shared/ui/button";
import { Label } from "../../shared/ui/label";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import React from "react";

const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nicknameError, setNicknameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handleNicknameChange = (value: string) => {
    setNickname(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  return (
    <RegistrationContainer>
      <Title>Регистрация</Title>
      <InputContainer>
        <Label>Введите никнейм</Label>
        <Input
          value={nickname}
          onChange={handleNicknameChange}
          placeholder="Nickname"
        ></Input>
        <ErrorText>{nicknameError}</ErrorText>
      </InputContainer>
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
            if (
              email.length > 0 &&
              password.length > 0 &&
              nickname.length > 0
            ) {
              setEmailError("");
              setPasswordError("");
              setNicknameError("");
              return;
            }

            if (email.length == 0) {
              setEmailError("Пожалуйста, введите email");
            }
            if (nickname.length == 0) {
              setNicknameError("Пожалуйста, введите никнейм");
            }
            if (password.length == 0) {
              setPasswordError("Пожалуйста, введите пароль");
            }
          }}
        >
          Зарегистрироваться
        </Button>
        <div>Или</div>
        <NavLink to="/registration">{<Button>Войти</Button>}</NavLink>
      </ButtonContainer>
    </RegistrationContainer>
  );
};

export default RegistrationPage;
