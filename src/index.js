import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import EventContext from "./context/EventContext";
import CalendarContext from "./context/calendarContext";

ReactDOM.render(
	<React.StrictMode>
		<CalendarContext>
			<App />
		</CalendarContext>
	</React.StrictMode>,
	document.getElementById("root")
);
