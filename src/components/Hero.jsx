import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      {/* Background */}
      <div className="hero__bg">
        <div className="hero__bg-grid"></div>
        <div className="hero__bg-glow"></div>
        <div className="hero__bg-glow hero__bg-glow--2"></div>
      </div>

      <div className="container">
        <div className="hero__inner">
          <div className="hero__content">
            <div className="hero__tag animate-in">
              <span className="hero__tag-dot"></span>
              Coimbatore's #1 Self Drive Service
            </div>

            <h1 className="hero__title">
              <span className="hero__title-line animate-in" style={{animationDelay:'0.1s'}}>Drive</span>
              <span className="hero__title-line hero__title-line--accent animate-in" style={{animationDelay:'0.2s'}}>Your Way,</span>
              <span className="hero__title-line animate-in" style={{animationDelay:'0.3s'}}>Your Rules.</span>
            </h1>

            <p className="hero__subtitle animate-in" style={{animationDelay:'0.4s'}}>
              Premium self-drive cars in Coimbatore. No driver needed. No hidden charges.
              Just pure freedom on the road from ₹1,100/day.
            </p>

            <div className="hero__actions animate-in" style={{animationDelay:'0.5s'}}>
              <Link to="/cars" className="btn-primary hero__btn">
                Browse Fleet →
              </Link>
              <Link to="/about" className="btn-secondary">
                How It Works
              </Link>
            </div>

            <div className="hero__stats animate-in" style={{animationDelay:'0.6s'}}>
              <div className="hero__stat">
                <strong>500+</strong>
                <span>Happy Customers</span>
              </div>
              <div className="hero__stat-divider"></div>
              <div className="hero__stat">
                <strong>25+</strong>
                <span>Premium Cars</span>
              </div>
              <div className="hero__stat-divider"></div>
              <div className="hero__stat">
                <strong>4.9★</strong>
                <span>Avg Rating</span>
              </div>
            </div>
          </div>

          <div className="hero__visual animate-in" style={{animationDelay:'0.3s'}}>
            <div className="hero__car-container">
              <div className="hero__car-glow"></div>
              <img
                src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900&q=85"
                alt="BMW 3 Series"
                className="hero__car-img"
              />
              <div className="hero__car-card">
                <div className="hero__car-card-info">
                  <span className="hero__car-card-name">BMW 3 Series</span>
                  <span className="hero__car-card-price">₹2,800<small>/day</small></span>
                </div>
                <span className="hero__car-card-badge">Available Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>
  )
}
