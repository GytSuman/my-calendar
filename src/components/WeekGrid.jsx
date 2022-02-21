import React from "react";
import { getAllDaysInTheWeek, times } from "../weekUtils";
import TaskProgress from "./TaskProgress";
import TimeSlot from "./TimeSlot";
import WeekHeader from "./WeekHeader";

function WeekGrid({ weekdays, events, addNewEvents }) {
	// const [weekdays, setWeekdays] = React.useState(getAllDaysInTheWeek());
	// const { events } = props

	console.log(weekdays);
	// console.log(events)

	return (
		<div>
			<WeekHeader weekdays={weekdays} />
			<TaskProgress />
			{times.map((time) => (
				<>
					<TimeSlot
						key={time}
						time={time}
						weekdays={weekdays}
						events={events}
					></TimeSlot>
				</>
			))}
		</div>
	);
}

export default WeekGrid;
