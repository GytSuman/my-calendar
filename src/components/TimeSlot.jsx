import moment from "moment";
import React from "react";
import Time from "./Time";
import "./header.css";
import { Grid } from "@mui/material";
import CustomizedDialogs from "./CustomizedDialog";

function TimeSlot({ time, weekdays, events }) {
	const [open, setOpen] = React.useState(false);
	const formattedTime = moment().set("hours", time).format("h a");

	const openWeekEventDialog = () => {
		setOpen(true);
	};

	const onSetOpen = (value) => {
		setOpen(value);
	};
	return (
		<Grid container direction="row">
			<Grid item xs={1} sx={{ paddingLeft: "16px", paddingTop: "8px" }}>
				{formattedTime}
			</Grid>
			<Grid
				item
				xs={11}
				sx={{ height: "63px" }}
				className="flex"
				onClick={openWeekEventDialog}
			>
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
			{open && (
				<CustomizedDialogs onSetOpen={onSetOpen} open={open} events={events} />
			)}
		</Grid>
	);
}

export default TimeSlot;
