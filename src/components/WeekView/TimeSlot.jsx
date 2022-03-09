import moment from "moment";
import React from "react";
import DayColumn from "../shared/DayColumn";
import { Grid } from "@mui/material";
import dayjs from "dayjs";
import "./WeekView.scss";
import Time from "../Time";

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
