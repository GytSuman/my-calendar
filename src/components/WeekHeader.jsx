import { Grid } from "@mui/material";
import React from "react";
import Header from "./Header";

function WeekHeader({ weekdays }) {
<<<<<<< HEAD
	return (
		<>
			<Grid container>
				<Grid item xs={1}></Grid>
				<Grid item xs={11} className="flex">
					{weekdays.map((week) => (
						<>
							<Header
								weekDayName={week.weekDayName}
								date={week.date}
								dateStamp={week.dateStamp}
							/>
						</>
					))}
				</Grid>
			</Grid>
		</>
	);
=======
  return (
    <>
    <Grid container>
      <Grid item xs={1}></Grid>
      <Grid item container xs={11} className='flex'>
      {weekdays.map(week =>
      (
        <> 
        <Header weekDayName={week.weekDayName} date={week.date} dateStamp={week.dateStamp}/>
        </>
      ))}
      </Grid>
    </Grid>
    </>
  )
>>>>>>> c64b2f848840cb2f241fda7f4a71270fdfb44eb5
}

export default WeekHeader;
