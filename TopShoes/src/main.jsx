import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { GlobalStyles } from './styles/GlobalStyles.js'
import Layout from './components/Layout/Layout.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyles/>
    <App />
    
  </>,
)
