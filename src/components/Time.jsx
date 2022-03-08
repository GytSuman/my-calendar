import { Grid } from "@mui/material";
import React from "react";
import { isTodaysDate } from "../weekUtils";
import { col, slot, slot2, lightHighlighter } from "./style";
import Event from "../components/shared/Events/Event";
import { useCalendar } from "../context/CalendarContext";
import dayjs from "dayjs";

function Time(props) {
	const { day, events, openAddEventModal, time } = props;
	const { state, dispatch } = useCalendar();

	React.useEffect(() => {}, []);
	const row = 12 / 7;

	// console.log("time: ", time);
	const dummy = state.allEvents.map((event) =>
		console.log(parseInt(dayjs(event.startTime).format("h")) === parseInt(time))
	);

	const selectedEventDay = () => {
		return (
			<>
				{state.allEvents.map((event) => (
					<>
						{event.dateStamp === day.dateStamp &&
							parseInt(dayjs(event.startTime).format("h")) ===
								parseInt(time) && (
								<Event type="voice" event={event} key={event.id} />
							)}
					</>
				))}
			</>
		);
	};
	return (
		<>
			<Grid
				item
				key={day.dateStamp}
				style={isTodaysDate(day.dateStamp) ? { ...lightHighlighter } : {}}
				xs={row}
				className="slot col height-100 flex-row"
				onClick={() => {
					// setSelectedEventDay(day);
					console.log("clicked at grid", time);
					// openAddEventModal(day.dateStamp, time, day);
					dispatch({
						type: "OPEN_EVENT_DIALOG",
						payload: { dateStamp: day.dateStamp, time, id: day.id },
					});
				}}
			>
				{selectedEventDay()}
			</Grid>
		</>
	);
}

export default Time;
