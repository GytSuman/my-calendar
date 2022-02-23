import { Grid } from "@mui/material";
import React from "react";
import { isTodaysDate } from "../weekUtils";
import { col, slot, slot2, lightHighlighter } from "./style";
import Event from "./Event";

function Time(props) {
	const { weekDayName, dateStamp, events } = props;

	console.log(weekDayName);
  const row = 12/7
  const [eventAdded,setEventAdded] = React.useState(0);
  const toggle = React.useCallback(() => {
    setEventAdded(1)
  }, []);
	return (
		<>
      <Grid item
        key={dateStamp}
        style={isTodaysDate(dateStamp) ? {...col, ...slot2, ...lightHighlighter} : {...col, ...slot2}}
        xs={row}
        onClick={toggle}
        >
          {eventAdded ==1 && <Event type="voice" timeFrom="9.00" timeTo="9.30" name="Gavin Cooper" title="Tenant Q&A" />}
        {/* <EventSmall timeFrom="9.00" name="Gavin Cooper"/> */}
      </Grid>
    </>
  )
}

export default Time;
