import { Grid } from "@mui/material";
import React from "react";
import { generateWeekViewCoordinates, isTodaysDate } from "../../weekUtils";
import { slot, lightHighlighter } from "../style";
import Event from "../shared/Events/Event";
import { useCalendar } from "../../context/calendarContext";
import dayjs from "dayjs";
import { generateWeekView } from "../../util";

function Time(props) {
	const { day, time } = props;
	const { state, dispatch } = useCalendar();

	React.useEffect(() => { }, []);
	const row = 12 / 7;

	// console.log("time: ", time);
	const selectedEventDay = () => {
		return (
			<>
				{state.allEvents &&
					state.allEvents.map((event) => (
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
				style={
					isTodaysDate(day.dateStamp) ? { ...slot, ...lightHighlighter } : {}
				}
				xs={row}
				// sx={{ flexWrap: "wrap" }}
				className="col height-100 flex-row"
				onClick={() => {
					console.log("clicked at grid", time);
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
