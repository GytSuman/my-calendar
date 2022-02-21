import moment from "moment";
import React from "react";
import Time from "./Time";
import "./header.css";
import { Grid } from "@mui/material";

function TimeSlot({ time, weekdays, events }) {
	const formattedTime = moment().set("hours", time).format("h a");
	console.log(weekdays);
	return (
		<Grid container direction="row">
			<Grid item xs={1} sx={{ paddingLeft: "16px", paddingTop: "8px" }}>
				{formattedTime}
			</Grid>
			<Grid item xs={11} sx={{ height: "63px" }} className="flex">
				{weekdays &&
					weekdays.map((day) => (
						<>
							<Time
								key={day.dateStamp}
								dateStamp={day.dateStamp}
								time={time}
								weekDayName={day.weekDayName}
								events={events}
							/>
						</>
					))}
			</Grid>
		</Grid>
	);
}

export default TimeSlot;
