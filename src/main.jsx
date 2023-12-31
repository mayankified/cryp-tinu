import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Styles/index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ToastContainer 
    position="top-right"
    autoClose={4000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={true}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover={false}
    theme="dark" />
  </React.StrictMode>,
)
