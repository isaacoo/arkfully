import './Reservation.css'

const Reservation = () => {
  return (
    <div className="reservation-page">
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>예약</h1>
          <p>아크풀리를 예약하고 방문해보세요</p>
        </div>
      </section>

      <section className="reservation-content">
        <div className="container">
          <div className="reservation-info">
            <h2>대관 및 숙소 예약</h2>
            <p>
              아크풀리는 대관 및 숙소 예약을 받고 있습니다.
              아래 링크를 통해 예약 페이지로 이동하실 수 있습니다.
            </p>
            <div className="reservation-links">
              <a
                href="https://litt.ly/arkfully"
                target="_blank"
                rel="noopener noreferrer"
                className="reservation-link"
              >
                <div className="link-card">
                  <h3>공식 예약 페이지</h3>
                  <p>아크풀리 공식 예약 사이트로 이동합니다</p>
                  <span className="link-arrow">→</span>
                </div>
              </a>
              <a
                href="https://www.instagram.com/arkfully/"
                target="_blank"
                rel="noopener noreferrer"
                className="reservation-link"
              >
                <div className="link-card">
                  <h3>인스타그램 문의</h3>
                  <p>인스타그램을 통해 문의하실 수 있습니다</p>
                  <span className="link-arrow">→</span>
                </div>
              </a>
            </div>
          </div>

          <div className="reservation-notice">
            <h3>예약 안내</h3>
            <ul>
              <li>예약은 공식 예약 페이지를 통해 진행됩니다.</li>
              <li>예약 관련 문의는 인스타그램 DM으로도 가능합니다.</li>
              <li>예약 전 이용 가능 시간과 요금을 확인해주세요.</li>
              <li>취소 및 변경 정책을 확인하신 후 예약해주세요.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Reservation

