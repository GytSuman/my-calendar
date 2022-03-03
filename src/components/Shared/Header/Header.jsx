import { Grid } from "@mui/material";
import React from "react";
import { col, height, lightHighlighter } from "../../style";
import { isTodaysDate , weekDaysArray } from "../../../weekUtils";
import moment from 'moment'

function Header({ dateStamp,type }) {
	function row (){
		if(type === 'week') return 12/7
		else return 12
	}
	return (
		<Grid item style={isTodaysDate(dateStamp) ? {...lightHighlighter} : {}}
			className="col height-100"
			p={1}
			sx={{color:'#414241'}}
			xs={row()}
		>
			<div className="flex-row flex-center height-50">
				<p className="font-18">{moment(dateStamp).format('D')}</p>
				<p className="font-12" style={{paddingLeft:'3px',color:'#707071'}}>{moment(dateStamp).format('MMM')}</p>
			</div>
			<div>
				<p className="font-12">{weekDaysArray[moment(dateStamp).weekday()]}</p>
			</div>
		</Grid>
	)
}

export default Header;
