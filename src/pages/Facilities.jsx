import './Facilities.css'

const Facilities = () => {
  const facilities = [
    {
      title: '편안한 휴게 공간',
      description: '편안하게 휴식을 취할 수 있는 아늑한 공간입니다.',
      image: '이미지'
    },
    {
      title: '작업 공간',
      description: '집중해서 작업할 수 있는 조용한 공간을 제공합니다.',
      image: '이미지'
    },
    {
      title: '주방 시설',
      description: '간단한 식사 준비가 가능한 주방 시설이 갖춰져 있습니다.',
      image: '이미지'
    },
    {
      title: '야외 공간',
      description: '자연을 만끽할 수 있는 아름다운 야외 공간입니다.',
      image: '이미지'
    },
    {
      title: '화장실',
      description: '깨끗하고 편리한 화장실 시설을 제공합니다.',
      image: '이미지'
    },
    {
      title: '주차 공간',
      description: '편리한 주차 공간을 제공합니다.',
      image: '이미지'
    }
  ]

  return (
    <div className="facilities-page">
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>시설 소개</h1>
          <p>아크풀리의 다양한 시설을 확인해보세요</p>
        </div>
      </section>

      <section className="facilities-content">
        <div className="container">
          <div className="facilities-grid">
            {facilities.map((facility, index) => (
              <div key={index} className="facility-card">
                <div className="facility-image-placeholder">
                  <span>{facility.image}</span>
                </div>
                <div className="facility-info">
                  <h3>{facility.title}</h3>
                  <p>{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Facilities

