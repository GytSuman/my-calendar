import { Grid } from "@mui/material";
import moment from "moment";
import React from "react";
import DayColumn from "../Shared/DayColumn";
import DayTime from "./DayTime";
import dayjs from "dayjs";
import "./DayView.scss";

function DayTimeSlot({ time, days }) {
	const formattedTime = moment().set("hours", time).format("h a");
	return (
		<>
			<Grid container direction="row">
				<Grid item md={1} sm={2} xs={2} className="flex-center2">
					{dayjs().hour(time).minute(0).format("h:mm A")}
				</Grid>
				<Grid item md={11} sm={10} xs={10} className="flex">
					{days &&
						days.map((dayObj) => (
							<>
								<DayTime
									key={dayObj.dateStamp}
									time={time}
									type="day"
									dayObj={dayObj}
									dateStamp={dayObj.dateStamp}
									dayName={dayObj.dayName}
								/>
							</>
						))}
				</Grid>
			</Grid>
		</>
	);
}

export default DayTimeSlot;
