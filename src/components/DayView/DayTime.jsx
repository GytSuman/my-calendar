import { Grid } from "@mui/material";
import React from "react";
import { col, slot2 } from "../style";
import Event from "../shared/Events/Event";
import EventSmall from "../shared/Events/EventSmall";
import CustomizedDialogs from "../shared/ModelForms/CustomizedDialogWeek";

import "./DayView.scss";
import { useCalendar } from "../../context/calendarContext";
import dayjs from "dayjs";
import { getEvents } from "../../util";

function DayTime({ time, dateStamp, dayObj }) {
	//model
	const [open, setOpen] = React.useState(false);
	const { state, dispatch } = useCalendar();

	const onSetOpen = (value) => {
		setOpen(value);
	};

	const selectedEventDay = () => {
		return (
			<>
				{getEvents(state.allEvents, dateStamp, time).map((event) => (
					<Event
						key={event.id}
						event={event}
					/>
				))
				}
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
				style={{ gap: '5px' }}
				onClick={() => {
					dispatch({
						type: "OPEN_EVENT_DIALOG",
						payload: {
							dateStamp: dayObj.dateStamp,
							weekDateStamp: dayjs(dayObj.dateStamp).hour(time),
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
