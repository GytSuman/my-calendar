import { Grid } from "@mui/material";
import React from "react";
import { isTodaysDate } from "../weekUtils";
import { col, slot, slot2, lightHighlighter } from "./style";
import Event from "../components/shared/Events/Event";
import { useCalendar } from "../context/CalendarContext";
import dayjs from "dayjs";
import moment from 'moment'
import { getCountTimeslot } from '../util'

function Time(props) {
	const { day, events, openAddEventModal, time } = props;
	const { state, dispatch } = useCalendar();

	const selectedEventDay = () => {
		return (
			<>
				{state.allEvents.map((event) => (
					<>
						{event.dateStamp === day.dateStamp &&
							parseInt(dayjs(event.startTime).format("h")) ===
							parseInt(time) && (
								<Event type="voice" eventWidth={eventWidth} event={event} key={event.id} />
							)}
					</>
				))}
			</>
		);
	};

	const [gridWrap, setGridWrap] = React.useState({})
	const [eventWidth, setEventWidth] = React.useState(95)
	React.useEffect(() => {
		if (getCountTimeslot(day, time, state) > 2) {
			setGridWrap({
				flexWrap: 'wrap'
			})
			setEventWidth(39)
		}
		else {
			setGridWrap({
				flexWrap: 'nowrap'
			})
			setEventWidth(95)
		}
	}, [state.allEvents]);

	return (
		<>
			<Grid
				item
				key={day.dateStamp}
				// style={{ isTodaysDate(day.dateStamp) ? {...lightHighlighter} : { }},{gridWrap}}
				style={gridWrap}
				sx={{
					width: 1 / 7,
				}}
				className="slot col height-100 flex-row timeslot"
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
				{
					selectedEventDay()
				}
			</Grid>
		</>
	);
}

export default Time;
