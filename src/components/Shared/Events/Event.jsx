import React from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import CallIcon from "@mui/icons-material/Call";
import "./Events.scss";
import dayjs from "dayjs";
import { useCalendar } from "../../../context/CalendarContext";

function Event({ type, event }) {
	const { state, dispatch } = useCalendar();
	const IconDisplay = () => {
		if (type === "video") return <VideocamIcon className="event-icon" />;
		else return <CallIcon className="event-icon" />;
	};
	return (
		<div
			style={{ width: "95%", position: "relative" }}
			className="border-4 event-background event-border p-1 flex-col"
			// onClick={() =>
			// 	dispatch({ type: "DELETE_SELECTED_EVENT", payload: state.allEvents })
			// }
		>
			<div className="flex-row height-100 font-12">
				<div
					className="border-2 flex-center flex-center2 black-bg white-color"
					style={{ width: "37px", height: "16px" }}
				>
					{dayjs(event.startTime).format("hh:mm")}
				</div>
				<div style={{ height: "16px" }} className="light-color pl-1">
					{dayjs(event.endTime).format("hh:mm ")}
				</div>
			</div>
			<div className="height-100 font-13 bold-font">{event.name}</div>
			<div className="light-color height-100 font-12">Dummy title</div>
			{IconDisplay()}
		</div>
	);
}

export default Event;

//[{}, {}, {}, {}] ===>> [[{}, {}, {}], [{}, {}, {}], [{}, {}, {}]]
