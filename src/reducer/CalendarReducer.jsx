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
				dateStamp: dateStamp,
				eventStart: +start,
				eventEnd: +end,
				startTime: dayjs(+start).format("MM/DD/YYYY h:mm A"),
				endTime: dayjs(+end).format("MM/DD/YYYY h:mm A"),
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
				showMonthGridEventDialog: false,
			};
		case "CUSTOMISE_START_TIME":
			const newStartTime = convertToTime(action.payload);
			console.log("start time", action.payload);
			return {
				startTime: newStartTime,
			};

		case "DELETE_SELECTED_EVENT":
			console.log("to be deleted event", action.payload);
			return {};

		case "OPEN_MONTH_GRID_EVENT_DIALOG":
			console.log('selected date:', action.date)
			return {
				...state,
				showMonthGridEventDialog: true,
				selectedDate: action.date
			};

		case "CLOSE_MONTH_GRID_EVENT_DIALOG":
			return {
				...state,
				showMonthGridEventDialog: false,
			};

		case "OPEN_HIDDEN_EVENT":
			return {

			}
		default:
			return state;
	}
};

export const convertToTime = (date) => {
	let newDate = new Date(date);
	let hours = ("0" + newDate.getHours()).slice(-2);
	let minutes = ("0" + newDate.getMinutes()).slice(-2);
	return [hours, minutes].join(":");
};
