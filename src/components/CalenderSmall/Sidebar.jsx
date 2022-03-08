import React from "react";
import dayjs from "dayjs";
import GlobalContext from "../../context/GlobalContext";
import { Button, Divider, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "./SmallCalender.scss";

export default function Sidebar({
	currentMonth,
	currentMonthIdx,
	goToPreviousWeek,
	goToNextWeek,
}) {
	const { setSmallCalendarMonth, setDaySelected, daySelected } =
		React.useContext(GlobalContext);
	function getDayClass(day) {
		const format = "DD-MM-YY";
		return day.format(format) === dayjs().format(format) ? "nowDay" : "";
	}
	return (
		<>
			<div className="mt-9 font-12" style={{ color: "#1D2634" }}>
				<header className="sidebar__header">
					<IconButton onClick={goToPreviousWeek}>
						<ArrowBackIosNewIcon className="arrows" />
					</IconButton>
					<p className="text-gray-500 font-bold">
						{dayjs(new Date(dayjs().year(), currentMonthIdx)).format(
							"MMMM YYYY"
						)}
					</p>

					<IconButton onClick={goToNextWeek}>
						<ArrowForwardIosIcon className="arrows" />
					</IconButton>
				</header>
				<div className="grid">
					{currentMonth[0].map((day, i) => (
						<div
							key={i}
							className="flex-center flex-center2 border-sidebar sidebar-col"
							style={{ color: "#DDDDDD" }}
						>
							{day.format("dd").charAt(0)}
						</div>
					))}
					{currentMonth.map((row, i) => (
						<React.Fragment key={i}>
							{row.map((day, idx) => (
								<div
									key={idx}
									onClick={() => {
										setSmallCalendarMonth(currentMonthIdx);
										setDaySelected(day);
									}}
									className={`width-100 flex-center flex-center2 sidebar-col ${getDayClass(
										day
									)}`}
								>
									<span className="text-sm">{day.format("D")}</span>
								</div>
							))}
						</React.Fragment>
					))}
				</div>
			</div>
			{/* <Divider orientation="vertical" /> */}
		</>
	);
}
