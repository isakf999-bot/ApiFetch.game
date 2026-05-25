import { useState } from 'react'
import './Register.css'

function Register({ goToLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleRegister = () => {
    if (username === '' || password === '') {
      setError('Please fill in both fields')
     
      return
    }

    localStorage.setItem('username', username)
    localStorage.setItem('password', password)

    setError('')
    alert('Account created! You can now log in.')
    goToLogin()
  }

  return (
    <div className="register-box">
      <h2>Register</h2>

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

      <button onClick={handleRegister}>Create account</button>

      {error && <p className="error">{error}</p>}

      <p className="switch">
        Already have an account?{' '}
        <span onClick={goToLogin}>Login here</span>
      </p>
    </div>
  )
}

export default Register
