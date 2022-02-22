import { Grid } from "@mui/material";
import React from "react";
import { col, height, lightHighlighter } from "./style";
import { isTodaysDate } from "../weekUtils";

function Header({ weekDayName, date, dateStamp }) {
  const row = 12/7
  return (
	<Grid item style={isTodaysDate(dateStamp) ? {...col, ...height, ...lightHighlighter} : {...col, ...height}}
	p={1}
	sx={{color:'#414241'}}
	xs={row}
	>
		<div className="flex-row align-items-center">
			<p className="font-18">{date}</p>
			<p className="font-12" style={{paddingLeft:'3px',color:'#707071'}}>Feb</p>
		</div>
		<p className="font-12">{weekDayName}</p>
	</Grid>
  )
}

export default Header;
