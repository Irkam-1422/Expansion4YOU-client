import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom'
// "proxy": "http://127.0.0.1:4500",

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <Router>
      <App />
    </Router>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React from 'react'
// import {createRoot} from 'react-dom/client'
// import {BrowserRouter as Router} from 'react-router-dom'
// import {App} from './components/App'

// const container = document.getElementById('root')
// const root = createRoot(container)

// root.render(
//     <Router>
//         <App />
//     </Router>
//     )
