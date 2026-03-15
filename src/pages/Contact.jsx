import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    setErrors(er => ({ ...er, [e.target.name]: '' }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSent(true)
  }

  const faqs = [
    { q: 'What documents do I need to rent a car?', a: 'You need a valid driving license (minimum 1 year old), Aadhaar card or passport, and a credit/debit card for the security deposit.' },
    { q: 'Is there a minimum rental period?', a: 'Our minimum rental period is 12 hours. Daily rates apply for 24-hour rentals.' },
    { q: 'Do you deliver the car to my location?', a: 'Yes! We offer free doorstep delivery anywhere within Coimbatore city limits. Outstation delivery is available for a small fee.' },
    { q: 'What happens in case of a breakdown?', a: 'We provide 24/7 roadside assistance. In case of any mechanical issue, we\'ll send help or a replacement vehicle immediately.' },
    { q: 'Can I take the car outside Coimbatore?', a: 'Yes, outstation travel is permitted. Please inform us in advance and check if any additional charges apply for your destination.' },
  ]

  return (
    <main className="page-wrapper">
      <div className="page-hero">
        <div className="container">
          <span className="section-tag">Get in Touch</span>
          <h1 className="section-title">We're Here to <span>Help</span></h1>
          <p className="section-subtitle" style={{ margin: '12px auto 0' }}>
            Have a question or need assistance? Our team is available 24/7.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="contact-layout">

          {/* Contact Info */}
          <div className="contact-info">
            <h3>Contact Details</h3>
            <div className="contact-cards">
              {[
                { icon: '📞', title: 'Phone', lines: ['+91 98765 43210', '+91 87654 32109'], action: 'tel:+919876543210' },
                { icon: '✉️', title: 'Email', lines: ['info@stfdrive.in', 'bookings@stfdrive.in'], action: 'mailto:info@stfdrive.in' },
                { icon: '📍', title: 'Office', lines: ['42, Race Course Road,', 'Coimbatore – 641018, TN'], action: null },
                { icon: '⏰', title: 'Hours', lines: ['Mon–Sun: 7:00 AM – 10:00 PM', 'Emergency: 24/7'], action: null },
              ].map(c => (
                <div className="contact-card" key={c.title}>
                  <span className="contact-card__icon">{c.icon}</span>
                  <div>
                    <strong>{c.title}</strong>
                    {c.lines.map((line, i) => (
                      c.action && i === 0
                        ? <a href={c.action} key={i}>{line}</a>
                        : <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-social">
              <h4>Follow Us</h4>
              <div className="contact-social__links">
                {[
                  { icon: '📸', label: 'Instagram', url: '#' },
                  { icon: '👥', label: 'Facebook', url: '#' },
                  { icon: '💬', label: 'WhatsApp', url: '#' },
                ].map(s => (
                  <a key={s.label} href={s.url} className="contact-social__link">
                    <span>{s.icon}</span>
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap">
            {sent ? (
              <div className="contact-success">
                <span>✅</span>
                <h3>Message Sent!</h3>
                <p>Thank you, <strong>{form.name}</strong>! We'll get back to you within 2 hours.</p>
                <button className="btn-secondary" onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }}>
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <h3 className="contact-form-title">Send Us a Message</h3>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form__grid">
                    <div className={`form-field ${errors.name ? 'form-field--error' : ''}`}>
                      <label>Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
                      {errors.name && <span className="form-error">{errors.name}</span>}
                    </div>
                    <div className={`form-field ${errors.email ? 'form-field--error' : ''}`}>
                      <label>Email *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
                      {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>
                    <div className="form-field">
                      <label>Phone</label>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="Mobile number" />
                    </div>
                    <div className="form-field">
                      <label>Subject</label>
                      <select name="subject" value={form.subject} onChange={handleChange}>
                        <option value="">Select a subject</option>
                        <option value="booking">Booking Enquiry</option>
                        <option value="pricing">Pricing Info</option>
                        <option value="support">Support</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className={`form-field form-field--full ${errors.message ? 'form-field--error' : ''}`}>
                      <label>Message *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="How can we help you?"
                      />
                      {errors.message && <span className="form-error">{errors.message}</span>}
                    </div>
                  </div>
                  <button type="submit" className="btn-primary contact-submit">
                    Send Message →
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* FAQs */}
        <section className="contact-faqs">
          <div className="contact-faqs__header">
            <span className="section-tag">FAQs</span>
            <h2 className="section-title">Common <span>Questions</span></h2>
          </div>
          <div className="faqs-list">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item ${open ? 'faq-item--open' : ''}`}>
      <button className="faq-item__q" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span className="faq-item__icon">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="faq-item__a">{a}</p>}
    </div>
  )
}
