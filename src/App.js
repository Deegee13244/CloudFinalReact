import * as React from "react"
import { BrowserRouter } from "react-router-dom"
import MainRoutes from "./routes/MainRotutes"

const App = () => {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  )
}

export default App
