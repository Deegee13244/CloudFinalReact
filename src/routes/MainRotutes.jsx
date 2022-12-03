import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Dashboard from "../containers/Dashboard"
import Main from "../containers/Main"
import LoginPage from "../containers/LoginPage"
import Register from "../containers/Register"
import Datastore from "../containers/Datastore"
import ProtectedRoutes from "./ProtectedRoutes"
import PublicRoutes from "./PublicRoutes"
import Search from "../containers/Search"
import Upload from "../containers/Upload"

const MainRoutes = () => {
  return (
    <>
      <Routes>
        {/** Protected Routes */}
        {/** Wrap all Route under ProtectedRoutes element */}
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/" element={<Navigate replace to="main" />} />
          <Route path="main" element={<Main />}>
            <Route
              path="/main"
              element={<Navigate replace to="/main/search" />}
            />
            <Route path="/main/search" element={<Search />} />
            <Route path="/main/datastore" element={<Datastore />} />
            <Route path="/main/dashboard" element={<Dashboard />} />
            <Route path="/main/upload" element={<Upload />} />
          </Route>
        </Route>

        {/** Public Routes */}
        {/** Wrap all Route under PublicRoutes element */}
        <Route path="" element={<PublicRoutes />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  )
}

export default MainRoutes
