import React from "react";
import dayjs from "dayjs";
import Grid from "@mui/material/Grid";
import {
	Divider,
	IconButton,
	InputAdornment,
	MenuItem,
	TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import "./header.css";
import moment from "moment";

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
	const formattedDate = moment(startDate).format("MMMM YYYY");

	// function handleReset() {
	//   setMonthIndex(
	//     monthIndex === dayjs().month()
	//       ? monthIndex + Math.random()
	//       : dayjs().month()
	//   );
	// }

	return (
		<>
			<header style={{ padding: "1rem" }}>
				<div></div>
				<Grid container spacing={2}>
					<Grid item xs={2}>
						<TextField
							size="small"
							placeholder="Search"
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
							onChange={handleInputChange}
						>
							{types.map((typeObj) => (
								<MenuItem key={typeObj.id} value={typeObj.value}>
									{typeObj.value}
								</MenuItem>
							))}
						</TextField>
					</Grid>

					<Grid container item xs={6} spacing={4}>
						<Grid item className="year">
							<IconButton onClick={() => goToPreviousWeek()}>
								<ArrowBackIosNewIcon />
							</IconButton>
							<h2 className="ml-4 text-xl text-gray-500 font-bold">
								{type === "month"
									? dayjs(new Date(dayjs().year(), currentMonthIdx)).format(
											"MMMM YYYY"
									  )
									: formattedDate}
							</h2>
							<IconButton onClick={() => goToNextWeek()}>
								<ArrowForwardIosIcon />
							</IconButton>
						</Grid>
					</Grid>
					<Grid item>
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
