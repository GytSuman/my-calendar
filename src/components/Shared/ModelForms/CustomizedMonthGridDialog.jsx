import * as React from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import dayjs from 'dayjs'
import {
	TextField,
	Radio,
	RadioGroup,
	FormControl,
	FormControlLabel,
} from "@mui/material";
import { useCalendar } from "../../../context/calendarContext";
import { v4 as uuidv4 } from "uuid";

import DateTimePicker from "@mui/lab/DateTimePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	"& .MuiDialogContent-root": {
		padding: theme.spacing(2),
	},
	"& .MuiDialogActions-root": {
		padding: theme.spacing(1),
	},
}));

const BootstrapDialogTitle = (props) => {
	const { children, onClose, ...other } = props;

	return (
		<DialogTitle sx={{ m: 0, p: 2 }} {...other}>
			{children}
			{onClose ? (
				<IconButton
					aria-label="close"
					onClick={onClose}
					sx={{
						position: "absolute",
						right: 8,
						top: 8,
						color: (theme) => theme.palette.grey[500],
					}}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</DialogTitle>
	);
};

BootstrapDialogTitle.propTypes = {
	children: PropTypes.node,
	onClose: PropTypes.func.isRequired,
};

export default function CustomizedMonthGridDialogs() {
	const { state, dispatch } = useCalendar();
	const [name, setName] = React.useState("");
	const [startTime, setStartTime] = React.useState(dayjs(state?.selectedDate).format('YYYY-MM-DD'));
	const [endTime, setEndTime] = React.useState("");
	const [type, setType] = React.useState("voice");

	console.log("Reducer :", dayjs(state?.selectedDate).format('YYYY-MM-DD'))
	console.log("state :", startTime)

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handleTypeChange = (event) => {
		setType(event.target.value);
	};

	const handleSubmitButton = () => {
		dispatch({
			type: "ADD_EVENTS",
			payload: {
				id: uuidv4(),
				name,
				startTime: startTime,
				endTime: endTime,
				dateStamp: state.dateStamp,
			},
		});
	};

	return (
		<div style={{ zIndex: 1000 }}>
			<BootstrapDialog
				onClose={() => dispatch({ type: "CLOSE_MONTH_GRID_EVENT_DIALOG" })}
				aria-labelledby="customized-dialog-title"
				open={state.showMonthGridEventDialog}
			>
				<BootstrapDialogTitle
					id="customized-dialog-title"
					onClose={() => dispatch({ type: "CLOSE_MONTH_GRID_EVENT_DIALOG" })}
				>
					Event
				</BootstrapDialogTitle>
				<DialogContent dividers>
					<TextField
						label="name"
						fullWidth
						size="small"
						onChange={handleNameChange}
						value={name}
					/>
					<TextField
						id="timeFrom"
						label="Event From"
						type="Date"
						value={startTime}
						InputLabelProps={{
							shrink: true,
						}}
						onChange={(e) => console.log(e.target.value, setStartTime(e.target.value))}
						sx={{ width: 150, m: 2 }}
					/>
					{/* <Grid container sx={{ m: 2 }}>
						<LocalizationProvider dateAdapter={AdapterDateFns}>
							<DateTimePicker
								renderInput={(props) => <TextField {...props} />}
								label="DateTimePicker"
								value={startTime}
								defaultValue={state?.selectedDate}
								onChange={() => setStartTime(startTime)}
								sx={{ m: 1 }}
							/>
							<DateTimePicker
								renderInput={(props) => <TextField {...props} />}
								label="DateTimePicker"
								minDateTime={state?.selectedDate?.$d}
								onChange={(e) => setEndTime(e)}
								sx={{ m: 1 }}
							/>
						</LocalizationProvider>
					</Grid> */}
					{/* <TextField
						id="timeFrom"
						label="Event From"
						type="time"
						disabled
						value={timeFrom}
						InputLabelProps={{
							shrink: true,
						}}
						inputProps={{
							step: 300, // 5 min
						}}
						onChange={handleTimeFromChange}
						sx={{ width: 150, m: 2 }}
					/>
					<TextField
						id="timeTo"
						label="Event To"
						type="time"
						value={timeTo}
						InputLabelProps={{
							shrink: true,
						}}
						inputProps={{
							step: 300, // 5 min
						}}
						onChange={handleTimeToChange}
						sx={{ width: 150, m: 2 }}
					/>
					<FormControl>
						<RadioGroup
							id="type"
							name="type"
							value={type}
							onChange={handleTypeChange}
						>
							<FormControlLabel
								value="voice"
								control={<Radio />}
								label="voice"
							/>
							<FormControlLabel
								value="video"
								control={<Radio />}
								label="video"
							/>
						</RadioGroup>
					</FormControl> */}
				</DialogContent>
				<DialogActions>
					<Button onClick={handleSubmitButton}>Save</Button>
				</DialogActions>
			</BootstrapDialog>
		</div>
	);
}
