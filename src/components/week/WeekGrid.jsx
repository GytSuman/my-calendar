import dayjs from "dayjs";
import moment from "moment";
import React from "react";
import { useCalendar } from "../../context/CalendarContext";
import { times } from "../../weekUtils";
import CustomizedDialogs from "../CustomizedDialog";
import Event from "../Event";
import TaskProgress from "../TaskProgress";
import TimeSlot from "../TimeSlot";
import WeekHeader from "../WeekHeader";

function WeekGrid({
	weekdays,
	events,
	addNewEvents,
	startDate,
	currentMonthIdx,
}) {
	const [state, setState] = React.useState({
		startDate: +dayjs(),
		showAddEventModal: false,
		eventStart: null,
		eventEnd: null,
		selectedDayCell: null,
	});

	const { allEvents } = useCalendar();

	console.log(allEvents);

	const openAddEventModal = (dateStamp, time, selectedDay) => {
		if (selectedDay) console.log({ selectedDay });
		const start = dayjs(dateStamp).set("hour", time);
		const end = start.clone().add(1, "hour");
		setState({
			showAddEventModal: true,
			eventStart: +start,
			eventEnd: +end,
			selectedDayCell: selectedDay,
		});
	};

	const closeAddEventModal = () => {
		setState({ showAddEventModal: false });
	};

	const handleCurrentTimeChange = (dates) => {
		setState({ eventStart: +dates[0], eventEnd: +dates[1] });
	};

	const handleAddEvent = (name) => {
		addNewEvents({
			name,
			eventStart: state.eventStart,
			eventEnd: state.eventEnd,
		});
		setState({ showAddEventModal: false });
	};

	return (
		<div style={{ maxWidth: "100%", width: "100%" }}>
			<WeekHeader
				weekdays={weekdays}
				startDate={startDate}
				currentMonthIdx={currentMonthIdx}
			/>
			<CustomizedDialogs
				state={state}
				closeAddEventModal={closeAddEventModal}
				eventStart={state.eventStart}
				eventEnd={state.eventEnd}
				handleCurrentTimeChange={handleCurrentTimeChange}
				handleAddEvent={handleAddEvent}
			/>
			<TaskProgress />
			{times.map((time) => (
				<>
					<TimeSlot
						key={time}
						time={time}
						weekdays={weekdays}
						openAddEventModal={openAddEventModal}
						events={events[time]}
					></TimeSlot>
				</>
			))}
		</div>
	);
}

export default WeekGrid;
