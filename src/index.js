import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import EventContext from './context/EventContext'

ReactDOM.render(
  <React.StrictMode>
    <EventContext>
      <App />
    </EventContext>
  </React.StrictMode>,
  document.getElementById('root')
)
