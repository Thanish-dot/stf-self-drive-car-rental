import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              🚗 STF <strong>Drive</strong>
            </Link>
            <p className="footer__tagline">
              Coimbatore's most trusted self-drive car rental service. 
              Premium vehicles, zero hassle, total freedom.
            </p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Instagram">📸</a>
              <a href="#" className="footer__social-link" aria-label="Facebook">👥</a>
              <a href="#" className="footer__social-link" aria-label="WhatsApp">💬</a>
              <a href="#" className="footer__social-link" aria-label="YouTube">▶️</a>
            </div>
          </div>

          <div className="footer__col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/cars">Browse Fleet</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Car Types</h4>
            <ul>
              <li><Link to="/cars">Sedans</Link></li>
              <li><Link to="/cars">SUVs</Link></li>
              <li><Link to="/cars">Luxury Cars</Link></li>
              <li><Link to="/cars">Off-Road Vehicles</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Contact Us</h4>
            <ul className="footer__contact">
              <li>
                <span>📍</span>
                <span>42, Race Course Road,<br/>Coimbatore – 641018</span>
              </li>
              <li>
                <span>📞</span>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li>
                <span>✉️</span>
                <a href="mailto:info@stfdrive.in">info@stfdrive.in</a>
              </li>
              <li>
                <span>⏰</span>
                <span>24/7 Support Available</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2024 STF Self Drive Car Rental. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
