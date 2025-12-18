import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          ARKFULLY
        </Link>
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li>
            <Link
              to="/"
              className={isActive('/') ? 'active' : ''}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={isActive('/about') ? 'active' : ''}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/facilities"
              className={isActive('/facilities') ? 'active' : ''}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Facilities
            </Link>
          </li>
          <li>
            <Link
              to="/nearby"
              className={isActive('/nearby') ? 'active' : ''}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Nearby
            </Link>
          </li>
          <li>
            <Link
              to="/reservation"
              className={isActive('/reservation') ? 'active' : ''}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reservation
            </Link>
          </li>
          <li>
            <Link
              to="/instagram"
              className={isActive('/instagram') ? 'active' : ''}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Instagram
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

