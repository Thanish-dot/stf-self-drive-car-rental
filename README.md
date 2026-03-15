# 🚗 STF Self Drive Car Rental

A professional, modern car rental web application built with **React + Vite + React Router**.

## ✨ Features

- 🏠 **Home Page** — Hero section, features, featured cars, how-it-works, testimonials, CTA
- 🚗 **Cars Page** — Full fleet listing with search, category filter, fuel/transmission filter & sorting
- 📋 **Car Details** — Image gallery, full specs, features list, related cars
- 📅 **Booking Page** — Multi-step booking form with validation & price summary
- 🏢 **About Page** — Story, team, values, company timeline
- 📞 **Contact Page** — Contact form, FAQ accordion, social links

## 🎨 Design

- Dark theme with gold (`#e8a020`) accent
- **Bebas Neue** display font + **Outfit** body font
- Responsive & mobile-friendly
- Hover animations, smooth transitions
- CSS custom properties throughout

## 📁 Folder Structure

```
stf-car-rental/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / Navbar.css
│   │   ├── Hero.jsx / Hero.css
│   │   ├── CarCard.jsx / CarCard.css
│   │   └── Footer.jsx / Footer.css
│   ├── pages/
│   │   ├── Home.jsx / Home.css
│   │   ├── Cars.jsx / Cars.css
│   │   ├── CarDetails.jsx / CarDetails.css
│   │   ├── Booking.jsx / Booking.css
│   │   ├── About.jsx / About.css
│   │   └── Contact.jsx / Contact.css
│   ├── data/
│   │   └── cars.js          ← 8 sample cars with full data
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css            ← Global styles & CSS variables
├── index.html
├── vite.config.js
└── package.json
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠 Tech Stack

| Tool | Version |
|------|---------|
| React | ^18.2 |
| Vite | ^5.1 |
| React Router DOM | ^6.22 |

## 📦 Sample Data

8 cars pre-loaded in `src/data/cars.js`:
- BMW 3 Series, Mercedes C-Class, Audi A4 (Luxury/Executive)
- Toyota Fortuner, Hyundai Creta, Kia Seltos, Mahindra Thar (SUVs)
- Honda City (Economy Sedan)

Each car has: name, brand, category, price, specs, features, gallery images, ratings, availability.
