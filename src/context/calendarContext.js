import React from "react";

const CalendarContext = React.createContext(null);

export const calendarContext = () => {
	return <CalendarContext.Provider></CalendarContext.Provider>;
};
