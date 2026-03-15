import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import CarCard from '../components/CarCard'
import { cars, testimonials } from '../data/cars'
import './Home.css'

export default function Home() {
  const featuredCars = cars.slice(0, 4)

  return (
    <main>
      <Hero />

      {/* Why STF */}
      <section className="features-section">
        <div className="container">
          <div className="features-section__header">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">The STF <span>Difference</span></h2>
            <p className="section-subtitle">
              More than just a car rental — we deliver a premium self-drive experience with zero compromise.
            </p>
          </div>
          <div className="features-grid">
            {[
              { icon: '🔑', title: 'Instant Booking', desc: 'Reserve your car online in under 2 minutes. No paperwork at the counter.' },
              { icon: '🛡️', title: 'Fully Insured', desc: 'Every vehicle is comprehensively insured. Drive with complete peace of mind.' },
              { icon: '🚗', title: 'Premium Fleet', desc: 'Meticulously maintained cars from top brands — always clean, always ready.' },
              { icon: '📍', title: 'Free Doorstep Delivery', desc: 'We bring the car to your location anywhere in Coimbatore.' },
              { icon: '⏰', title: '24/7 Support', desc: 'Our team is available around the clock for any assistance you need.' },
              { icon: '💳', title: 'Transparent Pricing', desc: 'What you see is what you pay. Zero hidden fees, ever.' },
            ].map((f, i) => (
              <div className="feature-card" key={i}>
                <div className="feature-card__icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="featured-section">
        <div className="container">
          <div className="featured-section__header">
            <div>
              <span className="section-tag">Our Fleet</span>
              <h2 className="section-title">Featured <span>Vehicles</span></h2>
            </div>
            <Link to="/cars" className="btn-secondary">View All Cars →</Link>
          </div>
          <div className="cars-grid">
            {featuredCars.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-section">
        <div className="container">
          <div className="how-section__inner">
            <div className="how-section__content">
              <span className="section-tag">Simple Process</span>
              <h2 className="section-title">Get on the Road <span>in 3 Steps</span></h2>
              <div className="how-steps">
                {[
                  { num: '01', title: 'Choose Your Car', desc: 'Browse our fleet and pick the perfect car for your journey.' },
                  { num: '02', title: 'Book & Pay', desc: 'Fill in your details, select dates, and confirm securely online.' },
                  { num: '03', title: 'Drive Away', desc: 'We deliver to your doorstep. Keys in hand, adventure begins.' },
                ].map((step, i) => (
                  <div className="how-step" key={i}>
                    <span className="how-step__num">{step.num}</span>
                    <div>
                      <h4>{step.title}</h4>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/cars" className="btn-primary">Start Booking</Link>
            </div>
            <div className="how-section__img">
              <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=85" alt="Drive" />
              <div className="how-section__img-card">
                <strong>4.9 / 5.0</strong>
                <span>Customer Satisfaction</span>
                <div className="how-stars">★★★★★</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-section__header">
            <span className="section-tag">Happy Customers</span>
            <h2 className="section-title">What Drivers <span>Say</span></h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map(t => (
              <div className="testimonial-card" key={t.id}>
                <div className="testimonial-card__stars">{'★'.repeat(t.rating)}</div>
                <p>"{t.text}"</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{t.avatar}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner__glow"></div>
            <h2>Ready to Hit the Road?</h2>
            <p>Book a premium self-drive car today. No driver required.</p>
            <div className="cta-banner__actions">
              <Link to="/cars" className="btn-primary">Browse All Cars</Link>
              <a href="tel:+919876543210" className="btn-secondary">📞 Call Us Now</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
