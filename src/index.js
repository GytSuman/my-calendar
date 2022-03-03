import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import EventContextWrapper from './context/EventContext'

ReactDOM.render(
  <React.StrictMode>
    <EventContextWrapper>
      <App />
    </EventContextWrapper>
  </React.StrictMode>,
  document.getElementById('root')
)
