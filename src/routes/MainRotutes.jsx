import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Dashboard from "../containers/Dashboard"
import LoginPage from "../containers/LoginPage"
import Register from "../containers/Register"

import ProtectedRoutes from "./ProtectedRoutes"
import PublicRoutes from "./PublicRoutes"

const MainRoutes = () => (
  <Routes>
    {/** Protected Routes */}
    {/** Wrap all Route under ProtectedRoutes element */}
    <Route path="/" element={<ProtectedRoutes />}>
      <Route path="/" element={<Navigate replace to="dashboard" />} />
      <Route path="dashboard" element={<Dashboard />}></Route>
    </Route>

    {/** Public Routes */}
    {/** Wrap all Route under PublicRoutes element */}
    <Route path="" element={<PublicRoutes />}>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
    </Route>
  </Routes>
)

export default MainRoutes
