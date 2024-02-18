import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'

import { products } from '../products.json'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App product={products[0]}/>
  </React.StrictMode>
)
