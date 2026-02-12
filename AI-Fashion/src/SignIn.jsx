import { useState } from 'react'
import './Auth.css'

function SignIn({ onSwitchToSignUp, onSignInSuccess }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields')
      return
    }

    // Check if user exists in localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const user = users.find(u => u.email === formData.email && u.password === formData.password)

    if (user) {
      setLoading(true)
      setTimeout(() => {
        localStorage.setItem('currentUser', JSON.stringify(user))
        setLoading(false)
        onSignInSuccess()
      }, 2000)
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Welcome Back</h2>
        <p className="auth-subtitle">Sign in to your Fashion AI account</p>
        
        <form onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="btn-auth" disabled={loading}>
            {loading ? (
              <div className="loading-container">
                <div className="loading-spinner"></div>
                <span>Signing in...</span>
              </div>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <p className="auth-switch">
          Don't have an account? <span onClick={onSwitchToSignUp}>Sign Up</span>
        </p>
      </div>
    </div>
  )
}

export default SignIn
