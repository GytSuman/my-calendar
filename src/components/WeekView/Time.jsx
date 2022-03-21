import { Grid } from "@mui/material";
import React from "react";
import { generateWeekViewCoordinates, isTodaysDate } from "../../weekUtils";
import { slot, lightHighlighter } from "../style";
import Event from "../shared/Events/Event";
import { useCalendar } from "../../context/calendarContext";
import dayjs from "dayjs";
import { generateWeekView, getCountTimeslot } from "../../util";
import moment from 'moment'

function Time(props) {
	const { day, time } = props;
	const { state, dispatch, openAllEventsWeek, setOpenAllEventsWeek } = useCalendar();

	React.useEffect(() => { }, []);
	const row = 12 / 7;

	const currEvents = (events) => {
		let arr = []
		events.map((event) => {
			let currDate = dayjs(day.dateStamp).hour(time).format('DD/MM/YYYY HH:mm')
			let eventDate = dayjs(event.dateStamp).format('DD/MM/YYYY HH:mm')
			if (currDate === eventDate) arr.push(event)
		})
		return arr
	}

	const selectedEventDay = () => {
		return (
			<>

				{state.allEvents &&
					state.allEvents.map((event) => (
						<>
							{
								dayjs(event.dateStamp).format('YYY MM DD') === dayjs(day.dateStamp).format('YYY MM DD') &&
								parseInt(dayjs(event.startTime).format("h")) ===
								parseInt(time) && (
									<>
										{
											<Event
												type="voice"
												event={event}
												key={event.id}
											/>
										}
									</>
								)}
						</>
					))}
			</>
		);
	};

	var [open, setOpen] = React.useState(false)

	React.useEffect(() => {
		if (moment(day.dateStamp).hour(time).format('DD/MM/YYYY HH:mm') !== openAllEventsWeek) setOpen(false)
		console.log(open, openAllEventsWeek, moment(day.dateStamp).hour(time).format('DD/MM/YYYY HH:mm'))
	}, [openAllEventsWeek])

	return (
		<>
			<Grid
				item
				key={day.dateStamp}
				xs={row}
				sx={isTodaysDate(day.dateStamp) ? { ...lightHighlighter } : {}}
				className="col slot1 flex-row"
				style={{ gap: '5px' }}
				onClick={() => {
					console.log("clicked at grid", dayjs(day.dateStamp).hour(time));
					dispatch({
						type: "OPEN_EVENT_DIALOG",
						payload: { dateStamp: dayjs(day.dateStamp).hour(time), time, id: day.id },
					});
				}}
			>
				{selectedEventDay()}
				{getCountTimeslot(day, time, state) > 2 &&
					<span
						className='height-100 flex-center event-count-button'
						onClick={(event) => {
							event.stopPropagation()
							setOpen(!open)
							setOpenAllEventsWeek(moment(day.dateStamp).hour(time).format('DD/MM/YYYY HH:mm'))
						}}
					>
						+{getCountTimeslot(day, time, state) - 2}
						<div
							className={open ? "view-all-events open-div flex-center" : "close-div"}
						>
							<div>
								{
									state.allEvents &&
									currEvents(state.allEvents).slice(2, currEvents(state.allEvents).length).map((event) => (
										<Event
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
