import { useState } from 'react'
import CarCard from '../components/CarCard'
import { cars, carCategories } from '../data/cars'
import './Cars.css'

export default function Cars() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('default')
  const [fuelFilter, setFuelFilter] = useState('All')
  const [transmissionFilter, setTransmissionFilter] = useState('All')

  const filtered = cars
    .filter(car => {
      const matchCat = activeCategory === 'All' || car.category === activeCategory
      const matchSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.brand.toLowerCase().includes(searchQuery.toLowerCase())
      const matchFuel = fuelFilter === 'All' || car.fuel === fuelFilter
      const matchTrans = transmissionFilter === 'All' || car.transmission === transmissionFilter
      return matchCat && matchSearch && matchFuel && matchTrans
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      if (sortBy === 'rating') return b.rating - a.rating
      return 0
    })

  return (
    <main className="page-wrapper">
      <div className="page-hero">
        <div className="container">
          <span className="section-tag">Our Fleet</span>
          <h1 className="section-title">Choose Your <span>Ride</span></h1>
          <p className="section-subtitle" style={{margin:'12px auto 0'}}>
            {cars.length} premium vehicles available in Coimbatore. All fully serviced & insured.
          </p>
        </div>
      </div>

      <div className="container">
        {/* Filters */}
        <div className="cars-filters">
          <div className="cars-filters__search">
            <span className="cars-filters__search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search by name or brand..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="cars-filters__selects">
            <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
              <option value="default">Sort By</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>

            <select value={fuelFilter} onChange={e => setFuelFilter(e.target.value)}>
              <option value="All">All Fuel Types</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
            </select>

            <select value={transmissionFilter} onChange={e => setTransmissionFilter(e.target.value)}>
              <option value="All">All Transmissions</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
              <option value="CVT">CVT</option>
              <option value="S Tronic">S Tronic</option>
            </select>
          </div>
        </div>

        {/* Category pills */}
        <div className="cars-categories">
          {carCategories.map(cat => (
            <button
              key={cat}
              className={`cars-category ${activeCategory === cat ? 'cars-category--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="cars-count">
          Showing <strong>{filtered.length}</strong> vehicle{filtered.length !== 1 ? 's' : ''}
          {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="cars-page-grid">
            {filtered.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="cars-empty">
            <span>🚗</span>
            <h3>No cars found</h3>
            <p>Try adjusting your filters or search query.</p>
            <button className="btn-primary" onClick={() => {
              setActiveCategory('All')
              setSearchQuery('')
              setSortBy('default')
              setFuelFilter('All')
              setTransmissionFilter('All')
            }}>
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </main>
  )
}
