import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { cars } from '../data/cars'
import './Booking.css'

const today = new Date().toISOString().split('T')[0]

function getDateDiff(start, end) {
  if (!start || !end) return 0
  const s = new Date(start)
  const e = new Date(end)
  const diff = Math.ceil((e - s) / (1000 * 60 * 60 * 24))
  return diff > 0 ? diff : 0
}

export default function Booking() {
  const { id } = useParams()
  const navigate = useNavigate()
  const car = cars.find(c => c.id === parseInt(id))

  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    pickupDate: '', returnDate: '',
    pickupLocation: '', dropLocation: '',
    licenseNo: '', notes: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [step, setStep] = useState(1)

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

  const days = getDateDiff(form.pickupDate, form.returnDate)
  const subtotal = days * car.price
  const tax = Math.round(subtotal * 0.05)
  const deposit = 5000
  const total = subtotal + tax + deposit

  const validate = (step) => {
    const e = {}
    if (step === 1) {
      if (!form.name.trim()) e.name = 'Full name is required'
      if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required'
      if (!form.phone.match(/^[6-9]\d{9}$/)) e.phone = 'Valid 10-digit mobile number required'
      if (!form.licenseNo.trim()) e.licenseNo = 'Driving license number is required'
    }
    if (step === 2) {
      if (!form.pickupDate) e.pickupDate = 'Pickup date is required'
      if (!form.returnDate) e.returnDate = 'Return date is required'
      if (form.pickupDate && form.returnDate && days <= 0) e.returnDate = 'Return date must be after pickup date'
      if (!form.pickupLocation.trim()) e.pickupLocation = 'Pickup location is required'
    }
    return e
  }

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    setErrors(er => ({ ...er, [e.target.name]: '' }))
  }

  const handleNext = () => {
    const e = validate(step)
    if (Object.keys(e).length) { setErrors(e); return }
    setStep(s => s + 1)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const e2 = validate(2)
    if (Object.keys(e2).length) { setErrors(e2); setStep(2); return }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main className="page-wrapper">
        <div className="container">
          <div className="booking-success">
            <div className="booking-success__icon">🎉</div>
            <h2>Booking Confirmed!</h2>
            <p>
              Thank you, <strong>{form.name}</strong>! Your booking for the <strong>{car.name}</strong> has been received.
              We'll call you at <strong>{form.phone}</strong> within 30 minutes to confirm.
            </p>
            <div className="booking-success__details">
              <div><span>Car</span><strong>{car.name}</strong></div>
              <div><span>Pickup</span><strong>{form.pickupDate}</strong></div>
              <div><span>Return</span><strong>{form.returnDate}</strong></div>
              <div><span>Duration</span><strong>{days} day{days !== 1 ? 's' : ''}</strong></div>
              <div><span>Total</span><strong style={{color:'var(--accent)'}}>₹{total.toLocaleString()}</strong></div>
            </div>
            <div className="booking-success__actions">
              <Link to="/cars" className="btn-primary">Browse More Cars</Link>
              <Link to="/" className="btn-secondary">Back to Home</Link>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="page-wrapper">
      <div className="page-hero">
        <div className="container">
          <span className="section-tag">Booking</span>
          <h1 className="section-title">Reserve Your <span>Car</span></h1>
        </div>
      </div>

      <div className="container">
        <div className="booking-layout">
          {/* Form */}
          <div className="booking-form-wrap">
            {/* Steps */}
            <div className="booking-steps">
              {[
                { n: 1, label: 'Your Details' },
                { n: 2, label: 'Trip Details' },
                { n: 3, label: 'Confirm' },
              ].map(s => (
                <div
                  key={s.n}
                  className={`booking-step ${step === s.n ? 'booking-step--active' : ''} ${step > s.n ? 'booking-step--done' : ''}`}
                >
                  <span className="booking-step__num">{step > s.n ? '✓' : s.n}</span>
                  <span className="booking-step__label">{s.label}</span>
                </div>
              ))}
            </div>

            <form className="booking-form" onSubmit={handleSubmit}>
              {/* Step 1: Personal */}
              {step === 1 && (
                <div className="booking-section">
                  <h3 className="booking-section__title">Personal Information</h3>
                  <div className="form-grid">
                    <div className={`form-field ${errors.name ? 'form-field--error' : ''}`}>
                      <label>Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} placeholder="e.g. Arjun Sharma" />
                      {errors.name && <span className="form-error">{errors.name}</span>}
                    </div>
                    <div className={`form-field ${errors.email ? 'form-field--error' : ''}`}>
                      <label>Email Address *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
                      {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>
                    <div className={`form-field ${errors.phone ? 'form-field--error' : ''}`}>
                      <label>Mobile Number *</label>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="10-digit mobile" maxLength={10} />
                      {errors.phone && <span className="form-error">{errors.phone}</span>}
                    </div>
                    <div className={`form-field ${errors.licenseNo ? 'form-field--error' : ''}`}>
                      <label>Driving License No. *</label>
                      <input name="licenseNo" value={form.licenseNo} onChange={handleChange} placeholder="e.g. TN33 XXXXXXXXXXXX" />
                      {errors.licenseNo && <span className="form-error">{errors.licenseNo}</span>}
                    </div>
                  </div>
                  <button type="button" className="btn-primary booking-next" onClick={handleNext}>
                    Continue →
                  </button>
                </div>
              )}

              {/* Step 2: Trip */}
              {step === 2 && (
                <div className="booking-section">
                  <h3 className="booking-section__title">Trip Details</h3>
                  <div className="form-grid">
                    <div className={`form-field ${errors.pickupDate ? 'form-field--error' : ''}`}>
                      <label>Pickup Date *</label>
                      <input type="date" name="pickupDate" value={form.pickupDate} min={today} onChange={handleChange} />
                      {errors.pickupDate && <span className="form-error">{errors.pickupDate}</span>}
                    </div>
                    <div className={`form-field ${errors.returnDate ? 'form-field--error' : ''}`}>
                      <label>Return Date *</label>
                      <input type="date" name="returnDate" value={form.returnDate} min={form.pickupDate || today} onChange={handleChange} />
                      {errors.returnDate && <span className="form-error">{errors.returnDate}</span>}
                    </div>
                    <div className={`form-field form-field--full ${errors.pickupLocation ? 'form-field--error' : ''}`}>
                      <label>Pickup Location *</label>
                      <input name="pickupLocation" value={form.pickupLocation} onChange={handleChange} placeholder="Your address in Coimbatore" />
                      {errors.pickupLocation && <span className="form-error">{errors.pickupLocation}</span>}
                    </div>
                    <div className="form-field form-field--full">
                      <label>Drop Location (optional)</label>
                      <input name="dropLocation" value={form.dropLocation} onChange={handleChange} placeholder="Leave blank if same as pickup" />
                    </div>
                    <div className="form-field form-field--full">
                      <label>Special Notes</label>
                      <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} placeholder="Any special requirements or requests..." />
                    </div>
                  </div>
                  <div className="booking-btns">
                    <button type="button" className="btn-secondary" onClick={() => setStep(1)}>← Back</button>
                    <button type="button" className="btn-primary" onClick={handleNext}>Continue →</button>
                  </div>
                </div>
              )}

              {/* Step 3: Confirm */}
              {step === 3 && (
                <div className="booking-section">
                  <h3 className="booking-section__title">Review & Confirm</h3>
                  <div className="booking-review">
                    <div className="booking-review__section">
                      <h4>Personal Details</h4>
                      <div className="booking-review__row"><span>Name</span><strong>{form.name}</strong></div>
                      <div className="booking-review__row"><span>Email</span><strong>{form.email}</strong></div>
                      <div className="booking-review__row"><span>Phone</span><strong>{form.phone}</strong></div>
                      <div className="booking-review__row"><span>License No.</span><strong>{form.licenseNo}</strong></div>
                    </div>
                    <div className="booking-review__section">
                      <h4>Trip Details</h4>
                      <div className="booking-review__row"><span>Pickup Date</span><strong>{form.pickupDate}</strong></div>
                      <div className="booking-review__row"><span>Return Date</span><strong>{form.returnDate}</strong></div>
                      <div className="booking-review__row"><span>Duration</span><strong>{days} day{days !== 1 ? 's' : ''}</strong></div>
                      <div className="booking-review__row"><span>Pickup Location</span><strong>{form.pickupLocation}</strong></div>
                    </div>
                  </div>
                  <div className="booking-terms">
                    <p>By confirming, you agree to our <a href="#">Terms of Service</a> and <a href="#">Rental Policy</a>. 
                    The security deposit of ₹5,000 is refundable upon return of the vehicle in good condition.</p>
                  </div>
                  <div className="booking-btns">
                    <button type="button" className="btn-secondary" onClick={() => setStep(2)}>← Edit</button>
                    <button type="submit" className="btn-primary booking-confirm">
                      ✓ Confirm Booking
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Summary */}
          <div className="booking-summary">
            <div className="booking-summary__car">
              <img src={car.image} alt={car.name} />
              <div>
                <p className="booking-summary__brand">{car.brand}</p>
                <h3 className="booking-summary__name">{car.name}</h3>
                <p className="booking-summary__cat">{car.category} · {car.year}</p>
              </div>
            </div>

            <div className="booking-summary__pricing">
              <h4>Price Summary</h4>
              <div className="booking-summary__row">
                <span>Daily Rate</span>
                <strong>₹{car.price.toLocaleString()}</strong>
              </div>
              <div className="booking-summary__row">
                <span>Duration</span>
                <strong>{days > 0 ? `${days} day${days !== 1 ? 's' : ''}` : '—'}</strong>
              </div>
              <div className="booking-summary__row">
                <span>Subtotal</span>
                <strong>{days > 0 ? `₹${subtotal.toLocaleString()}` : '—'}</strong>
              </div>
              <div className="booking-summary__row">
                <span>Tax (5%)</span>
                <strong>{days > 0 ? `₹${tax.toLocaleString()}` : '—'}</strong>
              </div>
              <div className="booking-summary__row">
                <span>Security Deposit</span>
                <strong>₹{deposit.toLocaleString()}</strong>
              </div>
              <div className="booking-summary__row booking-summary__row--total">
                <span>Total Payable</span>
                <strong>{days > 0 ? `₹${total.toLocaleString()}` : '₹—'}</strong>
              </div>
            </div>

            <div className="booking-summary__includes">
              <p>✓ Comprehensive insurance included</p>
              <p>✓ Free doorstep delivery</p>
              <p>✓ 24/7 roadside assistance</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
