import React from "react"
import { useNavigate } from "react-router-dom"
import { getRequest, postRequest } from "../../utils/request"
import "./style.css"

const Register = () => {
  const navigate = useNavigate()

  const [email, setEmail] = React.useState("")
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")

  const onClickRegister = async () => {
    const result = await postRequest("register-user", {
      username,
      email,
      password,
    })
    if (result?.email && result?.username) {
      localStorage.setItem("user", username)
      navigate("/dashboard")
    } else {
      alert(result?.error)
    }
    // localStorage.setItem("user", username)
    // navigate("/login")
  }

  const onChangeUsername = (e) => {
    setUsername(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  return (
    <div className="register-page">
      <div className="register">
        <h1>Register</h1>
        <form className="form">
          <div className="form-item">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="text"
              id="register-email"
              className="input"
              value={email}
              onChange={onChangeEmail}
              required
            />
          </div>
          <div className="form-item">
            <label htmlFor="username" className="label">
              Username
            </label>
            <input
              type="text"
              id="register-username"
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
              id="register-password"
              className="input"
              value={password}
              onChange={onChangePassword}
              required
            />
          </div>

          <button type="button" onClick={onClickRegister} className="button">
            Register
          </button>
        </form>

        <div className="link">
          <a href="/login">Login</a>
        </div>
      </div>
    </div>
  )
}

export default Register
