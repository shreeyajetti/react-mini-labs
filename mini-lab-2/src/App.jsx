import { useState } from 'react'
import products from './data.json'

function App() {
  const [searchText, setSearchText] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = products.filter((p) => {
    const matchesName = p.name.toLowerCase().includes(searchText.toLowerCase())
    const matchesCategory = category === 'All' || p.category === category
    return matchesName && matchesCategory
  })

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>Product Filter</h1>

      <input
        type="text"
        placeholder="Search by name"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Books">Books</option>
      </select>

      <p>Matching Products: {filtered.length}</p>

      {filtered.length === 0 ? (
        <p>No matching products found</p>
      ) : (
        filtered.map((p) => (
          <div key={p.id} style={{ border: '1px solid #ccc', margin: 8, padding: 8 }}>
            <h3>{p.name}</h3>
            <p>Category: {p.category}</p>
            <p>Price: ₹{p.price}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default App
