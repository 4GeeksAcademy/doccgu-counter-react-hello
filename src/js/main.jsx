import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
let segundos=0

setInterval(() => {
  segundos++
  console.log(segundos)
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Home numero={segundos}/>
    </React.StrictMode>,
  )
}, 1000);


