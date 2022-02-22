import { Grid } from "@mui/material";
import React from "react";
import { col, height } from "./style";

function DayHeader({ days }) {
	return (
		<>
			<Grid container>
				<Grid item md={1} xs={2}></Grid>
				<Grid item md={11} xs={10} className="flex">
					{days.map((week) => (
						<>
							<Grid container>
								<Grid
									item md={10} xs={12}
									style={{ ...col, ...height }}
									p={1}
									sx={{ width: "63.5vw" }}
								>
									{/* <span>{week.dayName}</span> &nbsp;
									<span>{week.date}</span>
									<p>{week.monthName}</p> */}
									<div className="flex-row align-items-center">
										<p className="font-18">{week.date}</p>
										<p className="font-12" style={{paddingLeft:'3px',color:'#707071'}}>{week.monthName}</p>
									</div>
									<p className="font-12">{week.dayName}</p>
								</Grid>
							</Grid>
						</>
					))}
				</Grid>
			</Grid>
		</>
	);
}

export default DayHeader;
