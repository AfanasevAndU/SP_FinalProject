import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/mainPage/mainPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
    </Routes>
  );
};

export default Router;
