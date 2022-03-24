import React from "react";
import { times } from "../../weekUtils";
import CustomizedDialogs from "../Shared/ModelForms/CustomizedDialog";
import TaskProgress from "../Shared/Tasks/TaskProgress";
import TimeSlot from "./TimeSlot";
import WeekHeader from "./WeekHeader";

function WeekGrid({
	weekdays,
	events,
	addNewEvents,
	startDate,
	currentMonthIdx,
}) {
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
