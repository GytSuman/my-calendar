import dayjs from "dayjs";
import moment from "moment";
import React from "react";
import { useCalendar } from "../../context/CalendarContext";
import { hours } from "../../util";
import { times } from "../../weekUtils";
// import CustomizedDialogs from "../CustomizedDialog";
// import Event from "../Event";
import CustomizedDialogs from "../shared/ModelForms/CustomizedDialog";
// import TaskProgress from "../TaskProgress";
import TaskProgress from "../shared/Tasks/TaskProgress";
import TimeSlot from "./TimeSlot";
import WeekHeader from "./WeekHeader";
// import TimeSlot from "../TimeSlot";
// import WeekHeader from "../WeekHeader";

function WeekGrid({
	weekdays,
	events,
	addNewEvents,
	startDate,
	currentMonthIdx,
}) {
	const { allEvents } = useCalendar();
	const hoursArray = hours(times);

	console.log(allEvents);

	return (
		<div style={{ maxWidth: "100%", width: "100%" }}>
			<WeekHeader
				weekdays={weekdays}
				startDate={startDate}
				currentMonthIdx={currentMonthIdx}
			/>
			<CustomizedDialogs />
			<TaskProgress />
			{times.map((time) => (
				<>
					<TimeSlot key={time} time={time} weekdays={weekdays}></TimeSlot>
				</>
			))}
		</div>
	);
}

export default WeekGrid;
