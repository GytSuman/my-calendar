import "./App.css";
import React from "react";
import CalendarHeader from "./components/CalendarHeader";
import MonthGrid from "./components/MonthGrid";
import Sidebar from "./components/Sidebar";
import { getMonth, getMonthOriginal } from "./util";
import { Divider } from "@mui/material";
import WeekGrid from "./components/WeekGrid";
import DayGrid from "./components/DayGrid";
import { getAllDaysInTheWeek } from "./weekUtils";
import moment from "moment";
import { getDays } from "./dayUtils";
import dayjs from "dayjs";
import CalendarEventHandler from "./CalendarEventHandler";

function App() {
	const [currentMonth, setCurrentMonth] = React.useState(getMonthOriginal());
	const [currentMonthIdx, setCurrentMonthIdx] = React.useState(dayjs().month());
	const [weekdays, setWeekdays] = React.useState(getAllDaysInTheWeek());
	const [days, setDays] = React.useState(getDays());
	const [startDate, setStartDate] = React.useState();
	const [type, setType] = React.useState("month");
	const [events, setEvents] = React.useState([]);
	const [eventAdded,setEventAdded] = React.useState([])
	const addNewEvents = (event) => {
		event = {
			...event,
			id: CalendarEventHandler.generateId(event),
		};
		setEvents((previousState) => ({
			events: CalendarEventHandler.add(previousState.events, event),
		}));
	};

	const goToNextWeek = () => {
		if (type === "week") {
			const dateAfter7Days = moment(startDate).add(7, "days");
			setStartDate(dateAfter7Days);
			setWeekdays(getAllDaysInTheWeek(dateAfter7Days));
		}
		if (type === "day") {
			const dateAfterDay = moment(startDate).add(1, "day");
			setStartDate(dateAfterDay);
			setDays(getDays(dateAfterDay));
		}
		if (type === "month") {
			setCurrentMonthIdx(currentMonthIdx + 1);
		}
	};

	const goToPreviousWeek = () => {
		if (type === "week") {
			const dateBefore7Days = moment(startDate).subtract(7, "days");
			setStartDate(dateBefore7Days);
			setWeekdays(getAllDaysInTheWeek(dateBefore7Days));
		}
		if (type === "day") {
			const dateBeforeDay = moment(startDate).subtract(1, "day");
			setStartDate(dateBeforeDay);
			setDays(getDays(dateBeforeDay));
		}
		if (type === "month") {
			setCurrentMonthIdx(currentMonthIdx - 1);
		}
	};

	console.log(events);
	React.useEffect(() => {
		setCurrentMonth(getMonth(currentMonthIdx));
	}, [currentMonthIdx]);

	console.log("currentmonthIdx", currentMonthIdx);

	const handleInputChange = (event) => {
		setType(event.target.value);
	};

	return (
		<div className="App">
			<CalendarHeader
				type={type}
				handleInputChange={handleInputChange}
				goToPreviousWeek={goToPreviousWeek}
				goToNextWeek={goToNextWeek}
				startDate={startDate}
				currentMonthIdx={currentMonthIdx}
			/>
			<div className="app__container">
				{/* <Sidebar
					currentMonthIdx={currentMonthIdx}
					currentMonth={currentMonth}
					type={type}
					goToPreviousWeek={goToPreviousWeek}
					goToNextWeek={goToNextWeek}
				/>
				<Divider orientation="vertical" /> */}
				{type === "month" && (
					<MonthGrid currentMonth={currentMonth} events={events} />
				)}
				{type === "week" && (
					<WeekGrid
						weekdays={weekdays}
						goToPreviousWeek={goToPreviousWeek}
						goToNextWeek={goToNextWeek}
						addNewEvents={addNewEvents}
						events={events}
						eventAdded={eventAdded}
						setEventAdded={setEventAdded}
					/>
				)}
				{type === "day" && <DayGrid days={days} />}
			</div>
		</div>
	);
}

export default App;
