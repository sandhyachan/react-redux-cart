//App.jsx
import './App.css'
import { decrementCount, incrementCount } from './redux/reducers/CountSlice'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const dispatcher = useDispatch()
  const count = useSelector((state)=>state.countReducer.count)

  return (
    <>
      <div className='card'>
        <button onClick={() => dispatcher(incrementCount())}>
          +
        </button>
        <p>{count}</p>
        <button onClick={() => dispatcher(decrementCount())}>
          -
        </button>
      </div>
    </>
  )
}

export default App
