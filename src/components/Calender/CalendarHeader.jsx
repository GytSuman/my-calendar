import React from "react"
import dayjs from "dayjs"
import {
	Divider,
	IconButton,
	InputAdornment,
	MenuItem,
	TextField,
	Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import moment from "moment";

import "./Calender.scss";

const types = [
	{ id: 1, value: "day" },
	{ id: 2, value: "week" },
	{ id: 3, value: "month" },
];

function CalendarHeader({
	type,
	handleInputChange,
	goToPreviousWeek,
	goToNextWeek,
	startDate,
	currentMonthIdx,
}) {
	const formattedDate = dayjs(startDate).format("MMMM YYYY");

	// function handleReset() {
	//   setMonthIndex(
	//     monthIndex === dayjs().month()
	//       ? monthIndex + Math.random()
	//       : dayjs().month()
	//   );
	// }

	return (
		<>
			<header
			//style={{ padding: "1rem" }}
			>
				{/* <div></div> */}
				<Grid p={2} container spacing={2} className="flex flex-space-between">
					<Grid item xs={2}>
						<TextField
							size="small"
							placeholder="Search"
							fullWidth
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<SearchIcon />
									</InputAdornment>
								),
							}}
						/>
					</Grid>
					<Grid item xs={2}>
						<TextField
							size="small"
							placeholder="Week"
							select
							fullWidth
							value={type}
							sx={{ border: "1px solid #EEEEEE" }}
							onChange={handleInputChange}
						>
							{types.map((typeObj) => (
								<MenuItem key={typeObj.id} value={typeObj.value}>
									{typeObj.value}
								</MenuItem>
							))}
						</TextField>
					</Grid>

					<Grid container item xs={6} spacing={4} className='flex-center'>
						<Grid item className="flex flex-center flex-space-between" sx={{width: '300px'}}>
							<IconButton onClick={() => goToPreviousWeek()}>
								<ArrowBackIosNewIcon />
							</IconButton>
							<h2 className="text-xl text-gray-500 font-16 text-elip font-bold flex-center">
								{/* ml-4 */}
								{type === "month"
									? dayjs(new Date(dayjs().year(), currentMonthIdx)).format(
											"MMMM YYYY"
									  )
									: formattedDate}
							</h2>
							<IconButton onClick={() => goToNextWeek()}>
								<CalendarTodayIcon
									sx={{ width: "18px", height: "18px", color: "#414241" }}
								/>
								<ArrowForwardIosIcon sx={{ width: "24px", height: "24px" }} />
							</IconButton>
						</Grid>
					</Grid>
					<Grid item xs={2}>
						<div className="filter_button">
							<IconButton sx={{ color: "#0053CC" }}>
								<FilterAltIcon />
							</IconButton>
							Filter
						</div>
					</Grid>
				</Grid>
			</header>
			<Divider />
		</>
	);
}

export default CalendarHeader;
