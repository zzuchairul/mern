import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css';
import Header from './Header/Header'
import Body from './Body/Body';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <Body />
  </React.StrictMode>,
)
