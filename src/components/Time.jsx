import { Grid } from "@mui/material";
import React from "react";
import { isTodaysDate } from "../weekUtils";
import { col, slot, slot2, lightHighlighter } from "./style";
import Event from "./Event";

function Time(props) {
	const { weekDayName, dateStamp, events, openAddEventModal, time } = props;

	const row = 12 / 7;
	return (
		<>
			<Grid
				item
				key={dateStamp}
				style={
					isTodaysDate(dateStamp)
						? { ...col, ...slot2, ...lightHighlighter }
						: { ...col, ...slot2 }
				}
				xs={row}
				onClick={() => openAddEventModal(dateStamp, time)}
			></Grid>
		</>
	);
}

export default Time;
