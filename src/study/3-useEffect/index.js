import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* ReactDOM.render(
  // StrincMode - 렌더링 중 발생할 수 있는 문제를 사전에 잡아내기 위한 도구
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);