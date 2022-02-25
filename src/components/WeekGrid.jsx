import moment from "moment";
import React from "react";
import { times } from "../weekUtils";
import CustomizedDialogs from "./CustomizedDialog";
import Event from "./Event";
import TaskProgress from "./TaskProgress";
import TimeSlot from "./TimeSlot";
import WeekHeader from "./WeekHeader";

function WeekGrid({ weekdays, events, addNewEvents }) {
	const [state, setState] = React.useState({
		startDate: +moment(),
		showAddEventModal: false,
		eventStart: null,
		eventEnd: null,
	});

	const openAddEventModal = (dateStamp, time) => {
		const start = moment(dateStamp).set("hour", time);
		const end = start.clone().add(1, "hour");
		setState({ showAddEventModal: true, eventStart: +start, eventEnd: +end });
	};

	const closeAddEventModal = () => {
		setState({ showAddEventModal: false });
	};

	const handleCurrentTimeChange = (dates) => {
		setState({ eventStart: +dates[0], eventEnd: +dates[1] });
	};

	const handleAddEvent = (name) => {
		console.log("name", name);
		addNewEvents({
			name,
			eventStart: state.eventStart,
			eventEnd: state.eventEnd,
		});
		setState({ showAddEventModal: false });
	};

	const currentTime = moment(state?.start).hours();
	console.log("events", events[currentTime]);
	console.log("moment", moment(state.startDate).week());

	return (
		<div style={{ maxWidth: "100%", width: "1227px" }}>
			<WeekHeader weekdays={weekdays} />
			<CustomizedDialogs
				state={state}
				closeAddEventModal={closeAddEventModal}
				eventStart={state.eventStart}
				eventEnd={state.eventEnd}
				handleCurrentTimeChange={handleCurrentTimeChange}
				handleAddEvent={handleAddEvent}
			/>
			<TaskProgress />
			{times.map((time) => (
				<>
					<TimeSlot
						key={time}
						time={time}
						weekdays={weekdays}
						openAddEventModal={openAddEventModal}
					>
						{events[time] &&
							events[time].map(
								(event) => (
									// console.log("line 67", event)
									<Event type="voice" event={event} />
								)
								// event.startWeek <= moment(state.startDate).week() &&
								// event.endWeek >= moment(state.startDate).week() ? (
								// 	<Event
								// 		startDate={state.startDate}
								// 		key={event.eventEnd + event.eventStart}
								// 		event={event}
								// 	/>
								// ) : null
							)}
					</TimeSlot>
				</>
			))}
		</div>
	);
}

export default WeekGrid;
