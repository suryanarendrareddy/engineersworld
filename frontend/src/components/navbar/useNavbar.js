import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    document.body.style.background = '#020617'
    document.body.style.color = '#fff'
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return {
    isOpen,
    setIsOpen,
    pathname: location.pathname,
  }
}
