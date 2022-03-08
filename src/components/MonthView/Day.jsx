import React from "react";
import moment from "moment";
import CustomizedDialogs from "../Shared/ModelForms/CustomizedDialogWeek";
import dayjs from 'dayjs'
import { useEvent } from '../../context/EventContext'

import './MonthView.scss'

export default function Day({ day, rowIdx, events }) {
	const [open, setOpen] = React.useState(false);

	function getCurrentDayClass() {
		return day.format("DD-MM-YY") === moment().format("DD-MM-YY")
			? "current__day"
			: "";
	}

	const Event = (props) => {
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


	const { event } = useEvent()

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
				{
					event.map((x) => {
						if (day.format("DD MM YYYY") === dayjs(x.dateStamp).format("DD MM YYYY")) {
							return (
								<Event timeFrom={x.timeFrom} name={x.name} />
							)
						}
					})
				}
			</div>
			{open && (
				<CustomizedDialogs onSetOpen={onSetOpen} dateStamp={day} open={open} events={events} />
			)}
		</div>
	);
}
