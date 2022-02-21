import { Grid } from "@mui/material";
import React from "react";
import { col, height, lightHighlighter } from "./style";
import { isTodaysDate } from "../weekUtils";

function Header({ weekDayName, date, dateStamp }) {
<<<<<<< HEAD
	return (
		<>
			<Grid container>
				<Grid
					item
					style={
						isTodaysDate(dateStamp)
							? { ...col, ...height, ...lightHighlighter }
							: { ...col, ...height }
					}
					sx={{ width: "200px" }}
				>
					<p>{weekDayName}</p>
					<p>{date}</p>
				</Grid>
			</Grid>
		</>
	);
=======
  const row = 12/7
  return (
    <>
    {/* <Grid container> */}
      <Grid item style={isTodaysDate(dateStamp) ? {...col, ...height, ...lightHighlighter} : {...col, ...height}}
      xs={row}
      //sx={{ width: "200px"}}
      >
      <p>{weekDayName}</p>
      <p>{date}</p>
      </Grid>
      {/* </Grid> */}
    </>
  )
>>>>>>> c64b2f848840cb2f241fda7f4a71270fdfb44eb5
}

export default Header;
