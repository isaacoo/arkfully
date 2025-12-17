import './About.css'

const About = () => {
  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>공간 소개</h1>
          <p>아크풀리에 대해 알아보세요</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-section">
            <div className="about-text">
              <h2>아크풀리란?</h2>
              <p>
                아크풀리는 일상의 소란함에서 벗어나 평온한 시간을 보낼 수 있는 특별한 공간입니다.
                자연과 조화를 이루는 아름다운 환경에서 새로운 영감을 찾고, 휴식과 창작의 시간을 가질 수 있습니다.
              </p>
              <p>
                우리는 방문하시는 모든 분들이 이 공간에서 평온함과 여유를 느끼실 수 있도록
                최선을 다하고 있습니다.
              </p>
            </div>
            <div className="about-image-placeholder">
              <span>공간 이미지</span>
            </div>
          </div>

          <div className="about-section reverse">
            <div className="about-text">
              <h2>우리의 철학</h2>
              <p>
                아크풀리는 단순한 공간을 넘어, 방문자들이 자신만의 시간을 가질 수 있는
                아지트가 되고자 합니다.
              </p>
              <p>
                빠르게 흘러가는 일상 속에서 잠시 멈춰 서서 자신을 돌아보고,
                새로운 에너지를 충전할 수 있는 공간을 제공합니다.
              </p>
            </div>
            <div className="about-image-placeholder">
              <span>공간 이미지</span>
            </div>
          </div>

          <div className="about-section">
            <div className="about-text">
              <h2>위치</h2>
              <p>
                아크풀리는 접근하기 편리한 위치에 자리잡고 있으며,
                주변의 아름다운 자연 환경과 조화를 이루고 있습니다.
              </p>
              <p>
                자세한 위치 정보는 예약 페이지에서 확인하실 수 있습니다.
              </p>
            </div>
            <div className="about-image-placeholder">
              <span>위치 이미지/지도</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

