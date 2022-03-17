import React from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import CallIcon from "@mui/icons-material/Call";
import "./Events.scss";
import dayjs from "dayjs";
import { useCalendar } from "../../../context/CalendarContext";

function Event({ type, event, eventWidth }) {
	const [eventHeight, setEventHeight] = React.useState(68);
	const IconDisplay = () => {
		if (type === "video") return <VideocamIcon className="event-icon" />;
		else return <CallIcon className="event-icon" />;
	};

	const getHeight = (startTime, endTime) => {
		const start = startTime;
		const end = endTime;
		const hoursAndMinutesArrayOne = start.split(":");
		const hoursAndMinutesArrayTwo = end.split(":");
		const minutesOne =
			parseInt(hoursAndMinutesArrayOne[0]) * 60 +
			parseInt(hoursAndMinutesArrayOne[1]);
		const minutesTwo =
			parseInt(hoursAndMinutesArrayTwo[0]) * 60 +
			parseInt(hoursAndMinutesArrayTwo[1]);

		const diffrence = minutesTwo - minutesOne;
		setEventHeight((eventHeight / 60) * diffrence);
	};

	React.useEffect(() => {
		getHeight(
			dayjs(event?.startTime).format("hh:mm"),
			dayjs(event?.endTime).format("hh:mm ")
		);
	}, [event?.endTime, event?.startTime]);

	const eventConStyle = {
		width: eventWidth + "%",
		height: eventHeight + "px",
		position: "relative",
	};

	return (
		<div
			className="border-4 event-background event-border p-1 flex-col"
			style={{ ...eventConStyle }}
			// onClick={() =>
			// 	dispatch({ type: "DELETE_SELECTED_EVENT", payload: state.allEvents })
			// }
		>
			<div className="flex-row font-12" style={{ flexWrap: "wrap" }}>
				<div
					className="border-2 flex-center flex-center2 black-bg white-color mr-1 text-elip"
					style={{ width: "37px", height: "16px" }}
				>
					{dayjs(event.startTime).format("hh:mm")}
				</div>
				<div style={{ height: "16px" }} className="light-color text-elip">
					{dayjs(event.endTime).format("hh:mm ")}
				</div>
			</div>
			<div className="font-13 bold-font text-elip">{event.name}</div>
			<div
				className="light-color font-12"
				style={{ width: "90%", overflow: "hidden" }}
			>
				{event.title}hello
			</div>
			{IconDisplay()}
		</div>
	);
}
export default Event;
