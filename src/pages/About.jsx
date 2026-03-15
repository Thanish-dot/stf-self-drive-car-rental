import { Link } from 'react-router-dom'
import './About.css'

export default function About() {
  const team = [
    { name: 'Senthil Kumar', role: 'Founder & CEO', initial: 'SK', desc: '15 years in the automotive industry. Founded STF Drive in 2018.' },
    { name: 'Tamilarasi R.', role: 'Operations Head', initial: 'TR', desc: 'Manages fleet maintenance and day-to-day customer operations.' },
    { name: 'Farook Ahmed', role: 'Customer Experience', initial: 'FA', desc: 'Ensures every customer gets a world-class experience every time.' },
  ]

  const milestones = [
    { year: '2018', title: 'STF Drive Founded', desc: 'Started with 3 cars in Coimbatore with a vision of premium self-drive rentals.' },
    { year: '2019', title: 'Fleet Expansion', desc: 'Grew to 10 vehicles including our first luxury segment cars.' },
    { year: '2021', title: '500 Happy Customers', desc: 'Reached 500 satisfied customers despite challenging pandemic conditions.' },
    { year: '2023', title: '25+ Cars & Counting', desc: 'Expanded fleet to 25+ vehicles with a 4.9-star average rating.' },
    { year: '2024', title: 'Online Platform Launch', desc: 'Launched our digital booking platform for instant reservations 24/7.' },
  ]

  return (
    <main className="page-wrapper">
      <div className="page-hero">
        <div className="container">
          <span className="section-tag">About STF Drive</span>
          <h1 className="section-title">Built for <span>Drivers</span></h1>
          <p className="section-subtitle" style={{ margin: '12px auto 0' }}>
            Coimbatore's most trusted self-drive car rental since 2018.
          </p>
        </div>
      </div>

      <div className="container">

        {/* Story Section */}
        <section className="about-story">
          <div className="about-story__content">
            <span className="section-tag">Our Story</span>
            <h2 className="section-title">Freedom to Drive <span>Your Way</span></h2>
            <p>
              STF Self Drive was born from a simple frustration — why should renting a car require
              a driver, excessive paperwork, and hidden charges? We set out to change that.
            </p>
            <p>
              Since 2018, we've been providing Coimbatore residents and visitors with a premium,
              hassle-free self-drive experience. Every car in our fleet is hand-picked, meticulously
              serviced, and delivered to your doorstep.
            </p>
            <p>
              Whether you're heading to the mountains of Ooty, exploring Kodaikanal, or simply need
              a reliable car for city errands — we have the perfect vehicle for every journey.
            </p>
            <div className="about-story__stats">
              {[
                { val: '6+', label: 'Years in Business' },
                { val: '25+', label: 'Premium Cars' },
                { val: '500+', label: 'Happy Customers' },
                { val: '4.9★', label: 'Average Rating' },
              ].map(s => (
                <div className="about-stat" key={s.label}>
                  <strong>{s.val}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-story__img">
            <img src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=700&q=85" alt="STF Drive Fleet" />
          </div>
        </section>

        {/* Values */}
        <section className="about-values">
          <div className="about-values__header">
            <span className="section-tag">Our Values</span>
            <h2 className="section-title">What We <span>Stand For</span></h2>
          </div>
          <div className="about-values__grid">
            {[
              { icon: '🔒', title: 'Safety First', desc: 'Every car undergoes rigorous safety checks before every rental. Your safety is non-negotiable.' },
              { icon: '💎', title: 'Premium Quality', desc: 'We maintain our fleet to showroom standards. Clean, fresh, and mechanically perfect every time.' },
              { icon: '🤝', title: 'Honest Pricing', desc: 'No surprise fees at checkout. The price you see is the price you pay. Always.' },
              { icon: '⚡', title: 'Fast & Efficient', desc: 'Book in 2 minutes online. Car delivered in under an hour. Zero waiting, maximum driving.' },
            ].map(v => (
              <div className="about-value-card" key={v.title}>
                <span>{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="about-timeline">
          <div className="about-timeline__header">
            <span className="section-tag">Our Journey</span>
            <h2 className="section-title">How Far We've <span>Come</span></h2>
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div className="timeline__item" key={i}>
                <div className="timeline__year">{m.year}</div>
                <div className="timeline__dot"></div>
                <div className="timeline__content">
                  <h4>{m.title}</h4>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="about-team">
          <div className="about-team__header">
            <span className="section-tag">The Team</span>
            <h2 className="section-title">People Behind <span>STF Drive</span></h2>
          </div>
          <div className="about-team__grid">
            {team.map(member => (
              <div className="team-card" key={member.name}>
                <div className="team-card__avatar">{member.initial}</div>
                <h3>{member.name}</h3>
                <p className="team-card__role">{member.role}</p>
                <p className="team-card__desc">{member.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="about-cta">
          <h2>Ready to Experience the Difference?</h2>
          <p>Join 500+ satisfied customers who trust STF Drive for every journey.</p>
          <div className="about-cta__actions">
            <Link to="/cars" className="btn-primary">Browse Fleet</Link>
            <Link to="/contact" className="btn-secondary">Get in Touch</Link>
          </div>
        </section>

      </div>
    </main>
  )
}
