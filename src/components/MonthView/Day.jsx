import React from "react";
import moment from "moment";
import CustomizedDialogs from "../shared/ModelForms/CustomizedDialog";
import VideocamIcon from "@mui/icons-material/Videocam";
import CallIcon from "@mui/icons-material/Call";
import { isTodaysDate } from "../../weekUtils";
import "./MonthView.scss";
import { useCalendar } from "../../context/calendarContext";
import dayjs from "dayjs";
import CustomizedMonthGridDialogs from "../shared/ModelForms/CustomizedMonthGridDialog";
import { getCount } from "../../util";

export default function Day({ day, rowIdx, events }) {
	const [open, setOpen] = React.useState(false);
	const { state, dispatch } = useCalendar();

	function getCurrentDayClass() {
		return day.format("DD-MM-YY") === moment().format("DD-MM-YY")
			? "current__day"
			: "";
	}

	const Event = ({ eventObj }) => {
		return (
			<div
				style={{ marginBottom: "2px" }}
				className="event-height border-4 event-background2 event-border2 p-1 font-12 flex-row flex-center flex-space-between"
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
	// console.log(day)
	const openMonthEventDialog = (e) => {
		e.preventDefault();
		setOpen(true);
		console.log("clicked", parseInt(day.format("DD MM YYYYY")));
	};

	const onSetOpen = (value) => {
		setOpen(value);
	};

	const getHeight = () => {
		if (rowIdx === 0) return false;
		else return true;
	};

	const [nEvents, setNEvents] = React.useState(0);

	React.useEffect(() => {
		setNEvents((x) => getCount(day.format("DD MM YYYY"), state));
	}, [state.allEvents]);

	const handleMonthGridEventDialog = (event) => {
		event.stopPropagation()
		dispatch({
			type: "OPEN_MONTH_GRID_EVENT_DIALOG",
			date: day
		})
	}

	return (
		<div
			className={`border border-gray flex-column cursor-pointer`}
			style={{ minHeight: "150px" }}
			onClick={handleMonthGridEventDialog}
		>
			<header className="flex-column align-items-center">
				{rowIdx === 0 && (
					<p className="text-sm mt-1 font-12 lightfont-color">
						{day.format("ddd").toUpperCase()}
					</p>
				)}
			</header>
			<div>
				<div
					className={`flex-row flex-space-between p-1 text-sm my-1 lightfont-color font-18 ${getCurrentDayClass()}`}
				>
					<div style={{ paddingLeft: "25px" }}>{day.format("DD")}</div>
					{nEvents > 3 && (
						<div
							className="themeblue-bg border-2 flex-center flex-center2 font-12 white-color"
							style={{ width: "38px", height: "21px" }}
						>
							+{nEvents - 3}
						</div>
					)}
				</div>
				<div
					style={{ height: "100px", marginTop: "20px", overflowY: "hidden" }}
				>
					{state?.allEvents?.length !== 0 &&
						state?.allEvents?.map((eventObj) => (
							<>
								{
									dayjs(eventObj.dateStamp).format("DD MM YYYY") ===
									day.format("DD MM YYYY") && (
										<>
											<Event
												key={eventObj.id}
												type="voice"
												eventObj={eventObj}
											/>
										</>
									)
								}
							</>
						))}
				</div>
			</div>

			{/* <CustomizedDialogs /> */}
		</div>
	);
}
