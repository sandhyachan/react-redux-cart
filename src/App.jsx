//App.jsx
import { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './redux/reducer/ProductSlice'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

function App() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.productReducer.product)

  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/sandhyachan/JSON-Files/refs/heads/main/redux/products.json')
    .then((response)=>response.json())
    .then((result)=>dispatch(fetchProducts(result)))
    .catch((err)=> console.log(`Error fetching data ${err}`))
  },[dispatch])

  console.log(products)


  return (
    <>
    </>
  )
}

export default App
