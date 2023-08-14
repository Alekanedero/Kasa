import React from 'react';
import reactDOMClient from 'react-dom/client';
import App from './App';
import './style/index.css';

reactDOMClient.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
