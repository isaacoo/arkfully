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
          aria-label="메뉴"
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
              홈
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={isActive('/about') ? 'active' : ''}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              공간 소개
            </Link>
          </li>
          <li>
            <Link
              to="/facilities"
              className={isActive('/facilities') ? 'active' : ''}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              시설 소개
            </Link>
          </li>
          <li>
            <Link
              to="/nearby"
              className={isActive('/nearby') ? 'active' : ''}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              주변 명소
            </Link>
          </li>
          <li>
            <Link
              to="/reservation"
              className={isActive('/reservation') ? 'active' : ''}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              예약
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

