import { Grid } from "@mui/material";
import React from "react";
import { generateWeekViewCoordinates, isTodaysDate } from "../../weekUtils";
import { slot, lightHighlighter } from "../style";
import Event from "../shared/Events/Event";
import { useCalendar } from "../../context/calendarContext";
import dayjs from "dayjs";
import { generateWeekView, getCountTimeslot } from "../../util";

function Time(props) {
	const { day, time } = props;
	const { state, dispatch } = useCalendar();

	React.useEffect(() => { }, []);
	const row = 12 / 7;

	const currEvents = (events) => {
		let arr = []
		events.map((event) => {
			let currDate = dayjs(day.dateStamp).hour(time).format('DD/MM/YYYY HH:mm')
			let eventDate = event?.dateStamp.format('DD/MM/YYYY HH:mm')
			if (currDate === eventDate) arr.push(event)
		})
		return arr
	}

	// console.log("time: ", time);
	const selectedEventDay = () => {
		return (
			<>
				{/* {
					state.allEvents &&
					currEvents(state.allEvents).map((i, event) => (
						<>
							{
								<Event
									type="voice"
									event={event}
									key={event.id}
								/>
							}
						</>
					))
				} */}
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
	// const [arr, setArr] = React.useState({});
	// React.useEffect(() => {
	// 	state.allEvents.map((event) => {
	// 		let currDate = dayjs(day.dateStamp).hour(time).format('DD/MM/YYYY HH:mm')
	// 		let eventDate = event.dateStamp.format('DD/MM/YYYY HH:mm')
	// 		if (currDate === eventDate) arr.push(currDate)
	// 	})
	// }, [state.allEvents])

	// const [gridWrap, setGridWrap] = React.useState({});
	// const [eventWidth, setEventWidth] = React.useState(95);
	// React.useEffect(() => {
	// 	if (getCountTimeslot(day, time, state) > 2) {
	// 		// setGridWrap({
	// 		// 	flexWrap: "wrap"
	// 		// });
	// 		// setGridWrap({
	// 		// 	flexBasis: '1'
	// 		// });
	// 		setEventWidth(39);
	// 	} else {
	// 		// setGridWrap({
	// 		// 	flexWrap: "nowrap"
	// 		// });
	// 		setEventWidth(95);
	// 	}
	// }, [day, state, state.allEvents, time]);
	const [openAllEvents, setOpenAllEvents] = React.useState(false)
	return (
		<>
			<Grid
				item
				key={day.dateStamp}
				// style={gridWrap}
				xs={row}
				sx={isTodaysDate(day.dateStamp) ? { ...lightHighlighter } : {}}
				className="col slot1 flex-row"
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
						className='height-100 flex-center'
						onClick={(event) => {
							event.stopPropagation()
							setOpenAllEvents(!openAllEvents)
						}}
					>
						+{getCountTimeslot(day, time, state) - 2}
						<div
							className={openAllEvents ? "view-all-events-open flex-center" : "view-all-events-close"}
						>
							<div>
								{
									state.allEvents &&
									currEvents(state.allEvents).map((event) => (
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
