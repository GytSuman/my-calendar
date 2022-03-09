import dayjs from "dayjs";

export const CalendarReducer = (state, action) => {
	switch (action.type) {
		case "OPEN_EVENT_DIALOG":
			console.log(action.payload);
			const dateStamp = action.payload.dateStamp;
			const start = dayjs(action.payload.dateStamp).set(
				"hours",
				action.payload.time
			);
			const end = start.clone().add(1, "hour");
			return {
				...state,
				showEventDialog: true,
				eventStart: +start,
				eventEnd: +end,
				startTime: dayjs(+start).format("MM/DD/YYYY h:mm A"),
				endTime: dayjs(+end).format("MM/DD/YYYY h:mm A"),
				dateStamp: dateStamp,
				selectedGridTime: action.payload.time,
			};
		case "CLOSE_EVENT_DIALOG":
			return {
				...state,
				showEventDialog: false,
			};
		case "ADD_EVENTS":
			console.log("add events ", action.payload);
			return {
				...state,
				allEvents: [...state.allEvents, action.payload],
				showEventDialog: false,
			};
		default:
			return state;
	}
};
