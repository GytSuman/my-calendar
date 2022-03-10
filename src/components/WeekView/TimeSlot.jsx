import React from "react";
import { Grid } from "@mui/material";
import "./WeekView.scss";
import Time from "./Time";

function TimeSlot({ time, weekdays, events, openAddEventModal }) {
	return (
		<Grid container direction="row">
			<Grid item xs={1} className="flex-center flex-center2">
				{time}
			</Grid>
			<Grid item xs={11} className="flex">
				{weekdays &&
					weekdays.map((day) => {
						return (
							<>
								<Time key={day.id} time={time} day={day} />
							</>
						);
					})}
			</Grid>
		</Grid>
	);
}

export default TimeSlot;
