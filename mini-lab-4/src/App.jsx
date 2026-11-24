import { useSelector, useDispatch } from 'react-redux'
import products from './data.json'
import { addToShortlist, removeFromShortlist, clearShortlist } from './store/shortlistSlice'

function App() {
  const shortlist = useSelector((state) => state.shortlist.ids)
  const dispatch = useDispatch()

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>Product Shortlist</h1>

      <h3>Total Shortlisted Products: {shortlist.length}</h3>
      <button onClick={() => dispatch(clearShortlist())}>Clear Shortlist</button>

      {products.map((p) => {
        const isShortlisted = shortlist.includes(p.id)
        return (
          <div key={p.id} style={{ border: '1px solid #ccc', margin: 8, padding: 8 }}>
            <h3>{p.name}</h3>
            <p>Category: {p.category}</p>
            <p>Price: ₹{p.price}</p>
            <p>Stock: {p.stock}</p>
            <button
              onClick={() =>
                isShortlisted
                  ? dispatch(removeFromShortlist(p.id))
                  : dispatch(addToShortlist(p.id))
              }
            >
              {isShortlisted ? 'Remove from Shortlist' : 'Add to Shortlist'}
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default App
