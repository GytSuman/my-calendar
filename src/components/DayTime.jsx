import { Grid } from "@mui/material";
import React from "react";
import { col, slot2 } from "./style";
import Event from "./Event";

function DayTime({ time, dateStamp, dayName }) {
	return (
		<Grid container>
			<Grid
				item
				xs={10}
				key={dateStamp}
				style={{ ...col, ...slot2 }}
				sx={{ width: "80vw" }}
				onClick={() => console.log("clicked on day", time)}
			>
				{/* <Event
					type="voice"
					timeFrom="9.00"
					timeTo="9.30"
					name="Gavin Cooper"
					title="Tenant Q&A"
				/> */}
			</Grid>
		</Grid>
	);
}

export default DayTime;
