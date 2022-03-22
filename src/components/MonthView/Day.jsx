import React from "react";
import moment from "moment";
import "./MonthView.scss";
import { useCalendar } from "../../context/calendarContext";
import dayjs from "dayjs";
import CustomizedMonthGridDialogs from "../shared/ModelForms/CustomizedMonthGridDialog";
import { getCount } from "../../util";
import Event from "../shared/Events/Event";

export default function Day({ day, rowIdx, events }) {
	const { state, dispatch, openAllEventsMonth, setOpenAllEventsMonth } = useCalendar();

	function getCurrentDayClass() {
		return day.format("DD-MM-YY") === moment().format("DD-MM-YY")
			? "current__day"
			: "";
	}

	const Event = ({ eventObj }) => {
		console.log(eventObj)
		return (
			<div
				style={{ marginBottom: "2px" }}
				className="event-height border-4 event-background2 event-border2 p-1 font-12 flex-row flex-center flex-space-between"
			>
				<div
					className="border-2 flex-center flex-center2 black-bg white-color font-12"
					style={{ width: "37px", height: "16px" }}
				>
					{dayjs(eventObj?.startTime).format('HH:mm')}
				</div>
				<div className="flex-grow text-elip pl-1">{eventObj.name}</div>
			</div>
		);
	};

	const getHeight = () => {
		if (rowIdx === 0) return false;
		else return true;
	};

	const [nEvents, setNEvents] = React.useState(0);

	React.useEffect(() => {
		setNEvents((x) => getCount(day.format("DD MM YYYY"), state));
	}, [day, state, state.allEvents]);

	console.log("state all events", state?.allEvents);

	const [open, setOpen] = React.useState(false)

	React.useEffect(() => {
		if (day.dayOfTheYear !== openAllEventsMonth) setOpen(false)
	}, [openAllEventsMonth])

	const currEvents = (events) => {
		let arr = []
		events.map((event) => {
			if (event.dayOfTheYear === day.format("DD MM YYYY")) arr.push(event)
		})
		return arr
	}

	return (
		<div
			className={`border border-gray flex-column cursor-pointer`}
			style={{ minHeight: "150px" }}
			onClick={() =>
				dispatch({
					type: "OPEN_MONTH_GRID_EVENT_DIALOG",
					payload: {
						dateStamp: day.format("DD MM YYYY"),
						weekDateStamp: day,
						dayOfTheYear: day.format("DD MM YYYY"),
						time: "9:00 AM",
						id: day.id,
					},
				})
			}
		>
			<header className="flex-column align-items-center">
				{rowIdx === 0 && (
					<p className="text-sm mt-1 font-12 lightfont-color">
						{day.format("ddd").toUpperCase()}
					</p>
				)}
			</header>
			{/* <CustomizedMonthGridDialogs /> */}
			<div>
				<div
					className={`flex-row flex-space-between p-1 text-sm my-1 lightfont-color font-18 ${getCurrentDayClass()}`}
				>
					<div style={{ paddingLeft: "25px" }}>{day.format("DD")}</div>
					{nEvents > 3 && (
						<div
							className="themeblue-bg border-2 flex-center flex-center2 font-12 white-color"
							style={{ width: "38px", height: "21px", position: 'relative' }}
							onClick={(event) => {
								event.stopPropagation()
								setOpen(!open)
								console.log(open)
								setOpenAllEventsMonth(day.dayOfTheYear)
							}}
						>
							+{nEvents - 3}
							<div
								className={open ? "view-all-events open-div flex-center" : "close-div"}
							>
								<div>
									{
										state.allEvents &&
										currEvents(state.allEvents).slice(3, currEvents(state.allEvents).length).map((eventObj) => (
											<Event
												type="voice"
												eventObj={eventObj}
											/>
										)
										)
									}
								</div>
							</div>
						</div>
					)}
				</div>
				<div
					style={{ height: "100px", marginTop: "20px", overflowY: "hidden" }}
				>
					{state.allEvents.length !== 0 &&
						state.allEvents.map((eventObj) => (
							<>
								<div key={eventObj.id}>
									{/* {parseInt(dayjs(eventObj.dateStamp).format("DD MM YYYY")) ===
									parseInt(day.format("DD MM YYYY")) && (
										<Event type="voice" eventObj={eventObj} key={eventObj.id} />
									)
								} */}
									{eventObj?.dayOfTheYear === day.format("DD MM YYYY") && (
										<>
											<Event
												type="voice"
												eventObj={eventObj}
												key={eventObj.id}
											/>
										</>
									)}
								</div>
							</>
						))}
				</div>
			</div>

			{/* <CustomizedDialogs /> */}
		</div>
	);
}