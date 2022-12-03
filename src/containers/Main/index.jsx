import React from "react"
import { Routes, Route, Navigate, Outlet } from "react-router-dom"
import Navbar from "../Navbar"
import Dashboard from "../Dashboard"

const Main = () => {
  //   const [user, setUser] = React.useState("")

  //   React.useEffect(() => {
  //     const user = localStorage.getItem("user")
  //     setUser(!!user)
  //   })
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default Main
