import React from 'react'
import { Link } from 'react-router-dom'
import './Error404.css'

const Error404 = () => {
  return (
    <div className="error-container">
      <h1 className="error-code">404</h1>
      <h2 className="error-title">Page Not Found</h2>
      <p className="error-message">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link to="/" className="error-button">
        Go Back Home
      </Link>
    </div>
  )
}

export default Error404
