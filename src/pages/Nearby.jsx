import './Nearby.css'

const Nearby = () => {
  const places = [
    {
      name: '주변 카페',
      description: '아크풀리 근처의 아늑한 카페들을 방문해보세요.',
      image: '이미지'
    },
    {
      name: '자연 명소',
      description: '걷기 좋은 산책로와 아름다운 자연 경관을 만나보세요.',
      image: '이미지'
    },
    {
      name: '문화 시설',
      description: '근처의 갤러리, 박물관 등 문화 시설을 둘러보세요.',
      image: '이미지'
    },
    {
      name: '맛집',
      description: '주변의 맛있는 식당들을 추천합니다.',
      image: '이미지'
    }
  ]

  return (
    <div className="nearby-page">
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Nearby</h1>
          <p>아크풀리 주변의 가볼만한 곳들을 소개합니다</p>
        </div>
      </section>

      <section className="nearby-content">
        <div className="container">
          <div className="intro-text">
            <p>
              아크풀리 주변에는 다양한 명소들이 있습니다.
              공간을 방문하신 후 주변 지역도 함께 둘러보시면 더욱 풍성한 경험이 될 것입니다.
            </p>
          </div>
          <div className="places-grid">
            {places.map((place, index) => (
              <div key={index} className="place-card">
                <div className="place-image-placeholder">
                  <span>{place.image}</span>
                </div>
                <div className="place-info">
                  <h3>{place.name}</h3>
                  <p>{place.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Nearby

