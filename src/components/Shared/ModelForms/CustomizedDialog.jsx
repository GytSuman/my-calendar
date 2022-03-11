import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Grid, TextField } from "@mui/material";
import DateTimePicker from "@mui/lab/DateTimePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import dayjs from "dayjs";
import { useCalendar } from "../../../context/calendarContext";
import { v4 as uuidv4 } from "uuid";

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

export default function CustomizedDialogs() {
	const [name, setName] = React.useState("");
	const { state, dispatch } = useCalendar();
	const [startTime, setStartTime] = React.useState(state?.startTime);
	const [endTime, setEndTime] = React.useState(state?.endTime);

	const handleSaveButton = () => {
		dispatch({
			type: "ADD_EVENTS",
			payload: {
				id: uuidv4(),
				name,
				startTime: state.startTime,
				endTime: state.endTime,
				dateStamp: state.dateStamp,
				gridId: state.selectedGridTime,
			},
		});
		setName("");
	};

	const handleStartTimeChange = (event) => {
		setStartTime(event.target.value);
		// state.endTime = event.target.value;
	};

	const handleEndTimeChange = () => { };
	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	React.useEffect(() => {
		setStartTime(state?.startTime);
		setEndTime(state?.endTime);
	}, [state?.endTime, state?.startTime]);
	console.log("time values", startTime);
	console.log("state from reducer", state.showEventDialog);

	return (
		<div style={{ zIndex: 1000 }}>
			<BootstrapDialog
				onClose={() => dispatch({ type: "CLOSE_EVENT_DIALOG" })}
				aria-labelledby="customized-dialog-title"
				open={state?.showEventDialog}
			>
				<BootstrapDialogTitle
					id="customized-dialog-title"
					// onClose={closeAddEventModal}
					onClose={() => dispatch({ type: "CLOSE_EVENT_DIALOG" })}
				>
					Event
				</BootstrapDialogTitle>
				<DialogContent dividers>
					<TextField
						fullWidth
						size="small"
						placeholder="Name"
						onChange={handleNameChange}
						value={name}
					/>

					<Grid container sx={{ m: 2 }}>
						<LocalizationProvider dateAdapter={AdapterDateFns}>
							<DateTimePicker
								renderInput={(props) => <TextField {...props} />}
								label="DateTimePicker"
								value={startTime}
								onChange={(date) =>
									dispatch({
										type: "CUSTOMISE_START_TIME",
										payload: date,
									})
								}
								sx={{ m: 1 }}
							/>
							<DateTimePicker
								renderInput={(props) => <TextField {...props} />}
								label="DateTimePicker"
								value={endTime}
								onChange={handleEndTimeChange}
								sx={{ m: 1 }}
							/>
						</LocalizationProvider>
					</Grid>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleSaveButton}>Save</Button>
				</DialogActions>
			</BootstrapDialog>
		</div>
	);
}
