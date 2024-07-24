import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/mainPage/mainPage";
import RegistrationPage from "../pages/registrationPage/registrationPage";
import AuthPage from "../pages/authPage/authPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/auth" element={<AuthPage />}></Route>
      <Route path="/registration" element={<RegistrationPage />}></Route>
    </Routes>
  );
};

export default Router;
