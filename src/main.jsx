//main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import productStore from './redux/store.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={productStore}>
    <App />
    </Provider>
  </StrictMode>,
)
