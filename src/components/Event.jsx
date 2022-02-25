import React from "react";
import "./Event.css";
import "./header.css";
import VideocamIcon from "@mui/icons-material/Videocam";
import CallIcon from "@mui/icons-material/Call";
import moment from "moment";

function Event({ type, event }) {
	console.log("event", event);
	const IconDisplay = () => {
		if (type === "video") return <VideocamIcon className="event-icon" />;
		else return <CallIcon className="event-icon" />;
	};
	return (
		<div
			
			style={{ position: "relative"}}
			className="border-4 event-background height-100 event-border p-1 flex-col"
		>
			<div className="flex-row height-100 font-12">
				<div
					className="border-2 flex-center flex-center2 black-bg white-color"
					style={{ width: "37px", height: "16px" }}
				>
					{moment(event.startWeek).format("hh:mm a")}
				</div>
				<div style={{ height: "16px" }} className="light-color pl-1">
					{moment(event.endWeek).format("hh:mm a")}
				</div>
			</div>
			<div className="height-100 font-13 bold-font">{event.name}</div>
			<div className="light-color height-100 font-12">{event.title}</div>
			{IconDisplay()}
		</div>
	);
}

export default Event;
