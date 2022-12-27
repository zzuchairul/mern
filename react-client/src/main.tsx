import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './component/Header/Header'
import './style.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
)
