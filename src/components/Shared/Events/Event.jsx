import React from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import CallIcon from "@mui/icons-material/Call";
import "./Events.scss";
import dayjs from "dayjs";
import { useCalendar } from "../../../context/calendarContext";

function Event({ type, event, eventWidth }) {
	const IconDisplay = () => {
		if (type === "video") return <VideocamIcon className="event-icon" />;
		else return <CallIcon className="event-icon" />;
	};
	const eventConStyle = {
		width: eventWidth + "%",
		height: 60 + "px",
		position: "relative",
	};
	return (
		<div
			style={{ ...eventConStyle }}
			className="border-4 event-background event-border p-1 flex-col"
		// onClick={() =>
		// 	dispatch({ type: "DELETE_SELECTED_EVENT", payload: state.allEvents })
		// }
		>
			<div className="flex-row height-100 font-12" style={{ flexWrap: "wrap" }}>
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
			<div
				className="height-100 font-13 bold-font text-elip"
				style={{ width: "90%" }}
			>
				{event.name}
			</div>
			<div
				className="light-color height-100 font-12 text-elip"
				style={{ width: "90%" }}
			>
				{event.title}hello
			</div>
			{IconDisplay()}
		</div>
	);
}
export default Event;
