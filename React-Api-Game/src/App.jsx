import { useState } from 'react'
import IpFetcher from './Components/IpFetcher'
import Login from './Components/Login'
import Register from './Components/Register'
import './App.css'

function App() {
  const [page, setPage] = useState('login')

  return (
    <div>
      {page === 'login' && (
        <Login
          goToRegister={() => setPage('register')}
          goToGame={() => setPage('game')}
        />
      )}

      {page === 'register' && (
        <Register goToLogin={() => setPage('login')} />
      )}

      {page === 'game' && <IpFetcher />}
    </div>
  )
}

export default App
