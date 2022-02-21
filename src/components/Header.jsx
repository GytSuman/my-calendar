import { Grid } from "@mui/material";
import React from "react";
import { col, height, lightHighlighter } from "./style";
import { isTodaysDate } from "../weekUtils";

function Header({ weekDayName, date, dateStamp }) {
  const row = 12/7
  return (
	<Grid item style={isTodaysDate(dateStamp) ? {...col, ...height, ...lightHighlighter} : {...col, ...height}}
	xs={row}
	>
		<p>{weekDayName}</p>
		<p>{date}</p>
	</Grid>
  )
}

export default Header;
