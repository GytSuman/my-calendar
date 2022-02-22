import React from "react";
import dayjs from "dayjs";
import GlobalContext from "../context/GlobalContext";
import { getMonth, getMonthOriginal } from "../util";
import "./header.css";
import { Button, Divider, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Sidebar({
	currentMonth,
	currentMonthIdx,
	type,
	setCurrentMonth,
	goToPreviousWeek,
	goToNextWeek,
}) {
	// const [currentMonthIdx, setCurrentMonthIdx] = React.useState(
	//   dayjs().month()
	// );
	// const [currentMonth, setCurrentMonth] = React.useState(getMonth());
	// React.useEffect(() => {
	//   setCurrentMonth(getMonth(currentMonthIdx));
	// }, [currentMonthIdx]);

	const { setSmallCalendarMonth, setDaySelected, daySelected } =
		React.useContext(GlobalContext);

	// React.useEffect(() => {
	//   setCurrentMonthIdx(monthIndex);
	// }, [monthIndex]);

	// function handlePrevMonth() {
	//   setCurrentMonthIdx(currentMonthIdx - 1);
	// }
	// function handleNextMonth() {
	//   setCurrentMonthIdx(currentMonthIdx + 1);
	// }
	function getDayClass(day) {
		const format = "DD-MM-YY";
		return day.format(format) === dayjs().format(format) ? "nowDay" : "";
	}
	return (
		<>
			<aside>
				<div className="mt-9">
					<header className="sidebar__header">
						<IconButton onClick={goToPreviousWeek}>
							<ArrowBackIosNewIcon />
						</IconButton>
						<p className="text-gray-500 font-bold">
							{dayjs(new Date(dayjs().year(), currentMonthIdx)).format(
								"MMMM YYYY"
							)}
						</p>

						<IconButton onClick={goToNextWeek}>
							<ArrowForwardIosIcon />
						</IconButton>
					</header>
					<div className="grid">
						{currentMonth[0].map((day, i) => (
							<div key={i} className="flex-center flex-center2 border-sidebar sidebar-col">
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
										className={`padding-y w-full flex-center flex-center2 sidebar-col ${getDayClass(day)}`}
									>
										<span className="text-sm">{day.format("D")}</span>
									</div>
								))}
							</React.Fragment>
						))}
					</div>
				</div>
			</aside>
			<Divider orientation="vertical" />
		</>
	);
}
