//App.jsx
import { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './redux/reducer/ProductSlice'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import Navbar from './components/Navbar';
import { decrement, increment, cartTotal } from './redux/reducer/CountSlice';
import { cartItem } from './redux/reducer/CountSlice';

function App() {
  const dispatch = useDispatch()
  const itemQuantity = useSelector((state) => state.countReducer.count)
  const products = useSelector((state) => state.productReducer.product)
  const totalCartItem = useSelector(cartItem)
  const cartValue = useSelector(cartTotal)

  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/sandhyachan/JSON-Files/refs/heads/main/redux/products.json')
    .then((response)=>response.json())
    .then((result)=>dispatch(fetchProducts(result)))
    .catch((err)=> console.log(`Error fetching data ${err}`))
  },[dispatch])

  return (
    <div className='container-fluid'>
      <Navbar/>
      <div className="container my-5">
      <h1 className="text-center mb-2">Products List</h1>
      <h5 className='text-center mb-4 text-decoration-underline'>NEW MOBILE DEVICES ON SALE!!!</h5>
      <div className="row">
        {products.map((product, index) => (
          <div key={product.id} className="col-md-4 d-flex mb-4">
            <div className="card w-100 d-flex flex-column shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-muted">{product.description}</p>
                <div className="d-flex justify-content-between">
                  <span className="badge bg-primary">{product.category}</span>
                  <span className="text-success">${product.price}</span>
                </div>
                <div className="mt-2">
                  <p className="card-text"><strong>Brand:</strong> {product.brand}</p>
                  <p className="card-text"><strong>Rating:</strong> {product.rating} / 5 <i className="bi bi-star-fill"></i></p>
                  <p className="card-text"><strong>Discount:</strong> {product.discountPercentage}%</p>
                  <p className="card-text"><strong>Stock:</strong> {product.stock} items available</p>
                </div>
              </div>

              <div className="card-footer text-center">
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-outline-primary m-3" onClick={()=>dispatch(decrement(index))}>
                    -
                  </button>
                  <span className="align-self-center"> {itemQuantity[index] || 0} 
                  </span>
                  <button className="btn btn-outline-primary m-3" onClick={()=>dispatch(increment(index))}>
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
       </div>
      </div>

          <div className="container">
      <div className="row mb-4">
        <div className="col-6">
          <h6 className="text-muted">TOTAL CART ITEMS:</h6>
        </div>
        <div className="col-6 text-end">
          <h6 className="text-primary">{totalCartItem}</h6>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-6">
          <h5 className="font-weight-bold">TOTAL:</h5>
        </div>
        <div className="col-6 text-end">
          <h5 className="font-weight-bold text-success">${cartValue}</h5>
        </div>
      </div>
      
      <div className="row">
        <div className="col-12">
          <button className="btn btn-primary w-100">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default App
