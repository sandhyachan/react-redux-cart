//main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import REDUX_STORE from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={REDUX_STORE}>
    <App />
  </Provider>
  </StrictMode>,
)
