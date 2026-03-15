import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { cars } from '../data/cars'
import './CarDetails.css'

export default function CarDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const car = cars.find(c => c.id === parseInt(id))
  const [activeImg, setActiveImg] = useState(0)

  if (!car) {
    return (
      <main className="page-wrapper">
        <div className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
          <h2>Car not found</h2>
          <Link to="/cars" className="btn-primary" style={{ marginTop: '24px', display: 'inline-flex' }}>
            ← Back to Fleet
          </Link>
        </div>
      </main>
    )
  }

  const relatedCars = cars.filter(c => c.id !== car.id && c.category === car.category).slice(0, 3)

  return (
    <main className="page-wrapper">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/cars">Cars</Link>
          <span>/</span>
          <span>{car.name}</span>
        </nav>

        <div className="car-detail">
          {/* Left: Images */}
          <div className="car-detail__gallery">
            <div className="car-detail__main-img">
              <img
                src={car.gallery?.[activeImg] ?? car.image}
                alt={car.name}
              />
              {car.badge && (
                <span
                  className="car-detail__badge"
                  style={{ background: car.badgeColor + '22', color: car.badgeColor, border: `1px solid ${car.badgeColor}44` }}
                >
                  {car.badge}
                </span>
              )}
              {!car.available && (
                <div className="car-detail__unavailable">Currently Unavailable</div>
              )}
            </div>
            {car.gallery && car.gallery.length > 1 && (
              <div className="car-detail__thumbs">
                {car.gallery.map((img, i) => (
                  <button
                    key={i}
                    className={`car-detail__thumb ${activeImg === i ? 'car-detail__thumb--active' : ''}`}
                    onClick={() => setActiveImg(i)}
                  >
                    <img src={img} alt={`View ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Info */}
          <div className="car-detail__info">
            <p className="car-detail__brand">{car.brand} · {car.year} · {car.category}</p>
            <h1 className="car-detail__name">{car.name}</h1>

            <div className="car-detail__rating">
              <span className="car-detail__stars">{'★'.repeat(Math.floor(car.rating))}{'☆'.repeat(5 - Math.floor(car.rating))}</span>
              <strong>{car.rating}</strong>
              <span>({car.reviews} reviews)</span>
            </div>

            <div className="car-detail__price">
              <strong>₹{car.price.toLocaleString()}</strong>
              <span>/ day</span>
            </div>

            <p className="car-detail__description">{car.description}</p>

            {/* Specs Grid */}
            <div className="car-detail__specs">
              {[
                { label: 'Seats', value: `${car.seats} Persons`, icon: '👥' },
                { label: 'Fuel', value: car.fuel, icon: '⛽' },
                { label: 'Transmission', value: car.transmission, icon: '⚙️' },
                { label: 'Mileage', value: car.mileage, icon: '📊' },
                { label: 'Engine', value: car.engine, icon: '🔧' },
                { label: 'Year', value: car.year, icon: '📅' },
              ].map(spec => (
                <div className="car-detail__spec" key={spec.label}>
                  <span className="car-detail__spec-icon">{spec.icon}</span>
                  <div>
                    <p className="car-detail__spec-label">{spec.label}</p>
                    <p className="car-detail__spec-value">{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="car-detail__features">
              <h3>Included Features</h3>
              <div className="car-detail__features-grid">
                {car.features.map(f => (
                  <span key={f} className="car-detail__feature">
                    <span>✓</span> {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="car-detail__actions">
              {car.available ? (
                <Link to={`/booking/${car.id}`} className="btn-primary car-detail__book">
                  Book This Car →
                </Link>
              ) : (
                <button className="car-detail__book car-detail__book--disabled" disabled>
                  Currently Unavailable
                </button>
              )}
              <button className="btn-secondary" onClick={() => navigate(-1)}>
                ← Back
              </button>
            </div>

            {/* Includes */}
            <div className="car-detail__includes">
              <div className="car-detail__include">
                <span>🛡️</span>
                <div>
                  <strong>Comprehensive Insurance</strong>
                  <p>Fully covered for your peace of mind</p>
                </div>
              </div>
              <div className="car-detail__include">
                <span>⛽</span>
                <div>
                  <strong>Full Tank on Delivery</strong>
                  <p>Return with full tank only</p>
                </div>
              </div>
              <div className="car-detail__include">
                <span>📍</span>
                <div>
                  <strong>Free Doorstep Delivery</strong>
                  <p>Anywhere in Coimbatore</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Cars */}
        {relatedCars.length > 0 && (
          <section className="car-detail__related">
            <h2 className="section-title" style={{ marginBottom: '32px' }}>
              Similar <span>Vehicles</span>
            </h2>
            <div className="car-detail__related-grid">
              {relatedCars.map(rc => (
                <Link to={`/cars/${rc.id}`} key={rc.id} className="car-detail__related-card">
                  <img src={rc.image} alt={rc.name} />
                  <div className="car-detail__related-info">
                    <h4>{rc.name}</h4>
                    <p>₹{rc.price.toLocaleString()}/day</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
