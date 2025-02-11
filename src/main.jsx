import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { PromptProvider } from './context/PromptContext'; // Import PromptProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PromptProvider> {/* Wrap App with PromptProvider */}
        <App />
      </PromptProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
