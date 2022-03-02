<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
=======
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
>>>>>>> 118f6ab466775831f82beb4222220e212daa3921
