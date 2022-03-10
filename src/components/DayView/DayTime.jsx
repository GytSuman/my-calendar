import { Grid } from "@mui/material";
import React from "react";
import { col, slot2 } from "../style";
import Event from "../shared/Events/Event";
import EventSmall from "../shared/Events/EventSmall";
import CustomizedDialogs from "../shared/ModelForms/CustomizedDialogWeek";

import "./DayView.scss";
import { useCalendar } from "../../context/CalendarContext";
import dayjs from "dayjs";

function DayTime({ time, dateStamp, dayObj }) {
	//model
	const [open, setOpen] = React.useState(false);
	const { state, dispatch } = useCalendar();
	const openMonthEventDialog = () => {
		setOpen(true);
		console.log("clicked");
	};

	const onSetOpen = (value) => {
		setOpen(value);
	};

	const selectedEventDay = () => {
		return (
			<>
				{state.allEvents.map((event) => (
					<>
						{event.dateStamp === dayObj.dateStamp &&
							parseInt(dayjs(event.startTime).format("h")) ===
							parseInt(time) && (
								<Event type="voice" eventWidth={95} event={event} key={event.id} />
							)
						}
					</>
				))}
			</>
		);
	};

	return (
		<Grid container>
			<Grid
				item
				xs={12}
				key={dateStamp}
				className="col slot flex-row"
				onClick={() => {
					dispatch({
						type: "OPEN_EVENT_DIALOG",
						payload: {
							dateStamp: dayObj.dateStamp,
							time: time,
							id: dayObj.id,
						},
					});
				}}
			>
				{selectedEventDay()}
			</Grid>
			{open && (
				<CustomizedDialogs
					onSetOpen={onSetOpen}
					time={time}
					open={open}
				/>
			)}
		</Grid>
	);
}

export default DayTime;
