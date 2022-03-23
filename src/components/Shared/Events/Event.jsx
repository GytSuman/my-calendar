import React from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import CallIcon from "@mui/icons-material/Call";
import "./Events.scss";
import dayjs from "dayjs";
import { useCalendar } from "../../../context/calendarContext";
import { getMinutes } from "../../../util";


function Event({ type, event }) {
	const [eventHeight, setEventHeight] = React.useState(80);
	const [marginTop, setMarginTop] = React.useState(0);
	const [diffrenceState, setDiffrenceState] = React.useState(0);
	const { state, dispatch } = useCalendar()
	const IconDisplay = () => {
		if (type === "video") return <VideocamIcon className="event-icon" />;
		else return <CallIcon className="event-icon" fontSize="16px" />;
	};

	const getHeight = (startTime, endTime) => {
		const start = startTime;
		const end = endTime;
		const hoursAndMinutesArrayOne = start.split(":");
		const hoursAndMinutesArrayTwo = end.split(":");
		const minutesOne =
			parseInt(hoursAndMinutesArrayOne[0]) * 60 +
			parseInt(hoursAndMinutesArrayOne[1]);
		const minutesTwo =
			parseInt(hoursAndMinutesArrayTwo[0]) * 60 +
			parseInt(hoursAndMinutesArrayTwo[1]);

		const diffrence = minutesTwo - minutesOne;
		setDiffrenceState(diffrence)
		setEventHeight((eventHeight / 60) * diffrence);
		setMarginTop((eventHeight / 60) * parseInt(hoursAndMinutesArrayOne[1]));
	};

	React.useEffect(() => {
		getHeight(
			dayjs(event?.startTime).format("hh:mm"),
			dayjs(event?.endTime).format("hh:mm ")
		);
	}, [event?.endTime, event?.startTime]);

	const eventConStyle = {
		padding: '0',
		width: '100%',
		height: eventHeight + "px",
		position: "relative",
		marginTop: marginTop + "px",
	};

	console.log("event in month grid", event);
	const handleClick = (e) => {
		e.stopPropagation()
		dispatch({ type: 'DISPLAY_EVENT', payload: event })
	}
	return (
		<>
			{
				diffrenceState <= 15 ?
					<>
						<div
							className="border-4 event-background flex-center event-border m-1 flex-row"
							style={{ ...eventConStyle }}
							onClick={handleClick}
						>
							<div className="flex-row font-12" style={{ height: '16px' }}>
								<div
									className="border-2 flex-center flex-center2 black-bg white-color mr-1 text-elip"
								>
									{dayjs(event.startTime).format("hh:mm")}
								</div>
							</div>
							<div className="font-13 bold-font text-elip">
								{
									event.name.length > 6 ?
										`${event.name.slice(0, 6)}...`
										:
										event.name
								}
							</div>
							{IconDisplay()}
						</div >
					</>
					:
					diffrenceState <= 30 ?
						<>
							< div
								className="border-4 event-background event-border m-1 flex-row"
								style={{ ...eventConStyle }}
								onClick={handleClick}
							>
								<div className="flex-row font-12 p-1" style={{ flexWrap: "wrap" }}>
									<div
										className="border-2 flex-center flex-center2 black-bg white-color mr-1 text-elip"
									>
										{dayjs(event.startTime).format("hh:mm")}
									</div>
									<div
										className="light-color text-elip">
										{dayjs(event.endTime).format("hh:mm ")}
									</div>
								</div>
								<div className="font-13 bold-font text-elip pl-1">
									{
										event.name.length > 6 ?
											`${event.name.slice(0, 6)}...`
											:
											event.name
									}
								</div>
								{IconDisplay()}
							</div >
						</>
						:
						<>
							< div
								className="border-4 event-background event-border m-1 flex-col"
								style={{ ...eventConStyle }}
								onClick={handleClick}
							>
								<div className="flex-row font-12 p-1" style={{ flexWrap: "wrap" }}>
									<div
										className="border-2 flex-center flex-center2 black-bg white-color mr-1 text-elip"
									>
										{dayjs(event.startTime).format("hh:mm")}
									</div>
									<div
										className="light-color text-elip">
										{dayjs(event.endTime).format("hh:mm ")}
									</div>
								</div>
								<div className="font-13 bold-font text-elip pl-1">
									{
										event.name.length > 6 ?
											`${event.name.slice(0, 6)}...`
											:
											event.name
									}
								</div>
								<div className='flex flex-between'>
									<div
										className="light-color font-12 pl-1"
									>
										{event.title}hello
									</div>
									{IconDisplay()}
								</div>
							</div >
						</>
			}
		</>
	)
}
export default Event;
