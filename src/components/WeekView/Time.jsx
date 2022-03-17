import { Grid } from "@mui/material";
import React from "react";
import { generateWeekViewCoordinates, isTodaysDate } from "../../weekUtils";
import { slot, lightHighlighter } from "../style";
import Event from "../shared/Events/Event";
import { useCalendar } from "../../context/CalendarContext";
import dayjs from "dayjs";
import { generateWeekView, getCountTimeslot } from "../../util";

function Time(props) {
	const { day, time } = props;
	const { state, dispatch } = useCalendar();

	React.useEffect(() => {}, []);
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
									<Event
										type="voice"
										event={event}
										key={event.id}
										eventWidth={eventWidth}
									/>
								)}
						</>
					))}
			</>
		);
	};

	const [gridWrap, setGridWrap] = React.useState({});
	const [eventWidth, setEventWidth] = React.useState(95);

	React.useEffect(() => {
		console.log("get time slot value", getCountTimeslot(day, time, state));
		if (getCountTimeslot(day, time, state) > 2) {
			console.log("hdhjjk");
			setGridWrap({
				flexWrap: "wrap",
			});
			setEventWidth(39);
		} else {
			setGridWrap({
				flexWrap: "nowrap",
			});
			setEventWidth(95);
		}
	}, [day, state, state.allEvents, time]);

	return (
		<>
			<Grid
				item
				key={day.dateStamp}
				style={
					// isTodaysDate(day.dateStamp) ? { ...slot, ...lightHighlighter } : {}
					gridWrap
				}
				xs={row}
				sx={isTodaysDate(day.dateStamp) ? { ...slot, ...lightHighlighter } : {}}
				className="col slot flex-row"
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
