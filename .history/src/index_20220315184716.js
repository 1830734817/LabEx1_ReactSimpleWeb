import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// 用于记录页面上的性能
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // React.StrictMode检查app及子组件的错误
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// reportWebVitals();
