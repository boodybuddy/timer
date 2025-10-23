// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import Timer from './components/Timer'; // ✅ Vite 支持省略 .jsx
// 或者显式写：
// import Timer from './components/Timer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Timer />
  </React.StrictMode>
);