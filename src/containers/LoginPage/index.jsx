import React from "react"
import { useNavigate } from "react-router-dom"
import { postRequest } from "../../utils/request"
import "./style.css"

const Login = () => {
  const navigate = useNavigate()

  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")

  const onClickLogin = async () => {
    const result = await postRequest("login-user", { username, password })
    if (result?.email && result?.username) {
      localStorage.setItem("user", username)
      navigate("/dashboard")
    } else {
      alert(result?.error)
    }
  }

  const onChangeUsername = (e) => {
    setUsername(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div className="login-page">
      <div className="login">
        <h1>Login</h1>
        <form className="form">
          <div className="form-item">
            <label htmlFor="username" className="label">
              Username
            </label>
            <input
              type="text"
              id="login-username"
              className="input"
              value={username}
              onChange={onChangeUsername}
              required
            />
          </div>
          <div className="form-item">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              id="login-password"
              className="input"
              value={password}
              onChange={onChangePassword}
              required
            />
          </div>

          <button type="button" onClick={onClickLogin} className="button">
            Login
          </button>
        </form>

        <div className="link">
          <a href="/register">Register</a>
        </div>
      </div>
    </div>
  )
}

export default Login
