import moment from "moment";
import React from "react";
import DayColumn from "../Shared/DayColumn";
import { Grid } from "@mui/material";

import './WeekView.scss'

function TimeSlot({ time, weekdays, events,eventAdded,setEventAdded }) {
	const formattedTime = moment(time, "HH:mm").format("h:mm A")
	return (
		<Grid container direction="row">
			<Grid item xs={1} className="flex-center flex-center2">
				{formattedTime}
			</Grid>
			<Grid item xs={11} className="flex">
				{weekdays &&
					weekdays.map((day) => (
						<>
							<DayColumn
								key={day.dateStamp}
								dateStamp={day.dateStamp}
								time={time}
								weekDayName={day.weekDayName}
								events={events}
								eventAdded={eventAdded}
        						setEventAdded={setEventAdded}
							/>
						</>
					))}
			</Grid>
		</Grid>
	);
}

export default TimeSlot;
