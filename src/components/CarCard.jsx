import { Link } from 'react-router-dom'
import './CarCard.css'

export default function CarCard({ car }) {
  return (
    <div className={`car-card ${!car.available ? 'car-card--unavailable' : ''}`}>
      {/* Image */}
      <div className="car-card__img-wrap">
        <img src={car.image} alt={car.name} className="car-card__img" />
        <div className="car-card__img-overlay"></div>

        {car.badge && (
          <span className="car-card__badge" style={{ background: car.badgeColor + '22', color: car.badgeColor, border: `1px solid ${car.badgeColor}44` }}>
            {car.badge}
          </span>
        )}

        {!car.available && (
          <div className="car-card__unavailable-label">Currently Unavailable</div>
        )}

        <div className="car-card__rating">
          <span>★</span> {car.rating} <em>({car.reviews})</em>
        </div>
      </div>

      {/* Body */}
      <div className="car-card__body">
        <div className="car-card__header">
          <div>
            <p className="car-card__brand">{car.brand} · {car.category}</p>
            <h3 className="car-card__name">{car.name}</h3>
          </div>
          <div className="car-card__price">
            <strong>₹{car.price.toLocaleString()}</strong>
            <span>/day</span>
          </div>
        </div>

        {/* Specs */}
        <div className="car-card__specs">
          <div className="car-card__spec">
            <span className="car-card__spec-icon">👥</span>
            {car.seats} Seats
          </div>
          <div className="car-card__spec">
            <span className="car-card__spec-icon">⛽</span>
            {car.fuel}
          </div>
          <div className="car-card__spec">
            <span className="car-card__spec-icon">⚙️</span>
            {car.transmission}
          </div>
          <div className="car-card__spec">
            <span className="car-card__spec-icon">🏎️</span>
            {car.mileage}
          </div>
        </div>

        {/* Actions */}
        <div className="car-card__actions">
          <Link to={`/cars/${car.id}`} className="car-card__view">
            View Details
          </Link>
          {car.available ? (
            <Link to={`/booking/${car.id}`} className="btn-primary car-card__book">
              Book Now
            </Link>
          ) : (
            <button className="car-card__book car-card__book--disabled" disabled>
              Unavailable
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
