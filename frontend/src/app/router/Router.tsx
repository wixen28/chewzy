import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Layout from "../layout/Layout"
import LoginPage from "../../pages/auth_login/LoginPage"
import RegisterPage from "../../pages/auth_register/RegisterPage"
import HomePage from "../../pages/homePage/HomePage"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home-page" element={<HomePage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router




