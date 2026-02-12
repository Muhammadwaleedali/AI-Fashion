import { useState } from 'react'
import './Auth.css'

function SignUp({ onSwitchToSignIn, onSignUpSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    if (users.find(u => u.email === formData.email)) {
      setError('Email already registered')
      return
    }

    // Save user
    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password
    }
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))
    
    setSuccess(true)
    setTimeout(() => {
      onSwitchToSignIn()
    }, 2000)
  }

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Create Account</h2>
        <p className="auth-subtitle">Join Fashion AI today</p>
        
        <form onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">Account created! Redirecting to sign in...</div>}
          
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

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
              placeholder="Create a password"
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
            />
          </div>

          <button type="submit" className="btn-auth" disabled={success}>
            {success ? 'Account Created!' : 'Sign Up'}
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <span onClick={onSwitchToSignIn}>Sign In</span>
        </p>
      </div>
    </div>
  )
}

export default SignUp
