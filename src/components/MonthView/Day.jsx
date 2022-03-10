import React from "react";
import moment from "moment";
import CustomizedDialogs from "../shared/ModelForms/CustomizedDialog";
import VideocamIcon from "@mui/icons-material/Videocam";
import CallIcon from "@mui/icons-material/Call";
import "./MonthView.scss";
import { useCalendar } from "../../context/CalendarContext";
import dayjs from "dayjs";
import CustomizedMonthGridDialogs from "../shared/ModelForms/CustomizedMonthGridDialog";

export default function Day({ day, rowIdx, events }) {
	const [open, setOpen] = React.useState(false);
	const { state, dispatch } = useCalendar();

	function getCurrentDayClass() {
		return day.format("DD-MM-YY") === moment().format("DD-MM-YY")
			? "current__day"
			: "";
	}

	const Event = ({ type, eventObj }) => {
		return (
			<div
				className="width-100 col-height border-4 event-background2 event-border2 p-1 font-12 flex-row flex-center flex-space-between"
				style={{ position: "relative" }}
			>
				<div
					className="border-2 flex-center flex-center2 black-bg white-color font-12"
					style={{ width: "37px", height: "16px" }}
				>
					{dayjs(eventObj.startTime).format("hh:mm")}
				</div>
				<div className="flex-grow text-elip pl-1">{eventObj.name}</div>
			</div>
		);
	};

	const openMonthEventDialog = (e) => {
		e.preventDefault();
		setOpen(true);
		console.log("clicked", day);
	};

	const onSetOpen = (value) => {
		setOpen(value);
	};
	console.log("events in line 45", events);
	return (
		<div
			className="border border-gray flex-column cursor-pointer"
			onClick={() => dispatch({ type: "OPEN_MONTH_GRID_EVENT_DIALOG" })}
		>
			<header className="flex-column align-items-center">
				{rowIdx === 0 && (
					<p className="text-sm mt-1 font-12 lightfont-color">
						{day.format("ddd").toUpperCase()}
					</p>
				)}
			</header>
			<CustomizedMonthGridDialogs />
			<div>
				<div
					className={`flex-row flex-space-between p-1 text-sm my-1 lightfont-color font-18 ${getCurrentDayClass()}`}
				>
					<div style={{ paddingLeft: "25px" }}>{day.format("DD")}</div>
					{/* <div className="themeblue-bg border-2 flex-center flex-center2 font-12 white-color" style={{width: '38px',height:'21px'}}>10+</div> */}
				</div>
				{state.allEvents.length !== 0 &&
					state.allEvents.map((eventObj) => (
						<>
							<div key={eventObj.id}>
								{dayjs(eventObj.dateStamp).format("DD:MM") ===
									day.format("DD:MM") && (
									<Event type="voice" eventObj={eventObj} key={eventObj.id} />
								)}
							</div>
						</>
					))}
			</div>

			<CustomizedDialogs />
		</div>
	);
}
