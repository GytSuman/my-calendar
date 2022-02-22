import { Grid } from "@mui/material";
import React from "react";
import { isTodaysDate } from "../weekUtils";
import { col, slot, slot2, lightHighlighter } from "./style";
import Event from "./Event";

function Time(props) {
	const { weekDayName, dateStamp, events } = props;
	return (
		<>
			<Grid
				item
				key={dateStamp}
				style={
					isTodaysDate(dateStamp)
						? { ...col, ...slot, ...lightHighlighter }
						: { ...col, ...slot }
				}
				sx={{ width: "200px", backgroundColor: "red" }}
			>
				<div>
					<div>9:00 - 10:00</div>
					<div>
						<div>Task 1</div>
					</div>
				</div>
				<Event
					type="voice"
					timeFrom="9.00"
					timeTo="9.30"
					name="Gavin Cooper"
					title="Tenant Q&A"
				/>
			</Grid>
			<Grid
				item
				key={dateStamp}
				style={
					isTodaysDate(dateStamp)
						? { ...col, ...slot2, ...lightHighlighter }
						: { ...col, ...slot2 }
				}
				sx={{ width: "200px" }}
				onClick={(event) => console.log("clicked", events)}
			>
				{events.length !== 0 &&
					events.map((eventsObj) => (
						<>
							<div key={eventsObj.id}>
								<Event
									type="voice"
									timeFrom={events.stertTime}
									timeTo="9.30"
									name={events.name}
									title="Tenant Q&A"
								/>
							</div>
						</>
					))}
			</Grid>
		</>
	);
}

export default Time;
