import React from "react";
import moment from "moment";
import CustomizedDialogs from "../Shared/ModelForms/CustomizedDialog";

import './MonthView.scss'

export default function Day({ day, rowIdx, events }) {
	const [open, setOpen] = React.useState(false);

	function getCurrentDayClass() {
		return day.format("DD-MM-YY") === moment().format("DD-MM-YY")
			? "current__day"
			: "";
	}

	const Event = (props) => {
		console.log(props);
		return (
			<div className="width-100 col-height border-4 event-background2 event-border2 p-1 font-12 flex-row flex-center flex-space-between">
				<div
					className="border-2 flex-center flex-center2 black-bg white-color font-12"
					style={{ width: "37px", height: "16px" }}
				>
					{props.timeFrom}
				</div>
				<div className="flex-grow text-elip pl-1">{props.name}</div>
			</div>
		);
	};

	const openMonthEventDialog = () => {
		setOpen(true);
		console.log("clicked", day);
	};

	const onSetOpen = (value) => {
		setOpen(value);
	};

	return (
		<div
			className="border border-gray flex-column cursor-pointer"
			onClick={openMonthEventDialog}
		>
			<header className="flex-column align-items-center">
				{rowIdx === 0 && (
					<p className="text-sm mt-1 font-12 lightfont-color">{day.format("ddd").toUpperCase()}</p>
				)}
			</header>
			<div>
				<div
					className={`flex-row flex-space-between p-1 text-sm my-1 lightfont-color font-18 ${getCurrentDayClass()}`}
				>
					<div style={{ paddingLeft: "25px" }}>{day.format("DD")}</div>
					{/* <div className="themeblue-bg border-2 flex-center flex-center2 font-12 white-color" style={{width: '38px',height:'21px'}}>10+</div> */}
				</div>
				{events.length !== 0 && (
					<Event timeFrom={events[0].startTime} name={events[0].name} />
				)}
			</div>
			{/* <div className="flex-1 cursor-pointer">
        <div className="p-1 text-gray-600 text-sm rounded bg-blue">9:00 - 10:00
        <div className=" flex justify-content-between align-items-center">
          <p>Task 1</p>
          <IconButton><CallIcon/></IconButton>
        </div>
        </div>
      </div>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {dayEvents.map((evt, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedEvent(evt)}
            className={`bg-${evt.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
          >
            {evt.title}
          </div>
        ))}
      </div> */}
			{open && (
				<CustomizedDialogs onSetOpen={onSetOpen} open={open} events={events} />
			)}
		</div>
	);
}
