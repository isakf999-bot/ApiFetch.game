import { useState } from 'react'
import './Login.css'

function Login({ goToRegister, goToGame }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = () => {
    const savedUsername = localStorage.getItem('username')
    const savedPassword = localStorage.getItem('password')

    if (username === savedUsername && password === savedPassword) {
      setError('')
      goToGame()
    } else {
      setError('Wrong username or password')
    }
  }

  return (
    <div className="login-box">
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      {error && <p className="error">{error}</p>}

      <p className="switch">
        No account?{' '}
        <span onClick={goToRegister}>Register here</span>
      </p>
    </div>
  )
}

export default Login
