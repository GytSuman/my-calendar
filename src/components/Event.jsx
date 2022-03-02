import React from "react";
import "./Event.css";
import "./header.css";
import moment from "moment";
import VideocamIcon from "@mui/icons-material/Videocam";
import CallIcon from "@mui/icons-material/Call";
import moment from "moment";

<<<<<<< HEAD
function Event({ type, event }) {
	console.log("event", event);
=======
function Event({type,name,title,hours,time}) {
>>>>>>> 118f6ab466775831f82beb4222220e212daa3921
	const IconDisplay = () => {
		if (type === "video") return <VideocamIcon className="event-icon" />;
		else return <CallIcon className="event-icon" />;
	};
	return (
		<div
<<<<<<< HEAD
			style={{ width: "auto", position: "relative" }}
=======
			style={{ position: "relative"}}
>>>>>>> 118f6ab466775831f82beb4222220e212daa3921
			className="border-4 event-background height-100 event-border p-1 flex-col"
		>
			<div className="flex-row height-100 font-12">
				<div
					className="border-2 flex-center flex-center2 black-bg white-color"
					style={{ width: "37px", height: "16px" }}
				>
<<<<<<< HEAD
					{moment(event.eventStart).format("hh:mm")}
				</div>
				<div style={{ height: "16px" }} className="light-color pl-1">
					{moment(event.eventEnd).format("hh:mm ")}
				</div>
			</div>
			<div className="height-100 font-13 bold-font">{event.name}</div>
			<div className="light-color height-100 font-12">{event.title}</div>
=======
					{moment().set("hours", time).format("h a")}
				</div>
				<div style={{ height: "16px" }} className="light-color pl-1">
					{moment().set("hours", time + hours).format("h a")}
				</div>
			</div>
			<div className="height-100 font-13 bold-font">{name}</div>
			<div className="light-color height-100 font-12">{title}</div>
>>>>>>> 118f6ab466775831f82beb4222220e212daa3921
			{IconDisplay()}
		</div>
	);
}

export default Event;
