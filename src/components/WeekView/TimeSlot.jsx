import moment from "moment";
import React from "react";
import DayColumn from "../Shared/DayColumn";
import { Grid } from "@mui/material";
import dayjs from "dayjs";
import './WeekView.scss'

function TimeSlot({ time, weekdays, events, openAddEventModal }) {
	const formattedTime = moment().set("hours", time).format("h a");

	// console.log(dayjs("03/01/2022 8:00 AM").format("h"));

	return (
		<Grid container direction="row">
			<Grid item xs={1} className="flex-center flex-center2">
				{formattedTime}
			</Grid>
			<Grid item xs={11} className="flex">
				{weekdays &&
					weekdays.map((day) => {
						return (
							<>
								<Time
									key={day.id}
									// dateStamp={day.dateStamp}
									time={time}
									// weekDayName={day.weekDayName}
									events={events}
									openAddEventModal={openAddEventModal}
									day={day}
								/>
							</>
						);
					})}
			</Grid>
		</Grid>
	);
}

export default TimeSlot;
