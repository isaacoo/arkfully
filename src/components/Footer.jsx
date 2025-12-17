import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ARKFULLY</h3>
            <p>당신의 아지트, 평온함을 찾는 공간</p>
          </div>
          <div className="footer-section">
            <h4>메뉴</h4>
            <ul>
              <li><Link to="/about">공간 소개</Link></li>
              <li><Link to="/facilities">시설 소개</Link></li>
              <li><Link to="/nearby">주변 명소</Link></li>
              <li><Link to="/reservation">예약</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>연락처</h4>
            <p>인스타그램: <a href="https://www.instagram.com/arkfully/" target="_blank" rel="noopener noreferrer">@arkfully</a></p>
            <p>홈페이지: <a href="https://litt.ly/arkfully" target="_blank" rel="noopener noreferrer">litt.ly/arkfully</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 ARKFULLY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

