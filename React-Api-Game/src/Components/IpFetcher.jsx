import { useState } from 'react'
import './IpFetcher.css'

function IpFetcher() {
  const [ip, setIp] = useState('')
  const [loading, setLoading] = useState(false)

  const getIp = async () => {
    setLoading(true)

    try {
      const res = await fetch('https://api.ipify.org?format=json')
      const data = await res.json()
      setIp(data.ip)
    } catch (err) {
      console.log(err.message)
      setIp('Could not get IP')
    }

    setLoading(false)
  }

  return (
    <div className="ip-box">
      <h2>My IP Address</h2>

      <button onClick={getIp}>
        {loading ? 'Loading...' : 'Show my IP'}
      </button>

      <div className="ip-field">
        {ip ? ip : 'Click the button to see your IP'}
      </div>
    </div>
  )
}

export default IpFetcher
