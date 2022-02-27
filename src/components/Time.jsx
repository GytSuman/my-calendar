import { Grid } from "@mui/material";
import React from "react";
import { isTodaysDate } from "../weekUtils";
import { col, slot, slot2, lightHighlighter } from "./style";
import Event from "./Event";
import moment from "moment";

function Time(props) {
	const { day, events, openAddEventModal, time } = props;
	const [selectedEventDay, setSelectedEventDay] = React.useState(null);

	React.useEffect(() => {
		console.log(selectedEventDay);
	}, [selectedEventDay]);
	const row = 12 / 7;
	console.log("events in time", events);
	return (
		<>
			<Grid
				item
				key={day.dateStamp}
				style={
					isTodaysDate(day.dateStamp)
						? { ...col, ...slot2, ...lightHighlighter }
						: { ...col, ...slot2 }
				}
				xs={row}
				onClick={() => {
					// setSelectedEventDay(day);
					openAddEventModal(day.dateStamp, time, day);
				}}
			>
				{events &&
					events.map((event) => {
						// console.log("line 28", event);
						return <Event key={event.id} type="voice" event={event} />;
					})}
			</Grid>
		</>
	);
}

export default Time;
