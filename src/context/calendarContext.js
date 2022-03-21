/* eslint-disable react-hooks/rules-of-hooks */
import dayjs from "dayjs";
import React from "react";
import { getDays } from "../dayUtils";
import { CalendarReducer } from "../reducer/CalendarReducer";
import { getMonthOriginal } from "../util";
import { getAllDaysInTheWeek } from "../weekUtils";

export const Calendar = React.createContext(null);

export const initialState = {
	selectedGridTime: null,
	dateStamp: null,
	showEventDialog: false,
	showMonthGridEventDialog: false,
	startDate: +dayjs(),
	eventStart: null,
	eventEnd: null,
	startTime: null,
	endTime: null,
	allEvents: [],
};

export default function CalendarContext({ children }) {
	const [currentMonth, setCurrentMonth] = React.useState(getMonthOriginal());
	const [currentMonthIdx, setCurrentMonthIdx] = React.useState(dayjs().month());
	const [weekdays, setWeekdays] = React.useState(getAllDaysInTheWeek());
	const [days, setDays] = React.useState(getDays());
	const [startDate, setStartDate] = React.useState();
	const [type, setType] = React.useState("week");
	const [openAllEventsWeek, setOpenAllEventsWeek] = React.useState(null)
	const [openAllEventsMonth, setOpenAllEventsMonth] = React.useState(null)
	const [state, dispatch] = React.useReducer(CalendarReducer, initialState);

	return (
		<Calendar.Provider
			value={{
				currentMonth,
				setCurrentMonth,
				currentMonthIdx,
				setCurrentMonthIdx,
				weekdays,
				setWeekdays,
				days,
				setDays,
				startDate,
				setStartDate,
				type,
				setType,
				openAllEventsWeek,
				setOpenAllEventsWeek,openAllEventsMonth, setOpenAllEventsMonth,
				state,
				dispatch,
			}}
		>
			{children}
		</Calendar.Provider>
	);
}

export function useCalendar() {
	return React.useContext(Calendar);
}
