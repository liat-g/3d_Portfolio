import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import './index.css';


//this is the file that is rendering our other files, the root file
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>,
    <App />
  </React.StrictMode>,
)//hook into single div and populate HTML w/ content