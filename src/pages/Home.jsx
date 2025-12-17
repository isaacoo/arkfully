import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">ARKFULLY</h1>
          <p className="hero-subtitle">당신의 아지트, 평온함을 찾는 공간</p>
          <p className="hero-description">
            일상에서 벗어나 평온한 시간을 보낼 수 있는 특별한 공간입니다.
          </p>
          <div className="hero-buttons">
            <Link to="/about" className="btn btn-primary">
              공간 둘러보기
            </Link>
            <Link to="/reservation" className="btn btn-secondary">
              예약하기
            </Link>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="arrow"></div>
        </div>
      </section>

      <section className="intro-section">
        <div className="container">
          <div className="intro-content">
            <h2>아크풀리를 소개합니다</h2>
            <p>
              아크풀리는 일상의 소란함에서 벗어나 평온한 시간을 보낼 수 있는 공간입니다.
              자연과 조화를 이루는 아름다운 공간에서 새로운 영감을 찾아보세요.
            </p>
            <Link to="/about" className="btn btn-outline">
              더 알아보기 →
            </Link>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2 className="section-title">주요 시설</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-image-placeholder">
                <span>이미지</span>
              </div>
              <h3>편안한 공간</h3>
              <p>휴식과 영감을 위한 아늑한 공간</p>
            </div>
            <div className="feature-card">
              <div className="feature-image-placeholder">
                <span>이미지</span>
              </div>
              <h3>다양한 시설</h3>
              <p>필요한 모든 것을 갖춘 완벽한 공간</p>
            </div>
            <div className="feature-card">
              <div className="feature-image-placeholder">
                <span>이미지</span>
              </div>
              <h3>자연과의 조화</h3>
              <p>아름다운 자연 환경 속에서의 경험</p>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/facilities" className="btn btn-outline">
              모든 시설 보기 →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

