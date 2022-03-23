import React from "react";
import { Grid } from "@mui/material";
import { getDays } from "../../dayUtils";
import DayHeader from "./DayHeader";
import DayTimeSlot from "./DayTimeSlot";
import TaskElement from "../shared/Tasks/TaskElement";

import { times } from "../../weekUtils";
import { hours } from "../../util";
import DisplayEvent from "../shared/ModelForms/DisplayEvent";
import "./DayView.scss";
import CustomizedDialogs from "../shared/ModelForms/CustomizedDialog";

function DayGrid({ days }) {
	const hoursArray = hours(times);
	return (
		<div className="width-100">
			<DayHeader days={days} />
			<CustomizedDialogs />
			<DisplayEvent />
			<Grid container direction="row">
				<Grid
					item
					sm={2}
					xs={2}
					md={1}
					className="flex-center flex-center2 text-elip"
				>
					Task
				</Grid>
				<Grid item container sm={10} xs={10} md={11} className="height-100">
					<Grid item xs={12} p={2} className="light-bg">
						<TaskElement number={3} hours={8} green={80} yellow={20} gray={0} />
					</Grid>
				</Grid>
			</Grid>
			{times.map((time) => (
				<>
					<DayTimeSlot key={time} time={time} days={days}></DayTimeSlot>
				</>
			))}
		</div>
	);
}

export default DayGrid;
