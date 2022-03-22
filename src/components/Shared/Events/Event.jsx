import React from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import CallIcon from "@mui/icons-material/Call";
import "./Events.scss";
import dayjs from "dayjs";
import { useCalendar } from "../../../context/CalendarContext";

function Event({ type, event, eventWidth }) {
	const [eventHeight, setEventHeight] = React.useState(80);
	const [marginTop, setMarginTop] = React.useState(0);
	const IconDisplay = () => {
		if (type === "video") return <VideocamIcon className="event-icon" />;
		else return <CallIcon className="event-icon" fontSize="16px" />;
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
		setMarginTop(parseInt(hoursAndMinutesArrayOne[1]));
		console.log("minutes one", minutesOne);
		console.log("minutes two", minutesTwo);
		console.log("diffrence", diffrence);
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
		marginTop: marginTop + "px",
	};

	console.log("event in month grid", event);

	return (
		<section
			className="event-background event-border2 border-2 flex-col"
			style={{ ...eventConStyle }}
		>
			<div className="flex-row font-12">
				<div className="flex-center flex-center2 black-bg white-color text-elip">
					{dayjs(event.startTime).format("hh:mm")}
				</div>{" "}
				&nbsp;
				<div className="light-color text-elip">
					{dayjs(event.endTime).format("hh:mm ")}
				</div>
			</div>
			<div className="font-13 bold-font text-elip">{event.name}</div>
			<div>
				<div
					className="light-color font-12"
					style={{ width: "90%", overflow: "hidden" }}
				>
					{event.title}hello
				</div>
				{IconDisplay()}
			</div>
		</section>
	);
}
export default Event;
