import { Grid } from "@mui/material";
import React from "react";
import { col, slot2 } from "./style";
import Event from "./Event";

function DayTime({ time, dateStamp, dayName }) {
	const [eventAdded,setEventAdded] = React.useState(0);
	const toggle = React.useCallback(() => {
		setEventAdded(1)
	}, []);
	return (
		<Grid container>
			<Grid
				item
				xs={12}
				key={dateStamp}
				style={{ ...col, ...slot2 }}
				sx={{ width: "80vw" }}
				onClick={toggle}
				// onClick={() => console.log("clicked on day", time)}
			>
				{eventAdded ==1 && <Event type="voice" timeFrom="9.00" timeTo="9.30" name="Gavin Cooper" title="Tenant Q&A" />}
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
