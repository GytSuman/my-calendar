import { Grid } from "@mui/material";
import moment from "moment";
import React from "react";
import DayTime from "./DayTime";
import "./header.css";
function DayTimeSlot({ time, days }) {
	const formattedTime = moment().set("hours", time).format("h a");
	return (
		<>
			<Grid container direction="row">
				<Grid item md={1} xs={2} sx={{ paddingLeft: "16px", paddingTop: "8px" }}>
					{formattedTime}
				</Grid>
				<Grid item md={11} xs={10} className="flex">
					{days &&
						days.map((dayObj) => (
							<>
								<DayTime
									key={dayObj.dateStamp}
									time={time}
									dateStamp={dayObj.dateStamp}
									dayName={dayObj.dayName}
								/>
							</>
						))}
				</Grid>
			</Grid>
		</>
	)
}

export default DayTimeSlot;
