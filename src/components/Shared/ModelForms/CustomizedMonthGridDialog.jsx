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
	const [startTime, setstartTime] = React.useState("07:00");
	const [endTime, setendTime] = React.useState("08:00");

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handlestartTimeChange = (event) => {
		setstartTime(event.target.value);
	};

	const handleendTimeChange = (event) => {
		setendTime(event.target.value);
	};

	const handleSubmitButton = () => {
		dispatch({
			type: "ADD_EVENTS",
			payload: {
				id: uuidv4(),
				name,
				startTime: state.weekDateStamp.hour(startTime.split(':')[0]).minute(startTime.split(':')[1]).format('MM/DD/YYYY hh:mm A'),
				endTime: state.weekDateStamp.hour(endTime.split(':')[0]).minute(endTime.split(':')[1]).format('MM/DD/YYYY hh:mm A'),
				dateStamp: state.dateStamp,
				dayOfTheYear: state.dayOfTheYear,
				weekDateStamp: dayjs(state.weekDateStamp).hour(startTime.split(':')[0]).minute(startTime.split(':')[1])
			},
		});
		setName("");
		setstartTime("07:00");
		setendTime("08:00");
	};

	return (
		<div style={{ zIndex: 1000 }}>
			<BootstrapDialog
				onClose={() => dispatch({ type: "CLOSE_MONTH_GRID_EVENT_DIALOG" })}
				aria-labelledby="customized-dialog-title"
				open={state?.showMonthGridEventDialog}
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
						id="startTime"
						label="Event From"
						type="time"
						value={startTime}
						InputLabelProps={{
							shrink: true,
						}}
						inputProps={{
							step: 300, // 5 min
						}}
						onChange={handlestartTimeChange}
						sx={{ width: 150, m: 2 }}
					/>
					<TextField
						id="endTime"
						label="Event To"
						type="time"
						value={endTime}
						InputLabelProps={{
							shrink: true,
						}}
						inputProps={{
							step: 300, // 5 min
						}}
						onChange={handleendTimeChange}
						sx={{ width: 150, m: 2 }}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleSubmitButton}>Save</Button>
				</DialogActions>
			</BootstrapDialog>
		</div>
	);
}
