import { Grid } from "@mui/material";
import React from "react";
import { generateWeekViewCoordinates, isTodaysDate } from "../../weekUtils";
import { slot, lightHighlighter } from "../style";
import Event from "../shared/Events/Event";
import EventSmall from "../shared/Events/EventSmall";
import { useCalendar } from "../../context/calendarContext";
import dayjs from "dayjs";
import { generateWeekView, getCountTimeslot, getEvents, getMinutes, currTimeEvents } from "../../util";
import moment from 'moment'

function Time(props) {
	const { day, time } = props;
	const { state, dispatch, openAllEventsWeek, setOpenAllEventsWeek } = useCalendar();

	React.useEffect(() => { }, []);
	const row = 12 / 7;

	const selectedEventDay = () => {
		return (
			<div className="slot1 flex-row">
				{getEvents(state.allEvents, day.dateStamp, time).slice(0, 2).map((event) => (
					<Event
						key={event.id}
						event={event}
					/>
				))
				}
			</div>
		);
	};

	var [open, setOpen] = React.useState(false)
	console.log(state?.allEvents)
	React.useEffect(() => {
		if (dayjs(day.dateStamp).hour(time).format('DD/MM/YYYY HH:mm') !== openAllEventsWeek) setOpen(false)
	}, [openAllEventsWeek])

	return (
		<>
			<Grid
				item
				key={day.dateStamp}
				xs={row}
				sx={isTodaysDate(day.dateStamp) ? { ...lightHighlighter } : {}}
				className="col slot"
				onClick={() => {
					console.log("clicked at grid", dayjs(day.dateStamp));
					dispatch({
						type: "OPEN_EVENT_DIALOG",
						payload: { dateStamp: day.dateStamp, weekDateStamp: dayjs(day.dateStamp).hour(time), dayOfTheYear: dayjs(day.dateStamp).format('DD MM YYYY'), time, id: day.id },
					});
				}}
			>
				{selectedEventDay()}
				{currTimeEvents(state.allEvents, day, time).length > 2 &&
					<span
						className='event-count-bubble height-100 flex-center event-count-button'
						onClick={(event) => {
							event.stopPropagation()
							setOpen(!open)
							setOpenAllEventsWeek(dayjs(day.dateStamp).hour(time).format('DD/MM/YYYY HH:mm'))
						}}
					>
						+{currTimeEvents(state.allEvents, day, time).length - 2}
						<div
							className={open ? "view-all-events open-div flex-center" : "close-div"}
						>
							<div>
								{
									state.allEvents &&
									currTimeEvents(state.allEvents, day, time).slice(2, currTimeEvents(state.allEvents, day, time).length).map((event) => (
										<EventSmall
											type="voice"
											event={event}
										/>
									)
									)
								}
							</div>
						</div>
					</span>
				}
			</Grid>
		</>
	);
}

export default Time;
