import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { LoginPage } from "../../pages/LoginPage";
import { SignupPage } from "../../pages/SignupPage";
import { WelcomePage } from "../../pages/WelcomePage";

export const AppContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
};
