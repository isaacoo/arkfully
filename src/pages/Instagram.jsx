import './Instagram.css'

const Instagram = () => {
  return (
    <div className="instagram-page">
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Instagram</h1>
          <p>아크풀리의 최신 소식을 확인하세요</p>
        </div>
      </section>

      <section className="instagram-content">
        <div className="container">
          <div className="instagram-header">
            <div className="instagram-icon">
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
            <h2>@arkfully</h2>
            <p>최신 게시물을 확인하고 아크풀리를 팔로우하세요</p>
            <p className="instagram-description">
              Instagram에서 아크풀리의 일상을 확인하고 팔로우해주세요.
              <br />
              새로운 소식과 이벤트를 가장 먼저 만나보실 수 있습니다.
            </p>
          </div>

          <div className="instagram-embed-container">
            <iframe
              src="https://www.instagram.com/arkfully/"
              className="instagram-iframe"
              title="Arkfully Instagram Feed"
              allowTransparency="true"
              allow="encrypted-media"
              scrolling="yes"
              frameBorder="0"
            ></iframe>
          </div>

          <div className="instagram-link-container">
            <a
              href="https://www.instagram.com/arkfully"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-instagram"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Instagram에서 보기
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Instagram
