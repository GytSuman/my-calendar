import React from "react";
import { times } from "../../weekUtils";
import { hours } from "../../util";
import TaskProgress from "../shared/Tasks/TaskProgress";
import TimeSlot from "./TimeSlot";
import WeekHeader from "./WeekHeader";

import "./WeekView.scss";

function WeekGrid({ weekdays, eventAdded, setEventAdded }) {
	const hoursArray = hours(times);
	console.log("hours Array", hoursArray);
	return (
		<div className="width-100">
			<WeekHeader weekdays={weekdays} />
			<TaskProgress />
			{times.map((time) => (
				<>
					<TimeSlot
						key={time}
						time={time}
						weekdays={weekdays}
						eventAdded={eventAdded}
						setEventAdded={setEventAdded}
					>
						<div>Task</div>
					</TimeSlot>
				</>
			))}
		</div>
	);
}

export default WeekGrid;
