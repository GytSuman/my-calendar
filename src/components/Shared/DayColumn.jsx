import { Grid } from "@mui/material";
import React from "react";
import { isTodaysDate } from "../../weekUtils";
import { col, slot, slot2, lightHighlighter } from "../style";
import Event from "../Shared/Events/Event";
import EventSmall from "../Shared/Events/EventSmall";
import CustomizedDialogs from "../Shared/ModelForms/CustomizedDialogWeek";
import { useEvent } from "../../context/EventContext";

function DayColumn(props) {
	const { dateStamp, time, type } = props;

	const { event } = useEvent();

	function row() {
		if (type === "week") return 12 / 7;
		else return 12;
	}
	//model
	const [open, setOpen] = React.useState(false);
	const openMonthEventDialog = () => {
		setOpen(true);
		console.log("clicked", time);
		console.log(event);
	};

	const onSetOpen = (value) => {
		setOpen(value);
	};

	const toggle = React.useCallback(() => {
		openMonthEventDialog();
	}, []);

	const eventDiv = () => {
		return (
			<>
				{event.map((x) => {
					if (x.dateStamp === dateStamp && x.timeFrom === time) {
						return (
							<Event
								type={x.type}
								name={x.name}
								title={x.title}
								hours={x.hours}
								timeFrom={x.timeFrom}
								timeTo={x.timeTo}
							/>
						);
					}
				})}
			</>
		);
	};

	return (
		<>
			<Grid
				item
				key={dateStamp}
				style={isTodaysDate(dateStamp) ? { ...lightHighlighter } : {}}
				className="slot col height-100"
				xs={row()}
				onClick={toggle}
			>
				{eventDiv()}
			</Grid>
			{open && (
				<CustomizedDialogs
					onSetOpen={onSetOpen}
					dateStamp={dateStamp}
					time={time}
					open={open}
				/>
			)}
		</>
	);
}

export default DayColumn;
